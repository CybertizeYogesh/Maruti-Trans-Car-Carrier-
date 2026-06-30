import React from "react";
import Link from "next/link";
import "./clients.css";

export const metadata = {
  title: "Our Clients | Trusted by Leading Businesses & Individuals - SRS Packers And Movers",
  description: "We have partnered with some of India's leading organizations to deliver seamless corporate relocation services. Trusted by leading brands across industries.",
  keywords: "srs packers and movers clients, corporate shifting partnerships, trusted moving company clients",
};

export default function OurClientsPage() {
  const CLIENTS = [
    { name: "Justdial", img: "https://srspackersandmovers.com/assets/images/clients/justdial.png" },
    { name: "Big Bazaar", img: "https://srspackersandmovers.com/assets/images/clients/bigbazaar.png" },
    { name: "Godrej", img: "https://srspackersandmovers.com/assets/images/clients/godrej.png" },
    { name: "Infosys", img: "https://srspackersandmovers.com/assets/images/clients/infosys.png" },
    { name: "ICICI Bank", img: "https://srspackersandmovers.com/assets/images/clients/icici.png" },
    { name: "IBM", img: "https://srspackersandmovers.com/assets/images/clients/ibm.png" },
    { name: "NTPC", img: "https://srspackersandmovers.com/assets/images/clients/ntpc.png" },
    { name: "Philips", img: "https://srspackersandmovers.com/assets/images/clients/philips.png" },
    { name: "Samsung", img: "https://srspackersandmovers.com/assets/images/clients/samsung.png" },
    { name: "Vodafone", img: "https://srspackersandmovers.com/assets/images/clients/vodafone.png" },
    { name: "Yes Bank", img: "https://srspackersandmovers.com/assets/images/clients/yesbank.png" },
    { name: "Coca Cola", img: "https://srspackersandmovers.com/assets/images/clients/cocacola.png" }
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
              <span>Clients</span>
            </nav>
            <h1>Our Featured Clients</h1>
            <p>We are Proud to Partner with India's Leading Corporate Brands and Organizations</p>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="trusted-clients-section py-5">
        <div className="container">
          {/* Section Heading */}
          <div className="row mb-5">
            <div className="col text-center">
              <div className="section-badge">
                <span className="badge-dot"></span>
                <h2 className="section-title d-inline-block mx-3">
                  Our Trusted Featured Clients
                </h2>
                <span className="badge-dot"></span>
              </div>
              <p className="section-subtitle mt-2">
                Trusted by leading brands across industries
              </p>
            </div>
          </div>

          {/* Clients Grid */}
          <div className="row g-4 justify-content-center">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="client-card">
                  <img src={client.img} alt={client.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
