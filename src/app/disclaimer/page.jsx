"use client";

import React from "react";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            {/* Breadcrumb */}
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
              <span>/</span>
              <span>Disclaimer</span>
            </nav>
            {/* Title */}
            <h1>Disclaimer</h1>
            {/* Subtitle */}
            <p>Important legal information and limitations of liability</p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="disclaimer-section mt-2 py-5 bg-light">
        <div className="container">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4 p-md-5">
              <h2 className="mb-4 text-danger fw-bold">Website Disclaimer – Maruti Trans Car Carrier Shifting</h2>

              <p className="text-muted lead">
                The content available on this website is provided for general informational purposes 
                regarding our packing and moving services. We strive to maintain accurate and updated 
                information, but we do not guarantee the completeness or reliability of any content.
              </p>

              <hr className="my-4" />

              <h4 className="mt-4 fw-bold text-dark">Service Information</h4>
              <p className="text-muted">
                Pricing, service scope, and availability may vary depending on operational 
                requirements and market conditions. Customers are advised to confirm final 
                quotations before scheduling services.
              </p>

              <h4 className="mt-4 fw-bold text-dark">External Links</h4>
              <p className="text-muted">
                Our website may contain links to third-party websites for reference. 
                We are not responsible for the content, privacy practices, or reliability 
                of external sites.
              </p>

              <h4 className="mt-4 fw-bold text-dark">Limitation of Liability</h4>
              <p className="text-muted">
                Maruti Trans Car Carrier Shifting shall not be liable for any direct, indirect, 
                incidental, or consequential damages arising from the use of this website 
                or reliance on its information.
              </p>

              <h4 className="mt-4 fw-bold text-dark">User Responsibility</h4>
              <p className="text-muted mb-0">
                Visitors are responsible for verifying the accuracy of information 
                before making business decisions based on website content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
