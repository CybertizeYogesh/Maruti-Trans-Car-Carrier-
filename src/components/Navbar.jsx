"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="top-nav-bar d-none d-md-flex">
        <div className="container-fluid px-3 px-lg-5">
          <div className="d-flex justify-content-between align-items-center w-100">
            <nav className="top-nav-links ms-auto">
              <ul className="list-unstyled d-flex align-items-center gap-2 gap-md-3 mb-0">
                <li>
                  <Link href="/about" className="top-nav-link">
                    <i className="bi bi-building me-1"></i>
                    <span>Company History</span>
                  </Link>
                </li>
                <li className="top-nav-separator">|</li>
                <li>
                  <Link href="/services" className="top-nav-link">
                    <i className="bi bi-grid-3x3-gap-fill me-1"></i>
                    <span>Company Services</span>
                  </Link>
                </li>
                <li className="top-nav-separator">|</li>
                <li>
                  <Link href="/faq" className="top-nav-link">
                    <i className="bi bi-question-circle-fill me-1"></i>
                    <span>FAQ</span>
                  </Link>
                </li>
                <li className="top-nav-separator">|</li>
                <li>
                  <Link href="/testimonials" className="top-nav-link">
                    <i className="bi bi-chat-dots-fill me-1"></i>
                    <span>Feedback</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar navbar navbar-expand-lg sticky-top">
        <div className="container-fluid px-3 px-lg-5">
          <Link href="/" className="navbar-brand p-3">
            <img
              src="https://srspackersandmovers.com/assets/images/logo/logo.png"
              alt="SRS Packers and Movers"
              className="main-nav-logo"
            />
          </Link>

          <div className="top-mega-menu d-none d-xl-flex align-items-center ms-auto me-4">
            <ul className="mega-menu-list mb-0">
              <li className="mega-item">
                <a href="#">
                  INTERNATIONAL MOVING <i className="bi bi-chevron-down"></i>
                </a>
                <div className="mega-dropdown">
                  <Link href="/international-moving">International Moving Services</Link>
                  <Link href="/navi-mumbai-packers-movers-maharashtra">Navi Mumbai packers movers</Link>
                </div>
              </li>
              <li className="mega-item">
                <a href="#">
                  DOMESTIC MOVING <i className="bi bi-chevron-down"></i>
                </a>
                <div className="mega-dropdown">
                  <Link href="/domestic-moving">Domestic Relocation</Link>
                  <Link href="/thane-packers-movers-maharashtra">Thane packers movers</Link>
                </div>
              </li>
              <li className="mega-item">
                <a href="#">
                  CORPORATE MOVING <i className="bi bi-chevron-down"></i>
                </a>
                <div className="mega-dropdown">
                  <Link href="/residential-moving">Residential Moving</Link>
                  <Link href="/services">Corporate Shifting</Link>
                </div>
              </li>
              <li className="mega-item">
                <a href="#">
                  SERVICES <i className="bi bi-chevron-down"></i>
                </a>
                <div className="mega-dropdown">
                  <Link href="/packing-unpacking">Packing & Unpacking</Link>
                  <Link href="/loading-unloading">Loading & Unloading</Link>
                  <Link href="/warehousing">Warehousing Services</Link>
                  <Link href="/car-transportation-services">Car Transportation</Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-2 gap-md-3">
            <Link href="/track-shipment" className="btn-track d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-2"></i>
              <span className="d-none d-sm-inline">Track Your Shipment</span>
              <span className="d-inline d-sm-none">Track</span>
            </Link>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn btn-quote d-none d-lg-inline-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#qteModal"
            >
              <span>Request a Quote</span>
            </a>
            <button
              className={`hamburger-menu-btn ${mobileMenuOpen ? "active" : ""}`}
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas Fullscreen Mobile Menu Drawer */}
      <div
        className={`offcanvas offcanvas-end fullscreen-menu ${
          mobileMenuOpen ? "show" : ""
        }`}
        tabIndex="-1"
        style={{ visibility: mobileMenuOpen ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header border-bottom py-3 px-4">
          <Link href="/" className="d-flex align-items-center text-decoration-none" onClick={toggleMobileMenu}>
            <img
              src="https://srspackersandmovers.com/assets/images/logo/logo.png"
              alt="SRS Packers and Movers"
              className="fullscreen-menu-logo"
            />
          </Link>
          <button
            type="button"
            className="btn-close-custom"
            onClick={toggleMobileMenu}
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i> <span className="ms-2">Close</span>
          </button>
        </div>

        <div className="offcanvas-body p-4 p-lg-5">
          <div className="container-fluid">
            <div className="row g-4">
              {/* Navigation Column */}
              <div className="col-12 col-md-6 col-lg-3">
                <h5 className="menu-section-heading">
                  <i className="bi bi-compass-fill me-2"></i>Our Navigation
                </h5>
                <ul className="list-unstyled menu-section-list mt-3">
                  <li>
                    <Link href="/about" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/clients" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Our Featured Clients
                    </Link>
                  </li>
                  <li>
                    <Link href="/why-choose-us" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Why Choose Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Our Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/branches" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Branches
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacts" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Our Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/location" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Locations
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Locations Column */}
              <div className="col-12 col-md-6 col-lg-3">
                <h5 className="menu-section-heading">
                  <i className="bi bi-geo-alt-fill me-2"></i>Locations
                </h5>
                <ul className="list-unstyled menu-section-list mt-3">
                  <li>
                    <Link href="/maharashtra-packers-and-movers" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Maharashtra
                    </Link>
                  </li>
                  <li>
                    <Link href="/thane-packers-movers-maharashtra" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Thane
                    </Link>
                  </li>
                  <li>
                    <Link href="/mumbai-packers-movers-maharashtra" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Mumbai
                    </Link>
                  </li>
                  <li>
                    <Link href="/pune-packers-movers-maharashtra" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Pune
                    </Link>
                  </li>
                  <li>
                    <Link href="/navi-mumbai-packers-movers-maharashtra" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Navi Mumbai
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div className="col-12 col-md-6 col-lg-3">
                <h5 className="menu-section-heading">
                  <i className="bi bi-truck me-2"></i>Our Services
                </h5>
                <ul className="list-unstyled menu-section-list mt-3">
                  <li>
                    <Link href="/local-moving" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Local Moving
                    </Link>
                  </li>
                  <li>
                    <Link href="/domestic-moving" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Domestic Moving
                    </Link>
                  </li>
                  <li>
                    <Link href="/international-moving" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>International Moving
                    </Link>
                  </li>
                  <li>
                    <Link href="/insurance-moving" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Moving With Insurance
                    </Link>
                  </li>
                  <li>
                    <Link href="/car-transportation-services" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Car Carriers
                    </Link>
                  </li>
                  <li>
                    <Link href="/delicate-item-movers" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Delicate Item Movers
                    </Link>
                  </li>
                  <li>
                    <Link href="/door-to-door" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Door to Door Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/residential-moving" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Residential Moving
                    </Link>
                  </li>
                  <li>
                    <Link href="/logistic-services" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Logistic Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/loading-unloading" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Loading And Unloading
                    </Link>
                  </li>
                  <li>
                    <Link href="/packing-unpacking" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Packing And Unpacking
                    </Link>
                  </li>
                  <li>
                    <Link href="/warehousing" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chevron-right me-2"></i>Warehousing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Actions Column */}
              <div className="col-12 col-md-6 col-lg-3">
                <h5 className="menu-section-heading">
                  <i className="bi bi-lightning-fill me-2"></i>Quick Actions
                </h5>
                <ul className="list-unstyled menu-section-list mt-3">
                  <li>
                    <Link href="/" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-house-door-fill me-2"></i>Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/track-shipment" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-geo-alt-fill me-2"></i>Track Shipment
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-question-circle-fill me-2"></i>FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="menu-section-link" onClick={toggleMobileMenu}>
                      <i className="bi bi-chat-dots-fill me-2"></i>Feedback
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+919892325154" className="menu-section-link menu-section-link-cta">
                      <i className="bi bi-telephone-fill me-2"></i>Call Now: +91 9892325154
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Contact & Social Section */}
            <div className="row mt-4 pt-4 border-top">
              <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <span className="text-muted fw-semibold text-uppercase small">Contact:</span>
                  <a href="tel:+919892325154" className="btn btn-outline-dark">
                    <i className="bi bi-telephone-fill text-danger me-2"></i>+91 9892325154
                  </a>
                  <a href="mailto:info@srspackersandmovers.com" className="btn btn-outline-dark">
                    <i className="bi bi-envelope-fill text-danger me-2"></i>info@srspackersandmovers.com
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-end gap-3">
                  <span className="text-muted fw-semibold text-uppercase small">Follow Us:</span>
                  <div className="d-flex gap-2">
                    <a href="https://www.facebook.com/ShekhawatRelocation" className="social-icon-btn" aria-label="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://x.com/SrsPackers" className="social-icon-btn" aria-label="Twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/srs_packersmovers" className="social-icon-btn" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/srs-packers-and-movers/" className="social-icon-btn" aria-label="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for open mobile offcanvas */}
      {mobileMenuOpen && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
}
