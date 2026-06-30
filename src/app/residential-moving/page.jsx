import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "./residential-moving.css";

export const metadata = {
  title: "Best Residential Moving Services, +91 9892325154 - Hassle-Free Home Moves with Professional Care",
  description: "Professional home shifting with careful packing, safe transport, and timely delivery. We make your residential move easy and efficient.",
  keywords: "household shifting, residential relocation, home moving services",
};

export default function ResidentialRelocationPage() {
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
              <span>Residential Moving</span>
            </nav>
            <h1>Residential Moving Solutions</h1>
            <p>Professional Home Shifting with Care, Speed, and Reliability</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="container mt-4">
        <QuoteForm isModal={false} isServicePage={true} defaultFrom="" />
      </div>

      {/* About/Info Section */}
      <section className="residential-moving-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <span className="section-badge">About Residential Moving</span>
              <h2 className="section-title fw-bold mb-4">
                Trusted & Professional Residential Moving Services
              </h2>
              <p className="text-muted">
                <strong>SRS Packers and Movers</strong> boasts of the best Residential Moving Services in the business, to
                provide you with the best relocation services for your home. In case anyone is looking for Packers and
                Movers Near Me that require the most premium Residential Moving Services, we are here for you. With
                professional approvals and recognition, we offer a full range of services for household shifting including
                packing and moving services.
              </p>
              <p className="text-muted">
                At our company, our Residential Moving Services are among the best you can find in the market and come with
                no scams which is why we are the most sought-after when it comes to home moving services.
              </p>
              <p className="text-muted">
                We are dedicated to providing you with the lowest prices for packers & movers for Residential Moving
                Services, but never on the quality. If you require the cheapest and superior Residential Moving Services
                or require the superior moving companies, you can be confident of an efficient and stress-free service
                with us.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6">
              <div className="about-img-wrapper shadow-lg mb-4 mb-lg-0">
                <img
                  src="https://srspackersandmovers.com/assets/images/service/residential.jpg"
                  alt="residential SRS Packers & Movers"
                  loading="lazy"
                  className="img-fluid w-100 about-img-rectangle-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <p className="text-muted">
            For the best Residential Moving Services, you can hire <strong>SRS Packers and Movers</strong>. Our commitment
            to the customer has helped us grasp the position of one of the 5 Best Residential Moving Services.
          </p>
          <p className="text-muted">
            Give us a chance to safely and efficiently transfer all your belongings to your new house in the shortest time
            possible. Select us for the best Residential Moving Services; let your transfer be as smooth as possible.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section py-5">
        <div className="container">
          <h2 className="text-center pricing-title mb-5">Quick Pricing Guide</h2>

          <div className="row g-4 justify-content-center">
            {[
              { type: "1 BHK", items: "100-150 items", price: "From ₹5,000" },
              { type: "2 BHK", items: "150-250 items", price: "From ₹8,000" },
              { type: "3 BHK", items: "250-400 items", price: "From ₹12,000" },
              { type: "4+ BHK", items: "400+ items", price: "Custom Quote" }
            ].map((pkg, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 col-sm-12">
                <div className="pricing-card h-100 text-center">
                  <div className="icon-wrapper mx-auto mb-3">
                    <i className="bi bi-house-door-fill"></i>
                  </div>
                  <h5 className="home-type">{pkg.type}</h5>
                  <p className="item-count">{pkg.items}</p>
                  <p className="price-text">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room-by-Room Section */}
      <section className="room-section py-5">
        <div className="container">
          <div className="row align-items-start g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <span className="room-subtitle">ROOM-BY-ROOM</span>
              <h2 className="room-title mt-2">We Handle Every Room</h2>
              <p className="room-desc mt-3">
                From the living room sofa to the smallest kitchen gadget, our team is trained to pack and move every type of
                household item with care.
              </p>

              <div className="row g-3 mt-4">
                {[
                  { icon: "bi-couch", name: "Living Room" },
                  { icon: "bi-bed", name: "Bedroom" },
                  { icon: "bi-cup-hot", name: "Kitchen" },
                  { icon: "bi-journal-text", name: "Study/Office" }
                ].map((room, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="room-box">
                      <div className="room-icon">
                        <i className={`bi ${room.icon}`}></i>
                      </div>
                      <span>{room.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">
              <div className="category-box mb-4">
                <h6 className="fw-bold mb-3">Furniture Care</h6>
                <div className="tag-group">
                  <span className="tag">Sofas & chairs</span>
                  <span className="tag">Beds & mattresses</span>
                  <span className="tag">Tables & cabinets</span>
                  <span className="tag">Wardrobes</span>
                </div>
              </div>

              <div className="category-box mb-4">
                <h6 className="fw-bold mb-3">Appliances</h6>
                <div className="tag-group">
                  <span className="tag">Refrigerator</span>
                  <span className="tag">Washing machine</span>
                  <span className="tag">Air conditioners</span>
                  <span className="tag">Kitchen appliances</span>
                </div>
              </div>

              <div className="category-box">
                <h6 className="fw-bold mb-3">Personal Items</h6>
                <div className="tag-group">
                  <span className="tag">Clothing & linens</span>
                  <span className="tag">Books & documents</span>
                  <span className="tag">Electronics</span>
                  <span className="tag">Decorations</span>
                </div>
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
            <h2 className="faq-title mt-2">Residential Moving Questions</h2>
            <p className="text-muted">
              Everything you need to know for a smooth, safe, and stress-free home relocation.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="residential-faq">
                {[
                  {
                    id: "faq1",
                    q: "How early should I book for residential moving?",
                    a: "We recommend booking at least 1-2 weeks in advance for local moves and 3-4 weeks for interstate moves. However, we also accommodate last-minute requests based on availability."
                  },
                  {
                    id: "faq2",
                    q: "Do you move plants and pets?",
                    a: "We can provide guidance on moving plants. For pets, we recommend specialized pet transport services, but we can coordinate timing to ensure a smooth transition."
                  },
                  {
                    id: "faq3",
                    q: "What about wall-mounted items like ACs and TVs?",
                    a: "Yes, we handle dismounting, packing, and remounting of wall-mounted items including ACs, TVs, wall units, and artwork."
                  },
                  {
                    id: "faq4",
                    q: "Can you help with old item disposal?",
                    a: "Yes, we offer disposal and donation coordination services for items you no longer need. This can be arranged during the booking process."
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
                      data-bs-parent="#residential-faq"
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
