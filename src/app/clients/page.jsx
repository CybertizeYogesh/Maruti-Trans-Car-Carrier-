import React from "react";
import Link from "next/link";
import {
  TataMotorsLogo,
  MahindraLogo,
  MarutiSuzukiLogo,
  HyundaiLogo,
  ToyotaLogo,
  HondaLogo,
  WiproLogo,
  InfosysLogo,
  VipPremiumLogo,
  EnclosedSecureLogo
} from "@/components/ClientLogos";
import "./clients.css";

export const metadata = {
  title: "Our Clients | Trusted by Leading Automobile Brands & Corporates - Maruti Trans Car Carrier",
  description: "Maruti Trans is the trusted vehicle transport partner for India's leading auto manufacturers, dealerships, and corporate relocation accounts. View our featured client shifting cases.",
  keywords: "Maruti Trans clients, car transport partners, dealership logistics, corporate vehicle shifting, tata motors transport",
};

export default function OurClientsPage() {
  const CLIENTS = [
    { name: "Tata Motors Dealerships", logo: <TataMotorsLogo /> },
    { name: "Mahindra Shifting Operations", logo: <MahindraLogo /> },
    { name: "Maruti Suzuki Dealerships", logo: <MarutiSuzukiLogo /> },
    { name: "Hyundai Motors Shifting", logo: <HyundaiLogo /> },
    { name: "Toyota India Shifting", logo: <ToyotaLogo /> },
    { name: "Honda India Shifting", logo: <HondaLogo /> },
    { name: "Wipro Shifting Contracts", logo: <WiproLogo /> },
    { name: "Infosys Shifting Contracts", logo: <InfosysLogo /> },
    { name: "VIP Premium Cars", logo: <VipPremiumLogo /> },
    { name: "Enclosed Secure Transit", logo: <EnclosedSecureLogo /> }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero text-center py-5">
        <div className="container">
          <div className="page-hero-content mx-auto" style={{ maxWidth: "800px" }}>
            <nav className="page-breadcrumb d-flex justify-content-center gap-2 mb-3">
              <Link href="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
              <span>/</span>
              <span className="text-white-50">Clients</span>
            </nav>
            <h1 className="fw-bold text-white mb-3" style={{ fontSize: "3rem" }}>Our Featured Clients</h1>
            <p className="lead text-white-80">
              We are proud to manage vehicle logistics and employee car shipping contracts for India's leading auto brands and corporate partners.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="trusted-clients-section py-5">
        <div className="container">
          {/* Section Heading */}
          <div className="row mb-5">
            <div className="col text-center">
              <div className="section-badge d-flex justify-content-center align-items-center gap-2">
                <span className="badge-dot"></span>
                <h2 className="section-title d-inline-block mx-2 fw-bold text-dark" style={{ fontSize: "2.2rem" }}>
                  Corporate Shifting Partnerships
                </h2>
                <span className="badge-dot"></span>
              </div>
              <p className="section-subtitle mt-2 text-muted">
                Trusted by leading car manufacturers, dealers, and corporate accounts across India
              </p>
            </div>
          </div>

          {/* Clients Grid */}
          <div className="row g-4 justify-content-center">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="client-card shadow-sm rounded-4 p-4 bg-white d-flex align-items-center justify-content-center border" style={{ minHeight: "140px" }}>
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
