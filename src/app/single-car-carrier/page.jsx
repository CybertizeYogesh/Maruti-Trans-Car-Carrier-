import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "../about/about.css";

export const metadata = {
  title: "Premium Single Car Carrier Towing | Maruti Trans Car Carrier Shifting",
  description: "Dedicated single-vehicle transport services across India. Single car flatbed carriers for fast, secure, and individual vehicle shipping.",
  keywords: "single car carrier, flatbed car tow, premium vehicle shipping, maruti trans single carrier",
};

export default function SingleCarCarrierPage() {
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
              <span>Single Car Carrier</span>
            </nav>
            <h1>Single Car Carrier</h1>
            <p>Dedicated Flatbed Towing Vehicles for Rapid Individual Car Shipping</p>
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
              <span className="badge bg-danger mb-3 p-2 text-white">Dedicated Fleet</span>
              <h2 className="fw-bold text-dark mb-4">
                Dedicated Single-Vehicle Flatbed Towing
              </h2>
              <p className="text-muted leading-relaxed">
                If you are shipping a luxury sedan, sports coupe, or need an urgent vehicle transfer without waiting for multi-car trailers to fill up, our **Single Car Carrier** service is designed for you. Maruti Trans deploys modern flatbed tow vehicles dedicated solely to transporting your individual car directly from point A to point B.
              </p>
              <p className="text-muted leading-relaxed">
                This service ensures the fastest possible transit time, as the truck operates on a direct, non-stop route customized for your delivery. The flatbed configuration is equipped with hydraulic platforms and soft strapping systems to prevent chassis scrapes or structural stress.
              </p>

              <h4 className="fw-semibold text-danger mt-4 mb-3">Single Carrier Advantages:</h4>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Express Timelines:</strong> Direct, custom routing for immediate delivery.</li>
                <li className="mb-2"><strong>Hydraulic Loading Bed:</strong> Ideal for low-profile, modified, or vintage cars.</li>
                <li className="mb-2"><strong>No Intermediate Stops:</strong> Your vehicle stays locked on the flatbed from pickup to delivery.</li>
                <li className="mb-2"><strong>Premium Protection:</strong> Dedicated attention from a professional two-man driver crew.</li>
              </ul>

              <Link href="/contacts" className="btn btn-danger px-4 py-2 mt-2">
                <i className="bi bi-telephone-fill me-2"></i>Book Single Flatbed
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="shadow-lg rounded-4 overflow-hidden">
                <img
                  src="/assets/images/services/door.webp"
                  alt="Single Car Carrier Flatbed Maruti Trans"
                  className="img-fluid w-100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
