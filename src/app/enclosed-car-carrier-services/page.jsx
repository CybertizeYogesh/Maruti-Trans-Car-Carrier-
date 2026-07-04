import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "../about/about.css";

export const metadata = {
  title: "Enclosed Car Carrier Services | Maruti Trans Car Carrier Shifting",
  description: "Secure enclosed car transport services across India. Ultimate protection from weather, road debris, and dust. Request a quote.",
  keywords: "enclosed car carrier, covered car transport, enclosed vehicle trailer, maruti trans enclosed",
};

export default function EnclosedCarCarrierServicesPage() {
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
              <span>Enclosed Car Carrier</span>
            </nav>
            <h1>Enclosed Car Carrier Services</h1>
            <p>Hard-Sided Covered Transport Trailers for Total Environmental and Road Risk Protection</p>
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
              <span className="badge bg-danger mb-3 p-2 text-white">Covered Shipping</span>
              <h2 className="fw-bold text-dark mb-4">
                Total Protection in Covered Enclosed Carriers
              </h2>
              <p className="text-muted leading-relaxed">
                When you ship your vehicle on an open trailer, it is exposed to wind, rain, road dust, small pebbles, and weather elements. For vehicle owners seeking absolute security, Maruti Trans operates a premium fleet of **Enclosed Car Carriers**. These hard-sided covered transport container trailers seal your automobile in a secure, climate-protected compartment.
              </p>
              <p className="text-muted leading-relaxed">
                This service is highly recommended for vintage cars, premium SUVs, luxury sedans, electric vehicles, and brand new cars. Your vehicle is protected from public view, vandalism, and environmental debris from loading terminal to doorstep delivery.
              </p>

              <h4 className="fw-semibold text-danger mt-4 mb-3">Enclosed Shipping Benefits:</h4>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Environmental Protection:</strong> Shields car from sun, rain, storm, and snow.</li>
                <li className="mb-2"><strong>Zero Road Debris:</strong> Prevents stone chips, dust, and highway grime.</li>
                <li className="mb-2"><strong>Maximum Security:</strong> Lockable hard-walled containers prevent unauthorized access.</li>
                <li className="mb-2"><strong>Premium Strapping Systems:</strong> Soft tie-downs secure the vehicle by wheels.</li>
              </ul>

              <Link href="/contacts" className="btn btn-danger px-4 py-2 mt-2">
                <i className="bi bi-telephone-fill me-2"></i>Request Covered Carrier
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="shadow-lg rounded-4 overflow-hidden">
                <img
                  src="/assets/images/services/insurance.webp"
                  alt="Enclosed Car Carrier Shifting"
                  className="img-fluid w-100" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
