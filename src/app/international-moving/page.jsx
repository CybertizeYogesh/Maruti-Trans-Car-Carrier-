"use client";

import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "./international-moving.css";

export default function InternationalMovingPage() {
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
              <span>International Moving</span>
            </nav>
            {/* Title */}
            <h1>International Moving Services</h1>
            {/* Subtitle */}
            <p>Global Relocation Made Easy – Expert Packing, Shipping, and Customs Support</p>
          </div>
        </div>
      </section>

      {/* Horizontal Quote Form */}
      <div className="container mt-4">
        <QuoteForm isModal={false} isServicePage={true} />
      </div>

      {/* About International Info Section */}
      <section className="international-info-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-6 col-12">
              <span className="section-badge mb-2 d-inline-block">About International Moving</span>
              <h2 className="section-title fw-bold text-dark mb-4">
                Professional & Secure International Moving Services
              </h2>
              <p className="text-muted">
                Over the years, we at <strong>SRS Packers and Movers</strong> have been dedicated to delivering International
                Moving Services, so that your moving experience is professional and safe. You may be looking for packers and
                movers near me or looking for the finest International Moving Services; we are your top pick for safe and swift
                shifting internationally.
              </p>
              <p className="text-muted">
                Being an IBA-recognized packers and movers service provider, we specialize in all types of International
                Moving Services with a high level of professionalism.
              </p>
              <p className="text-muted">
                That is why we offer only perfect and scam-free International Moving Services which makes us the most wanted
                and reliable in town for your international relocation needs. For International Moving Services, our cheap
                packers & movers do not cut on the quality of service, making us the top and cheapest packers and movers for
                the job.
              </p>
              <p className="text-muted">
                Given the quality of our services, we may be among the most sought-after removalists; thus, our rating is the
                5 Best International Moving Services.
              </p>
            </div>
            {/* IMAGE */}
            <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
              <div className="about-img-wrapper about-img-rectangle overflow-hidden shadow-lg mb-4 mb-md-0 rounded-3">
                <img
                  src="https://srspackersandmovers.com/assets/images/service/international.jpg"
                  alt="international SRS Packers & Movers"
                  className="img-fluid w-100 about-img-rectangle-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <p className="text-muted">
            We are SRS Packers and Movers and for the best International Moving Services, you can hire us. They ensure that
            they provide the best and quality services hence are the best local movers and packers services in the country.
            Our services are IBA accredited enabling us to facilitate your international move in a professional way to meet
            your needs of relocation.
          </p>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <section className="international-moving-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <span className="section-badge">COMPLETE SOLUTIONS</span>
            <h2 className="section-title">End-to-End International Moving</h2>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 7L12 12L21 7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h4>Export Packing</h4>
                <p>
                  International-grade wooden crates and vacuum packing for maximum protection during overseas transit.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 8H17M7 12H17M7 16H13" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h4>Customs Clearance</h4>
                <p>
                  Complete documentation, duty calculation, and customs clearance at origin and destination.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 17H21" stroke="currentColor" strokeWidth="2" />
                    <path d="M5 17L7 7H17L19 17" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h4>Sea Freight</h4>
                <p>
                  Cost-effective FCL and LCL shipping options for household goods and commercial cargo.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M2 16L22 12L2 8L5 12L2 16Z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h4>Air Freight</h4>
                <p>
                  Express air cargo for time-sensitive shipments with door-to-door tracking.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="14" r="1" fill="currentColor" />
                  </svg>
                </div>
                <h4>Door-to-Door</h4>
                <p>
                  Comprehensive service from pickup at origin to delivery and setup at your new home.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L20 7V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V7L12 3Z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h4>Marine Insurance</h4>
                <p>
                  All-risk marine insurance coverage for complete protection of your valuables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="intl-process-section py-5 text-white">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <span className="process-badge mb-2 d-inline-block text-warning fw-semibold">THE PROCESS</span>
            <h2 className="process-heading fw-bold text-white">Your International Moving Journey</h2>
          </div>

          {/* Process Row */}
          <div className="row g-4 position-relative process-wrapper">
            {/* Step 1 */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-card p-4 text-dark rounded-3 bg-white">
                <p className="mb-3">
                  <span className="step-circle bg-danger text-white d-inline-flex align-items-center justify-content-center fw-bold" style={{ width: "32px", height: "32px", borderRadius: "50%" }}>1</span>
                </p>
                <h4 className="fw-bold mb-2">Consultation</h4>
                <p className="text-muted small mb-0">Free survey and detailed quotation with timeline</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-card p-4 text-dark rounded-3 bg-white">
                <p className="mb-3">
                  <span className="step-circle bg-danger text-white d-inline-flex align-items-center justify-content-center fw-bold" style={{ width: "32px", height: "32px", borderRadius: "50%" }}>2</span>
                </p>
                <h4 className="fw-bold mb-2">Documentation</h4>
                <p className="text-muted small mb-0">We handle all export and import paperwork</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-card p-4 text-dark rounded-3 bg-white">
                <p className="mb-3">
                  <span className="step-circle bg-danger text-white d-inline-flex align-items-center justify-content-center fw-bold" style={{ width: "32px", height: "32px", borderRadius: "50%" }}>3</span>
                </p>
                <h4 className="fw-bold mb-2">Packing & Shipping</h4>
                <p className="text-muted small mb-0">Professional export packing and secure freight</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-card p-4 text-dark rounded-3 bg-white">
                <p className="mb-3">
                  <span className="step-circle bg-danger text-white d-inline-flex align-items-center justify-content-center fw-bold" style={{ width: "32px", height: "32px", borderRadius: "50%" }}>4</span>
                </p>
                <h4 className="fw-bold mb-2">Delivery & Setup</h4>
                <p className="text-muted small mb-0">Customs clearance, delivery, and arrangement</p>
              </div>
            </div>

            {/* Arrows (Desktop only) */}
            <span className="process-arrow arrow-1 d-none d-xl-inline">→</span>
            <span className="process-arrow arrow-2 d-none d-xl-inline">→</span>
            <span className="process-arrow arrow-3 d-none d-xl-inline">→</span>
          </div>
        </div>
      </section>

      {/* Rate Chart Section */}
      <section className="rate-chart-section py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="rate-title mb-3 fw-bold text-danger">SRS Packers And Movers Rate Chart</h2>
          </div>
          <div className="table-responsive">
            <table className="table rate-table shadow-sm rounded-4 overflow-hidden border">
              <thead>
                <tr>
                  <th className="rate-th-main">Shifting Category</th>
                  <th>0 - 100 KM</th>
                  <th>100 - 500 KM</th>
                  <th>500 - 1000 KM</th>
                  <th>1000 - 2500 KM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">Few Household Items</td>
                  <td>Rs 4,500 - 8,000</td>
                  <td>Rs 8,500 - 13,000</td>
                  <td>Rs 13,500 - 17,000</td>
                  <td>Rs 17,500 - 21,000</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">1 BHK House</td>
                  <td>Rs 7,000 - 16,000</td>
                  <td>Rs 12,000 - 21,500</td>
                  <td>Rs 20,000 - 30,000</td>
                  <td>Rs 26,000 - 37,500</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">2 BHK House</td>
                  <td>Rs 12,000 - 20,000</td>
                  <td>Rs 20,000 - 28,000</td>
                  <td>Rs 25,000 - 35,000</td>
                  <td>Rs 35,000 - 45,000</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">3 BHK House</td>
                  <td>Rs 15,000 - 23,000</td>
                  <td>Rs 25,000 - 35,000</td>
                  <td>Rs 38,000 - 50,000</td>
                  <td>Rs 52,000 - 70,000</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">4 BHK House</td>
                  <td>Rs 25,000 - 35,000</td>
                  <td>Rs 38,000 - 45,000</td>
                  <td>Rs 50,000 - 65,000</td>
                  <td>Rs 70,000 - 95,000</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">Bike Transportation</td>
                  <td>Rs 5,000 - 12,000</td>
                  <td>Rs 12,500 - 15,000</td>
                  <td>Rs 15,500 - 23,000</td>
                  <td>Rs 23,500 - 32,000</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">Car Transportation</td>
                  <td>Rs 9,000 - 16,000</td>
                  <td>Rs 16,500 - 19,500</td>
                  <td>Rs 20,000 - 25,000</td>
                  <td>Rs 25,500 - 35,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="rate-disclaimer mt-3 text-muted small">
            <strong>Disclaimer:</strong> The prices listed are approximate estimates and serve as a general guideline for our
            service rates. Actual costs may vary based on factors such as the type and volume of items, specific
            transportation routes, delivery timing, and additional services required. Please contact us for a tailored quote
            that reflects your unique moving needs.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <span className="faq-badge">FAQ</span>
            <h2 className="faq-title">International Moving Questions</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="internationalFaq">
                {/* FAQ item 0 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading0">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse0"
                      aria-expanded="true"
                    >
                      How long does international moving take?
                    </button>
                  </h2>
                  <div
                    id="collapse0"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#internationalFaq"
                  >
                    <div className="accordion-body">
                      International moves typically take 4–8 weeks by sea and 1–2 weeks by air, depending on the destination and customs clearance time.
                    </div>
                  </div>
                </div>

                {/* FAQ item 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                    >
                      Do you handle customs documentation?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#internationalFaq"
                  >
                    <div className="accordion-body">
                      Yes, we provide complete customs clearance assistance including documentation, duty calculation, and clearance at destination.
                    </div>
                  </div>
                </div>

                {/* FAQ item 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                    >
                      What items cannot be shipped internationally?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#internationalFaq"
                  >
                    <div className="accordion-body">
                      Prohibited items vary by country but generally include hazardous materials, perishables, weapons, and restricted electronics. A detailed list is shared during consultation.
                    </div>
                  </div>
                </div>

                {/* FAQ item 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                    >
                      Is insurance included for international moves?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#internationalFaq"
                  >
                    <div className="accordion-body">
                      Basic marine insurance is included. We also offer comprehensive all-risk insurance for maximum protection.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call Button */}
          <div className="text-center mt-5">
            <a href="tel:+919892325154" className="btn faq-call-btn">
              Have More Questions? Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
