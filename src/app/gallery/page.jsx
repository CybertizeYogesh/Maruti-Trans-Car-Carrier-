import React from "react";
import Link from "next/link";
import GalleryFilter from "@/components/GalleryFilter";
import "./gallery.css";

export const metadata = {
  title: "Work Gallery | Maruti Trans Car Carrier Shifting - Our Work, Team & Facilities",
  description: "Take a look at our expert loading, wheel strapping, and secure vehicle transportation processes. Our gallery showcases professional Indian car carrier trailers and flatbed tow trucks.",
  keywords: "maruti trans gallery, car shifting images, car carrier loading photos, vehicle transport pictures",
};

export default function GalleryPage() {
  const GALLERY_IMAGES = [
    // 14 Newly Generated Indian Car Carrier/Towing Images using the Gemini Image Generator tool
    { src: "/assets/images/gallery/gallery1.webp", caption: "Car Courier Dispatch Delhi", category: "loading", date: "15 Jun, 2026", watermark: "MARUTI TRANS COURIER" },
    { src: "/assets/images/gallery/gallery2.webp", caption: "Interstate Car Relocation Packing", category: "securing", date: "12 May, 2026", watermark: "MARUTI TRANS RELOCATION" },
    { src: "/assets/images/gallery/gallery3.webp", caption: "Multi-SUV Highway Transport", category: "transit", date: "08 Apr, 2026", watermark: "MARUTI TRANS CARRIER" },
    { src: "/assets/images/gallery/gallery4.webp", caption: "Single Car Carrier Platform", category: "loading", date: "20 Mar, 2026", watermark: "MARUTI TRANS SINGLE" },
    { src: "/assets/images/gallery/gallery5.webp", caption: "Enclosed Carrier Container Depot", category: "transit", date: "14 Feb, 2026", watermark: "MARUTI TRANS ENCLOSED" },
    { src: "/assets/images/gallery/gallery6.webp", caption: "Luxury Car Enclosed Loading", category: "loading", date: "18 Jan, 2026", watermark: "MARUTI TRANS LUXURY" },
    { src: "/assets/images/gallery/gallery7.webp", caption: "Door-to-Door Key Handover", category: "transit", date: "05 Dec, 2025", watermark: "MARUTI TRANS DELIVERED" },
    { src: "/assets/images/gallery/gallery8.webp", caption: "National Route Car Carrier Fleet", category: "transit", date: "10 Nov, 2025", watermark: "MARUTI TRANS FLEET" },
    { src: "/assets/images/gallery/gallery9.webp", caption: "Express Courier Terminal Prep", category: "loading", date: "02 Oct, 2025", watermark: "MARUTI TRANS EXPRESS" },
    { src: "/assets/images/gallery/gallery10.webp", caption: "Relocation Trailer Toll Clearance", category: "transit", date: "15 Sep, 2025", watermark: "MARUTI TRANS PERMIT" },
    { src: "/assets/images/gallery/gallery11.webp", caption: "Ashok Leyland Carrier Loading", category: "loading", date: "28 Aug, 2025", watermark: "MARUTI TRANS CARRIER" },
    { src: "/assets/images/gallery/gallery12.webp", caption: "Single flatbed wheel harness setup", category: "securing", date: "19 Jul, 2025", watermark: "MARUTI TRANS SECURE" },
    { src: "/assets/images/gallery/gallery13.webp", caption: "Enclosed container security seal check", category: "securing", date: "30 Jun, 2025", watermark: "MARUTI TRANS SEALED" },
    { src: "/assets/images/gallery/gallery14.webp", caption: "Luxury Sedan low approach ramp winch", category: "loading", date: "18 Jun, 2025", watermark: "MARUTI TRANS WINCH" },

    // 10 Custom Generated Indian Logistics Images
    { src: "/assets/images/blog/blog_hydraulic_ramps.webp", caption: "Lowground ground clearance hydraulic ramp", category: "loading", date: "08 Jun, 2025", watermark: "MARUTI TRANS HYDRAULIC" },
    { src: "/assets/images/blog/blog_maharashtra_rto.webp", caption: "RTO Checkpost Permit Verification", category: "transit", date: "02 Jun, 2025", watermark: "MARUTI TRANS RTO" },
    { src: "/assets/images/blog/blog_shifting_insurance.webp", caption: "Pre-transit damage inspection checklist", category: "securing", date: "28 Jun, 2025", watermark: "MARUTI TRANS INSURANCE" },
    { src: "/assets/images/blog/blog_highway_weather.webp", caption: "Yamuna Expressway carrier winter fog safety", category: "transit", date: "15 Jul, 2025", watermark: "MARUTI TRANS HIGHWAY" },
    { src: "/assets/images/blog/blog_mumbai_octroi.webp", caption: "Mulund Octroi Toll Border Clearance", category: "transit", date: "10 Aug, 2025", watermark: "MARUTI TRANS MUMBAI" },
    { src: "/assets/images/blog/blog_flatbed_towing.webp", caption: "Delhi single hatchback flatbed dispatch", category: "loading", date: "02 Sep, 2025", watermark: "MARUTI TRANS FLATBED" },
    { src: "/assets/images/blog/blog_two_wheeler.webp", caption: "Cruiser bike bubble packaging stand", category: "securing", date: "20 Oct, 2025", watermark: "MARUTI TRANS PACKING" },
    { src: "/assets/images/blog/blog_ev_shipping.webp", caption: "Tata Nexon EV wheel strapping deck", category: "securing", date: "15 Nov, 2025", watermark: "MARUTI TRANS ELECTRIC" },
    { src: "/assets/images/blog/blog_gps_tracking.webp", caption: "NH-48 Fleet live transit tracker route", category: "transit", date: "08 Dec, 2025", watermark: "MARUTI TRANS GPS" },
    { src: "/assets/images/blog/blog_monsoon_shipping.webp", caption: "Monsoon enclosed truck rain protection", category: "transit", date: "02 Jan, 2026", watermark: "MARUTI TRANS MONSOON" },

    // 1 High-quality local image from services folder
    { src: "/assets/images/services/loading.webp", caption: "Multi-car carrier loading consolidation", category: "loading", date: "24 Feb, 2026", watermark: "MARUTI TRANS FLEET" }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero text-center py-5">
        <div className="container">
          <div className="page-hero-content mx-auto" style={{ maxWidth: "800px" }}>
            <nav className="page-breadcrumb d-flex justify-content-center gap-2 mb-3">
              <Link href="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
              <span>/</span>
              <span className="text-white-50">Gallery</span>
            </nav>
            <h1 className="fw-bold text-white mb-3" style={{ fontSize: "3rem" }}>Our Work Gallery</h1>
            <p className="lead text-white-80">
              Visual showcase of our professional car shipping trailers, flatbed tow trucks, and loading checklists across India.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="srs-gallery-section py-5">
        <div className="container">
          {/* Subheading */}
          <div className="gallery-heading text-center mb-5">
            <span className="gallery-subtitle d-inline-block border-bottom border-danger pb-2">— VEHICLE RELOCATION GALLERY</span>
          </div>

          {/* Interactive filter and grid */}
          <GalleryFilter images={GALLERY_IMAGES} />
        </div>
      </section>
    </>
  );
}
