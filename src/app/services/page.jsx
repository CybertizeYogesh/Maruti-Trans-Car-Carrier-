import React from "react";
import Link from "next/link";
import "./services.css";

export const metadata = {
  title: "Our Services | Comprehensive Packing & Moving Solutions",
  description: "Explore our wide range of professional packing and moving services, including home shifting, office relocation, vehicle transport, storage solutions, and more. We ensure safe, reliable, and hassle-free moves tailored to your needs.",
  keywords: "household shifting, office relocation, vehicle transport, storage solutions",
};

const SERVICES = [
  {
    title: "Local Moving",
    iconClass: "bi bi-house-door",
    desc: "Safe and quick household relocation within city limits with expert packing.",
    href: "/local-moving",
    points: ["Same-day service", "Trained staff", "Secure handling", "Furniture setup"]
  },
  {
    title: "Domestic Moving",
    iconClass: "bi bi-truck",
    desc: "Interstate relocation across India with door-to-door service.",
    href: "/domestic-moving",
    points: ["Pan India network", "On-time delivery", "GPS tracking", "Move coordinator"]
  },
  {
    title: "International Moving",
    iconClass: "bi bi-globe",
    desc: "Global relocation services with customs and documentation support.",
    href: "/international-moving",
    points: ["50+ countries", "Air & sea freight", "Custom clearance", "Destination support"]
  },
  {
    title: "Moving With Insurance",
    iconClass: "bi bi-shield-check",
    desc: "Comprehensive transit insurance for complete peace of mind.",
    href: "/insurance-moving",
    points: ["Full coverage", "Quick claims", "Damage protection", "Risk-free move"]
  },
  {
    title: "Car Carriers",
    iconClass: "bi bi-car-front",
    desc: "Safe transportation of cars and bikes using specialized carriers.",
    href: "/car-transportation-services",
    points: ["Enclosed carriers", "Bike transport", "Damage-free", "Insurance support"]
  },
  {
    title: "Delicate Item Movers",
    iconClass: "bi bi-gem",
    desc: "Special handling for fragile, antique, and valuable items.",
    href: "/delicate-item-movers",
    points: ["Extra padding", "Custom packing", "Expert handling", "Safe delivery"]
  },
  {
    title: "Door to Door Services",
    iconClass: "bi bi-door-open",
    desc: "Complete relocation from pickup to final placement.",
    href: "/door-to-door",
    points: ["End-to-end move", "No hidden costs", "Single contact", "Hassle-free"]
  },
  {
    title: "Residential Moving",
    iconClass: "bi bi-building",
    desc: "Professional home relocation with safety and speed.",
    href: "/residential-moving",
    points: ["Apartment moves", "Villa shifting", "Careful packing", "Timely delivery"]
  },
  {
    title: "Logistic Services",
    iconClass: "bi bi-box-seam",
    desc: "Reliable logistics and supply chain transportation.",
    href: "/logistic-services",
    points: ["On-time delivery", "Fleet support", "Route planning", "Tracking system"]
  },
  {
    title: "Loading And Unloading",
    iconClass: "bi bi-boxes",
    desc: "Safe loading and unloading by trained professionals.",
    href: "/loading-unloading",
    points: ["Heavy item handling", "Safety equipment", "Skilled labor", "No damage"]
  },
  {
    title: "Packing And Unpacking",
    iconClass: "bi bi-boxes",
    desc: "Professional packing using high-quality materials.",
    href: "/packing-unpacking",
    points: ["Premium cartons", "Bubble wrapping", "Labeling", "Organized unpacking"]
  },
  {
    title: "Warehousing",
    iconClass: "bi bi-building-lock",
    desc: "Secure and climate-controlled storage solutions.",
    href: "/warehousing",
    points: ["Short & long term", "24/7 security", "Inventory management", "Easy access"]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Target Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
              <span>/</span>
              <span>Services</span>
            </nav>
            <h1>Our Services</h1>
            <p>Comprehensive moving solutions for every need</p>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="srs-services-section py-5">
        <div className="container">
          <div className="row g-4">
            {SERVICES.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="service-card d-flex flex-column justify-content-between">
                  <div>
                    <div className="service-header">
                      <div className="service-icon">
                        <i className={service.iconClass}></i>
                      </div>
                      <h5>{service.title}</h5>
                    </div>
                    <p className="service-desc">{service.desc}</p>
                    <ul className="service-points">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href={service.href} className="service-link mt-2">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
