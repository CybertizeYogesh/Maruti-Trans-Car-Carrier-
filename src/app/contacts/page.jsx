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
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
              <span>/</span>
              <span>Contact Us</span>
            </nav>
            <h1>Contact Us</h1>
            <p>Get in touch with us for free moving quotes and local shifting support</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="srs-contact-section py-5">
        <div className="container">
          <div className="row g-4 align-items-start justify-content-center">
            
            {/* Left Content (Info) */}
            <div className="col-lg-5">
              <span className="contact-badge">Get In Touch</span>
              <h2 className="contact-title">
                We'd Love to <span>Hear From You</span>
              </h2>
              <p className="contact-text">
                Have questions about your move? Our team is ready to help you plan
                the perfect relocation.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h6>Contact Number</h6>
                    <p>
                      <a href="tel:+919892325154" className="text-decoration-none text-muted">
                        +91 9892325154
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h6>Email Us</h6>
                    <p>
                      <a href="mailto:info@srspackersandmovers.com" className="text-decoration-none text-muted">
                        info@srspackersandmovers.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h6>Mumbai Office Address</h6>
                    <p>
                      Plot no. 9, Shop no. 4, City inclave, sec.2a, koparkhairne Mumbai, Maharashtra 400709
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-building"></i>
                  </div>
                  <div>
                    <h6>Pune Office Address</h6>
                    <p>
                      Shop No. 03, Ganadhish Residency, Behind Chul Muttan, Pimple Saudagar, Pimpri-Chinchwad, Pune, Maharashtra 411027
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="contact-form-card">
                <h4>Request a Free Quote</h4>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label class="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    {statusMessage === "success" && (
                      <div className="col-12">
                        <div className="alert alert-success m-0">
                          <p style={{ color: "green", margin: 0 }}>
                            Thank you! Your quote request successfully submitted. We'll respond soon.
                          </p>
                        </div>
                      </div>
                    )}

                    {statusMessage && statusMessage !== "success" && (
                      <div className="col-12">
                        <p style={{ color: "red", margin: 0 }}>
                          {statusMessage}
                        </p>
                      </div>
                    )}

                    <div className="col-md-6">
                      <button type="submit" className="submit-btn w-100" disabled={isLoading}>
                        <i className="bi bi-send"></i> {isLoading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
