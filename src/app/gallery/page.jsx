import React from "react";
import Link from "next/link";
import "./gallery.css";

export const metadata = {
  title: "Gallery | SRS Packers & Movers - Our Work, Team & Facilities",
  description: "Have a look at our expert packing, loading, and secure vehicle transportation processes. Our work gallery showcases premium household and corporate relocation services.",
  keywords: "srs packers gallery, home shifting images, office moving photos, packing processes pictures",
};

export default function GalleryPage() {
  const GALLERY_IMAGES = [
    { src: "/assets/images/gallery/gallery1.jpg", caption: "Packing Process" },
    { src: "/assets/images/gallery/gallery2.jpg", caption: "Plantation of Goods" },
    { src: "/assets/images/gallery/gallery3.jpg", caption: "Warehouse Operations" },
    { src: "/assets/images/gallery/gallery4.jpg", caption: "Logistics Workshop" },
    { src: "/assets/images/gallery/gallery5.jpg", caption: "Packing Process" },
    { src: "/assets/images/gallery/gallery6.jpg", caption: "Safe Delivery" }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
              <span>/</span>
              <span>Gallery</span>
            </nav>
            <h1>Gallery</h1>
            <p>Visual showcase of our professional moving teams, secure warehousing, and transport vehicles</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="srs-gallery-section py-5">
        <div className="container">
          {/* Subheading */}
          <div className="gallery-heading mb-4">
            <span className="gallery-subtitle">— GALLERY</span>
          </div>

          {/* Grid */}
          <div className="row g-3">
            {GALLERY_IMAGES.map((img, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="srs-gallery-card">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="gallery-caption">{img.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
