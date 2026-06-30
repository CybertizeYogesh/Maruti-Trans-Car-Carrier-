"use client";

import React from "react";
import Link from "next/link";

export default function CookiePolicyPage() {
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
              <span>Cookie Policy</span>
            </nav>
            {/* Title */}
            <h1>Cookie Policy</h1>
            {/* Subtitle */}
            <p>Understanding how SRS Packers and Movers uses cookies and tracking technologies</p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="cookie-policy-section mt-2 py-5 bg-light">
        <div className="container">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h2 className="mb-4 text-danger fw-bold">Cookie Policy for SRS Packers And Movers</h2>

              <p className="text-muted lead">
                This Cookie Policy explains how SRS Packers And Movers uses cookies and similar tracking technologies 
                on our website. When you visit our website to explore packing and moving services, request a quote, 
                or contact us, small data files may be stored on your device to enhance performance and improve 
                your browsing experience.
              </p>

              <hr className="my-4" />

              <h4 className="mt-4 fw-bold text-dark">Purpose of Cookies</h4>
              <p className="text-muted">
                Cookies help us understand how visitors interact with our website, which pages are most useful, 
                and how we can improve service presentation. These cookies do not collect sensitive personal data 
                without user consent.
              </p>

              <h4 className="mt-4 fw-bold text-dark">Types of Cookies We Use</h4>
              <ul className="ps-3 text-muted">
                <li className="mb-2">Essential cookies required for proper website functionality.</li>
                <li className="mb-2">Performance cookies to analyze visitor behavior and improve speed.</li>
                <li className="mb-2">Preference cookies to remember user settings.</li>
              </ul>

              <h4 className="mt-4 fw-bold text-dark">Third-Party Tools</h4>
              <p className="text-muted">
                We may use analytics tools to monitor website traffic and performance. 
                These tools collect limited technical details such as browser type and device category.
              </p>

              <h4 className="mt-4 fw-bold text-dark">Managing Cookie Preferences</h4>
              <p className="text-muted mb-0">
                You can disable cookies via browser settings. Please note that disabling certain 
                cookies may affect website functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
