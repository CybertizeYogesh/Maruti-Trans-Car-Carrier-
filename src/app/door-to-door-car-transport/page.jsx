import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "../about/about.css";

export const metadata = {
  title: "Door-to-Door Car Transport Services | Maruti Trans Car Carrier Shifting",
  description: "Secure, reliable, and hassle-free door-to-door car transport services in India. We pick up from your home and deliver safely to your destination. Get a quote today.",
  keywords: "door to door car transport, home pickup car transport, vehicle shifting india, maruti trans door to door",
};

export default function DoorToDoorCarTransportPage() {
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
              <span>Door-to-Door Car Transport</span>
            </nav>
            <h1>Door-to-Door Car Transport</h1>
            <p>Direct Home Pickup and Safe Step-by-Step Delivery at Your New Destination</p>
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
              <span className="badge bg-danger mb-3 p-2 text-white">Full-Service Logistics</span>
              <h2 className="fw-bold text-dark mb-4">
                Stress-Free Home Shifting for Your Vehicle
              </h2>
              <p className="text-muted leading-relaxed">
                With Maruti Trans, you do not have to worry about driving your vehicle to a shipping terminal or terminal yard. Our signature **Door-to-Door Car Transport** service handles everything at your doorstep. We pick up your automobile directly from your current residence and deliver it directly to your new address.
              </p>
              <p className="text-muted leading-relaxed">
                We perform a detailed inspection of the car before loading, documenting its condition to guarantee total safety. Using hydraulic loaders and premium tie-down straps, we ensure that your vehicle stays perfectly secure throughout its journey.
              </p>

              <h4 className="fw-semibold text-danger mt-4 mb-3">Why Choose Door-to-Door Delivery?</h4>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Zero Mileage Driven:</strong> Save wear and tear on your car.</li>
                <li className="mb-2"><strong>Complete Convenience:</strong> No terminal visits or taxi rides needed.</li>
                <li className="mb-2"><strong>Pre-Shifting Inspection:</strong> Formal condition report provided at pickup and delivery.</li>
                <li className="mb-2"><strong>24/7 Support:</strong> Stay updated via customer helpline and live tracking.</li>
              </ul>

              <Link href="/contacts" className="btn btn-danger px-4 py-2 mt-2">
                <i className="bi bi-telephone-fill me-2"></i>Request Booking
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="shadow-lg rounded-4 overflow-hidden">
                <img
                  src="/assets/images/services/door.webp"
                  alt="Door to Door Car Delivery"
                  className="img-fluid w-100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
