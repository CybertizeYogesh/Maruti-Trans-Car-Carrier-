"use client";

import React from "react";
import Link from "next/link";
import "./testimonials.css";

const ALL_TESTIMONIALS = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    route: "Mumbai to Delhi",
    text: "“Excellent service! The team was professional and handled all our belongings with utmost care. The entire move was completed ahead of schedule.”"
  },
  {
    initials: "PP",
    name: "Priya Patel",
    route: "Pune to Bangalore",
    text: "“Best packers and movers I've ever hired. Transparent pricing, no hidden costs, and exceptional packing quality. Highly recommended!”"
  },
  {
    initials: "AK",
    name: "Amit Kumar",
    route: "Chennai to Hyderabad",
    text: "“SRS made our office relocation seamless. Minimal downtime and everything was set up perfectly at the new location. Great team!”"
  },
  {
    initials: "SG",
    name: "Sneha Gupta",
    route: "Kolkata to Mumbai",
    text: "“Very impressed with their car carrier service. My car arrived safely and on time. Tracking updates were very helpful.”"
  },
  {
    initials: "MS",
    name: "Manish Singh",
    route: "Mumbai to Pune",
    text: "“Hired them for household shifting. Extremely happy with their packing speed and safety measures. Highly recommended!”"
  },
  {
    initials: "AD",
    name: "Anjali Deshmukh",
    route: "Thane to Navi Mumbai",
    text: "“The team was courteous and carefully unpacked all the items. Excellent localized shifting service in Mumbai.”"
  }
];

export default function TestimonialsPage() {
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
              <span>Testimonials</span>
            </nav>
            <h1>Testimonials</h1>
            <p>Protecting your privacy and data with SRS Packers and Movers</p>
          </div>
        </div>
      </section>

      {/* Testimonials Main Section */}
      <section className="srs-testimonial-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="srs-testimonial-badge d-inline-block mb-2">Testimonial</span>
            <h2 className="srs-testimonial-title fw-bold mb-3">
              What Our Client Says
            </h2>
            <p className="srs-testimonial-desc mx-auto mb-0">
              Our business is one of close relationships and we are very fortunate to be able to share so many positive experiences with our clients.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            {ALL_TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="srs-testimonial-card flex-fill d-flex flex-column h-100">
                  <div className="srs-testimonial-stars mb-2">
                    <span className="srs-star">★</span>
                    <span className="srs-star">★</span>
                    <span className="srs-star">★</span>
                    <span className="srs-star">★</span>
                    <span className="srs-star">★</span>
                  </div>
                  <p className="srs-testimonial-comment flex-grow-1 mb-3">
                    {item.text}
                  </p>
                  <div className="srs-testimonial-author mt-auto">
                    <span className="srs-testimonial-avatar me-2">{item.initials}</span>
                    <span className="fw-semibold srs-testimonial-name">{item.name}</span>
                    <span className="srs-testimonial-location d-block small text-muted ms-2">
                      {item.route}
                    </span>
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
