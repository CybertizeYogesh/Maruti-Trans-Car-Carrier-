"use client";

import React from "react";
import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            {/* Breadcrumb */}
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
              <span>/</span>
              <span>Terms & Conditions</span>
            </nav>
            {/* Title */}
            <h1>Terms & Conditions</h1>
            {/* Subtitle */}
            <p>Read the service terms and conditions of SRS Packers and Movers</p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="terms-conditions-section mt-2 py-5 bg-light">
        <div className="container">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4 p-md-5">
              <h2 className="mb-4 text-danger fw-bold">Terms and Conditions – SRS Packers And Movers</h2>

              <p className="text-muted lead">
                These Terms and Conditions define the rules and regulations for using the services 
                of SRS Packers And Movers. By booking our relocation, packing, transportation, 
                or logistics services, you agree to comply with the policies stated below.
              </p>

              <hr className="my-4" />

              <h4 className="mt-4 fw-bold text-dark">Service Coverage</h4>
              <p className="text-muted">
                We provide household shifting, office relocation, vehicle transportation, 
                loading, unloading, packing, and storage solutions. Service charges depend 
                on distance, volume of goods, labor requirements, floor level, and additional services requested.
              </p>

              <h4 className="mt-4 fw-bold text-dark">Booking and Confirmation</h4>
              <ul className="ps-3 text-muted">
                <li className="mb-2">Advance payment may be required to confirm your booking.</li>
                <li className="mb-2">Customers must provide accurate pickup and delivery addresses.</li>
                <li className="mb-2">Any changes in relocation date should be informed in advance.</li>
                <li className="mb-2">Incorrect information may lead to delays or additional charges.</li>
              </ul>

              <h4 className="mt-4 fw-bold text-dark">Payment Terms</h4>
              <p className="text-muted">
                The remaining balance must be cleared before or at the time of delivery 
                unless otherwise agreed. Payments can be made through bank transfer, UPI, 
                or other approved payment methods.
              </p>

              <h4 className="mt-4 fw-bold text-dark">Damage and Liability</h4>
              <p className="text-muted">
                While we ensure careful handling of goods, liability for damages is limited 
                to declared value and agreed service conditions. Customers are encouraged 
                to discuss insurance options for high-value items.
              </p>

              <h4 className="mt-4 fw-bold text-dark">Policy Updates</h4>
              <p className="text-muted mb-0">
                SRS Packers And Movers reserves the right to update these terms at any time. 
                Continued use of our services indicates acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
