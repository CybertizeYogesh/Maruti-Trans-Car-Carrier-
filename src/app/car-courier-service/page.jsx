import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "../about/about.css";

export const metadata = {
  title: "Express Car Courier Service | Maruti Trans Car Carrier Shifting",
  description: "Get lightning-fast, secure car courier services across India with Maruti Trans. We offer door-to-door vehicle delivery, real-time tracking, and verified transit insurance.",
  keywords: "car courier service, express vehicle shipping, quick car delivery, maruti trans car courier",
};

export default function CarCourierServicePage() {
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
              <span>Car Courier Service</span>
            </nav>
            <h1>Express Car Courier Service</h1>
            <p>On-Time, Rapid Door-to-Door Vehicle Delivery System Across India</p>
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
              <span className="badge bg-danger mb-3 p-2 text-white">Express Transit</span>
              <h2 className="fw-bold text-dark mb-4">
                Fast & Secure Car Courier Services by Maruti Trans
              </h2>
              <p className="text-muted leading-relaxed">
                When you need your vehicle transported in the shortest possible time, our **Car Courier Service** is the ideal solution. Designed for individuals, car showrooms, and corporate clients, this service prioritizes speed and security. We utilize customized single-car tow trucks and rapid multicar carrier routing to ensure your car reaches its destination within tight deadlines.
              </p>
              <p className="text-muted leading-relaxed">
                Our drivers are professionally trained in automobile handling, and every shipment is backed by a robust insurance claim policy. From initial inspection at pickup to digital signature delivery at your doorstep, Maruti Trans ensures a seamless, transparent experience.
              </p>

              <h4 className="fw-semibold text-danger mt-4 mb-3">Key Features of Our Car Courier Service:</h4>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Express Route Scheduling:</strong> Quickest transit times via direct highway corridors.</li>
                <li className="mb-2"><strong>Real-time Tracking Updates:</strong> Receive live GPS updates of your vehicle's location.</li>
                <li className="mb-2"><strong>Transit Insurance Cover:</strong> Complete peace of mind with extensive damage protection.</li>
                <li className="mb-2"><strong>Showroom & Luxury Car Care:</strong> Specialized loading plates for low-clearance vehicles.</li>
              </ul>

              <Link href="/contacts" className="btn btn-danger px-4 py-2 mt-2">
                <i className="bi bi-telephone-fill me-2"></i>Contact Our Experts
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="shadow-lg rounded-4 overflow-hidden">
                <img
                  src="/assets/images/services/car.webp"
                  alt="Car Courier Delivery Maruti Trans"
                  className="img-fluid w-100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
