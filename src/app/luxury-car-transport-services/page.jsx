import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "../about/about.css";

export const metadata = {
  title: "Luxury & Sports Car Shifting | Maruti Trans Car Carrier Shifting",
  description: "Specialized luxury and sports car transport services across India. Premium hydraulic loading, protective covers, and white-glove transport handling.",
  keywords: "luxury car transport, sports car shipping, vintage car transport, premium auto transport",
};

export default function LuxuryCarTransportServicesPage() {
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
              <Link href="/services">Services</Link>
              <span>/</span>
              <span>Luxury Car Transport</span>
            </nav>
            <h1>Luxury Car Transport Services</h1>
            <p>White-Glove Shifting Solutions for Premium, Antique, and Sports Vehicles</p>
          </div>
        </div>
      </section>

      {/* Main Form Container */}
      <div className="container mt-4 pt-2">
        <QuoteForm defaultFrom="Charkhi Dadri, Haryana" layout="slider" />
      </div>

      {/* Content Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-danger mb-3 p-2 text-white">White-Glove Care</span>
              <h2 className="fw-bold text-dark mb-4">
                Elite Vehicle Shipping for High-End Automobiles
              </h2>
              <p className="text-muted leading-relaxed">
                Supercars, luxury sedans, and classic antique cars require a level of care that exceeds standard auto shipping. Maruti Trans offers elite **Luxury Car Transport Services** specifically engineered for high-value vehicles. We deploy premium enclosed vehicle haulers and flatbeds equipped with specialized air-ride suspension.
              </p>
              <p className="text-muted leading-relaxed">
                We use soft-touch wheel straps rather than traditional metal chains, ensuring zero risk of scratch or structural stress. Your vehicle is wrapped in soft protective sheets to guard against dust and humidity, and handled by senior driver captains with years of luxury hauling experience.
              </p>

              <h4 className="fw-semibold text-danger mt-4 mb-3">Our Luxury Care Standards:</h4>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Air-Ride Suspension Trucks:</strong> Smooth, shock-absorbing transport conditions.</li>
                <li className="mb-2"><strong>Hydraulic Race-Ramps:</strong> Scrape-free loading for low ground clearance vehicles.</li>
                <li className="mb-2"><strong>Protective Wraps & Covers:</strong> Dust-proof, breathable covers during transit.</li>
                <li className="mb-2"><strong>Highest Insurance Valuation:</strong> High-limit transit insurance certificates.</li>
              </ul>

              <Link href="/contacts" className="btn btn-danger px-4 py-2 mt-2">
                <i className="bi bi-telephone-fill me-2"></i>Book Luxury Transport
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="shadow-lg rounded-4 overflow-hidden">
                <img
                  src="/assets/images/services/international.webp"
                  alt="Luxury Car Transport Maruti Trans"
                  className="img-fluid w-100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
