"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./faq.css";

const CATEGORIES = [
  "General Questions",
  "Support Team",
  "Pricing & Charges",
  "Insurance",
  "Delivery & Tracking"
];

const FAQS = [
  { 
    category: "General Questions",
    q: "Is packing included in the moving service?", 
    a: "Yes, we provide complete packing services using high-quality materials to ensure safe transportation." 
  },
  { 
    category: "General Questions",
    q: "Do you provide packing materials?", 
    a: "Yes, we provide high-quality packing materials including carton boxes, bubble wrap, thermocol, stretch wrap, and specialized materials for fragile items." 
  },
  { 
    category: "General Questions",
    q: "What items are not allowed to be loaded?", 
    a: "For safety reasons, we do not transport hazardous materials, gas cylinders, liquid chemicals, explosive materials, highly inflammable substances, or jewelry/cash. Please make personal arrangements for valuable documents and jewelry." 
  },
  { 
    category: "Support Team",
    q: "How can I contact your customer support?", 
    a: "Our dedicated customer support team is available 24/7. You can call us directly at +91 9892325154 or email us at info@srspackersandmovers.com for any queries or assistance." 
  },
  { 
    category: "Support Team",
    q: "What happens if my plans change and I need to reschedule?", 
    a: "Please contact our support team at least 48 hours before the scheduled move time. We will reschedule your move to your preferred new date based on slot availability without any extra cancellation fee." 
  },
  { 
    category: "Pricing & Charges",
    q: "How do you calculate moving charges?", 
    a: "Charges depend on distance, volume of goods, type of packing, and additional services required." 
  },
  { 
    category: "Pricing & Charges",
    q: "How do I get a quote for my move?", 
    a: "You can get a free quote by filling out our online form, calling our helpline at +91 9892325154, or visiting any of our branches. Our team will assess your requirements and provide a detailed estimate." 
  },
  { 
    category: "Pricing & Charges",
    q: "Are there any hidden charges?", 
    a: "No, we maintain complete transparency in our pricing. All charges including packing, loading, transport, and unloading are clearly itemized in our initial quotation. GST and toll charges are billed as per actuals." 
  },
  { 
    category: "Insurance",
    q: "Do you provide insurance for goods?", 
    a: "Yes, we offer transit insurance to protect your belongings against unforeseen damages." 
  },
  { 
    category: "Insurance",
    q: "Is my shipment insured by default?", 
    a: "Yes, all shipments are covered by transit insurance. We offer basic to all-risk insurance plans for valuable items." 
  },
  { 
    category: "Insurance",
    q: "How can I claim insurance in case of damage?", 
    a: "In the rare event of damage, you must notify our support team within 24 hours of delivery. We will assist you with the documentation and claim processing with the insurance provider for a quick settlement." 
  },
  { 
    category: "Delivery & Tracking",
    q: "How long does delivery take?", 
    a: "Delivery time depends on the destination and mode of transport. We always aim for timely delivery." 
  },
  { 
    category: "Delivery & Tracking",
    q: "How long does a typical move take?", 
    a: "Local moves take 1–2 days, domestic 3–7 days, and international moves 2–4 weeks depending on distance and volume." 
  },
  { 
    category: "Delivery & Tracking",
    q: "Can I track my consignment?", 
    a: "Yes! SRS Packers and Movers provides consignment tracking features. Simply navigate to our 'Track Shipment' page and enter your booking details." 
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General Questions");

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
            <p>Get Answers to All Your Moving and Packing Questions - Everything You Need to Know Before You Move</p>
          </div>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="faq-section py-5">
        <div className="container px-3">
          <div className="text-center mb-5">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description mx-auto">
              We’re here to help you with packing, moving, and relocation queries.
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
