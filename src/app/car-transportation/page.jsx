import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "../about/about.css";

export const metadata = {
  title: "Reliable Car Transportation Services | Maruti Trans Car Carrier Shifting",
  description: "Maruti Trans offers premium car transportation services across India. Safe, on-time, and insured vehicle relocation. Fill out our form for a free quote.",
  keywords: "car transportation, vehicle shipping, car relocation, auto transport service, car shifting",
};

export default function CarTransportationPage() {
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
              <span>Car Transportation</span>
            </nav>
            <h1>Car Transportation</h1>
            <p>Insured and Damage-Free Vehicle Shifting Networks Across All Major States</p>
          </div>
        </div>
      </section>

      {/* Main Form Container */}
      <div className="container mt-4 pt-2">
        <QuoteForm defaultFrom="Gurgaon, Haryana" layout="slider" />
      </div>

      {/* Content Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-danger mb-3 p-2 text-white">National Shifting</span>
              <h2 className="fw-bold text-dark mb-4">
                Pan-India Car Transportation Logistics
              </h2>
              <p className="text-muted leading-relaxed">
                Relocating your car between far-off states can be a major challenge. Maruti Trans offers state-of-the-art **Car Transportation** solutions that connect every corner of India. With branch networks running through Haryana, Maharashtra, Karnataka, Gujarat, and beyond, we guarantee prompt delivery and zero vehicle damage.
              </p>
              <p className="text-muted leading-relaxed">
                We handle the complete logistics cycle: route planning, highway toll clearances, state permits, carrier strapping, and final yard deliveries. Our transit solutions protect your vehicle from highway risks, wear-and-tear, and unnecessary mileage.
              </p>

              <h4 className="fw-semibold text-danger mt-4 mb-3">Why Transport Your Car With Maruti Trans?</h4>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Verified Transport Operations:</strong> Registered and certified auto hauling operations.</li>
                <li className="mb-2"><strong>All-India Coverage:</strong> Serving major hubs as well as tier-2/tier-3 cities.</li>
                <li className="mb-2"><strong>Transit Insurance:</strong> Fully covered transit plans to secure against rare road mishaps.</li>
                <li className="mb-2"><strong>Transparent Price Structure:</strong> No hidden costs or surprise fuel surcharges.</li>
              </ul>

              <Link href="/contacts" className="btn btn-danger px-4 py-2 mt-2">
                <i className="bi bi-telephone-fill me-2"></i>Get Shifting Quote
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="shadow-lg rounded-4 overflow-hidden">
                <img
                  src="/assets/images/services/car.webp"
                  alt="Car Transportation Logistics"
                  className="img-fluid w-100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
