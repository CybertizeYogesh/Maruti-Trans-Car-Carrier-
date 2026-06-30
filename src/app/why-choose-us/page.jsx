import React from "react";
import Link from "next/link";
import "./why-choose-us.css";

export const metadata = {
  title: "Why ChooseSRS Packers And Movers for Packing and Moving Services",
  description: "With thousands of successful relocations across India, we've earned our reputation as one of the most trusted packers and movers. Safe, insured, IBA approved shifting.",
  keywords: "why choose srs packers, safe shifting company, trusted packers and movers, iban approved moving",
};

export default function WhyChooseUsPage() {
  const CARDS = [
    {
      icon: "bi-shield-check",
      title: "Safe & Secure Moving",
      desc: "Your belongings' safety is our top priority. We use premium quality packing materials including corrugated boxes, bubble wrap, foam sheets, and wooden crates for fragile items.",
      points: [
        "High-quality packing materials",
        "Trained handling professionals",
        "Special care for fragile items",
        "Comprehensive insurance available"
      ]
    },
    {
      icon: "bi-clock-history",
      title: "Guaranteed On-Time Delivery",
      desc: "We understand the importance of timely delivery. Our efficient logistics and route planning ensure your goods reach the destination as per the committed schedule.",
      points: [
        "Punctual pickup and delivery",
        "Real-time GPS tracking",
        "Regular status updates",
        "Flexible scheduling options"
      ]
    },
    {
      icon: "bi-patch-check-fill",
      title: "IBA-Approved Services",
      desc: "All services are IBA-approved with proper documentation and claim-friendly bills.",
      points: [
        "IBA-verified movers",
        "IBA-approved bills",
        "Nationwide trust"
      ]
    },
    {
      icon: "bi-cash-stack",
      title: "Affordable & Transparent Pricing",
      desc: "Best-in-class services at pocket-friendly prices with zero hidden charges.",
      points: [
        "No hidden costs",
        "Best market rates",
        "Custom packages"
      ]
    },
    {
      icon: "bi-building-check",
      title: "Secure Warehousing",
      desc: "Safe and monitored storage facilities for short-term and long-term needs.",
      points: [
        "24/7 CCTV surveillance",
        "Clean & secure storage",
        "Flexible duration"
      ]
    },
    {
      icon: "bi-shield-lock-fill",
      title: "Scam-Free & Insured",
      desc: "Zero-scam history with full transit insurance for complete peace of mind.",
      points: [
        "Transit insurance coverage",
        "Verified operations",
        "Trusted brand"
      ]
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
              <span>/</span>
              <span>Why Choose Us</span>
            </nav>
            <h1>Why Choose Us</h1>
            <p>Reliable, safe, and professional relocation services tailored to your shifting needs</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Content Section */}
      <section className="choose-us-modern-section">
        <div className="container">
          {/* Header */}
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="choose-modern-title">What Sets Us Apart</h2>
              <p className="choose-modern-subtitle">
                With thousands of successful relocations across India, we’ve earned our reputation as one of the most trusted packers and movers.
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
