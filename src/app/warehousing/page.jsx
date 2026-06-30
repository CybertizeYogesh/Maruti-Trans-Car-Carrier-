import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "./warehousing.css";

export const metadata = {
  title: "Best Warehousing Services, +91 9892325154 - Secure Storage Solutions for Your Belongings",
  description: "Secure, climate-controlled storage for your goods. Flexible short and long-term options with 24/7 security and easy access.",
  keywords: "warehousing services, storage solutions, secure household storage",
};

export default function StorageAndWarehousingPage() {
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
              <span>Warehousing</span>
            </nav>
            <h1>Warehousing & Storage Solutions</h1>
            <p>Secure, Climate-Controlled Storage for Short or Long-Term Needs</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="container mt-4">
        <QuoteForm isModal={false} isServicePage={true} defaultFrom="" />
      </div>

      {/* About/Info Section */}
      <section className="warehousing-services-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <span className="section-badge">About Warehousing Services</span>
              <h2 className="section-title fw-bold mb-4">
                Safe & Reliable Warehousing Services
              </h2>
              <p className="text-muted">
                For Warehousing Services required to store your goods, we at <strong>SRS Packers and Movers</strong> provide
                proficient services for safe and secure storage of your belongings.
              </p>
              <p className="text-muted">
                Where to search for “packers and movers near me”? Only with us, you will find perfect Warehousing Services.
                Our IBA-licensed packers and movers also offer a complete warehousing facility so that your valuables can be
                protected.
              </p>
              <p className="text-muted">
                This is why we can confidently say that our Warehousing Services are the best when it comes to easy,
                reliable and scam-free warehousing solutions. We provide the best-demanded Warehousing Services to our
                clients in the area; our rates are also affordable thus making us the cheapest packers & movers for
                Warehousing Services.
              </p>
              <p className="text-muted">
                If you require the most competitively priced Warehousing Services or you are looking for quality removalists,
                we offer the best.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6">
              <div className="about-img-wrapper shadow-lg mb-4 mb-lg-0">
                <img
                  src="https://srspackersandmovers.com/assets/images/service/warehouse.jpg"
                  alt="warehouse SRS Packers & Movers"
                  loading="lazy"
                  className="img-fluid w-100 about-img-rectangle-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <p className="text-muted">
            Avail our topmost service, Warehousing Services, from SRS Packers and Movers. This commitment to offering the
            best Warehousing Services puts us on the list of the 5 Best Warehousing Services. At our company, it is our
            responsibility to provide customers with a hassle-free storage service that delivers IBA-approved solutions
            for storing your merchandise safely.
          </p>
          <p className="text-muted">
            Select us for the best Warehousing Services and we will provide you with reliable and wide-ranging services for
            your storage needs.
          </p>
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
            <span className="faq-badge">Warehouse FAQs</span>
            <h2 className="faq-title mt-2">Warehouse – Frequently Asked Questions</h2>
            <p className="text-muted">
              Find answers to common questions about our warehouse storage services, security, and process.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="warehousing-faq">
                {[
                  {
                    q: "What types of goods can be stored in your warehouse?",
                    a: "We can store a wide range of goods including household items, office equipment, commercial inventory, documents, and more. Please contact us for any specific requirements."
                  },
                  {
                    q: "Is your warehouse facility secure?",
                    a: "Yes, our warehouses are equipped with 24/7 CCTV surveillance, security personnel, fire safety systems, and access control to ensure maximum security for your goods."
                  },
                  {
                    q: "Do you offer both short-term and long-term storage?",
                    a: "Absolutely. We provide flexible storage options to suit your needs, whether you require storage for a few days, weeks, or several months."
                  },
                  {
                    q: "Are my goods insured while in storage?",
                    a: "We offer optional insurance coverage for all goods stored in our warehouse for your complete peace of mind."
                  },
                  {
                    q: "Can I access my goods during the storage period?",
                    a: "Yes, you can access your goods during our working hours. Please contact our team in advance to schedule your visit for a smooth experience."
                  },
                  {
                    q: "How do you maintain the quality of goods in storage?",
                    a: "Our warehouses are regularly cleaned, pest-controlled, and climate-monitored to ensure your goods remain in excellent condition throughout the storage period."
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
                      data-bs-parent="#warehousing-faq"
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
