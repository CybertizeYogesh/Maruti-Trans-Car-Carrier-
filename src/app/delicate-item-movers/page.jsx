"use client";

import React from "react";
import Link from "next/link";
import "./delicate-item-movers.css";

export default function DelicateItemsShiftingPage() {
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
              <span>Delicate & Valuable Item Movers</span>
            </nav>
            <h1>Delicate & Valuable Item Movers</h1>
            <p>Specialized Handling for Fragile, Antique, and High-Value Belongings – Safe, Secure, and Professional Relocation</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="delicate-item-movers py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-6 col-12">
              <span className="section-badge mb-2 d-inline-block">About Delicate Item Movers</span>

              <h2 className="section-title fw-bold text-dark">
                Safe & Professional Delicate Item Movers Services
              </h2>

              <p>At <strong>SRS Packers and Movers</strong>, we deal with Delicate Item Movers Services to guarantee your delicate products get the utmost care when being transported.</p>

              <p>You might be in the process of looking for “packers and movers near me” or the need for Delicate Item Movers Services; all your needs will be met here. The packers and movers that we offer from our website are IBA-licensed and are capable of handling all types of goods.</p>

              <p>It is for this reason that Our Delicate Item Movers Services are free from scams hence making us the most wanted provider in the area. We provide affordable prices in Delicate Item Movers Services although we do not compromise on the quality and the safety of the goods being transported.</p>

              <p>If you are seeking Delicate Item Movers Services or top removalists, we offer the best and cheapest services to ensure your move is as stress-free as possible.</p>
            </div>

            {/* IMAGE */}
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="about-img-wrapper about-img-rectangle overflow-hidden shadow-lg mb-4 mb-md-0 rounded-3">
                <img 
                  src="https://srspackersandmovers.com/assets/images/service/delicate.jpg" 
                  alt="delicate SRS Packers & Movers" 
                  className="img-fluid w-100 about-img-rectangle-img"
                  style={{ objectFit: "cover", height: "380px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container col-lg-12 mt-4 text-muted">
          <p>Choose SRS Packers and Movers for the top service-oriented Delicate Item Movers Services. Our professionalism sees to it that we are among the best five Delicate Item Movers Services companies. Rely on us to move all your sensitive products carefully, thereby affording you a comfortable moving process.</p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section py-5">
        <div className="container text-center">
          <p className="section-tag mb-2">EXPERTISE</p>
          <h2 className="section-title mb-2 fw-bold text-dark">Items We Specialize In</h2>
          <p className="section-subtitle mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            Our trained specialists handle all types of delicate and valuable items with care.
          </p>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="expertise-card shadow-sm">
                <div className="icon-box">
                  <i className="bi bi-gem"></i>
                </div>
                <h5>Antiques</h5>
                <p>Vintage furniture and collectibles</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="expertise-card shadow-sm">
                <div className="icon-box">
                  <i className="bi bi-grid-3x3-gap"></i>
                </div>
                <h5>Artwork</h5>
                <p>Paintings, sculptures, and installations</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="expertise-card shadow-sm">
                <div className="icon-box">
                  <i className="bi bi-stars"></i>
                </div>
                <h5>Glassware</h5>
                <p>Crystal, mirrors, and chandeliers</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="expertise-card shadow-sm">
                <div className="icon-box">
                  <i className="bi bi-eye"></i>
                </div>
                <h5>Electronics</h5>
                <p>TVs, computers, and equipment</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="expertise-card shadow-sm">
                <div className="icon-box">
                  <i className="bi bi-music-note-beamed"></i>
                </div>
                <h5>Musical Instruments</h5>
                <p>Pianos, guitars, and more</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="expertise-card shadow-sm">
                <div className="icon-box">
                  <i className="bi bi-heart"></i>
                </div>
                <h5>China & Porcelain</h5>
                <p>Dinnerware and decorative items</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section py-5 text-white">
        <div className="container text-center">
          {/* Star Icon */}
          <div className="testimonial-icon mb-4">
            <i className="bi bi-star"></i>
          </div>

          {/* Quote */}
          <blockquote className="testimonial-quote mx-auto mb-4 fw-light">
            “SRS handled my grandmother's antique collection with such care and respect.
            Every piece arrived in perfect condition. Truly a white-glove experience.”
          </blockquote>

          {/* User Info */}
          <div className="testimonial-user d-flex justify-content-center align-items-center gap-3">
            <div className="user-avatar">A</div>
            <div className="text-start">
              <h6 className="mb-0 text-white">Anita Mehta</h6>
              <small className="text-white-50">Art Collector, Mumbai</small>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-6">
              <p className="section-tag mb-2">OUR APPROACH</p>
              <h2 className="section-title mb-3 fw-bold text-dark">The Art of Careful Moving</h2>
              <p className="section-desc text-muted mb-4">
                Moving delicate items isn't just about transportation—it's about
                understanding the value and significance of each piece and treating it
                accordingly.
              </p>

              {/* Steps */}
              <div className="approach-step">
                <span className="step-number">1</span>
                <div>
                  <h6>Pre-Move Assessment</h6>
                  <p>Detailed inspection and documentation of each item's condition before moving.</p>
                </div>
              </div>

              <div className="approach-step">
                <span className="step-number">2</span>
                <div>
                  <h6>Custom Packing Solutions</h6>
                  <p>Tailored packing materials and methods designed for each specific item type.</p>
                </div>
              </div>

              <div className="approach-step">
                <span className="step-number">3</span>
                <div>
                  <h6>Specialized Handling</h6>
                  <p>Trained art handlers and antique specialists for delicate operations.</p>
                </div>
              </div>

              <div className="approach-step">
                <span className="step-number">4</span>
                <div>
                  <h6>Climate-Controlled Transit</h6>
                  <p>Temperature and humidity controlled vehicles for sensitive items.</p>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="col-12 col-lg-6">
              <div className="quality-card shadow-sm border p-4 rounded-3">
                <h5 className="mb-4 fw-bold text-dark">Our Quality Standards</h5>
                <ul className="quality-list">
                  <li className="mb-3"><i className="bi bi-check-circle-fill me-2"></i> Certified art and antique handlers</li>
                  <li className="mb-3"><i className="bi bi-check-circle-fill me-2"></i> Museum-quality packing materials</li>
                  <li className="mb-3"><i className="bi bi-check-circle-fill me-2"></i> Custom wooden crating available</li>
                  <li className="mb-3"><i className="bi bi-check-circle-fill me-2"></i> Acid-free wrapping for paper items</li>
                  <li className="mb-3"><i className="bi bi-check-circle-fill me-2"></i> Suspension systems for fragile items</li>
                  <li className="mb-3"><i className="bi bi-check-circle-fill me-2"></i> White-glove delivery service</li>
                  <li className="mb-3"><i className="bi bi-check-circle-fill me-2"></i> Full documentation with photos</li>
                  <li className="mb-3"><i className="bi bi-check-circle-fill me-2"></i> Specialized insurance coverage</li>
                </ul>
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
            <span className="faq-badge">FAQs</span>
            <h2 className="faq-title fw-bold text-dark mt-3">Delicate Moving Questions</h2>
            <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Find answers to your questions about handling, packing, insurance, and safe transport of delicate and valuable items.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="accordion faq-accordion" id="delicate-item-movers-Faq">
                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header" id="heading0">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse0"
                      aria-expanded="true"
                    >
                      What qualifies as a delicate item?
                    </button>
                  </h2>
                  <div
                    id="collapse0"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#delicate-item-movers-Faq"
                  >
                    <div className="accordion-body">
                      Delicate items include antiques, artwork, glassware, musical instruments, electronics, china, sculptures, and any items requiring special handling due to their fragility or value.
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
                      How do you pack delicate items?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#delicate-item-movers-Faq"
                  >
                    <div className="accordion-body">
                      We use multiple layers of protection including bubble wrap, foam padding, custom crating, acid-free paper, and climate-controlled materials. Each item is individually wrapped and secured.
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
                      Do you offer climate-controlled transport?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#delicate-item-movers-Faq"
                  >
                    <div className="accordion-body">
                      Yes, we offer climate-controlled vehicles for temperature-sensitive items like artwork, antiques, and certain electronics.
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
                      What insurance coverage is available?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#delicate-item-movers-Faq"
                  >
                    <div className="accordion-body">
                      We offer specialized fine art and antique insurance with full replacement value coverage. Coverage amounts are customized based on item appraisals.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call Button */}
          <div className="text-center mt-5">
            <a href="tel:+919892325154" className="btn faq-call-btn text-white fw-bold">
              Have More Questions? Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
