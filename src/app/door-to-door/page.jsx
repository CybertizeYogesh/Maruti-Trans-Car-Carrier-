"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./door-to-door.css";

function CountUp({ end, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const endVal = parseInt(end, 10);
    if (isNaN(endVal)) return;

    const totalFrames = 50;
    const frameDuration = duration / totalFrames;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.round(endVal * easeOutQuad(progress));
      
      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(endVal);
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function DoortoDoorRelocationPage() {
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
              <span>Door to Door Services</span>
            </nav>
            <h1>Door-to-Door Relocation Services</h1>
            <p>End-to-End Moving Solutions – From Packing to Final Placement, We Handle Everything</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="door-to-door-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-6 col-12">
              <span className="section-badge mb-2 d-inline-block">About Door to Door Services</span>

              <h2 className="section-title fw-bold text-dark">
                Reliable & Hassle-Free Door to Door Moving Services
              </h2>

              <p>Our services at <strong>SRS Packers and Movers</strong> involve providing quality and professional door-to-door services that are intended to ensure that you have a hassle-free shifting experience. If you are looking for ‘packers and movers near me’ and need the best Door to door-to-door services, then you have come to the right place.</p>

              <p>Our accreditations from the Indian Banks Association (IBA) make us more efficient and professional in providing our Door to door-to-door Services on all types of shifting services.</p>

              <p>Door to door-to-door services at our best, free from scams, planned meticulously to earn the title of the most wanted provider in town. We claim to offer the lowest-priced packers & movers for Door to door-to-door services and promise to provide the most efficient and excellent services without burning a big hole in your pocket.</p>

              <p>As the leading removalists, we guarantee that we save your time while offering IBA-approved, stress-free services.</p>
            </div>

            {/* IMAGE */}
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="about-img-wrapper about-img-rectangle overflow-hidden shadow-lg mb-4 mb-md-0 rounded-3">
                <img 
                  src="https://srspackersandmovers.com/assets/images/service/door.jpg" 
                  alt="door to door SRS Packers & Movers" 
                  className="img-fluid w-100 about-img-rectangle-img"
                  style={{ objectFit: "cover", height: "380px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container col-lg-12 mt-4 text-muted">
          <p>Choose us, <strong>SRS Packers and Movers</strong> for the top doorstep services for Door to door-to-door moving. From the standpoint of our dedication as well as quality delivery, we place ourselves among the first five best door-to-door service companies.</p>

          <p>You need not worry about your relocation we’ll take good care of it and ensure it is as smooth as you want. Moving is more enjoyable when done door-to-door by top movers; contact us for the best services.</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-5">
        <div className="container text-center">
          {/* Badge */}
          <span className="process-badge mb-3 d-inline-block">
            Complete Moving Solution
          </span>

          {/* Heading */}
          <h2 className="process-title fw-bold text-dark">
            Door to Door <br />
            <span>Hassle-Free Moving</span>
          </h2>

          {/* Subtitle */}
          <p className="process-subtitle mx-auto">
            From your old home to your new one, we handle every step of the journey.
            Just sit back and let us do the heavy lifting.
          </p>

          {/* Process Steps */}
          <div className="row process-steps mt-5 align-items-center">
            <div className="col-6 col-md-3 step-item position-relative">
              <div className="step-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <h6>Book</h6>
              <p>Schedule your move with us</p>
              <span className="step-arrow d-none d-md-block">
                <i className="bi bi-arrow-right"></i>
              </span>
            </div>

            <div className="col-6 col-md-3 step-item position-relative">
              <div className="step-icon">
                <i className="bi bi-box-seam"></i>
              </div>
              <h6>Pack</h6>
              <p>We pack everything at origin</p>
              <span className="step-arrow d-none d-md-block">
                <i className="bi bi-arrow-right"></i>
              </span>
            </div>

            <div className="col-6 col-md-3 step-item position-relative">
              <div className="step-icon">
                <i className="bi bi-truck"></i>
              </div>
              <h6>Transport</h6>
              <p>Safe transit to destination</p>
              <span className="step-arrow d-none d-md-block">
                <i className="bi bi-arrow-right"></i>
              </span>
            </div>

            <div className="col-6 col-md-3 step-item">
              <div className="step-icon">
                <i className="bi bi-house-door"></i>
              </div>
              <h6>Deliver</h6>
              <p>Unpack and set up at new home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <span className="section-label">BENEFITS</span>
            <h2 className="section-title fw-bold text-dark mt-2">Why Door-to-Door?</h2>
          </div>

          {/* Benefits Grid */}
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 col-12">
              <div className="benefit-card shadow-sm">
                <div className="benefit-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <h6>Save Time</h6>
                <p>No need to coordinate multiple services – we handle everything in one go.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12">
              <div className="benefit-card shadow-sm">
                <div className="benefit-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h6>Single Responsibility</h6>
                <p>One company, one point of contact, one insurance policy for the entire move.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12">
              <div className="benefit-card shadow-sm">
                <div className="benefit-icon">
                  <i className="bi bi-star"></i>
                </div>
                <h6>Stress-Free</h6>
                <p>Relax while our experts take care of packing, moving, and unpacking.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12">
              <div className="benefit-card shadow-sm">
                <div className="benefit-icon">
                  <i className="bi bi-people"></i>
                </div>
                <h6>Professional Team</h6>
                <p>Trained movers who know how to handle your belongings with care.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12">
              <div className="benefit-card shadow-sm">
                <div className="benefit-icon">
                  <i className="bi bi-box-seam"></i>
                </div>
                <h6>Quality Packing</h6>
                <p>Premium packing materials and systematic organization.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12">
              <div className="benefit-card shadow-sm">
                <div className="benefit-icon">
                  <i className="bi bi-house-door"></i>
                </div>
                <h6>Room Setup</h6>
                <p>We’ll arrange furniture and boxes in their designated rooms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center g-4">
            {/* Stat Item */}
            <div className="col-6 col-lg-3 col-md-6">
              <div className="stat-box">
                <i className="bi bi-truck stat-icon"></i>
                <h2 className="stat-number">
                  <CountUp end="30" suffix="K+" />
                </h2>
                <p className="stat-text">Door-to-Door Moves</p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="col-6 col-lg-3 col-md-6">
              <div className="stat-box">
                <i className="bi bi-emoji-smile stat-icon"></i>
                <h2 className="stat-number">
                  <CountUp end="98" suffix="%" />
                </h2>
                <p className="stat-text">Customer Satisfaction</p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="col-6 col-lg-3 col-md-6">
              <div className="stat-box">
                <i className="bi bi-clock stat-icon"></i>
                <h2 className="stat-number">
                  <CountUp end="24" suffix="H" />
                </h2>
                <p className="stat-text">Average Move Time</p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="col-6 col-lg-3 col-md-6">
              <div className="stat-box">
                <i className="bi bi-geo-alt stat-icon"></i>
                <h2 className="stat-number">
                  <CountUp end="500" suffix="+" />
                </h2>
                <p className="stat-text">Cities Covered</p>
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
              <div className="accordion faq-accordion" id="door-to-door">
                <div className="accordion-item shadow-sm">
                  <h2 className="accordion-header" id="heading0">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse0"
                      aria-expanded="true"
                    >
                      What does door-to-door service include?
                    </button>
                  </h2>
                  <div
                    id="collapse0"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#door-to-door"
                  >
                    <div className="accordion-body">
                      Our door-to-door service includes pickup from your current location, professional packing, loading, transportation, unloading, and unpacking at your new address. We handle everything!
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
                      Do I need to be present during the move?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#door-to-door"
                  >
                    <div className="accordion-body">
                      We recommend being present at both origin and destination for inventory verification. However, you can authorize a representative if you're unavailable.
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
                      How do you ensure items reach the right rooms?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#door-to-door"
                  >
                    <div className="accordion-body">
                      We use a color-coded labeling system. Each room is assigned a color, and boxes are labeled accordingly for easy identification and placement.
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
                      What if I have special placement requirements?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#door-to-door"
                  >
                    <div className="accordion-body">
                      Simply inform our team about your furniture placement preferences. Our crew will arrange everything according to your instructions.
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
