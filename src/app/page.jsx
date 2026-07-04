"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import dynamic from "next/dynamic";

const TestimonialsCarousel = dynamic(() => import("@/components/TestimonialsCarousel"), {
  ssr: false,
});
import "./globals.css";
import "./about/about.css";
import "./services/services.css";
import "./faq/faq.css";

export default function HomePage() {
  // Stats counter state
  const [moves, setMoves] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [cities, setCities] = useState(0);

  // Why Choose Us counter state
  const [experience, setExperience] = useState(0);
  const [citiesCovered, setCitiesCovered] = useState(0);
  const [happyOwners, setHappyOwners] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const startCounterAnimation = () => {
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setMoves(Math.floor(progress * 15000));
        setSatisfaction(Math.floor(progress * 99));
        setCities(Math.floor(progress * 45));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setMoves(15000);
          setSatisfaction(99);
          setCities(45);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    const target = document.getElementById("stats-section");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounterAnimation();
          observer.unobserve(target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is in viewport
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const startCounterAnimation = () => {
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setExperience(Math.floor(progress * 10));
        setCitiesCovered(Math.floor(progress * 45));
        setHappyOwners(Math.floor(progress * 15));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setExperience(10);
          setCitiesCovered(45);
          setHappyOwners(15);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    const target = document.getElementById("why-choose-us-section");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounterAnimation();
          observer.unobserve(target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is in viewport
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <div id="movingSlider" className="carousel slide hero-slider" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner h-100">
          <div className="carousel-item active slide-item">
            <Image
              src="/assets/images/services/home_shifting.webp"
              className="slide-bg"
              alt="Maruti Trans Car Carrier - Safe Vehicle Relocation"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
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
              <div className="col-12 col-lg-7 col-md-7">
                <div className="about-content-wrapper">
                  <h2 className="about-title mb-4 d-flex align-items-center">
                    <span className="about-icon-box me-3">
                      <i className="bi bi-box2-heart-fill"></i>
                    </span>
                    <span>
                      About <span className="text-brand-red">Maruti Trans Car Carrier</span>
                    </span>
                  </h2>
                  <p className="about-desc mb-3">
                    Maruti Trans Car Carrier Shifting is your elite partner for safe, secure, and professional vehicle transport across India. Originating in Haryana, we specialize in high-end vehicle logistics, shifting sedans, hatchbacks, SUVs, and luxury vintage cars with white-glove safety protocols.
                  </p>
                  <p className="about-desc mb-4">
                    Our team deploys advanced open multi-car carrier trailers, single flatbed tow trucks, and fully enclosed transport container trailers. With full transit insurance, certified loading checklists, and real-time support, Maruti Trans represents the gold standard in Indian automobile transport.
                  </p>
                  <div className="d-flex flex-wrap gap-4 align-items-center mt-3">
                    <Link href="/about" className="btn btn-danger btn-lg px-4 py-2 about-btn">
                      <i className="bi bi-arrow-right-circle me-2"></i>More Details
                    </Link>
                    <div className="d-flex align-items-center">
                      <span className="about-call-icon mb-1">
                        <i className="bi bi-telephone-fill"></i>
                      </span>
                      <a href="tel:+918512000715" className="about-call-number">
                        +91-8512000715
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-md-5">
                <div className="about-img-wrapper about-img-rectangle overflow-hidden shadow-lg mb-4 mb-md-0">
                  <Image
                    src="/assets/images/breadcrumb/home.webp"
                    alt="Maruti Trans Car Transport Fleet"
                    className="img-fluid w-100 about-img-rectangle-img"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
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
              <span className="badge rounded-pill bg-danger-subtle text-danger px-4 py-2 mb-3">Our Core Services</span>
              <h2 className="fw-bold">
                Professional Vehicle Shifting <span className="text-danger">Solutions</span>
              </h2>
              <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "700px" }}>
                From single flatbed emergency transport to national enclosed auto shipping, we customize every route for your peace of mind.
              </p>
            </div>

            <div className="row g-4">
              {[
                { title: "Car Courier Service", href: "/car-courier-service", icon: "bi-send", desc: "Express state-to-state shipping with optimized corridor routing for quick delivery." },
                { title: "Door-to-Door Car Transport", href: "/door-to-door-car-transport", icon: "bi-house-check", desc: "Convenient home pickup and direct doorstep delivery with check sheets." },
                { title: "Car Relocation Service", href: "/car-relocation-service", icon: "bi-arrow-left-right", desc: "Coordinated vehicle shifting for corporate transfers and family relocations." },
                { title: "Car Carrier", href: "/car-carrier", icon: "bi-truck", desc: "Economical multi-car shipping via open double-decker trailer networks." },
                { title: "Car Transportation", href: "/car-transportation", icon: "bi-speedometer2", desc: "Reliable highway transportation solutions for automobiles across India." },
                { title: "Single Car Carrier", href: "/single-car-carrier", icon: "bi-truck-flatbed", desc: "Dedicated flatbed towing vehicles for rapid, private individual car shipping." },
                { title: "Luxury Car Shifting", href: "/luxury-car-transport-services", icon: "bi-star-fill", desc: "White-glove handling with soft wheel straps for sports and premium brands." },
                { title: "Enclosed Car Carrier", href: "/enclosed-car-carrier-services", icon: "bi-shield-lock", desc: "Covered hard-sided trailer containers protecting cars from environmental debris." }
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
        <section id="stats-section" className="stats-section position-relative overflow-hidden">
          <div className="container position-relative z-1">
            <div className="text-center mb-5">
              <span className="stats-badge mb-2">Our Performance</span>
              <h2 className="stats-title text-white fw-bold">Excellence in Vehicle Logistics</h2>
              <p className="stats-subtitle mx-auto text-white-50">
                Our credentials highlight our dedication to providing top-tier automobile carrier services.
              </p>
            </div>

            <div className="row g-4 justify-content-center">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="stat-premium-card text-center">
                  <div className="stat-premium-icon-wrapper">
                    <i className="bi bi-truck-flatbed"></i>
                  </div>
                  <h3 className="stat-premium-value">{moves}+</h3>
                  <p className="stat-premium-label">Vehicles Delivered</p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="stat-premium-card text-center">
                  <div className="stat-premium-icon-wrapper">
                    <i className="bi bi-emoji-smile"></i>
                  </div>
                  <h3 className="stat-premium-value">{satisfaction}%</h3>
                  <p className="stat-premium-label">Client Satisfaction</p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="stat-premium-card text-center">
                  <div className="stat-premium-icon-wrapper">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <h3 className="stat-premium-value">{cities}+</h3>
                  <p className="stat-premium-label">Cities Covered</p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="stat-premium-card text-center">
                  <div className="stat-premium-icon-wrapper">
                    <i className="bi bi-patch-check"></i>
                  </div>
                  <h3 className="stat-premium-value">4.9/5</h3>
                  <p className="stat-premium-label">Rating (Google/Mouthshut)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-light-effect-1"></div>
          <div className="stats-light-effect-2"></div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us-section" className="why-choose-section position-relative overflow-hidden">
          <div className="container position-relative z-1">
            <div className="row align-items-center gy-5">
              <div className="col-lg-6">
                <span className="badge why-badge mb-3 text-white">Why Choose Us</span>
                <h2 className="why-title mb-4">
                  India's Premier <span className="text-red">Car Shifting</span>
                  <br />
                  Logistics Network
                </h2>
                <p className="why-desc mb-5">
                  Over the years, Maruti Trans has set the industry standard for damage-free auto shipping. By focusing purely on vehicles, we deliver high-quality loading equipment, experienced trailer captains, and customized locking plates.
                </p>

                <div className="row g-3">
                  <div className="col-4">
                    <div className="stat-box">
                      <div className="stat-value">{experience}+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-box">
                      <div className="stat-value">{citiesCovered}+</div>
                      <div className="stat-label">Service Cities</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-box">
                      <div className="stat-value">{happyOwners}K+</div>
                      <div className="stat-label">Happy Car Owners</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row g-4">
                  {[
                    { title: "Transit Insurance Cover", desc: "Comprehensive insurance coverage securing your car value against damage.", icon: "bi-shield-check" },
                    { title: "Specialized Carriers", desc: "Modern open and enclosed auto carrier trucks with air-suspension.", icon: "bi-truck" },
                    { title: "Verified Crew", desc: "Background-checked and certified drivers and loaders.", icon: "bi-people" },
                    { title: "Door-to-Door Delivery", desc: "No terminal drop-offs. We pick up and drop at your actual door.", icon: "bi-house-check" },
                    { title: "Chassis Safety Guarantee", desc: "Custom wheel straps to ensure zero body scrapes.", icon: "bi-check-circle" },
                    { title: "Transparent Pricing", desc: "All inclusive quotes containing taxes, tolls, and octroi.", icon: "bi-cash-coin" }
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
        <section className="process-section bg-light py-5">
          <div className="container">
            <div className="text-center process-header">
              <span className="process-badge">How It Works</span>
              <h2 className="process-title">
                Our Secure <span className="text-red">5-Step</span> Shipping Process
              </h2>
              <p className="process-subtitle">
                We take utmost care at every milestone of your car's shipping journey.
              </p>
            </div>

            <div className="process-wrapper position-relative mt-5">
              <div className="process-line d-none d-lg-block"></div>
              <div className="row g-4 justify-content-center align-items-center">
                {[
                  { step: "01", title: "Book Online / Call", desc: "Share your car model and locations to receive an instant, custom quote.", icon: "bi-telephone" },
                  { step: "02", title: "Condition Inspection", desc: "Our team carries out a formal vehicle inspection checklist prior to loading.", icon: "bi-clipboard-check" },
                  { step: "03", title: "Secure Car Loading", desc: "Car is driven up hydraulic ramps and locked via four-point wheel straps.", icon: "bi-box-seam" },
                  { step: "04", title: "Insured Transit", desc: "Safe transportation along GPS-enabled highway routes.", icon: "bi-truck" },
                  { step: "05", title: "Doorstep Drop-off", desc: "Safe roll-off and final inspection check before signing off.", icon: "bi-house-check" }
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
        <section className="faq-section py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <span className="faq-badge">FAQs</span>
                <h2 className="faq-title mt-3">
                  Got Questions? <span className="text-red">We have Answers</span>
                </h2>
                <p className="faq-description mt-3">
                  Interstate car shipping can be complex. Here are some of the queries we resolve for car owners on a daily basis.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link href="/faq" className="btn btn-danger faq-btn">
                    View All FAQs
                  </Link>
                  <Link href="/contacts" className="btn btn-outline-danger faq-btn-outline">
                    Contact Experts
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="accordion faq-accordion" id="faqAccordion">
                  {[
                    { q: "What documents are required to ship my car?", a: "To comply with state check-posts, we require a copy of the vehicle RC book, valid insurance papers, and the owner's ID proof (Aadhar/PAN)." },
                    { q: "Can I place personal items inside the car?", a: "As per transportation guidelines, cars should be shipped empty. Small items like car accessories, a spare tire, and a jack can remain inside the vehicle." },
                    { q: "Do you offer enclosed trailers for luxury vehicles?", a: "Yes, we have dedicated Enclosed Car Carriers that shield luxury, high-end, or vintage cars from weather and road debris." },
                    { q: "How is transit insurance calculated?", a: "Transit insurance is calculated based on the current declared value of the vehicle on its insurance policy. It protects against highway accidents." }
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
