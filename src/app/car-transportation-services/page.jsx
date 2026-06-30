import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "./car-transportation.css";

export const metadata = {
  title: "Best Car Carriers Services, +91 9892325154 - Safe and Reliable Vehicle Transport Solutions",
  description: "Safe and secure transportation of cars and bikes using specialized carriers. We ensure damage-free delivery and insurance support for your vehicles.",
  keywords: "car carriers services, vehicle transport solutions, bike shifting service",
};

export default function CarCarriersPage() {
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
              <span>Car Carriers</span>
            </nav>
            <h1>Car & Bike Carrier Services</h1>
            <p>Safe and Secure Vehicle Transportation with Specialized Carriers Across India</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="container mt-4">
        <QuoteForm isModal={false} isServicePage={true} defaultFrom="" />
      </div>

      {/* About Section */}
      <section className="car-transportation-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <span className="section-badge">About Car Carriers</span>
              <h2 className="section-title fw-bold mb-4">
                Safe & Reliable Car Carrier Services
              </h2>
              <p className="text-muted">
                Car Carriers Services offered by <strong>SRS Packers and Movers</strong> are specially developed to meet
                the highest quality of services in vehicle transportation.
              </p>
              <p className="text-muted">
                Are you looking for packers and movers services near you or packers and movers services your location,
                welcome to the number one Car Carriers Services. We are your go-to service provider in India for providing
                top-notch Packers and Movers and IBA-approved Car Carriers Services.
              </p>
              <p className="text-muted">
                Due to this, our Car Carriers Services offer anyone a safe and glaringly free-of-scam approach to their
                car. We pride ourselves on being the cheapest and most efficient and that is why we are the most
                sought-after Car Carriers Services supplier here.
              </p>
              <p className="text-muted">
                For those seeking the packers & movers price list for Car Carriers Services, as well as the best packers
                & movers, affordable packers & movers or cheap packers & movers, our lineup of qualified movers won't
                disappoint you.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6">
              <div className="about-img-wrapper shadow-lg mb-4 mb-lg-0">
                <img
                  src="https://srspackersandmovers.com/assets/images/service/car.jpg"
                  alt="car-transport SRS Packers & Movers"
                  loading="lazy"
                  className="img-fluid w-100 about-img-rectangle-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <p className="text-muted">
            Trust SRS Packers and Movers for the highest standard of Car Carriers Services. Details given below prove that
            being an IBA-approved service provider, we have ranked ourselves among the 5 Best Car Carriers Services.
            Let us manage your car shipping process and you will never have to worry about how your car is being handled,
            ever again.
          </p>
        </div>
      </section>

      {/* Why Choose SRS Section */}
      <section className="why-choose-srs py-5">
        <div className="container">
          <h2 className="text-center section-title mb-5">
            Why Choose SRS Car Carriers?
          </h2>
          <div className="row g-4">
            {[
              { icon: "bi-shield-check", title: "Fully Insured", desc: "Complete transit insurance for your vehicle" },
              { icon: "bi-geo-alt", title: "GPS Tracking", desc: "Real-time location tracking of your car" },
              { icon: "bi-star", title: "Zero Damage", desc: "100% damage-free delivery guarantee" },
              { icon: "bi-clock", title: "On-Time", desc: "Guaranteed delivery within timeline" },
              { icon: "bi-lightning-charge", title: "Express Service", desc: "Priority transport available" },
              { icon: "bi-car-front", title: "All Vehicles", desc: "Cars, bikes, SUVs, luxury cars" },
              { icon: "bi-truck", title: "Modern Fleet", desc: "Well-maintained car carriers" },
              { icon: "bi-check-circle", title: "Door-to-Door", desc: "Pickup and delivery at your doorstep" }
            ].map((card, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-3">
                <div className="why-card">
                  <i className={`bi ${card.icon}`}></i>
                  <h5>{card.title}</h5>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works py-5">
        <div className="container text-center">
          <p className="section-tag mb-2">HOW IT WORKS</p>
          <h2 className="section-title mb-5">Simple Car Transport Process</h2>
          <div className="row justify-content-center position-relative g-4">
            {[
              { icon: "bi-file-earmark-text", title: "Get Quote", desc: "Share vehicle details and route" },
              { icon: "bi-calendar-check", title: "Schedule Pickup", desc: "Choose convenient date & time" },
              { icon: "bi-search", title: "Inspection", desc: "Pre-transport condition check" },
              { icon: "bi-truck", title: "Transport", desc: "Safe transit with live tracking" }
            ].map((step, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-2 process-col">
                <div className="process-card">
                  <div className="icon-wrapper">
                    <i className={`bi ${step.icon}`}></i>
                  </div>
                  <h5>{step.title}</h5>
                  <p>{step.desc}</p>
                </div>
                <span className="process-arrow">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            ))}
            {/* Last Step without arrow */}
            <div className="col-12 col-sm-6 col-lg-2">
              <div className="process-card">
                <div className="icon-wrapper">
                  <i className="bi bi-box-seam"></i>
                </div>
                <h5>Delivery</h5>
                <p>Final inspection and handover</p>
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
            <span className="faq-badge">FAQs</span>
            <h2 className="faq-title mt-2">Car Transport – Common Questions</h2>
            <p className="text-muted">
              Get answers to all your questions about car & bike transport, insurance coverage, and the claim process.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="car-faq">
                {[
                  {
                    q: "What types of vehicles do you transport?",
                    a: "We transport all types of vehicles including cars, SUVs, bikes, luxury vehicles, vintage cars, and commercial vehicles."
                  },
                  {
                    q: "Is my vehicle insured during transport?",
                    a: "Yes, all vehicles are covered by transit insurance. We also offer additional comprehensive coverage for high-value vehicles."
                  },
                  {
                    q: "How long does car transport take?",
                    a: "Transit time depends on the route. Local transport takes 1-2 days, while interstate transport takes 3-7 days."
                  },
                  {
                    q: "Do you offer enclosed transport?",
                    a: "Yes, we offer both open and enclosed transport options. Enclosed transport is recommended for luxury and vintage vehicles."
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
                      data-bs-parent="#car-faq"
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
