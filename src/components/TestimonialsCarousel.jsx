"use client";

import React, { useRef, useEffect } from "react";
import "./TestimonialsCarousel.css";

const TESTIMONIALS = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    route: "Mumbai to Delhi",
    text: "“Superb car shipping service! My sedan was loaded onto a hydraulic flatbed and secured perfectly with wheel straps. Arrived in Delhi from Mumbai without a single scratch!”"
  },
  {
    initials: "PP",
    name: "Priya Patel",
    route: "Pune to Bangalore",
    text: "“Extremely satisfied with their car carrier service. The pricing was transparent and all-inclusive. My hatchback arrived in Bangalore on time. Excellent support!”"
  },
  {
    initials: "AK",
    name: "Amit Kumar",
    route: "Chennai to Hyderabad",
    text: "“Maruti Trans made my luxury SUV transport seamless. I was worried about my new car, but their enclosed carrier protected it from road debris perfectly. Great job!”"
  },
  {
    initials: "SG",
    name: "Sneha Gupta",
    route: "Kolkata to Mumbai",
    text: "“Very impressed with their open multi-car carrier trailer network. My SUV was delivered from Kolkata to Mumbai on the committed date. Tracking updates were helpful.”"
  },
  {
    initials: "MS",
    name: "Manish Singh",
    route: "Mumbai to Pune",
    text: "“Hired them for shipping my classic vintage car to Pune. The single car flatbed carrier service was highly professional. Zero chassis scraping or body damage!”"
  },
  {
    initials: "AD",
    name: "Anjali Deshmukh",
    route: "Thane to Navi Mumbai",
    text: "“Courteous crew and swift local towing for my hatchback. They did a formal condition inspection check before loading. Highly recommend their local shifting!”"
  },
  {
    initials: "VM",
    name: "Vikram Malhotra",
    route: "Delhi to Mumbai",
    text: "“Very smooth interstate car relocation. The loading on the double-decker trailer was done with high-quality tire blocks. Received my sedan safely. No issues at all.”"
  },
  {
    initials: "PN",
    name: "Pooja Nair",
    route: "Bangalore to Pune",
    text: "“Professional support, timely updates, and very supportive crew. Thanks to Maruti Trans for safe enclosed container transportation of my premium sports car.”"
  },
  {
    initials: "DJ",
    name: "Deepak Joshi",
    route: "Mumbai to Ahmedabad",
    text: "“Excellent vehicle transit storage facility. They safely parked my SUV in their secure terminal yard in Mumbai before transporting it to Ahmedabad. Safe and reliable!”"
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
