"use client";

import React, { useRef, useEffect } from "react";
import "./TestimonialsCarouse.css";

const TESTIMONIALS = [
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
  },
  {
    initials: "VM",
    name: "Vikram Malhotra",
    route: "Delhi to Mumbai",
    text: "“Very smooth house relocation. The packing of my fragile glassware was done with double-layered bubble wrap. No damages at all.”"
  },
  {
    initials: "PN",
    name: "Pooja Nair",
    route: "Bangalore to Pune",
    text: "“Professional support, timely updates, and very supportive loaders. Thanks to SRS Packers for safe transportation of my bike.”"
  },
  {
    initials: "DJ",
    name: "Deepak Joshi",
    route: "Mumbai to Ahmedabad",
    text: "“Excellent warehousing storage facility. Kept my household items for 3 months with complete safety and security.”"
  }
];

export default function TestimonialsCarousel() {
  const containerRef = useRef(null);
  const autoSlideRef = useRef(null);

  const handleNext = () => {
    if (containerRef.current) {
      const isMobile = window.innerWidth < 992;
      const cardWidth = isMobile
        ? containerRef.current.clientWidth
        : containerRef.current.clientWidth / 3;
      
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      if (containerRef.current.scrollLeft >= maxScroll - 10) {
        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const isMobile = window.innerWidth < 992;
      const cardWidth = isMobile
        ? containerRef.current.clientWidth
        : containerRef.current.clientWidth / 3;

      if (containerRef.current.scrollLeft <= 10) {
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
        containerRef.current.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleManualNext = () => {
    handleNext();
    startAutoSlide();
  };

  const handleManualPrev = () => {
    handlePrev();
    startAutoSlide();
  };

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="badge testimonial-badge mb-3">Testimonials</span>
          <h2 className="testimonial-title">
            <span> What Our Clients Say </span>
          </h2>
          <p className="testimonial-subtitle">
            Don't just take our word for it – hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Scroll */}
        <div className="testimonial-scroll-wrapper">
          <div className="row g-4 testimonial-scroll flex-nowrap" ref={containerRef} style={{ overflowX: "auto" }}>
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-12 flex-shrink-0">
                <div className="testimonial-card">
                  {/* Rating */}
                  <div className="testimonial-stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>

                  {/* Quote */}
                  <p className="testimonial-text">{item.text}</p>

                  {/* Author */}
                  <div className="testimonial-author d-flex align-items-center mt-4">
                    <div className="testimonial-avatar">{item.initials}</div>
                    <div className="ms-3">
                      <h6>{item.name}</h6>
                      <small>{item.route}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="testimonial-nav mt-4">
          <button className="nav-btn" onClick={handleManualPrev}>
            ←
          </button>
          <button className="nav-btn" onClick={handleManualNext}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}
