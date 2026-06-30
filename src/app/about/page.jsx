import React from "react";
import Link from "next/link";
import "./about.css";

export const metadata = {
  title: "About - SRS Packers And Movers",
  description: "We are committed to providing our customers with the best possible service at all times. If you’re looking for a reliable and trusted partner for your next move, look no further than SRS Packers And Movers Packers and Movers. Get in touch with us today to learn more about our services and how we can help you with your next move.",
  keywords: "about srs packers and movers, reliable packers and movers, moving company profile",
};

export default function AboutPage() {
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
              <span>About Us</span>
            </nav>
            <h1>About Us</h1>
            <p>Reliable Relocation Solutions Built on Trust, Quality, and Decades of Professional Care</p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="about-company py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* IMAGE */}
            <div className="col-lg-5">
              <div className="about-image-wrap shadow-lg">
                <img
                  src="https://srspackersandmovers.com/assets/images/breadcrumb/about.webp"
                  alt="About SRS Packers & Movers"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-7">
              <div className="about-content-box">
                <span className="about-tag">About The Company</span>
                <h2 className="about-heading">
                  Reliable Relocation Solutions Built on <span>Trust & Care</span>
                </h2>
                <p>
                  SRS Packers and Movers, we have always maintained the position of being the best movers in Mumbai since
                  we have all that is required to do a perfect job when it comes to the loading and unloading of your
                  goods. If you are packing and moving to the city of Mumbai or shifting to a new city or town altogether,
                  you can rest assured your belongings are safe and secure in our storage warehouses.
                </p>
                <p>
                  It is worth stressing that each client may have different transportation needs, and that is why our
                  offers encompass the services for local shifting, shifting within a house and shifting for different
                  occupations and types of the population.
                </p>
                <p>
                  If this is not enough, we also deal with car moving, bike moving, and car shifting services in Mumbai.
                  Therefore, our transit insurance services will be a sure way of having an extra precaution that your
                  vehicles are well taken care of.
                </p>
                <Link href="/contacts" className="btn about-btn">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="col-lg-12">
              <p className="text-muted">
                Being the IBA-approved packers and movers, we provide the IBA-approved car carriers Mumbai and bike
                carriers Mumbai to all our customers and assure them that they will not be scammed. Our bill approved by the
                IBA for a claim also increases the reliability of our service, making us the most wanted packers and movers
                company in Mumbai.
              </p>
              <p className="text-muted">
                When people type “packers movers near me” in Mumbai, <strong>SRS Packers and Movers</strong> come out as the
                best because our charges are affordable but the quality of the services that we offer is superb. We are the
                Mumbai cheapest packers & movers along with being the most verified and reliable ones in town. Thanks to the
                skillful work of our best removalists in Mumbai, the actual moving and packing process is a real pleasure,
                and that’s why many people turn to us. We offer the best packing and unpacking services, and the most security
                loading and unloading services licensed by the IBA.
              </p>
              <p className="text-muted">
                Therefore, for the best packers and movers service in Mumbai, contact <strong>SRS Packers and Movers</strong>.
                With a commitment to delivering quality services together with profound experience in the industry, we
                offer one of the best solutions for anyone in need of reliable, affordable and professional moving services.
                Whether you are thinking of shifting locally within Mumbai or shifting to another city, count on us to make
                your shifting experience a hassle-free one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Timeline Section */}
      <section className="about-timeline py-5 bg-srs-gray">
        <div className="container">
          <div className="text-center mb-5">
            <span className="timeline-badge">Our Journey</span>
            <h2 className="timeline-title">
              Milestones That <span>Define Us</span>
            </h2>
          </div>

          <div className="timeline-wrapper row">
            {[
              { year: "2009", title: "Company Founded", desc: "Started with two trucks and a vision to transform the moving industry." },
              { year: "2012", title: "Expanded to 10 Cities", desc: "Opened branches in major metropolitan areas across India." },
              { year: "2015", title: "International Services", desc: "Launched global relocation services to more than 30 countries." },
              { year: "2018", title: "50,000+ Moves", desc: "Successfully completed over fifty thousand relocations." },
              { year: "2021", title: "Digital Transformation", desc: "Introduced online booking and real-time tracking systems." },
              { year: "2024", title: "Pan India Network", desc: "Expanded operations to 50+ cities with 200+ fleet vehicles." }
            ].map((item, idx) => (
              <div key={idx} className="timeline-item col-12 col-md-6 mb-4">
                <span className="timeline-dot"></span>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="why-title">Why Choose <span>SRS Packers & Movers</span></h2>
            <p className="text-muted mt-3">
              We are Mumbai-based and specialise in all types of removal solutions whether clients require specific
              services or packages. Regardless of whether you teach, heal, learn, or are a part of the generation, we
              give the best packing, loading and unloading services to ensure you have a trouble-free move. Our IBA-licensed
              packers and movers services are secure car and bike moving, properly secured warehousing, and home and office
              shifting. We boast ourselves as the most reliable and genuine packers and movers, who offer the best quality
              movers packers coupled with pocket-friendly prices.
            </p>
            <p className="text-muted">
              We bring you SRS Packers and Movers providing you with an assured, intelligent, no-scam packing and moving
              service with enhanced security by transit insurance IBA-approved bill for claims. Welcome to our company for
              efficient, timely and professional Moving Services in Mumbai.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              { icon: "bi-patch-check-fill", title: "Quality Service", desc: "High-standard packing, loading and unloading ensuring damage-free relocation." },
              { icon: "bi-people-fill", title: "Expert Team", desc: "Skilled professionals trained to handle every type of moving requirement." },
              { icon: "bi-shield-check", title: "Secure & IBA Approved", desc: "Transit insurance, IBA-approved bills and secure warehousing facilities." },
              { icon: "bi-heart-fill", title: "Customer Commitment", desc: "Reliable, genuine and pocket-friendly services with complete transparency." }
            ].map((card, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="why-choose-card text-center">
                  <div className="icon-arc">
                    <div className="icon-circle">
                      <i className={`bi ${card.icon}`}></i>
                    </div>
                  </div>
                  <h5>{card.title}</h5>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 Reasons Section */}
      <section className="reasons-list-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              13 Reasons For Hiring a <span>Professional Mover Company in Mumbai</span>
            </h2>
            <p className="section-subtitle text-muted mt-2">
              Smart, safe, and stress-free relocation services designed for your peace of mind.
            </p>
            <div className="text-muted mt-3">
              <p>
                Expertise: Companies that engage in packing and moving services have the expertise to deal with various
                goods during the moving process. Time-saving: Using the services of movers is convenient since you will
                not need to spend time on moving physical property. Stress-Free: Movers handle the physical work and
                transport, eliminating all concerns related to moving. Proper Equipment: Special tools are safer and
                more effective when used by trained professionals during the move. Insurance Coverage: Professional
                movers provide transit insurance to safeguard belongings in case of damage. Cost-Effective: Avoid
                hidden expenses associated with do-it-yourself moves, such as vehicle rental and packing materials.
              </p>
              <p>
                Safe Packing: Transportation companies ensure proper packing of clients’ goods to prevent damage during
                transit. Efficient Loading and Unloading: Movers assist in ensuring that items are loaded and unloaded
                correctly and on time. Secure Storage: Many movers offer safe storage facilities for items that need to
                be stored temporarily. Custom Solutions: Movers often provide customized packages based on your needs,
                whether for local or interstate moves. Reliable Transport: Professional movers use well-maintained
                vehicles that meet safety standards. Legal Compliance: Independent movers handle all necessary permits
                and comply with existing laws and regulations during the moving process. Peace of Mind: Knowing that
                belongings are in the hands of professionals helps relieve stress throughout the moving process.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              { icon: "bi-box-seam", title: "Expert Handling" },
              { icon: "bi-clock-history", title: "Time-Saving Process" },
              { icon: "bi-shield-check", title: "Stress-Free Relocation" },
              { icon: "bi-tools", title: "Advanced Moving Equipment" },
              { icon: "bi-file-earmark-check", title: "Transit Insurance Coverage" },
              { icon: "bi-currency-rupee", title: "Cost-Effective Solutions" },
              { icon: "bi-bag-check", title: "Safe Packing Standards" },
              { icon: "bi-truck", title: "Efficient Loading & Unloading" },
              { icon: "bi-building-lock", title: "Secure Storage Facilities" },
              { icon: "bi-sliders", title: "Customized Moving Plans" },
              { icon: "bi-truck-flatbed", title: "Reliable Transport Network" },
              { icon: "bi-journal-check", title: "Legal & Safety Compliance" }
            ].map((reason, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="reason-list-card">
                  <div className="reason-icon-box">
                    <i className={`bi ${reason.icon}`}></i>
                  </div>
                  <h5>{reason.title}</h5>
                </div>
              </div>
            ))}
            {/* Full-width 13th Reason */}
            <div className="col-lg-12">
              <div className="reason-list-card">
                <div className="reason-icon-box">
                  <i className="bi bi-emoji-smile"></i>
                </div>
                <h5>Complete Peace of Mind</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
