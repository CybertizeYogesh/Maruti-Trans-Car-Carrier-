import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "./packing-unpacking.css";

export const metadata = {
  title: "Best Packing and Unpacking Services, +91 9892325154 - Safe and Organized Moving Solutions",
  description: "Expert packing using high-quality materials and organized unpacking for a smooth relocation experience.",
  keywords: "packing and unpacking services, secure packing, house shifting wrapping",
};

export default function PackingAndUnpackingPage() {
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
              <span>Packing And Unpacking</span>
            </nav>
            <h1>Packing & Unpacking Services</h1>
            <p>Expert Packing with Quality Materials for Maximum Safety and Easy Unpacking</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="container mt-4">
        <QuoteForm isModal={false} isServicePage={true} defaultFrom="" />
      </div>

      {/* About/Info Section */}
      <section className="packing-and-unpacking-services py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <span className="section-badge">About Packing and Unpacking</span>
              <h2 className="section-title fw-bold mb-4">
                Safe & Professional Packing and Unpacking Services
              </h2>
              <p className="text-muted">
                Being a premier Packers and Movers company, SRS Packers and Movers offers the best Packing and Unpacking
                Services that come with the delivery of items.
              </p>
              <p className="text-muted">
                Are you one of those looking for ‘packers and movers near me’ and in urgent need of perfect packing as well
                as unpacking services? Packing and unpacking are also covered by our IBA-approved packers and movers and
                they come in different service packages.
              </p>
              <p className="text-muted">
                Our Packing and Unpacking Services are outstanding, secure, and free from fraud which is why we are legendary.
                Dealing with our services is the most desired in the area, providing the possibility to get the cheapest
                packers & movers solutions and no losses of quality.
              </p>
              <p className="text-muted">
                If you are in search of Packing and Unpacking Services – the most popular and the cheapest – or are searching
                for the best removalists, we provide efficient services when it comes to moving!
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6">
              <div className="about-img-wrapper shadow-lg mb-4 mb-lg-0">
                <img
                  src="https://srspackersandmovers.com/assets/images/service/packing.jpg"
                  alt="packing SRS Packers & Movers"
                  loading="lazy"
                  className="img-fluid w-100 about-img-rectangle-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <p className="text-muted">
            Choose SRS Packers and Movers as the number one packing and unpacking services provider company. I present our
            pledge to offer quality services to make us among the 5 Best Packing and Unpacking Services providers.
          </p>
          <p className="text-muted">
            Our services are IBA-approved and thus assure you of hassle-free shifting and packing for your residential or
            commercial property. Come to us for the best Packing and Unpacking Services and be assured of a smooth moving
            process.
          </p>
        </div>
      </section>

      {/* Packing Features Section */}
      <section className="packing-features-section py-5">
        <div className="container">
          <div className="row g-4">
            {[
              { icon: "bi-truck", title: "Professional Packing & Unpacking", desc: "Systematic handling of goods using proper tools and techniques" },
              { icon: "bi-shield", title: "Damage Prevention", desc: "Careful handling to avoid scratches, breakage, and transit damage" },
              { icon: "bi-file-earmark", title: "Insured Handling", desc: "Optional insurance coverage during loading and unloading operations" },
              { icon: "bi-person-badge", title: "Skilled Workforce", desc: "Experienced and trained loading & unloading professionals" },
              { icon: "bi-clock-history", title: "Time-Efficient Service", desc: "Quick execution to minimize downtime and delays" },
              { icon: "bi-currency-rupee", title: "Transparent Pricing", desc: "Fair pricing with no hidden or last-minute charges" }
            ].map((feat, idx) => (
              <div key={idx} className="col-md-4">
                <div className="packing-feature-card text-start h-100">
                  <div className="packing-feature-icon">
                    <i className={`bi ${feat.icon}`}></i>
                  </div>
                  <h5 className="packing-feature-title">{feat.title}</h5>
                  <p className="packing-feature-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Materials Section */}
      <section className="packing-materials-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* LEFT COLUMN */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <span className="packing-materials-icon me-2"><i className="bi bi-star"></i></span>
                <h2 className="packing-materials-title mb-0">Packing Materials Used by SRS Packers Movers</h2>
              </div>
              <p className="packing-materials-desc mb-4">
                Our service believes quality packing ensures damage-free unpacking, which is why we use premium packing
                materials service for every move. Our secure packing and protective wrapping assures maximum safety during
                transit and start to end delivery.
              </p>
              <ul className="packing-materials-list mb-4">
                <li><i className="bi bi-check2-circle"></i> High-quality packing material usage</li>
                <li><i className="bi bi-check2-circle"></i> Bubble wrap packing and unpacking</li>
                <li><i className="bi bi-check2-circle"></i> Corrugated box packing solutions</li>
                <li><i className="bi bi-check2-circle"></i> Protective wrapping and safe unpacking</li>
                <li><i className="bi bi-check2-circle"></i> Secure packing materials for fragile items</li>
              </ul>
              <div className="row g-3">
                {[
                  "Bubble Wrap & Foam Sheets",
                  "Corrugated Boxes",
                  "Stretch & Shrink Wrap",
                  "Fragile Packing Materials",
                  "Labeling Stickers",
                  "Tapes & Protective Seals"
                ].map((material, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="packing-material-card">
                      <i className="bi bi-box2"></i> {material}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <div className="row g-4">
                {[
                  { icon: "bi-house-door", title: "On-Site Service", desc: "Packing and unpacking at your location" },
                  { icon: "bi-shield-check", title: "Item Safety", desc: "Protection against damage and mishandling" },
                  { icon: "bi-person-badge", title: "Experienced Staff", desc: "Professionally trained packing teams" },
                  { icon: "bi-check2-square", title: "Organized Setup", desc: "Systematic unpacking and arrangement" }
                ].map((feat, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="packing-feature-card text-start h-100">
                      <div className="packing-feature-icon">
                        <i className={`bi ${feat.icon}`}></i>
                      </div>
                      <h5 className="packing-feature-title">{feat.title}</h5>
                      <p className="packing-feature-desc">{feat.desc}</p>
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
            <span className="faq-badge">Packing & Unpacking FAQs</span>
            <h2 className="faq-title mt-2">Packing & Unpacking – Frequently Asked Questions</h2>
            <p className="text-muted">
              Find answers to common questions about our professional packing and unpacking services, safety, and process.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="packing-faq">
                {[
                  {
                    q: "What materials do you use for packing?",
                    a: "We use high-quality packing materials such as sturdy cartons, bubble wrap, foam sheets, corrugated boxes, and protective covers to ensure the safety of your belongings during transit."
                  },
                  {
                    q: "Can I book only packing or only unpacking services?",
                    a: "Yes, you can book packing or unpacking as standalone services, or combine them with our full relocation solutions as per your needs."
                  },
                  {
                    q: "How do you ensure fragile items are safe?",
                    a: "Fragile items are packed separately with extra cushioning, double-layered boxes, and clear labeling to ensure careful handling throughout the move."
                  },
                  {
                    q: "Do you provide unpacking and reassembly at the destination?",
                    a: "Yes, our team will unpack your items and can assist with reassembly of furniture and placement as per your instructions."
                  },
                  {
                    q: "Are packing and unpacking services insured?",
                    a: "We offer optional insurance coverage for all packing and unpacking services to give you complete peace of mind."
                  },
                  {
                    q: "How much time does packing and unpacking take?",
                    a: "The time required depends on the volume and type of items. Our team works efficiently to complete the process as quickly and safely as possible."
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
                      data-bs-parent="#packing-faq"
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
