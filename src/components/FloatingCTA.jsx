"use client";

import React from "react";
import "./floationgCTA.css";

export default function FloatingCTA() {
  return (
    <>
      {/* Call FAB */}
      <div className="fab-wrapper fab-call">
        <a
          aria-label="Call"
          title="Call Us Now"
          href="tel:+919892325154"
          className="text-decoration-none"
        >
          <i className="bi bi-telephone-fill fab-icon"></i>
        </a>
      </div>

      {/* WhatsApp FAB */}
      <div className="fab-wrapper fab-whatsapp">
        <a
          aria-label="WhatsApp"
          title="Instant Quote – Just 30 Mins!"
          href="https://api.whatsapp.com/send?phone=+919892325154&text=Hello+sir,+I+am+interested+in+one+of+your+services"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <i className="bi bi-whatsapp fab-icon"></i>
        </a>
      </div>
    </>
  );
}
