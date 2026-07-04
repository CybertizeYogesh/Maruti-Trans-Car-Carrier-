import React from "react";
import Link from "next/link";
import "./services.css";

export const metadata = {
  title: "Vehicle Relocation Services | Maruti Trans Car Carrier Shifting",
  description: "Explore our range of secure car transport services: open carriers, single flatbeds, enclosed trailer logistics, door-to-door shifting, and express courier options.",
  keywords: "car transport services, car shifting Haryana, enclosed car carrier, flatbed towing, auto logistics",
};

const SERVICES = [
  {
    title: "Car Courier Service",
    iconClass: "bi bi-send",
    desc: "Express state-to-state vehicle shipping with optimized corridor routing for quick delivery.",
    href: "/car-courier-service",
    points: ["Fast highway routing", "GPS updates", "Transit protection", "Prompt schedules"]
  },
  {
    title: "Door-to-Door Car Transport",
    iconClass: "bi bi-house-check",
    desc: "Convenient home pickup and direct doorstep delivery with certified check sheets.",
    href: "/door-to-door-car-transport",
    points: ["Zero mileage driven", "Pre-inspection report", "Hydraulic loaders", "No terminal visits"]
  },
  {
    title: "Car Relocation Service",
    iconClass: "bi bi-arrow-left-right",
    desc: "Coordinated vehicle shifting for corporate transfers and family relocations.",
    href: "/car-relocation-service",
    points: ["Corporate packages", "Border tax paperwork", "Fleet transitions", "Storage yards"]
  },
  {
    title: "Car Carrier",
    iconClass: "bi bi-truck",
    desc: "Economical multi-car shipping via open double-decker carrier trailers.",
    href: "/car-carrier",
    points: ["Budget-friendly", "Modern trailer fleet", "Four-point straps", "Trained driver captains"]
  },
  {
    title: "Car Transportation",
    iconClass: "bi bi-speedometer2",
    desc: "Reliable highway transportation solutions for automobiles across India.",
    href: "/car-transportation",
    points: ["All-India network", "Insured transit", "Certified drivers", "No hidden charges"]
  },
  {
    title: "Single Car Carrier",
    iconClass: "bi bi-truck-flatbed",
    desc: "Dedicated flatbed towing vehicles for rapid, private individual car shipping.",
    href: "/single-car-carrier",
    points: ["Express timelines", "Hydraulic beds", "No intermediate stops", "Dedicated transport"]
  },
  {
    title: "Luxury Car Shifting",
    iconClass: "bi bi-star-fill",
    desc: "White-glove handling with soft wheel straps for sports and premium brands.",
    href: "/luxury-car-transport-services",
    points: ["Air-ride trucks", "Race-loading ramps", "Protective wraps", "High-limit insurance"]
  },
  {
    title: "Enclosed Car Carrier",
    iconClass: "bi bi-shield-lock",
    desc: "Covered hard-sided trailer containers protecting cars from environmental debris.",
    href: "/enclosed-car-carrier-services",
    points: ["Shields from weather", "Zero road grime", "Lockable trailers", "Ultimate security"]
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
            <p>Comprehensive Vehicle Relocation and Shifting Solutions Across India</p>
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
