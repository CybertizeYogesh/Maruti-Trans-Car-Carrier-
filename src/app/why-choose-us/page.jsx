import React from "react";
import Link from "next/link";
import "./why-choose-us.css";

export const metadata = {
  title: "Why Choose Maruti Trans Car Carrier Shifting | Vehicle Transport India",
  description: "Maruti Trans is India's leading car carrier and vehicle shipping network. Learn why thousands of car owners trust us for safe, insured, door-to-door car transport.",
  keywords: "why choose Maruti Trans, car carrier shifting, trusted vehicle transport, safe car shipping, vehicle transit insurance",
};

export default function WhyChooseUsPage() {
  const CARDS = [
    {
      icon: "bi-shield-check",
      title: "Zero-Scrape Carrier Shifting",
      desc: "Your vehicle's safety is our top priority. We use modern double-decker open auto carriers and enclosed container trucks fitted with specialized wheel-strapping systems to prevent bumper and body friction.",
      points: [
        "Zero-friction wheel strapping",
        "High-clearance hydraulic loading ramps",
        "No chassis-damaging chain ties",
        "Open and enclosed trailer configurations"
      ]
    },
    {
      icon: "bi-house-check",
      title: "Door-to-Door Single Transit",
      desc: "Unlike terminal-to-terminal shipping, we manage doorstep vehicle pick-ups and deliveries using our flatbed rollback loaders, ensuring your vehicle never waits in unsecure warehouses.",
      points: [
        "Direct doorstep pickup and drop",
        "Flatbed rollback tow truck assistance",
        "Zero terminal layover times",
        "Flexible delivery slot booking"
      ]
    },
    {
      icon: "bi-shield-lock-fill",
      title: "Full Transit Car Insurance",
      desc: "Every vehicle shipped via Maruti Trans is fully backed by transit insurance cover, safeguarding your premium asset against any unforeseen highway occurrences.",
      points: [
        "Comprehensive transit insurance cover",
        "Full vehicle value protection",
        "Transparent pre-transit inspection check sheet",
        "Hassle-free direct settlement support"
      ]
    },
    {
      icon: "bi-geo-alt-fill",
      title: "Real-Time GPS Tracking",
      desc: "Stay informed throughout your car's journey. We provide active GPS location tracking links and regular WhatsApp updates directly from the trailer captains.",
      points: [
        "Live GPS tracking coordinates",
        "WhatsApp status notifications",
        "Direct communication with vehicle crew",
        "Accurate estimated delivery schedules"
      ]
    },
    {
      icon: "bi-people-fill",
      title: "Verified Auto Carrier Crew",
      desc: "Our loading crew and drivers are certified professionals trained specifically in vehicle weight balancing, secure ramp loading, and long-haul trailer operations.",
      points: [
        "Background-verified trailer captains",
        "Specialized ramp-loading certifications",
        "Detailed car safety pre-checks",
        "Professional vehicle handling protocols"
      ]
    },
    {
      icon: "bi-cash-stack",
      title: "Transparent & All-Inclusive Quotes",
      desc: "Get an honest, upfront quote containing all service taxes, state border checkpost taxes, national highway toll charges, and octroi fees with zero hidden costs.",
      points: [
        "No hidden fees or post-transit charges",
        "Detailed toll and tax breakdowns",
        "Upfront all-inclusive quotes",
        "Multiple-car shipper discounts"
      ]
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero text-center py-5">
        <div className="container">
          <div className="page-hero-content mx-auto" style={{ maxWidth: "800px" }}>
            <nav className="page-breadcrumb d-flex justify-content-center gap-2 mb-3">
              <Link href="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
              <span>/</span>
              <span className="text-white-50">Why Choose Us</span>
            </nav>
            <h1 className="fw-bold text-white mb-3" style={{ fontSize: "3rem" }}>Why Choose Us</h1>
            <p className="lead text-white-80">Reliable, safe, and professional vehicle transport solutions tailored to your shipping needs</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Content Section */}
      <section className="choose-us-modern-section py-5">
        <div className="container">
          {/* Header */}
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="choose-modern-title fw-bold text-dark" style={{ fontSize: "2.2rem" }}>What Sets Us Apart</h2>
              <p className="choose-modern-subtitle mt-2 text-muted">
                With thousands of successful car deliveries across India, we have built a reputation as the country&apos;s most trusted vehicle carrier service.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row g-4">
            {CARDS.map((card, idx) => (
              <div key={idx} className="col-12 col-lg-6">
                <div className="choose-modern-card">
                  <div className="choose-modern-icon">
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="choose-modern-card-title">{card.title}</h3>
                    <p className="choose-modern-card-desc">{card.desc}</p>
                    <ul className="choose-modern-list">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <i className="bi bi-check-circle-fill"></i>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
