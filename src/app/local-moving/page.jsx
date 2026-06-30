"use client";

import React from "react";
import Link from "next/link";
import "./local-moving.css";

export default function LocalMovingPage() {
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
              <span>Local Moving Services</span>
            </nav>
            <h1>Local Moving Services</h1>
            <p>Swift, Safe, and Stress-Free Relocation Within Your City by Trusted Experts</p>
          </div>
        </div>
      </section>

      {/* About Local Moving Section */}
      <section className="local-info-section py-5">
        <div className="container">
          <div className="row align-items-center gy-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-6 col-12">
              <span className="section-badge mb-2 d-inline-block" style={{
                padding: "6px 16px",
                fontSize: "13px",
                fontWeight: "600",
                color: "var(--red-main)",
                background: "var(--srs-red-light)",
                borderRadius: "20px"
              }}>About Local Moving</span>

              <h2 className="section-title fw-bold text-dark mb-4" style={{ fontSize: "36px" }}>
                Trusted Local Moving Services in Your City
              </h2>

              <p className="section-text">
                SRS Packers and Movers offer high-quality Local Moving Services and provide secure and happy relocation. Whether you are looking for <strong>“packers and movers near me”</strong> or the “best packers & movers for Local Moving Services” we are here for you.
              </p>

              <p className="section-text">
                As one of the most renowned Packers and Movers Companies in the IBA-approved list, we at ShiftingWale provide the best Local Moving Services which include all the different moving solutions.
              </p>

              <p className="section-text">
                Our Local Moving Services are scam-free, and for this very reason, you will be eager to get our services, the wanted services. The fact that affordability is always a consideration as far as Moving Services are concerned does not in any way mean that it should be at the expense of quality, therefore, we offer you the best and most pocket-friendly Local Moving Services.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
              <div className="about-img-wrapper about-img-rectangle overflow-hidden shadow-lg mb-4 mb-md-0 rounded-3">
                <img 
                  src="https://srspackersandmovers.com/assets/images/service/localmoving.jpg" 
                  alt="localmoving SRS Packers & Movers" 
                  className="img-fluid w-100 about-img-rectangle-img"
                  style={{ objectFit: "cover", height: "380px", transition: "transform 0.4s ease" }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <p className="text-muted leading-relaxed">
                To make sure you receive the best services from our top removalists, our team will be making sure that all your moves will be carefully tended to. Call us, SRS Packers and Movers, for the finest Local Moving Services available. Due to our professionalism and concern for customer satisfaction, we are one of the 5 Best Local Moving Services providers.
              </p>
              <p className="text-muted leading-relaxed">
                Get in touch with us for all your local moving requirements and embark on the move with ease with our efficient, IBA-recognised services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-5">
        <div className="container">
          {/* SECTION HEADER */}
          <div className="text-center mb-5">
            <span className="process-badge mb-2 d-inline-block" style={{
              padding: "6px 18px",
              borderRadius: "20px",
              background: "rgba(161, 0, 0, 0.1)",
              color: "var(--red-main)",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}>OUR PROCESS</span>
            <h2 className="process-title fw-bold text-dark" style={{ fontSize: "36px" }}>How Local Moving Works</h2>
            <p className="process-subtitle text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Our streamlined process ensures a smooth and hassle-free local move.
            </p>
          </div>

          {/* PROCESS STEPS */}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="process-item">
                <div className="process-step">1</div>
                <div className="process-content">
                  <h5>Get a Free Quote</h5>
                  <p>
                    Fill out our online form or call us to receive an instant and transparent
                    moving quote based on your requirements.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <div className="process-step">2</div>
                <div className="process-content">
                  <h5>Schedule Your Move</h5>
                  <p>
                    Choose a convenient date and time for your move. We offer flexible
                    scheduling, including weekends.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <div className="process-step">3</div>
                <div className="process-content">
                  <h5>Professional Packing</h5>
                  <p>
                    Our trained professionals arrive with high-quality packing materials
                    to securely pack your belongings.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <div className="process-step">4</div>
                <div className="process-content">
                  <h5>Safe Delivery</h5>
                  <p>
                    We transport and unload your items at your new location, ensuring
                    everything is delivered safely and on time.
                  </p>
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
          <div className="row g-5 align-items-start">
            {/* LEFT CONTENT */}
            <div className="col-lg-5 col-12">
              <span className="faq-badge">FAQ</span>
              <h2 className="faq-title fw-bold text-dark mt-3">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Find answers to common questions about our local moving services.
              </p>

              {/* HELP BOX */}
              <div className="faq-help-box shadow-sm">
                <h5>Need More Help?</h5>
                <p>
                  Our customer support team is available 24/7 to assist you with
                  any questions or concerns.
                </p>
                <a href="tel:+919892325154" className="btn btn-light faq-call-btn text-danger fw-bold">
                  📞 Call Us Now
                </a>
              </div>
            </div>

            {/* RIGHT FAQ ACCORDION */}
            <div className="col-lg-7 col-12">
              <div className="accordion faq-accordion" id="faqAccordion">
                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button"
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq1"
                    >
                      How quickly can you arrange a local move?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We can arrange local moves on the same day or within 24 hours,
                      depending on availability and your requirements.
                    </div>
                  </div>
                </div>

                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button"
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq2"
                    >
                      What areas do you cover for local moving?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We provide local moving services across the city and nearby
                      surrounding areas.
                    </div>
                  </div>
                </div>

                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button"
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq3"
                    >
                      Do you provide packing materials for local moves?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we provide high-quality packing materials to ensure your
                      belongings are safely packed and protected.
                    </div>
                  </div>
                </div>

                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button"
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq4"
                    >
                      What is your pricing for local moving?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Pricing depends on factors such as distance, volume of items,
                      and services required. Contact us for a free quote.
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
