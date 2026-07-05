"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-red-theme">
      {/* Main Footer */}
      <div className="container-fluid py-5">
        <div className="row g-4 px-3 px-lg-5">
          {/* Maruti Trans Corporate Office Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading mb-4">Maruti Trans</h5>

            <div className="ipg-logo-section mb-3">
              <img
                src="/assets/images/logo/logo_light.svg"
                alt="Maruti Trans Logo"
                className="footer-ipg-logo mb-2"
                style={{ maxHeight: "60px", width: "auto" }}
              />
            </div>

            <div className="footer-address mb-3">
              <h6 className="text-white fw-semibold mb-2">Registered Address:</h6>
              <p className="footer-text mb-0">
                New Amanpura Gali no 2 sector 6 Near by Shitla Mata Mander, Gurgaon, Haryana - 122001
              </p>
            </div>
          </div>

          {/* Our Navigation */}
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="footer-heading mb-4">Our Navigation</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/about" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/clients" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Our Featured Clients
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blogs" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Our Blogs
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/why-choose-us" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Why Choose Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Branches
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Our Gallery
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/location" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="footer-heading mb-4">Locations</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/contacts?origin=Haryana" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Haryana Shifting
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts?origin=CharkhiDadri" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Charkhi Dadri
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts?origin=Gurgaon" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Gurgaon
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts?origin=Faridabad" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Faridabad
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts?origin=Rohtak" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Rohtak
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts?origin=Gurgaon" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Gurgaon to Delhi NCR
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts?origin=CharkhiDadri" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Charkhi Dadri to Big Cities
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="footer-heading mb-4">Our Services</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/car-courier-service" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Car Courier Service
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/door-to-door-car-transport" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Door-to-Door Transport
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/car-relocation-service" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Car Relocation Service
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/car-carrier" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Car Carrier
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/car-transportation" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Car Transportation
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/single-car-carrier" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Single Car Carrier
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/luxury-car-transport-services" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Luxury Car Transport
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/enclosed-car-carrier-services" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Enclosed Car Carrier
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading mb-4">Contact Us</h5>
            <div className="footer-contact-item">
              <i className="bi bi-envelope"></i>
              <a href="mailto:info@marutitrans.com" className="text-decoration-none">
                <span className="footer-contact-label">info@marutitrans.com</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-telephone"></i>
              <a href="tel:+918512000715" className="text-decoration-none">
                <span className="footer-contact-label">8512000715</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-clock"></i>
              <span className="footer-contact-label">24/7</span>
            </div>

            {/* Social Info */}
            <h6 className="text-white fw-semibold mb-3">Social Media Info</h6>
            <div className="d-flex flex-wrap gap-2">
              <a href="#" className="footer-social-btn" title="Facebook" aria-label="Follow Maruti Trans on Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-social-btn" title="Twitter" aria-label="Follow Maruti Trans on Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="footer-social-btn" title="LinkedIn" aria-label="Follow Maruti Trans on LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="footer-social-btn" title="Instagram" aria-label="Follow Maruti Trans on Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top-btn ${showScrollBtn ? "show" : ""}`}
        onClick={scrollToTop}
        title="Back to Top"
        aria-label="Scroll back to top of the page"
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-fluid py-3 px-3 px-lg-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3 w-100">
            <div className="text-center text-lg-start">
              <p className="mb-0 footer-copyright">
                © 2026 Maruti Trans Packers & Movers. All Rights Reserved. &nbsp;&nbsp;&nbsp;&nbsp;
                Developed & SEO By{" "}
                <a href="https://cybertizegrowth.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                  Cybertize Growth
                </a>
              </p>
            </div>
            <div className="text-center text-lg-end">
              <div className="footer-bottom-links justify-content-center justify-content-lg-end">
                <Link href="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
                <span className="separator">|</span>
                <Link href="/cookie-policy" className="footer-bottom-link">Cookie Policy</Link>
                <span className="separator">|</span>
                <Link href="/terms-conditions" className="footer-bottom-link">Terms & Conditions</Link>
                <span className="separator">|</span>
                <Link href="/disclaimer" className="footer-bottom-link">Disclaimer</Link>
                <span className="separator">|</span>
                <Link href="/refund-policy" className="footer-bottom-link">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
