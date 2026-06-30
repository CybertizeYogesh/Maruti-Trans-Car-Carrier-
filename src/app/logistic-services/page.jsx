"use client";

import React from "react";
import Link from "next/link";
import "./logistic-services.css";

export default function LogisticServicesPage() {
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
              <span>Logistic Services</span>
            </nav>
            <h1>Logistics & Supply Chain Services</h1>
            <p>Efficient Transportation and Logistics Support for Businesses of All Sizes</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="logistic-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-6 col-12">
              <span className="section-badge mb-2 d-inline-block">About Logistic Services</span>

              <h2 className="section-title fw-bold text-dark">
                Reliable & Professional Logistic Services
              </h2>

              <p>SRS Packers and Movers have been offering the most complete and excellent packing mover services to meet all your transport and packaging needs. When searching for packers and movers near me or packers and movers services, now you know, who is the best logistics company.</p>

              <p>Our IBA-approved packers and movers provide all sorts of shipping and moving services with a special emphasis on security.</p>

              <p>Our logistics solutions are ideal for individuals interested in quality services without being conned. We provide the most economical packers & movers for logistics services but never on the quality.</p>

              <p>If you would like the finest and lowest cost logistics service providers or you are on the lookout for exceptional removalists, you can obtain the excellent service that you would like from us.</p>
            </div>

            {/* IMAGE */}
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="about-img-wrapper about-img-rectangle overflow-hidden shadow-lg mb-4 mb-md-0 rounded-3">
                <img 
                  src="https://srspackersandmovers.com/assets/images/service/logistic.jpg" 
                  alt="logistic SRS Packers & Movers" 
                  className="img-fluid w-100 about-img-rectangle-img"
                  style={{ objectFit: "cover", height: "380px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container col-lg-12 mt-4 text-muted">
          <p>Approach SRS Packers and Movers for the best Logistic Services. This commitment towards optimality of our Logistic Services makes us among the 5 Best Logistic Services.</p>

          <p>As part of our company’s commitment to provide only the best service, we guarantee smooth relocation services approved by IBA. Select us for a worry-free and fast-moving solution and taste the level of professionalism that is unmatched in the market.</p>
        </div>
      </section>

      {/* Why SRS Logistics Section */}
      <section className="why-srs-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-12">
              <span className="why-subtitle mb-2 d-inline-block">WHY SRS LOGISTICS</span>
              <h2 className="why-title fw-bold text-dark mb-3">Technology-Driven Logistics</h2>
              <p className="why-desc text-muted mb-4">
                We combine modern technology with logistics expertise to deliver efficient,
                reliable, and cost-effective solutions for your business.
              </p>

              <ul className="why-list">
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> Real-time shipment tracking and visibility</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> Automated inventory management systems</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> Route optimization for faster deliveries</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> Integration with your existing systems</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> Detailed analytics and reporting</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> 24/7 customer support</li>
              </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6 col-12">
              <div className="capability-box shadow-lg rounded-3">
                <h5 className="mb-4 text-white pb-3 border-bottom border-light border-opacity-25">
                  Our Capabilities
                </h5>

                <div className="capability-item">
                  <span>Pan-India Coverage</span>
                  <span className="highlight text-white fw-bold">500+ Cities</span>
                </div>

                <div className="capability-item">
                  <span>Fleet Size</span>
                  <span className="highlight text-white fw-bold">200+ Vehicles</span>
                </div>

                <div className="capability-item">
                  <span>Warehouse Space</span>
                  <span className="highlight text-white fw-bold">5 Lac+ Sq Ft</span>
                </div>

                <div className="capability-item">
                  <span>Daily Shipments</span>
                  <span className="highlight text-white fw-bold">5,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="services-subtitle mb-2 d-inline-block">OUR SERVICES</span>
            <h2 className="services-title fw-bold text-dark">Complete Logistics Solutions</h2>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-card shadow-sm border p-4 rounded-3 bg-white">
                <div className="service-icon mb-3">
                  <i className="bi bi-truck text-white"></i>
                </div>
                <h5 className="fw-bold text-dark">Fleet Management</h5>
                <p className="text-muted">Modern vehicles for all cargo types</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-card shadow-sm border p-4 rounded-3 bg-white">
                <div className="service-icon mb-3">
                  <i className="bi bi-building text-white"></i>
                </div>
                <h5 className="fw-bold text-dark">Warehousing</h5>
                <p className="text-muted">Secure storage facilities</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-card shadow-sm border p-4 rounded-3 bg-white">
                <div className="service-icon mb-3">
                  <i className="bi bi-box-seam text-white"></i>
                </div>
                <h5 className="fw-bold text-dark">Distribution</h5>
                <p className="text-muted">Last-mile delivery solutions</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-card shadow-sm border p-4 rounded-3 bg-white">
                <div className="service-icon mb-3">
                  <i className="bi bi-geo-alt text-white"></i>
                </div>
                <h5 className="fw-bold text-dark">Route Optimization</h5>
                <p className="text-muted">Efficient delivery planning</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-card shadow-sm border p-4 rounded-3 bg-white">
                <div className="service-icon mb-3">
                  <i className="bi bi-bar-chart text-white"></i>
                </div>
                <h5 className="fw-bold text-dark">Inventory Management</h5>
                <p className="text-muted">Real-time stock tracking</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-card shadow-sm border p-4 rounded-3 bg-white">
                <div className="service-icon mb-3">
                  <i className="bi bi-gear text-white"></i>
                </div>
                <h5 className="fw-bold text-dark">Custom Solutions</h5>
                <p className="text-muted">Tailored logistics plans</p>
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
            <span className="faq-badge">Logistics FAQs</span>
            <h2 className="faq-title fw-bold text-dark mt-3">Logistic Services – Frequently Asked Questions</h2>
            <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Find answers to common questions about our logistics solutions, tracking, and industry support.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="accordion faq-accordion" id="logistics-faq">
                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header" id="heading0">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse0"
                      aria-expanded="true"
                    >
                      What types of logistics services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapse0"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#logistics-faq"
                  >
                    <div className="accordion-body">
                      We offer comprehensive logistics including transportation, warehousing, distribution, inventory management, and custom supply chain solutions for businesses of all sizes.
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
                      Can you handle large-scale commercial shipments?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#logistics-faq"
                  >
                    <div className="accordion-body">
                      Yes, we have the infrastructure to handle shipments of any scale, from small parcels to full truckload (FTL) and less than truckload (LTL) shipments.
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
                      Do you offer tracking and visibility?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#logistics-faq"
                  >
                    <div className="accordion-body">
                      Absolutely. All shipments come with real-time GPS tracking, and you can access detailed reports through our logistics management portal.
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
                      What industries do you serve?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#logistics-faq"
                  >
                    <div className="accordion-body">
                      We serve various industries including e-commerce, retail, manufacturing, pharmaceuticals, FMCG, electronics, and more.
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
