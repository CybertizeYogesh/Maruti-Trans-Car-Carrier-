import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "../about/about.css";

export const metadata = {
  title: "Professional Car Relocation Service | Maruti Trans Car Carrier Shifting",
  description: "Seamless and stress-free car relocation services for corporate transfers and residential shifting across India. Secure handling and transit cover included.",
  keywords: "car relocation service, vehicle shifting, corporate car relocation, household car moving",
};

export default function CarRelocationServicePage() {
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
              <span>Car Relocation Service</span>
            </nav>
            <h1>Car Relocation Service</h1>
            <p>End-to-End Automobile Relocation for Home Shifting and Corporate Transfers</p>
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
              <span className="badge bg-danger mb-3 p-2 text-white">Relocation Division</span>
              <h2 className="fw-bold text-dark mb-4">
                Structured Vehicle Relocation Across India
              </h2>
              <p className="text-muted leading-relaxed">
                Whether you are relocating for a new job or moving your family to another state, Maruti Trans offers highly organized **Car Relocation Services**. We understand that your car is one of your most valuable assets, and relocating it requires careful coordination. We sync our vehicle transport schedule with your household move, so both arrive at your destination in perfect harmony.
              </p>
              <p className="text-muted leading-relaxed">
                We handle corporate fleet relocations, government employee transfer shipments, and private household vehicle moves. Our team takes care of state border permissions, toll passes, and standard paperwork to make your relocation hassle-free.
              </p>

              <h4 className="fw-semibold text-danger mt-4 mb-3">Our Relocation Advantage:</h4>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Corporate Transfer Packages:</strong> Optimized rates and billing for corporate employees.</li>
                <li className="mb-2"><strong>Hassle-free Documentation:</strong> We assist with transit clearances and tax papers.</li>
                <li className="mb-2"><strong>Secure Storage Facilities:</strong> Safe parking yards available if you need to delay delivery.</li>
                <li className="mb-2"><strong>End-to-End Handling:</strong> Managed from loading to unloading by verified crews.</li>
              </ul>

              <Link href="/contacts" className="btn btn-danger px-4 py-2 mt-2">
                <i className="bi bi-telephone-fill me-2"></i>Discuss Your Move
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="shadow-lg rounded-4 overflow-hidden">
                <img
                  src="/assets/images/services/logistic.webp"
                  alt="Car Relocation Service Maruti Trans"
                  className="img-fluid w-100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
