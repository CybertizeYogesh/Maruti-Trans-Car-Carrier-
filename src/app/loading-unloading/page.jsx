import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "./loading-unloading.css";

export const metadata = {
  title: "Best Loading and Unloading Assistance, +91 9892325154 - Expert Handling for Smooth Relocations",
  description: "Safe loading and unloading by trained professionals using modern equipment. We ensure your goods are handled with care.",
  keywords: "loading and unloading services, professional loaders, heavy lifting shifting",
};

export default function LoadingAndUnloadingPage() {
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
              <span>Loading And Unloading</span>
            </nav>
            <h1>Loading & Unloading Services</h1>
            <p>Safe Handling of Goods by Trained Professionals Using Modern Equipment</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="container mt-4">
        <QuoteForm isModal={false} isServicePage={true} defaultFrom="" />
      </div>

      {/* About/Info Section */}
      <section className="loading-and-unloading-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <span className="section-badge">About Loading and Unloading</span>
              <h2 className="section-title fw-bold mb-4">
                Safe & Efficient Loading and Unloading Services
              </h2>
              <p className="text-muted">
                <strong>SRS Packers and Movers</strong> provide quality Loading and Unloading Services through which you
                can have tension-free shifting. Being a reputed local movers packers services, we assure our clients of
                scam-free Loading and Unloading Services to ensure our client's valuable possessions do not meet any harm.
              </p>
              <p className="text-muted">
                We are part of the Top 5 Loading and Unloading Services, and offer the best and cheapest packers & movers
                for you! It is the team's responsibility to deliver Premium and Inexpensive Loading and Unloading Services
                as per the set standards.
              </p>
              <p className="text-muted">
                The company is also an IBA-approved Packers and Movers company providing efficient Relocation Services
                and reliable Loading and Unloading Services.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6">
              <div className="about-img-wrapper shadow-lg mb-4 mb-lg-0">
                <img
                  src="https://srspackersandmovers.com/assets/images/service/loading.jpg"
                  alt="loading SRS Packers & Movers"
                  loading="lazy"
                  className="img-fluid w-100 about-img-rectangle-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <p className="text-muted">
            If you are looking for PackersMoversovers near me or the top Loading and Unloading Services, we are at your
            service at SRS Packers and Movers. Stalwart safety aspect along with efficiency makes us your first choice
            for the perfect Loading and Unloading Services.
          </p>
          <p className="text-muted">
            Choose us now for the best removalists and feel the difference of our safe and efficient Loading and Unloading
            Services. To get the best Loading and Unloading Services SRS Packers and Movers is one of the best among all
            those movers and packers who can provide their clients excellent moving services.
          </p>
        </div>
      </section>

      {/* Safety Measures Section */}
      <section className="safety-measures-section py-5">
        <div className="container">
          <span className="safety-badge mb-3 d-inline-block">Safe Handling Practices</span>
          <div className="row align-items-center g-5 mt-2">
            {/* LEFT DETAILS */}
            <div className="col-lg-6">
              <h2 className="safety-title fw-bold mb-4">Professional Safety Measures for<br />Loading & Unloading</h2>
              <p className="safety-desc text-muted mb-4">
                Our loading and unloading process focuses on worker safety and goods protection. We use proper lifting
                techniques, safety gear, and handling tools to prevent damage, accidents, and material loss.
              </p>
              <div className="row g-3">
                {[
                  "Hydraulic Trolleys & Dollies",
                  "Lifting Belts & Safety Gloves",
                  "Wooden Planks & Chocks",
                  "Protective Padding & Covers"
                ].map((tool, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="safety-tool-card">
                      <i className="bi bi-box2"></i> {tool}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="col-lg-6">
              <div className="row g-4">
                {[
                  { icon: "bi-truck", title: "On-Site Service", desc: "Loading and unloading at homes, offices, or project sites" },
                  { icon: "bi-shield-check", title: "Safe Handling", desc: "Reduced risk of damage or accidents" },
                  { icon: "bi-person-badge", title: "Trained Labor", desc: "Professionally trained handling staff" },
                  { icon: "bi-geo-alt", title: "Flexible Locations", desc: "Available across cities and industrial areas" }
                ].map((feat, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="safety-feature-card h-100">
                      <div className="safety-feature-icon">
                        <i className={`bi ${feat.icon}`}></i>
                      </div>
                      <div>
                        <h5 className="safety-feature-title">{feat.title}</h5>
                        <p className="safety-feature-desc">{feat.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Chart Section */}
      <section className="rate-chart-section py-5 border-top">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="rate-title mb-3">SRS Packers And Movers Rate Chart</h2>
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
                {[
                  { cat: "Few Household Items", r1: "Rs 4,500 - 8,000", r2: "Rs 8,500 - 13,000", r3: "Rs 13,500 - 17,000", r4: "Rs 17,500 - 21,000" },
                  { cat: "1 BHK House", r1: "Rs 7,000 - 16,000", r2: "Rs 12,000 - 21,500", r3: "Rs 20,000 - 30,000", r4: "Rs 26,000 - 37,500" },
                  { cat: "2 BHK House", r1: "Rs 12,000 - 20,000", r2: "Rs 20,000 - 28,000", r3: "Rs 25,000 - 35,000", r4: "Rs 35,000 - 45,000" },
                  { cat: "3 BHK House", r1: "Rs 15,000 - 23,000", r2: "Rs 25,000 - 35,000", r3: "Rs 38,000 - 50,000", r4: "Rs 52,000 - 70,000" },
                  { cat: "4 BHK House", r1: "Rs 25,000 - 35,000", r2: "Rs 38,000 - 45,000", r3: "Rs 50,000 - 65,000", r4: "Rs 70,000 - 95,000" },
                  { cat: "Bike Transportation", r1: "Rs 5,000 - 12,000", r2: "Rs 12,500 - 15,000", r3: "Rs 15,500 - 23,000", r4: "Rs 23,500 - 32,000" },
                  { cat: "Car Transportation", r1: "Rs 9,000 - 16,000", r2: "Rs 16,500 - 19,500", r3: "Rs 20,000 - 25,000", r4: "Rs 25,500 - 35,000" }
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="rate-td-main fw-bold text-danger">{item.cat}</td>
                    <td>{item.r1}</td>
                    <td>{item.r2}</td>
                    <td>{item.r3}</td>
                    <td>{item.r4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="rate-disclaimer mt-3">
            <strong>Disclaimer:</strong> The prices listed are approximate estimates and serve as a general guideline for our
            service rates. Actual costs may vary based on factors such as the type and volume of items, specific
            transportation routes, delivery timing, and additional services required. Please contact us for a tailored quote
            that reflects your unique moving needs.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="faq-badge">Loading, Unloading & Warehouse FAQs</span>
            <h2 className="faq-title mt-2">Loading, Unloading & Warehouse – Frequently Asked Questions</h2>
            <p className="text-muted">
              Find answers to common questions about our loading, unloading, and warehouse storage services, safety, and process.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="loading-faq">
                {[
                  {
                    q: "How do you ensure safe loading and unloading?",
                    a: "We use modern equipment, proper lifting techniques, and trained staff to ensure safe and damage-free loading and unloading of all items."
                  },
                  {
                    q: "Can I book only loading or only unloading services?",
                    a: "Yes, you can book loading or unloading as standalone services, or combine them with our full relocation or warehousing solutions as per your needs."
                  },
                  {
                    q: "Do you offer warehouse storage for my goods?",
                    a: "Yes, we provide secure and insured warehouse storage for short-term and long-term needs, with 24/7 CCTV surveillance and inventory management."
                  },
                  {
                    q: "What safety measures are in place at your warehouses?",
                    a: "Our warehouses are equipped with fire safety systems, pest control, regular cleaning, and round-the-clock security to ensure the safety of your goods."
                  },
                  {
                    q: "Are my goods insured during storage and handling?",
                    a: "We offer optional insurance coverage for all goods during loading, unloading, and storage for complete peace of mind."
                  },
                  {
                    q: "How do I access my goods in the warehouse?",
                    a: "You can schedule a visit or request delivery of your goods at any time during our working hours. Our team will assist you with safe retrieval and handling."
                  }
                ].map((item, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#loading-faq"
                    >
                      <div className="accordion-body">{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link href="tel:+919892325154" className="btn faq-call-btn">
              Have More Questions? Call Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
