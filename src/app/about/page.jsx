import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./about.css";

export const metadata = {
  title: "About Us | Maruti Trans Car Carrier Shifting",
  description: "Maruti Trans is a leading vehicle transport and car carrier company with roots in Haryana. Discover our history, milestones, fleet capacity, and safety commitments.",
  keywords: "about maruti trans, car carrier company, vehicle transport history, haryana packers movers",
  alternates: {
    canonical: "https://srspackersandmovers.com/about"
  }
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
            <p>Reliable Automobile Logistics Solutions Built on Trust, Quality, and Decades of Professional Care</p>
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
                <Image
                  src="/assets/images/about/about_company.webp"
                  alt="About Maruti Trans"
                  className="img-fluid"
                  width={500}
                  height={350}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-7">
              <div className="about-content-box">
                <span className="about-tag">About Maruti Trans</span>
                <h2 className="about-heading">
                  Safely Shifting Your Vehicles <span>Across India</span>
                </h2>
                <p>
                  Maruti Trans Car Carrier Shifting, registered under principal proprietor Parveen Kumar, is a dedicated vehicle transport specialist based in Haryana, India. We have built a reputable fleet of multi-car carrier trailers, enclosed shipping containers, and flatbed tow trucks designed for safe door-to-door transit.
                </p>
                <p>
                  We understand that shipping a car involves a lot of trust. Whether it is a daily hatchback or a high-end luxury vehicle, we approach every task with a standard condition checklist and comprehensive transit insurance cover.
                </p>
                <p>
                  Operating under the approved trade registration of Maruti Trans Car Carrier Shifting, we secure all checkpoints, border clearances, and toll protocols, providing an entirely hassle-free transport experience.
                </p>
                <Link href="/contacts" className="btn about-btn">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="col-lg-12">
              <p className="text-muted">
                Our operations originate from our registered base in Charkhi Dadri, Haryana: <strong>House No. 84, Ground Floor, Maruti Trans Car Carrier Shifting, Chandwass Road, Nearby Hari Om Irritation Company, Chandwass, Badhra, Charkhi Dadri, Haryana - 127312</strong>. From here, we coordinate long-distance auto carrier routes connecting Haryana to Maharashtra, Gujarat, Telangana, Karnataka, Rajasthan, and other major states.
              </p>
              <p className="text-muted">
                By investing in high-quality hydraulic ramps, soft tie-down wheel straps, and modern enclosed container trailers, we secure vehicles against rough roads, climate hazards, and scratches. Our focus is entirely on shipping cars and two-wheelers with a damage-free promise.
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
              { year: "2016", title: "Operations Founded", desc: "Started local vehicle towing operations in Haryana." },
              { year: "2018", title: "Expanded Trailer Fleet", desc: "Acquired double-decker open car carrier trailers." },
              { year: "2020", title: "Enclosed Container Services", desc: "Launched hard-sided enclosed containers for sports and luxury cars." },
              { year: "2022", title: "10,000+ Shifting Tasks", desc: "Crossed the milestone of shipping over ten thousand cars." },
              { year: "2024", title: "GPS Integration", desc: "Integrated real-time GPS tracking on all transport corridors." },
              { year: "2026", title: "National Auto Carrier Network", desc: "Serving 45+ cities with dedicated vehicle transit stations." }
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
            <h2 className="why-title">Why Choose <span>Maruti Trans</span></h2>
            <p className="why-desc mx-auto text-muted mt-3" style={{ maxWidth: "680px" }}>
              We specialize entirely in automobile logistics. When you transport your vehicle with Maruti Trans, you get specialized equipment and seasoned trailer captains who understand how to mount, balance, strap, and drive cargo trailers safely.
            </p>
          </div>

          <div className="row g-4 mt-2 justify-content-center">
            {[
              {
                icon: "bi-shield-check",
                title: "Transit Insurance Cover",
                desc: "Comprehensive transit insurance coverage to secure your vehicle value against unforeseen transit damage."
              },
              {
                icon: "bi-truck",
                title: "Specialized Carriers",
                desc: "A modern fleet of open double-decker carriers and hard-sided enclosed containers built for safe long-distance shipping."
              },
              {
                icon: "bi-patch-check",
                title: "Four-Point Tire Strapping",
                desc: "We lock vehicles strictly via heavy-duty soft straps around the tires, ensuring zero body scrapes or bumper friction."
              },
              {
                icon: "bi-geo-alt",
                title: "GPS Consignment Tracking",
                desc: "Follow the journey of your vehicle with real-time transit updates using our web tracking system."
              }
            ].map((card, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div className="why-choose-card text-center">
                  <div className="icon-arc">
                    <div className="icon-circle shadow-sm">
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
    </>
  );
}
