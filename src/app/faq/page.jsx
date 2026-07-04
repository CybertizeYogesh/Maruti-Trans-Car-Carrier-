"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./faq.css";

const CATEGORIES = [
  "Shifting Process",
  "Rates & Booking",
  "Safety & Insurance",
  "Transit & Tracking"
];

const FAQS = [
  { 
    category: "Shifting Process",
    q: "What is the difference between open and enclosed car carriers?", 
    a: "Open car carriers are cost-effective double-decker trailers that transport up to 8-10 cars simultaneously along national highways. Enclosed car carriers use hard-sided metal containers to shield your vehicle from weather, dust, rain, and road debris, making them ideal for luxury and vintage vehicles." 
  },
  { 
    category: "Shifting Process",
    q: "Can I place personal items or household goods inside the car?", 
    a: "Under RTO transport regulations, car carriers are licensed to shift vehicles only, not personal goods or household baggage. Small accessories, a spare tire, and a jack can remain inside the vehicle. The fuel tank should be kept at around 1/4 capacity." 
  },
  { 
    category: "Shifting Process",
    q: "How is my car loaded and secured onto the transport trailer?", 
    a: "Our crew drives the vehicle up specialized hydraulic ramps or rollback platform beds. Once positioned on the carrier deck, the car is locked in place using a four-point soft-touch wheel strapping system, ensuring zero body scrapes or rolling during transit." 
  },
  { 
    category: "Rates & Booking",
    q: "How are vehicle transportation charges calculated?", 
    a: "Our shifting charges depend on the distance, the vehicle type (hatchback vs. sedan vs. SUV vs. luxury sports car), and the selected transport type (open trailer vs. single flatbed rollback vs. enclosed container)." 
  },
  { 
    category: "Rates & Booking",
    q: "What documents are required to book interstate car shifting?", 
    a: "To pass state check-posts legally, you must provide copies of the vehicle Registration Certificate (RC Book), valid car insurance policy, active Pollution Under Control (PUC) certificate, and the owner's ID proof (Aadhar/PAN)." 
  },
  { 
    category: "Rates & Booking",
    q: "Are there any hidden highway fuel surcharges or toll fees?", 
    a: "No, Maruti Trans maintains 100% transparency. Our final written quotations are inclusive of all driver allowances, toll charges, fuel surcharges, and state taxes. GST is billed separately as per actuals." 
  },
  { 
    category: "Safety & Insurance",
    q: "Is transit insurance mandatory for car transport?", 
    a: "Yes, comprehensive transit insurance is mandatory to protect your vehicle against unforeseen highway accidents, fires, or external damage during transit. The premium is calculated based on the car's current insured declared value (IDV)." 
  },
  { 
    category: "Safety & Insurance",
    q: "How do you guarantee vehicle chassis and body safety?", 
    a: "We never tie chains directly to the chassis or metal bumpers. Vehicles are locked purely via heavy-duty soft straps around the tires, keeping the suspension system free and preventing any structural tension." 
  },
  { 
    category: "Safety & Insurance",
    q: "What happens in case of minor transit scratches or damage?", 
    a: "Before loading, our team conducts a formal digital condition inspection and records photos of your car. In the rare event of transit damage, you must notify us within 24 hours of delivery to process the claims with our insurance partner." 
  },
  { 
    category: "Transit & Tracking",
    q: "How long does interstate car shipping take in India?", 
    a: "Standard shipping via open multi-car carriers typically takes 3 to 7 days depending on the route distance. Dedicated single flatbed tow trucks offer express transit and deliver faster." 
  },
  { 
    category: "Transit & Tracking",
    q: "Can I track my car during the journey?", 
    a: "Yes! Maruti Trans provides consignment tracking features. Simply navigate to our 'Track Shipment' page and enter your booking details." 
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Shifting Process");

  const filteredFaqs = FAQS.filter((faq) => faq.category === activeCategory);

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
              <span>FAQ</span>
            </nav>
            <h1>Frequently Asked Questions</h1>
            <p>Get Answers to All Your Car Carrier and Vehicle Shifting Questions - Everything You Need to Know Before Shipping Your Vehicle</p>
          </div>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="faq-section py-5">
        <div className="container px-3">
          <div className="text-center mb-5">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description mx-auto">
              We’re here to help you with car carrier trailer bookings, flatbed rollbacks, and vehicle transit insurance queries.
            </p>
          </div>

          <div className="row g-4">
            {/* Left Categories */}
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="faq-category-box d-flex flex-md-column flex-row gap-2">
                {CATEGORIES.map((cat, idx) => (
                  <button
                    key={idx}
                    className={`faq-category w-100 ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Right FAQ Content */}
            <div className="col-12 col-md-8">
              <div className="faq-accordion" id="faqAccordion">
                {filteredFaqs.map((faq, idx) => (
                  <div key={`${activeCategory}-${idx}`} className="faq-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button faq-question ${idx === 0 ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqCollapse${idx}`}
                        aria-expanded={idx === 0 ? "true" : "false"}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div
                      id={`faqCollapse${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body faq-answer">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
