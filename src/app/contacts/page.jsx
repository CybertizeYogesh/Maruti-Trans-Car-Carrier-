"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./contacts.css";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and phone number are required!");
      return;
    }
    setIsLoading(true);
    setStatusMessage("Please wait...");
    try {
      const params = new URLSearchParams();
      params.append("name", formData.name);
      params.append("phone", formData.phone);
      params.append("message", formData.message + ` (Email: ${formData.email})`);

      const res = await fetch("/api/contacts/booking", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      });
      const data = await res.text();
      if (data.trim() === "1") {
        setStatusMessage("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatusMessage("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
              <span className="text-white-50">Contact Us</span>
            </nav>
            <h1 className="fw-bold text-white mb-3" style={{ fontSize: "3rem" }}>Contact Our Team</h1>
            <p className="lead text-white-80">
              Get in touch with Maruti Trans for free vehicle shifting quotes, booking assistance, and cargo tracking updates.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="srs-contact-section py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch justify-content-center">
            
            {/* Left Content (Info) */}
            <div className="col-lg-5 d-flex">
              <div className="card w-100 border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white d-flex flex-column justify-content-between">
                <div>
                  <span className="contact-badge px-3 py-1 rounded-pill small fw-bold">Get In Touch</span>
                  <h2 className="contact-title fw-bold text-dark mt-3 mb-4" style={{ fontSize: "2rem" }}>
                    We'd Love to <span className="text-danger">Hear From You</span>
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    Have questions about interstate car carrier trailer schedules, rates, or booking documents? Our customer support desk is active 24/7.
                  </p>

                  <div className="contact-info d-flex flex-column gap-4">
                    <div className="info-item d-flex gap-3 align-items-start">
                      <div className="info-icon bg-danger text-white rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: "48px", height: "48px", flexShrink: 0 }}>
                        <i className="bi bi-telephone fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold text-dark mb-1">Helpline Phone</h6>
                        <p className="m-0">
                          <a href="tel:+918512000715" className="text-decoration-none text-muted fw-semibold">
                            +91 8512000715
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="info-item d-flex gap-3 align-items-start">
                      <div className="info-icon bg-danger text-white rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: "48px", height: "48px", flexShrink: 0 }}>
                        <i className="bi bi-envelope fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold text-dark mb-1">Email Us</h6>
                        <p className="m-0">
                          <a href="mailto:info@marutitrans.com" className="text-decoration-none text-muted fw-semibold">
                            info@marutitrans.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="info-item d-flex gap-3 align-items-start">
                      <div className="info-icon bg-danger text-white rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: "48px", height: "48px", flexShrink: 0 }}>
                        <i className="bi bi-geo-alt fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold text-dark mb-1">Registered Head Office Address</h6>
                        <p className="text-muted small leading-relaxed m-0">
                          Building/Premises: New Amanpura<br />
                          Street: Gali no 2, Sector 6<br />
                          Nearby Landmark: Near by Shitla Mata Mander<br />
                          City/District: Gurgaon<br />
                          State: Haryana<br />
                          PIN Code: 122001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <h6 className="fw-bold text-dark mb-2">Social Connections</h6>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}><i className="bi bi-facebook"></i></a>
                    <a href="#" className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}><i className="bi bi-twitter"></i></a>
                    <a href="#" className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}><i className="bi bi-instagram"></i></a>
                    <a href="#" className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-5 d-flex">
              <div className="card w-100 border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <h4 className="fw-bold text-dark mb-4">Request a Free Quote</h4>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">Full Name *</label>
                      <input
                        type="text"
                        className="form-control py-2 px-3 border rounded-3"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control py-2 px-3 border rounded-3"
                        placeholder="Enter 10 digit number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">Email Address</label>
                      <input
                        type="email"
                        className="form-control py-2 px-3 border rounded-3"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">Shifting Requirements</label>
                      <textarea
                        className="form-control py-2 px-3 border rounded-3"
                        rows="4"
                        placeholder="Please describe your shifting requirement (e.g. Maruti Swift from Charkhi Dadri to Pune)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    {statusMessage === "success" && (
                      <div className="col-12">
                        <div className="alert alert-success m-0 rounded-3">
                          <p style={{ color: "green", margin: 0, fontWeight: "600" }}>
                            Thank you! Your quote request successfully submitted. We'll respond soon.
                          </p>
                        </div>
                      </div>
                    )}

                    {statusMessage && statusMessage !== "success" && (
                      <div className="col-12">
                        <p style={{ color: "red", margin: 0, fontWeight: "600" }}>
                          {statusMessage}
                        </p>
                      </div>
                    )}

                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-danger w-100 py-3 rounded-3 fw-bold text-white shadow-sm transition-all" disabled={isLoading} style={{ backgroundColor: "#a10000" }}>
                        <i className="bi bi-send me-2"></i> {isLoading ? "Sending..." : "Submit Quote Request"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>

          {/* Google Map Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                <div className="card-header bg-white border-bottom p-4">
                  <h5 className="fw-bold text-dark m-0"><i className="bi bi-map-fill text-danger me-2"></i>Registered Head Office Location (Haryana)</h5>
                </div>
                <div className="p-0">
                  <iframe
                    title="Map of Maruti Trans registered Haryana office"
                    src="https://maps.google.com/maps?q=28.4786584,77.0300265&z=16&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
