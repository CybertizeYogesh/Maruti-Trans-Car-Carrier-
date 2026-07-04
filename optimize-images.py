#!/usr/bin/env python3
import os
import re
import sys
import io
import argparse
from PIL import Image

# Configuration
IMAGE_EXTENSIONS = ('.png', '.jpg', '.jpeg')
CODE_EXTENSIONS = ('.js', '.jsx', '.html', '.css', '.json', '.mjs')
EXCLUDE_DIRS = {'node_modules', '.next', '.git', '.gemini', 'scratch'}
EXCLUDE_FILENAMES = {
    'favicon.ico', 
    'favicon-16x16.png', 
    'favicon-32x32.png', 
    'apple-touch-icon.png', 
    'android-chrome-192x192.png', 
    'android-chrome-512x512.png',
    'apple-icon.png',
    'icon.svg'
}

MAX_SIZE_BYTES = 120 * 1024  # 120 KB

def log(msg):
    print(msg)
    sys.stdout.flush()

def find_images(project_dir):
    """Scan directory recursively for images to convert, excluding specific files/folders."""
    images = []
    for root, dirs, files in os.walk(project_dir):
        # Exclude directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            if file.lower().endswith(IMAGE_EXTENSIONS):
                if file in EXCLUDE_FILENAMES:
                    continue
                full_path = os.path.join(root, file)
                images.append(full_path)
    return images

def find_code_files(project_dir):
    """Scan directory recursively for code files to update references in."""
    code_files = []
    for root, dirs, files in os.walk(project_dir):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for file in files:
            if file.lower().endswith(CODE_EXTENSIONS):
                # Don't modify the optimization script itself if it ends in a code extension
                if file == os.path.basename(__file__):
                    continue
                full_path = os.path.join(root, file)
                code_files.append(full_path)
    return code_files

def optimize_image(src_path, dest_path, dry_run=False):
    """Convert image to WebP, dynamically adjust quality & dimensions to get under 120KB."""
    try:
        img = Image.open(src_path)
    except Exception as e:
        log(f"Error opening {src_path}: {e}")
        return False

    orig_width, orig_height = img.size
    orig_size = os.path.getsize(src_path)
    
    # Try different combinations of quality and resizing
    quality = 90
    scale = 1.0
    buffer = io.BytesIO()
    
    success = False
    
    # Convert RGBA to RGB or keep alpha (WebP supports alpha)
    # PIL can save WebP directly with alpha transparency.
    while scale > 0.1:
        # Resize if scale < 1.0
        if scale < 1.0:
            new_w = int(orig_width * scale)
            new_h = int(orig_height * scale)
            # Prevent resizing to 0 width/height
            if new_w == 0 or new_h == 0:
                break
            working_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        else:
            working_img = img
            
        for q in range(quality, 40, -10):
            buffer.seek(0)
            buffer.truncate()
            
            try:
                working_img.save(buffer, "WEBP", quality=q)
                size = buffer.tell()
                
                if size <= MAX_SIZE_BYTES:
                    quality = q
                    success = True
                    break
            except Exception as e:
                log(f"Error saving WebP in memory: {e}")
                break
                
        if success:
            break
            
        # If still too large, downscale size and repeat with quality loops
        scale -= 0.1
        quality = 85  # Reset to high quality for downscaled image
        
    if not success:
        # If we failed to get under 120KB, save at lowest acceptable quality and resolution
        log(f"Warning: Could not compress {os.path.basename(src_path)} under 120KB. Saving at maximum compression.")
        buffer.seek(0)
        buffer.truncate()
        working_img = img.resize((int(orig_width * 0.4), int(orig_height * 0.4)), Image.Resampling.LANCZOS)
        working_img.save(buffer, "WEBP", quality=40)
        size = buffer.tell()
        quality = 40
        scale = 0.4

    # Write out the file
    if not dry_run:
        try:
            with open(dest_path, "wb") as f:
                f.write(buffer.getvalue())
        except Exception as e:
            log(f"Error writing file {dest_path}: {e}")
            return False
            
    final_w, final_h = working_img.size
    log(f"Optimized: {os.path.basename(src_path)}")
    log(f"  - Size: {orig_size/1024:.1f} KB -> {size/1024:.1f} KB (Saved {(orig_size-size)/orig_size*100:.1f}%)")
    log(f"  - Dimensions: {orig_width}x{orig_height} -> {final_w}x{final_h} (Scale: {scale:.2f})")
    log(f"  - Quality: {quality}")
    
    return True

def main():
    parser = argparse.ArgumentParser(description="Convert images to optimized WebP and update code references.")
    parser.add_argument("--dry-run", action="store_true", help="Scan and simulate updates without writing changes.")
    parser.add_argument("--no-cleanup", action="store_true", help="Keep the original image files after conversion.")
    
    args = parser.parse_args()
    
    project_dir = os.path.dirname(os.path.abspath(__file__))
    log(f"Starting Image Optimization in: {project_dir}")
    if args.dry_run:
        log("!!! DRY RUN MODE - No files will be modified or deleted !!!")
        
    # 1. Discover Images
    images = find_images(project_dir)
    log(f"Discovered {len(images)} images to process.")
    
    # 2. Convert and Compress
    converted_mapping = {}  # maps original_path -> webp_path
    filename_mapping = {}   # maps original_basename -> webp_basename
    
    for img_path in images:
        dir_name = os.path.dirname(img_path)
        base_name = os.path.basename(img_path)
        name_part, _ = os.path.splitext(base_name)
        webp_name = f"{name_part}.webp"
        webp_path = os.path.join(dir_name, webp_name)
        
        # Optimize image
        if optimize_image(img_path, webp_path, dry_run=args.dry_run):
            converted_mapping[img_path] = webp_path
            filename_mapping[base_name] = webp_name
            
    log(f"\nSuccessfully optimized {len(converted_mapping)} images.")
    
    # 3. Update Code References
    code_files = find_code_files(project_dir)
    log(f"\nScanning {len(code_files)} code files for image references...")
    
    updated_files_count = 0
    
    for code_path in code_files:
        with open(code_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            
        modified = False
        new_content = content
        
        # Replace occurrences of old image filenames with the new webp filenames
        for orig_file, webp_file in filename_mapping.items():
            # Match exactly the file extension of the original file
            # E.g., replace 'home_shifting.png' with 'home_shifting.webp'
            if orig_file in new_content:
                # Case sensitive replace
                new_content = new_content.replace(orig_file, webp_file)
                modified = True
                
        if modified:
            updated_files_count += 1
            log(f"Reference updated in: {os.path.relpath(code_path, project_dir)}")
            if not args.dry_run:
                with open(code_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                    
    log(f"References updated in {updated_files_count} files.")
    
    # 4. Cleanup original files
    if not args.no_cleanup:
        log(f"\nCleaning up original image files...")
        deleted_count = 0
        for orig_path in converted_mapping.keys():
            if not args.dry_run:
                try:
                    os.remove(orig_path)
                    deleted_count += 1
                except Exception as e:
                    log(f"Error deleting original file {orig_path}: {e}")
            else:
                log(f"[Dry Run] Would delete original: {os.path.basename(orig_path)}")
                deleted_count += 1
        log(f"Deleted {deleted_count} original images.")
    else:
        log("\nOriginal images cleanup skipped as requested.")
        
    log("\nImage Optimization Job Completed Successfully!")

if __name__ == "__main__":
    main()
