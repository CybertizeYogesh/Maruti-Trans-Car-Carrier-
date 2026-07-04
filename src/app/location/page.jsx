import React from "react";
import Link from "next/link";
import "./location.css";

export const metadata = {
  title: "All India Service Maruti Trans Car Carrier Shifting",
  description: "Maruti Trans Car Carrier Shifting offers premium relocation, home shifting, and office moving services in Maharashtra and across major states in India.",
  keywords: "Maruti Trans Packers & Movers locations, home shifting states, office moving cities, all india packers movers",
};

export default function LocationPage() {
  const STATES = [
    { name: "India", img: "/assets/images/state/india.webp", path: "/all-india-branches" },
    { name: "Maharashtra", img: "/assets/images/state/maharashtra.webp", path: "/maharashtra-packers-and-movers" },
    { name: "Gujarat", img: "/assets/images/state/gujarat.webp", path: "/gujarat-packers-and-movers" },
    { name: "Telangana", img: "/assets/images/state/telangana.webp", path: "/telangana-packers-and-movers" },
    { name: "Madhya Pradesh", img: "/assets/images/state/madhyapradesh.webp", path: "/madhya-pradesh-packers-and-movers" },
    { name: "Rajasthan", img: "/assets/images/state/Rajasthan.webp", path: "/rajasthan-packers-and-movers" },
    { name: "Punjab", img: "/assets/images/state/punjab.webp", path: "/punjab-packers-and-movers" },
    { name: "Jaipur", img: "/assets/images/state/jaipur.webp", path: "/jaipur-packers-and-movers" },
    { name: "Karnataka", img: "/assets/images/state/karnataka.webp", path: "/karnataka-packers-and-movers" },
    { name: "Andhra Pradesh", img: "/assets/images/state/karnataka.webp", path: "/andhra-pradesh-packers-and-movers" }
  ];

  const CITIES = [
    { name: "Gurgaon to Major Cities", img: "/assets/images/gallery/gallery1.webp", path: "/contacts?origin=Gurgaon" },
    { name: "Faridabad to Major Cities", img: "/assets/images/gallery/gallery3.webp", path: "/contacts?origin=Faridabad" },
    { name: "Rohtak to Major Cities", img: "/assets/images/gallery/gallery6.webp", path: "/contacts?origin=Rohtak" },
    { name: "Charkhi Dadri to Major Cities", img: "/assets/images/services/car.webp", path: "/contacts?origin=CharkhiDadri" }
  ];

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
              <span>Locations We Serve</span>
            </nav>
            <h1>Locations We Serve</h1>
            <p>Reliable, damage-free household and corporate moving network across India</p>
          </div>
        </div>
      </section>

      {/* Locations We Serve Content */}
      <div className="st-service-area py-5">
        <div className="container">
          {/* Section 1: All India States */}
          <div className="row">
            <div className="col-lg-12">
              <div className="st__section__title mb-5 text-center">
                <span className="display-6 fw-bold text-danger">All India Services</span>
                <span className="circle"></span>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center mb-5">
            {STATES.map((state, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 col-sm-6 col-6">
                <Link href={state.path} className="text-decoration-none">
                  <div className="st__service__box position-relative">
                    <div className="st__service__thumb">
                      <img
                        src={state.img}
                        alt={state.name}
                        loading="lazy"
                        className="img-fluid"
                      />
                    </div>
                    <div className="st__service__content">
                      <span className="state_title">
                        {state.name}
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Section 2: Haryana City Routes */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="st__section__title mb-5 text-center">
                <span className="display-6 fw-bold text-danger">Haryana</span>
                <span className="circle"></span>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {CITIES.map((city, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 col-sm-6 col-6">
                <Link href={city.path} className="text-decoration-none">
                  <div className="st__service__box position-relative">
                    <div className="st__service__thumb">
                      <img
                        src={city.img}
                        alt={city.name}
                        loading="lazy"
                        className="img-fluid"
                      />
                    </div>
                    <div className="st__service__content">
                      <span className="state_title">
                        {city.name}
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
