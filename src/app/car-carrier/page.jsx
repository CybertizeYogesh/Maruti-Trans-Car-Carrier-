import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "../about/about.css";

export const metadata = {
  title: "Professional Car Carrier Services | Maruti Trans Car Carrier Shifting",
  description: "Secure and cost-effective open car carrier transport services across India. Safe mounting, robust locking, and professional logistics.",
  keywords: "car carrier, open car trailer, auto carrier, car shipping trailer, maruti trans car carrier",
};

export default function CarCarrierPage() {
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
              <span>Car Carrier</span>
            </nav>
            <h1>Car Carrier Services</h1>
            <p>High-Capacity Multi-Car Transport Vehicles for Secure and Affordable Relocations</p>
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
              <span className="badge bg-danger mb-3 p-2 text-white">Trailer Logistics</span>
              <h2 className="fw-bold text-dark mb-4">
                Open Multi-Car Carrier Trailer Transportation
              </h2>
              <p className="text-muted leading-relaxed">
                Our **Car Carrier** services are the most cost-effective and popular method for moving cars across long distances. Maruti Trans operates a fleet of heavy-duty, double-decker open trailers capable of shipping multiple vehicles simultaneously. This allows us to keep freight costs extremely low while maintaining excellent safety standards.
              </p>
              <p className="text-muted leading-relaxed">
                Each car is loaded onto the carrier using specialized steel ramps and secured with heavy-duty tire wheel-straps and chassis tie-downs. This keeps the vehicles completely rigid and prevents any rolling or vibration during transit over rough terrain.
              </p>

              <h4 className="fw-semibold text-danger mt-4 mb-3">Car Carrier Advantages:</h4>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Economic Choice:</strong> Ideal for family hatchbacks, sedans, and SUVs.</li>
                <li className="mb-2"><strong>Modern Fleet:</strong> Well-maintained multi-car trailers with trained drivers.</li>
                <li className="mb-2"><strong>Advanced Securement:</strong> Four-point wheel strapping system for zero vehicle movement.</li>
                <li className="mb-2"><strong>GPS Corridor Tracking:</strong> Know which highway route the carrier is traversing.</li>
              </ul>

              <Link href="/contacts" className="btn btn-danger px-4 py-2 mt-2">
                <i className="bi bi-telephone-fill me-2"></i>Get Carrier Rates
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="shadow-lg rounded-4 overflow-hidden">
                <img
                  src="/assets/images/services/domestic.webp"
                  alt="Car Carrier Trailer Maruti Trans"
                  className="img-fluid w-100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
