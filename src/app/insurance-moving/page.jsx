"use client";

import React from "react";
import Link from "next/link";
import "./insurance-moving.css";

export default function TransitInsurancePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
              <span>/</span>
              <span>Moving With Insurance</span>
            </nav>
            <h1>Moving with Insurance Protection</h1>
            <p>Comprehensive Transit Insurance for Complete Peace of Mind During Your Move</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="insurance-info-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-6 col-12">
              <span className="section-badge mb-2 d-inline-block">About Moving With Insurance</span>

              <h2 className="section-title fw-bold text-dark">
                Reliable & Secure Moving With Insurance Services
              </h2>

              <p>Our array of services at <strong>SRS Packers and Movers</strong> Moving With Insurance Services we avow guarantees your goods get the utmost safety during the relocating period.</p>

              <p>Are you looking for packers and movers near me and require the leading Moving With Insurance Services, we give the best services. Being one of the packers and movers companies that are accredited by the IBA, we offer Moving With Insurance Services of each kind to make your move safe and secure.</p>

              <p>Our flawless Moving With Insurance Services are free of scams and easily capable of satisfying the demands of customers seeking insurance services for moving. Moving With Insurance Services offers the lowest-priced packers and movers for moving services without any compromise on the quality of the services.</p>

              <p>Being among the best removalists, we ensure that you receive a stress-free move and thus, we deserve to be among the 5 Best Moving With Insurance Services.</p>
            </div>

            {/* IMAGE */}
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="about-img-wrapper about-img-rectangle overflow-hidden shadow-lg mb-4 mb-md-0 rounded-3">
                <img 
                  src="https://srspackersandmovers.com/assets/images/service/insurance.webp" 
                  alt="insurance SRS Packers & Movers" 
                  className="img-fluid w-100 about-img-rectangle-img"
                  style={{ objectFit: "cover", height: "380px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container col-lg-12 mt-4 text-muted">
          <p>On this page, we introduced ourselves as SRS Packers and Movers, the best packers and movers which deal in Moving With Insurance Services. The company’s mission provision of excellent and reliable local movers packers services is the reason why we are regarded as the best.</p>

          <p>Our house moving services have found approval with the International Baggage Association or the IBA hence our promise to help you move your household from your old house to your new house without any damage and provide you with adequate insurance.</p>
        </div>
      </section>

      {/* Coverage Plans Section */}
      <section className="coverage-section py-5">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <span className="section-badge">Coverage Plans</span>
            <h2 className="section-title mt-2 fw-bold text-dark">Choose Your Protection Level</h2>
            <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Select the coverage that best suits your needs and budget.
            </p>
          </div>

          {/* Plans */}
          <div className="row g-4 justify-content-center">
            {/* Basic Plan */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="coverage-card shadow-sm text-center">
                <h5 className="plan-name">Basic Coverage</h5>
                <h3 className="plan-price">Included</h3>
                <ul className="plan-features">
                  <li>Coverage up to ₹50,000</li>
                  <li>Major damage protection</li>
                  <li>Fire & accident coverage</li>
                  <li>Standard claim process</li>
                </ul>
                <Link href="/contacts" className="btn btn-outline-danger w-100">
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="coverage-card popular shadow-sm text-center">
                <span className="popular-badge">Most Popular</span>
                <h5 className="plan-name">Standard Coverage</h5>
                <h3 className="plan-price text-danger">₹2,500</h3>
                <ul className="plan-features">
                  <li>Coverage up to ₹2,00,000</li>
                  <li>Full damage protection</li>
                  <li>Theft protection</li>
                  <li>Water damage coverage</li>
                  <li>Fast-track claims</li>
                </ul>
                <Link href="/contacts" className="btn btn-danger w-100">
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="coverage-card shadow-sm text-center">
                <h5 className="plan-name">Premium Coverage</h5>
                <h3 className="plan-price">₹5,000</h3>
                <ul className="plan-features">
                  <li>Full value coverage</li>
                  <li>Zero depreciation</li>
                  <li>All-risk protection</li>
                  <li>Breakage coverage</li>
                  <li>Priority claim settlement</li>
                  <li>Dedicated claims manager</li>
                </ul>
                <Link href="/contacts" className="btn btn-outline-danger w-100">
                  Select Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section className="coverage-section py-5 bg-white">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* LEFT CONTENT */}
            <div className="col-lg-7 col-12">
              <span className="coverage-badge mb-3 d-inline-block">COVERAGE DETAILS</span>
              <h2 className="coverage-title mb-4 fw-bold text-dark">What's Covered?</h2>
              <div className="coverage-list">
                <div className="coverage-card">
                  <div className="coverage-icon">
                    <i className="bi bi-box"></i>
                  </div>
                  <div>
                    <h5>Physical Damage</h5>
                    <p>Scratches, dents, and breakage during transit</p>
                  </div>
                </div>

                <div className="coverage-card">
                  <div className="coverage-icon">
                    <i className="bi bi-exclamation-triangle"></i>
                  </div>
                  <div>
                    <h5>Accidents</h5>
                    <p>Vehicle accidents, collisions, and overturning</p>
                  </div>
                </div>

                <div className="coverage-card">
                  <div className="coverage-icon">
                    <i className="bi bi-shield-lock"></i>
                  </div>
                  <div>
                    <h5>Theft & Burglary</h5>
                    <p>Loss due to theft during transportation</p>
                  </div>
                </div>

                <div className="coverage-card">
                  <div className="coverage-icon">
                    <i className="bi bi-cloud-lightning"></i>
                  </div>
                  <div>
                    <h5>Natural Disasters</h5>
                    <p>Fire, flood, earthquake, and weather damage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-5 col-12">
              <div className="claims-box shadow-sm">
                <h4 className="claims-title mb-4">How Claims Work</h4>

                <div className="claims-step">
                  <span className="step-number me-3">1</span>
                  <div>
                    <h6>Report Damage</h6>
                    <p>Document and report any damage within 48 hours of delivery</p>
                  </div>
                </div>

                <div className="claims-step">
                  <span className="step-number me-3">2</span>
                  <div>
                    <h6>Submit Claim</h6>
                    <p>Fill out the claim form with photos and description</p>
                  </div>
                </div>

                <div className="claims-step">
                  <span className="step-number me-3">3</span>
                  <div>
                    <h6>Assessment</h6>
                    <p>Our team assesses the damage and verifies the claim</p>
                  </div>
                </div>

                <div className="claims-step">
                  <span className="step-number me-3">4</span>
                  <div>
                    <h6>Settlement</h6>
                    <p>Receive compensation within 7–30 days based on plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Chart Section */}
      <section className="rate-chart-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="rate-title fw-bold text-danger mb-3" style={{ fontSize: "36px" }}>
              SRS Packers And Movers Rate Chart
            </h2>
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
                  <td>Rs 22,000 - 32,000</td>
                  <td>Rs 28,000 - 38,000</td>
                  <td>Rs 38,000 - 48,000</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">4 BHK House</td>
                  <td>Rs 20,000 - 28,000</td>
                  <td>Rs 28,000 - 38,000</td>
                  <td>Rs 35,000 - 48,000</td>
                  <td>Rs 48,000 - 65,000</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">Bike Transportation</td>
                  <td>Rs 2,500 - 5,000</td>
                  <td>Rs 4,000 - 8,000</td>
                  <td>Rs 6,000 - 10,000</td>
                  <td>Rs 10,000 - 15,000</td>
                </tr>
                <tr>
                  <td className="rate-td-main fw-bold text-danger">Car Transportation</td>
                  <td>Rs 6,000 - 12,000</td>
                  <td>Rs 10,000 - 18,000</td>
                  <td>Rs 15,000 - 22,000</td>
                  <td>Rs 22,000 - 35,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <span className="faq-badge">Insurance FAQs</span>
            <h2 className="faq-title fw-bold text-dark mt-3">Moving With Insurance – Common Questions</h2>
            <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Everything you need to know about transit insurance and claim process
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="accordion faq-accordion" id="insuranceFaq">
                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header" id="heading0">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse0"
                      aria-expanded="true"
                    >
                      What does transit insurance cover?
                    </button>
                  </h2>
                  <div
                    id="collapse0"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#insuranceFaq"
                  >
                    <div className="accordion-body">
                      Transit insurance covers damage, loss, or theft of your belongings during the moving process. This includes accidents, natural disasters, fire, and mishandling.
                    </div>
                  </div>
                </div>

                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header" id="heading1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                    >
                      How is the claim amount calculated?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#insuranceFaq"
                  >
                    <div className="accordion-body">
                      Claims are calculated based on the declared value of items and the type of coverage chosen. For zero depreciation policies, full replacement value is provided.
                    </div>
                  </div>
                </div>

                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header" id="heading2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                    >
                      How long does claim settlement take?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#insuranceFaq"
                  >
                    <div className="accordion-body">
                      Standard claims are settled within 15–30 days. Premium coverage includes fast-track settlement within 7–10 days.
                    </div>
                  </div>
                </div>

                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header" id="heading3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                    >
                      What items are not covered?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#insuranceFaq"
                  >
                    <div className="accordion-body">
                      Jewelry, cash, important documents, and items already in damaged condition are typically not covered under transit insurance policies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
