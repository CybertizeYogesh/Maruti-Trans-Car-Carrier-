"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./track-shipment.css";

export default function TrackShipmentPage() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    const cleanId = trackingId.trim();

    if (!cleanId) {
      setError("Please enter a valid Consignment / Tracking ID");
      setResult(null);
      return;
    }

    setError("");
    setResult(null);
    setIsLoading(true);

    try {
      const res = await fetch(`/api/track?id=${encodeURIComponent(cleanId)}`);
      const data = await res.json();

      if (res.ok) {
        setResult(data);
      } else {
        setError(data.error || "Failed to retrieve consignment status. Please verify the ID.");
      }
    } catch (err) {
      console.error("Tracking query error:", err);
      setError("Network connection issue. Please check your connection and try again.");
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
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
              <span>/</span>
              <span>Track Your Consignment</span>
            </nav>
            <h1>Track Your Consignment</h1>
            <p>Enter your tracking number below to get real-time updates on your consignment status and location.</p>
          </div>
        </div>
      </section>

      {/* Main Track Section */}
      <section className="srs-track-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="srs-track-card p-4 p-md-5 mb-4 shadow-sm border-0 rounded-4 bg-white">
                <form onSubmit={handleTrack} className="srs-track-form">
                  <div className="mb-4">
                    <label htmlFor="trackingNumber" className="form-label srs-track-label fw-semibold text-dark">
                      Enter Tracking Number
                    </label>
                    <input
                      type="text"
                      className="form-control srs-track-input shadow-sm"
                      id="trackingNumber"
                      name="trackingNumber"
                      placeholder="e.g. 123456"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      disabled={isLoading}
                      required
                    />
                    {error && <div className="text-danger small mt-2 fw-medium"><i className="bi bi-exclamation-triangle-fill me-1"></i>{error}</div>}
                  </div>
                  <div className="d-flex flex-wrap gap-3 mt-3">
                    <button type="submit" className="btn btn-danger srs-track-btn text-white px-4 py-2 fw-medium shadow-sm" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Tracking...
                        </>
                      ) : (
                        "Track Now"
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger srs-track-btn-outline px-4 py-2 fw-medium shadow-sm"
                      onClick={() => {
                        setTrackingId("");
                        setResult(null);
                        setError("");
                      }}
                      disabled={isLoading}
                    >
                      Clear
                    </button>
                  </div>
                  <p className="small text-muted mt-3 mb-0">
                    💡 Try typing <code>DEMO</code>, <code>MARUTITRANS10024</code>, or <code>DELIVERED</code> to see consignment details.
                  </p>
                </form>
              </div>

              {/* Simulation Result */}
              {result && (
                <div className="srs-track-card p-4 p-md-5 mt-4 shadow-sm border-0 rounded-4 bg-white">
                  <h4 className="fw-bold mb-4 text-dark border-bottom pb-2">Consignment Details ({result.id})</h4>
                  
                  <div className="row mb-4 g-3">
                    <div className="col-6">
                      <span className="small text-muted d-block mb-1">Origin</span>
                      <strong className="text-dark fs-5">{result.origin}</strong>
                    </div>
                    <div className="col-6">
                      <span className="small text-muted d-block mb-1">Destination</span>
                      <strong className="text-dark fs-5">{result.destination}</strong>
                    </div>
                  </div>

                  <div className="mb-4 d-flex align-items-center gap-3">
                    <div>
                      <span className="small text-muted d-block mb-1">Status</span>
                      <span className={`badge ${result.status === "Delivered" ? "bg-success" : "bg-warning text-dark"} px-3 py-2 fs-6 fw-medium rounded-pill`}>
                        {result.status === "Delivered" ? (
                          <i className="bi bi-check-circle-fill me-1"></i>
                        ) : (
                          <i className="bi bi-truck me-1"></i>
                        )}
                        {result.status}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="small text-muted d-block mb-2">Progress ({result.percentage}%)</span>
                    <div className="progress" style={{ height: "12px", borderRadius: "6px" }}>
                      <div
                        className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: `${result.percentage}%` }}
                        aria-valuenow={result.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="Delivery progress bar"
                      ></div>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-6">
                      <span className="small text-muted d-block mb-1">Last Location</span>
                      <strong className="text-dark">{result.lastLocation}</strong>
                    </div>
                    <div className="col-6">
                      <span className="small text-muted d-block mb-1">ETA / Delivery</span>
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
