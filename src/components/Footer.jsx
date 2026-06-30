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
          {/* Verified From IPG Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading mb-4">Verified From IPG</h5>

            <div className="ipg-logo-section mb-3">
              <img
                src="https://srspackersandmovers.com/assets/images/logo/IPG%20Logo.png"
                alt="IPG Logo"
                className="footer-ipg-logo mb-2"
              />
              <div className="ipg-badge">
                <span className="badge bg-success">Branch Code: IPG042</span>
              </div>
            </div>

            <div className="footer-address mb-3">
              <h6 className="text-white fw-semibold mb-2">Mumbai Address:</h6>
              <p className="footer-text mb-0">
                Plot no. 9, Shop no. 4, City inclave, sec.2a, koparkhairne Mumbai, Maharashtra 400709
              </p>
            </div>

            <div className="footer-address">
              <h6 className="text-white fw-semibold mb-2">Pune Office:</h6>
              <p className="footer-text mb-0">
                Shop No. 03, Ganadhish Residency, Behind Chul Muttan, Pimple Saudagar, Pimpri-Chinchwad, Pune, Maharashtra, 411027
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
                <Link href="/branches" className="footer-link">
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
                <Link href="/maharashtra-packers-and-movers" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Maharashtra
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/thane-packers-movers-maharashtra" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Thane
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/mumbai-packers-movers-maharashtra" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Mumbai
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/pune-packers-movers-maharashtra" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Pune
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/navi-mumbai-packers-movers-maharashtra" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Navi Mumbai
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/maharashtra/pune-to-other-city-services" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Pune to Pan-India Cities
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/maharashtra/mumbai-to-other-city-services" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Mumbai to Pan-India Cities
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="footer-heading mb-4">Our Services</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/local-moving" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Local Moving
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/domestic-moving" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Domestic Moving
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/international-moving" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>International Moving
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/insurance-moving" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Moving With Insurance
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/car-transportation-services" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Car Carriers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/delicate-item-movers" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Delicate Item Movers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/door-to-door" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Door to Door Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/residential-moving" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Residential Moving
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/logistic-services" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Logistic Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/loading-unloading" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Loading And Unloading
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/packing-unpacking" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Packing And Unpacking
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/warehousing" className="footer-link">
                  <i className="bi bi-chevron-right me-1"></i>Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading mb-4">Contact Us</h5>
            <div className="footer-contact-item">
              <i className="bi bi-envelope"></i>
              <a href="mailto:info@srspackersandmovers.com" className="text-decoration-none">
                <span className="footer-contact-label">info@srspackersandmovers.com</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-telephone"></i>
              <a href="tel:+919892325154" className="text-decoration-none">
                <span className="footer-contact-label">9892325154</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-clock"></i>
              <span className="footer-contact-label">24/7</span>
            </div>

            {/* Social Info */}
            <h6 className="text-white fw-semibold mb-3">Social Media Info</h6>
            <div className="d-flex flex-wrap gap-2">
              <a href="https://www.facebook.com/ShekhawatRelocation" className="footer-social-btn" title="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com/SrsPackers" className="footer-social-btn" title="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/srs-packers-and-movers/" className="footer-social-btn" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/srs_packersmovers" className="footer-social-btn" title="Instagram">
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
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-fluid py-3 px-3 px-lg-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0 footer-copyright">
                © 2026 SRS Packers & Movers. All Rights Reserved. &nbsp;&nbsp;&nbsp;&nbsp;
                Developed & SEO By{" "}
                <a href="https://www.groveus.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                  Groveus
                </a>
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <div className="footer-bottom-links">
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
