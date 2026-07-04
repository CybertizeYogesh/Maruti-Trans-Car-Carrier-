"use client";

import React, { useState } from "react";

export default function GalleryFilter({ images }) {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "loading", label: "Loading Process" },
    { id: "securing", label: "Safety & Strapping" },
    { id: "transit", label: "Inspection & Delivery" }
  ];

  const filteredImages = activeTab === "all" 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div>
      {/* Category Tabs */}
      <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mb-5">
        {categories.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`btn px-4 py-2 rounded-pill fw-semibold transition-all ${
              activeTab === tab.id 
                ? "btn-danger text-white shadow-sm" 
                : "btn-outline-secondary hover-danger"
            }`}
            style={{ fontSize: "0.95rem" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {filteredImages.map((img, idx) => (
          <div key={idx} className="col fade-in-up">
            <div className="srs-gallery-card h-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative">
              <div className="gallery-img-wrapper position-relative overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  loading="lazy"
                  className="img-fluid w-100 transition-all duration-500"
                  style={{ height: "260px", objectFit: "cover" }}
                />
                <div className="gallery-category-badge position-absolute top-3 start-3 bg-danger text-white px-3 py-1 rounded-pill small fw-bold">
                  {categories.find(c => c.id === img.category)?.label || "Vehicle"}
                </div>
                {img.watermark && (
                  <div className={idx % 2 === 0 ? "gallery-watermark" : "gallery-watermark-alt"}>
                    {img.watermark}
                  </div>
                )}
              </div>
              <div className="srs-gallery-details p-3 bg-white border-top">
                <h5 className="fw-bold text-dark mb-1" style={{ fontSize: "1.1rem" }}>{img.caption}</h5>
                <div className="d-flex justify-content-between align-items-center mt-2 pt-2 border-top">
                  <span className="text-muted small">
                    <i className="bi bi-shield-check text-success me-1"></i> Verified Shifting
                  </span>
                  <span className="badge bg-light text-muted border small fw-normal">{img.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
