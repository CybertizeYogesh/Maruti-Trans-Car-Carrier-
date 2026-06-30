"use client";

import React from "react";
import Link from "next/link";

export default function RefundPolicyPage() {
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
              <span>Refund Policy</span>
            </nav>
            {/* Title */}
            <h1>Refund Policy</h1>
            {/* Subtitle */}
            <p>Learn about cancellations, refunds, and payment terms</p>
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="refund-policy-section mt-2 py-5 bg-light">
        <div className="container">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4 p-md-5">
              <h2 className="mb-4 text-danger fw-bold">Refund Policy – SRS Packers And Movers</h2>

              <p className="text-muted lead">
                This Refund Policy outlines the terms under which refunds may be processed 
                for services booked with SRS Packers And Movers. We maintain transparency 
                and fairness in all financial transactions.
              </p>

              <hr className="my-4" />

              <h4 className="mt-4 fw-bold text-dark">Cancellation Policy</h4>
              <ul className="ps-3 text-muted">
                <li className="mb-2">Cancellations must be informed prior to dispatch of manpower and vehicles.</li>
                <li className="mb-2">Last-minute cancellations may incur operational charges.</li>
                <li className="mb-2">Rescheduling requests are subject to availability.</li>
              </ul>

              <h4 className="mt-4 fw-bold text-dark">Refund Eligibility</h4>
              <p className="text-muted">
                Refunds are considered only if services are not delivered due to operational 
                issues from our side. Partial refunds may apply if preparations such as 
                manpower booking or transport blocking have already been completed.
              </p>

              <h4 className="mt-4 fw-bold text-dark">Non-Refundable Situations</h4>
              <p className="text-muted">
                Once packing or relocation work has commenced, advance payments may not 
                be refundable. Any deductions will be clearly communicated to the customer.
              </p>

              <h4 className="mt-4 fw-bold text-dark">Refund Processing Time</h4>
              <p className="text-muted mb-0">
                Approved refunds are processed within 7–10 working days via the original 
                mode of payment after internal verification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
