"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import "./globals.css";
import "./about/about.css";
import "./services/services.css";
import "./faq/faq.css";

export default function HomePage() {
  // Stats counter state
  const [moves, setMoves] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [cities, setCities] = useState(0);

  useEffect(() => {
    // Animate stats counters
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setMoves(Math.floor(progress * 50000));
      setSatisfaction(Math.floor(progress * 98));
      setCities(Math.floor(progress * 50));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setMoves(50000);
        setSatisfaction(98);
        setCities(50);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <div id="movingSlider" className="carousel slide hero-slider" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner h-100">
          <div className="carousel-item active slide-item">
            <img
              src="/assets/images/services/home_shifting.png"
              className="slide-bg"
              alt="SRS Packers and Movers - Best Moving Company in India"
            />
            {/* Quote Form Overlay */}
            <QuoteForm />
          </div>
        </div>
      </div>

      <main>
        {/* About Section */}
        <section className="about-section py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-md-6 order-2 order-md-1">
                <div className="about-content-wrapper">
                  <h2 className="about-title mb-4">
                    <i className="bi bi-box2-heart-fill about-title-icon me-2"></i>
                    <span>
                      About <span className="brand-accent">SRS Packers & Movers</span>
                    </span>
                  </h2>
                  <p className="about-desc mb-3">
                    SRS Packers and Movers is your trusted partner for all relocation needs in Mumbai, Pune, Navi Mumbai,
                    and Thane. Whether you are a teacher, security person, bank employee, pet trainer, gym trainer,
                    doctor, dentist, student, or senior citizen, we provide efficient packing and moving services tailored
                    for every requirement.
                  </p>
                  <p className="about-desc mb-4">
                    Our team specializes in home shifting, office relocation, vehicle transport, and more. We use premium
                    packing materials and GPS-enabled vehicles to ensure safety and transparency. With top-notch quality
                    and 24/7 support, SRS Packers and Movers stands out as Maharashtra's leading moving company.
                  </p>
                  <div className="d-flex flex-wrap gap-4 align-items-center mt-3">
                    <Link href="/about" className="btn btn-danger btn-lg px-4 py-2 about-btn">
                      <i className="bi bi-arrow-right-circle me-2"></i>More Details
                    </Link>
                    <div className="d-flex align-items-center">
                      <span className="about-call-icon mb-1">
                        <i className="bi bi-telephone-fill"></i>
                      </span>
                      <a href="tel:+919892325154" className="about-call-number">
                        +91-9892325154
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="about-img-wrapper about-img-rectangle overflow-hidden shadow-lg mb-4 mb-md-0">
                  <img
                    src="/assets/images/breadcrumb/home.jpg"
                    alt="SRS Packers and Movers - Professional Relocation Services"
                    className="img-fluid w-100 about-img-rectangle-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5 bg-light" id="services">
          <div className="container">
            <div className="text-center mb-5">
              <span className="badge rounded-pill bg-danger-subtle text-danger px-4 py-2 mb-3">Our Services</span>
              <h2 className="fw-bold">
                Comprehensive Moving <span className="text-danger">Solutions</span>
              </h2>
              <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "700px" }}>
                From local household moves to international relocations, we offer complete moving services tailored to
                your needs.
              </p>
            </div>

            <div className="row g-4">
              {[
                { title: "Local Moving", href: "/local-moving", icon: "bi-house", desc: "Safe and quick household relocation within city limits with professional packing." },
                { title: "Domestic Moving", href: "/domestic-moving", icon: "bi-truck", desc: "Seamless interstate relocation across India with door-to-door service." },
                { title: "International Moving", href: "/international-moving", icon: "bi-globe", desc: "Global relocation services with customs clearance and documentation support." },
                { title: "Car Carriers", href: "/car-transportation-services", icon: "bi-car-front", desc: "Specialized vehicle transportation with enclosed carriers for maximum protection." },
                { title: "Residential Moving", href: "/residential-moving", icon: "bi-building", desc: "Minimal downtime Residential Moving with IT equipment handling expertise." },
                { title: "Warehousing", href: "/warehousing", icon: "bi-box-seam", desc: "Secure storage facilities with 24/7 surveillance and climate control." },
                { title: "Packing & Unpacking", href: "/packing-unpacking", icon: "bi-bag", desc: "Premium quality packing materials with systematic labeling system." },
                { title: "Loading & Unloading", href: "/loading-unloading", icon: "bi-boxes", desc: "Trained staff for safe handling of heavy and delicate items." }
              ].map((service, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-3">
                  <Link href={service.href} className="text-decoration-none text-dark">
                    <div className="card service-card p-4 h-100">
                      <div className="service-icon mb-3">
                        <i className={`bi ${service.icon} fs-4`}></i>
                      </div>
                      <h5 className="fw-semibold mb-2">{service.title}</h5>
                      <p className="text-muted small mb-3">{service.desc}</p>
                      <span className="text-danger fw-medium small">
                        Learn More <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section position-relative overflow-hidden py-4" style={{ backgroundColor: "#a10000" }}>
          <div className="container position-relative z-1">
            <div className="text-center mb-5">
              <h2 className="stats-title text-white">Numbers That Speak for Our Excellence</h2>
              <p className="stats-subtitle mx-auto text-white-50">
                Our track record reflects our commitment to quality service and customer satisfaction.
              </p>
            </div>

            <div className="row text-center g-4">
              <div className="col-6 col-lg-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-truck"></i>
                  </div>
                  <div className="stat-value counter text-white">{moves}+</div>
                  <div className="stat-label text-white-50">Successful Moves</div>
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="stat-value counter text-white">{satisfaction}%</div>
                  <div className="stat-label text-white-50">Customer Satisfaction</div>
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="stat-value counter text-white">{cities}+</div>
                  <div className="stat-label text-white-50">Cities Covered</div>
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-star"></i>
                  </div>
                  <div className="stat-value counter text-white">4.9/5</div>
                  <div className="stat-label text-white-50">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          <span className="circle circle-lg"></span>
          <span className="circle circle-md"></span>
          <span className="circle circle-sm"></span>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section position-relative overflow-hidden">
          <div className="container position-relative z-1">
            <div className="row align-items-center gy-5">
              <div className="col-lg-6">
                <span className="badge why-badge mb-3 text-white">Why Choose Us</span>
                <h2 className="why-title mb-4">
                  India's Most <span className="text-red">Trusted</span>
                  <br />
                  Moving Partner
                </h2>
                <p className="why-desc mb-5">
                  With over 15 years of experience and 50,000+ successful relocations, SRS Packers & Movers has earned
                  the trust of families and businesses across India. Our commitment to safety, punctuality, and customer
                  satisfaction sets us apart.
                </p>

                <div className="row g-3">
                  <div className="col-4">
                    <div className="stat-box">
                      <div className="stat-value">15+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-box">
                      <div className="stat-value">50+</div>
                      <div className="stat-label">City Branches</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-box">
                      <div className="stat-value">50K+</div>
                      <div className="stat-label">Happy Customers</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row g-4">
                  {[
                    { title: "Fully Insured", desc: "Complete transit insurance coverage for your valuables with claim support.", icon: "bi-shield-check" },
                    { title: "Expert Team", desc: "Trained and verified professionals with years of moving experience.", icon: "bi-people" },
                    { title: "No Hidden Costs", desc: "Transparent pricing with detailed quotations and no surprise charges.", icon: "bi-cash-coin" },
                    { title: "On-Time Delivery", desc: "Punctual service with real-time tracking and delivery guarantees.", icon: "bi-clock" },
                    { title: "Damage-Free Promise", desc: "Premium packing materials and careful handling for zero damage.", icon: "bi-patch-check" },
                    { title: "15+ Years Experience", desc: "Industry veterans with thousands of successful relocations.", icon: "bi-award" }
                  ].map((feat, idx) => (
                    <div key={idx} className="col-12 col-sm-6">
                      <div className="feature-card h-100">
                        <div className="feature-icon">
                          <i className={`bi ${feat.icon}`}></i>
                        </div>
                        <h5 className="feature-title">{feat.title}</h5>
                        <p className="feature-desc">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <div className="text-center process-header">
              <span className="process-badge">How It Works</span>
              <h2 className="process-title">
                Our Simple <span className="text-red">5-Step</span> Process
              </h2>
              <p className="process-subtitle">
                We've streamlined our moving process to make your relocation hassle-free and stress-free.
              </p>
            </div>

            <div className="process-wrapper position-relative">
              <div className="process-line d-none d-lg-block"></div>
              <div className="row g-4 justify-content-center align-items-center">
                {[
                  { step: "01", title: "Book Your Move", desc: "Call us or fill the form to get a free instant personalized quote tailored specifically for your relocation.", icon: "bi-telephone" },
                  { step: "02", title: "Survey & Planning", desc: "Our team visits for detailed survey and creates a customized moving plan.", icon: "bi-clipboard-check" },
                  { step: "03", title: "Professional Packing", desc: "Expert packing with quality materials ensuring zero damage transit.", icon: "bi-box-seam" },
                  { step: "04", title: "Safe Transportation", desc: "Secure transportation GPS tracking for complete peace of mind.", icon: "bi-truck" },
                  { step: "05", title: "Unpack & Setup", desc: "Careful unpacking and systematic professional arrangement of all items at your new destination.", icon: "bi-house-check" }
                ].map((p, idx) => (
                  <div key={idx} className="col-12 col-sm-6 col-lg-2 process-item text-center">
                    <div className="process-icon-wrapper d-flex flex-column align-items-center mx-auto">
                      <div className="process-icon">
                        <i className={`bi ${p.icon}`}></i>
                      </div>
                      <span className="process-step-number">{p.step}</span>
                    </div>
                    <h5 className="process-step-title">{p.title}</h5>
                    <p className="process-step-desc">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* FAQ Accordion Section */}
        <section className="faq-section">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <span className="faq-badge">FAQs</span>
                <h2 className="faq-title mt-3">
                  Common Relocation <span className="text-red">Questions</span> Answered
                </h2>
                <p className="faq-description mt-3">
                  We understand that moving can raise many questions. Here are some of the most frequently asked questions to help you understand our process and services better.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link href="/faq" className="btn btn-danger faq-btn">
                    View All FAQs
                  </Link>
                  <Link href="/contacts" className="btn btn-outline-danger faq-btn-outline">
                    Ask A Question
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="accordion faq-accordion" id="faqAccordion">
                  {[
                    { q: "How much time in advance should I book my move?", a: "We recommend booking your move at least 7-10 days in advance to ensure slot availability and smooth planning." },
                    { q: "What items are not allowed to be loaded on the truck?", a: "Hazardous items, gases, cylinders, flammable liquids, jewelry, cash, and high-value personal documents are not allowed." },
                    { q: "Do you offer storage or warehousing services?", a: "Yes, we offer secure, temperature-controlled warehousing and storage solutions for short and long-term needs." },
                    { q: "How do you calculate the moving costs?", a: "Moving costs are calculated based on the volume of items, distance, packaging materials required, and specific allied services." }
                  ].map((faq, idx) => (
                    <div key={idx} className="accordion-item faq-item">
                      <h2 className="accordion-header" id={`heading${idx}`}>
                        <button
                          className="accordion-button collapsed faq-question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${idx}`}
                        >
                          {faq.q}
                        </button>
                      </h2>
                      <div id={`collapse${idx}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body faq-answer">{faq.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
