import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "./domestic-moving.css";

export const metadata = {
  title: "Best Domestic Moving Solutions, +91 9892325154 - Trusted Nationwide Moving Services for Homes",
  description: "Reliable and affordable domestic moving services across India. We ensure a seamless intercity relocation with professional packing, safe transport, and on-time delivery.",
  keywords: "domestic packers and movers, interstate moving services, domestic relocation India",
};

export default function DomesticShiftingPage() {
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
              <span>Domestic Moving</span>
            </nav>
            <h1>Domestic Moving Across India</h1>
            <p>Seamless Intercity Relocation Solutions for Homes and Offices Nationwide</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="container mt-4">
        <QuoteForm isModal={false} isServicePage={true} defaultFrom="" />
      </div>

      {/* Domestic Info Section */}
      <section className="domestic-info-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <span className="section-badge">About Domestic Moving</span>
              <h2 className="fw-bold text-dark mb-4">
                Seamless & Secure Domestic Moving Services
              </h2>
              <p className="text-muted">
                In addition to this, we are providing the best Domestic Moving Services at SRS Packers and Movers to provide
                you with a secure move. In case, you are actively using the term "packers and movers near me," we are here to
                provide you the safe and quick domestic shifting.
              </p>
              <p className="text-muted">
                Our company is one of the top IBA-approved packers and movers agencies that guarantee the safety of your items
                during the relocation.
              </p>
              <p className="text-muted">
                Our stellar Domestic Moving Services are free from scams and thus, we are the most desirable and the best
                option to hire for the move. We boast of being the cheap packers & movers for Domestic Moving Services, with
                pocket-friendly prices for the best quality movers services without any compromises.
              </p>
              <p className="text-muted">
                We offer the best removal services since we offer our clients the top experience for moving hence making us
                among the 5 Best Domestic Moving Services companies in the region.
              </p>
            </div>
            {/* IMAGE */}
            <div className="col-lg-6">
              <div className="about-img-wrapper shadow-lg mb-4 mb-lg-0">
                <img
                  src="https://srspackersandmovers.com/assets/images/service/domestic.jpg"
                  alt="domestic SRS Packers & Movers"
                  loading="lazy"
                  className="img-fluid w-100 about-img-rectangle-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <p className="text-muted">
            You are welcome to hire SRS Packers and Movers for the best domestic moving service providers. As a local movers
            packers services in our company, we undertake excellence and customer satisfaction as the organization.
          </p>
          <p className="text-muted">
            Creating bespoke packages, which are IBA certified, we ensure that you achieve a smooth and problem-free move
            making us your number one choice for all your domestic removal requirements. Come to us for the top Domestic
            Moving Services, period.
          </p>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="popular-routes-section py-5 border-top">
        <div className="container">
          <div className="text-center mb-5">
            <span className="routes-badge">POPULAR ROUTES</span>
            <h2 className="routes-title">Frequently Serviced Routes</h2>
          </div>
          <div className="row g-4">
            {[
              { route: "Delhi → Mumbai", time: "2-3 Days" },
              { route: "Bangalore → Chennai", time: "1-2 Days" },
              { route: "Mumbai → Pune", time: "1 Day" },
              { route: "Delhi → Bangalore", time: "3-4 Days" },
              { route: "Kolkata → Hyderabad", time: "3-4 Days" },
              { route: "Chennai → Kochi", time: "2-3 Days" }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="route-card">
                  {/* LINE + ICONS */}
                  <div className="route-line-wrapper">
                    <div className="route-circle start">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="route-line"></div>
                    <div className="route-circle end">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                  </div>
                  {/* CONTENT */}
                  <div className="route-content">
                    <div>
                      <h6 className="route-title">{item.route}</h6>
                      <p className="route-time">{item.time}</p>
                    </div>
                    <Link href="#!" className="btn btn-outline-danger btn-sm route-btn">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="advantages-badge">OUR ADVANTAGES</span>
            <h2 className="advantages-title">Why SRS for Domestic Moving?</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: "bi-truck", title: "Containerized Transport", desc: "Dedicated containers ensure your belongings stay together" },
              { icon: "bi-shield-check", title: "Full Insurance", desc: "Comprehensive coverage for complete peace of mind" },
              { icon: "bi-clock", title: "On-Time Delivery", desc: "Guaranteed delivery within committed timelines" },
              { icon: "bi-geo-alt", title: "Pan-India Network", desc: "Presence in 500+ cities across all states" },
              { icon: "bi-box-seam", title: "Premium Packing", desc: "Multi-layer protection for all items" },
              { icon: "bi-people", title: "Expert Team", desc: "Trained professionals at origin and destination" },
              { icon: "bi-star", title: "GPS Tracking", desc: "Real-time tracking of your shipment" },
              { icon: "bi-calendar-check", title: "Flexible Schedule", desc: "Move on your preferred date and time" }
            ].map((item, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="adv-card h-100">
                  <div className="adv-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h6 className="adv-title">{item.title}</h6>
                  <p className="adv-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-5 border-top">
        <div className="container">
          <div className="text-center mb-5">
            <span className="timeline-badge">THE JOURNEY</span>
            <h2 className="timeline-title">Your Moving Timeline</h2>
          </div>
          <div className="row justify-content-center timeline-row">
            {[
              { step: "1", day: "Day 1", title: "Book & Survey", desc: "Free survey and quotation" },
              { step: "2", day: "Day 2-3", title: "Packing", desc: "Professional packing at origin" },
              { step: "3", day: "Day 4-5", title: "In Transit", desc: "Secure containerized transport" },
              { step: "4", day: "Day 6-7", title: "Delivery", desc: "Safe delivery to destination" },
              { step: "5", day: "Day 7", title: "Setup", desc: "Unpacking and arrangement" }
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg timeline-col">
                <div className="timeline-step">{item.step}</div>
                <div className="timeline-card">
                  <span className="timeline-day">{item.day}</span>
                  <h6 className="timeline-card-title">{item.title}</h6>
                  <p className="timeline-card-desc">{item.desc}</p>
                </div>
                {index < 4 && <span className="timeline-line"></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">SUCCESS STORIES</span>
            <h2 className="section-heading text-white">Thousands of Happy Moves</h2>
          </div>
          <div className="row justify-content-center g-4">
            {[
              {
                text: `"I want to thank SRS Packers and Movers for the great service and effort they took to help us shift our office easily. They were disciplined in their matches and conducted themselves in a very professional manner. A go Company for any office move!"`,
                avatar: "A",
                name: "Anita Desai",
                role: "Bank Manager"
              },
              {
                text: `"I have hired them for bike shifting their service was awesome. This product got to me in its pristine state and within the stipulated time as requested. Professional, reliable, and hassle-free. This company will be used again by them."`,
                avatar: "R",
                name: "Rajiv Patel",
                role: "Gym Trainer"
              },
              {
                text: `"I was glad to use the service of SRS Packers and Movers. They arranged our home shift and the team was efficient and gentle all through. Starting from packing, up to the delivery everything was as smooth as butter. Definitely would suggest it for a hassle-free move."`,
                avatar: "N",
                name: "Nikita Agarwal",
                role: "Teacher"
              }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="testimonial-card">
                  <div className="quote-icon">“</div>
                  <div className="stars mb-3">★★★★★</div>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="client-info d-flex align-items-center mt-4">
                    <div className="client-avatar">{item.avatar}</div>
                    <div className="ms-3">
                      <h6 className="client-name mb-0 fw-bold">{item.name}</h6>
                      <small className="client-role">{item.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Chart Section */}
      <section className="rate-chart-section py-5">
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
            <span className="faq-tag">FAQ</span>
            <h2 className="faq-title mt-2">Domestic Moving Questions</h2>
          </div>
          <div className="accordion faq-accordion mx-auto" id="faqAccordion">
            {[
              {
                id: "faq1",
                q: "How long does domestic moving take?",
                a: "Delivery time depends on the distance. Within the same state: 1–2 days. Interstate: 3–7 days. We provide exact timelines during booking."
              },
              {
                id: "faq2",
                q: "Do you provide tracking for domestic moves?",
                a: "Yes, all our domestic shipments come with GPS tracking. You can track your belongings in real-time through our app or website."
              },
              {
                id: "faq3",
                q: "What is included in domestic moving service?",
                a: "Our domestic moving includes packing, loading, transportation, unloading, and unpacking. Insurance coverage is also included."
              },
              {
                id: "faq4",
                q: "How do you handle long-distance moves?",
                a: "We use dedicated containerized trucks for long-distance moves. Your belongings stay in one container from pickup to delivery."
              }
            ].map((item, index) => (
              <div key={index} className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={item.id}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={item.id}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            ))}
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
