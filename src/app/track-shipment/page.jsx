"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./track-shipment.css";

export default function TrackShipmentPage() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError("Please enter a valid Consignment / Tracking ID");
      setResult(null);
      return;
    }
    setError("");

    // Simulate different status based on input
    const lowerId = trackingId.toLowerCase().trim();
    if (lowerId === "demo" || lowerId.startsWith("srs")) {
      setResult({
        id: trackingId.toUpperCase(),
        origin: "Mumbai, Maharashtra",
        destination: "Bangalore, Karnataka",
        status: "In Transit",
        percentage: 65,
        lastLocation: "Hub Depot - Pune, MH",
        eta: "2026-07-02"
      });
    } else {
      setResult({
        id: trackingId.toUpperCase(),
        origin: "Pune, Maharashtra",
        destination: "Mumbai, Maharashtra",
        status: "Delivered",
        percentage: 100,
        lastLocation: "Recipient Address - Koparkhairne",
        eta: "Delivered on 2026-06-28"
      });
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
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
              <span>/</span>
              <span>Track Your Congsignment</span>
            </nav>
            <h1>Track Your Congsignment</h1>
            <p>Enter your tracking number below to get real-time updates on your consignment status and location.</p>
          </div>
        </div>
      </section>

      {/* Main Track Section */}
      <section className="srs-track-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="srs-track-card p-4 p-md-5 mb-4">
                <form onSubmit={handleTrack} className="srs-track-form">
                  <div className="mb-4">
                    <label htmlFor="trackingNumber" className="form-label srs-track-label">
                      Enter Tracking Number
                    </label>
                    <input
                      type="text"
                      className="form-control srs-track-input"
                      id="trackingNumber"
                      name="trackingNumber"
                      placeholder="e.g.123456"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      required
                    />
                    {error && <div className="text-danger small mt-2">{error}</div>}
                  </div>
                  <div className="d-flex flex-wrap gap-3 mt-3">
                    <button type="submit" className="btn btn-danger srs-track-btn text-white">
                      Track Now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger srs-track-btn-outline"
                      onClick={() => {
                        setTrackingId("");
                        setResult(null);
                        setError("");
                      }}
                    >
                      Clear
                    </button>
                  </div>
                  <p className="small text-muted mt-3 mb-0">
                    💡 Try typing <code>DEMO</code> or <code>SRS10024</code> to see consignment details.
                  </p>
                </form>
              </div>

              {/* Simulation Result */}
              {result && (
                <div className="srs-track-card p-4 p-md-5 mt-4">
                  <h4 className="fw-bold mb-3 text-dark">Consignment Details ({result.id})</h4>
                  <div className="row mb-3 g-2">
                    <div className="col-6">
                      <span className="small text-muted d-block">Origin</span>
                      <strong className="text-dark">{result.origin}</strong>
                    </div>
                    <div className="col-6">
                      <span className="small text-muted d-block">Destination</span>
                      <strong className="text-dark">{result.destination}</strong>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="small text-muted d-block mb-1">Status</span>
                    <span className={`badge ${result.status === "Delivered" ? "bg-success" : "bg-warning"} p-2 fs-6`}>
                      {result.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="small text-muted d-block mb-2">Progress ({result.percentage}%)</span>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: `${result.percentage}%` }}
                        aria-valuenow={result.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="row g-2">
                    <div className="col-6">
                      <span className="small text-muted d-block">Last Location</span>
                      <strong className="text-dark">{result.lastLocation}</strong>
                    </div>
                    <div className="col-6">
                      <span className="small text-muted d-block">ETA / Delivery</span>
                      <strong className="text-dark">{result.eta}</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
