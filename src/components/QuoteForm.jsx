"use client";

import React, { useState, useEffect, useRef } from "react";
import "./QuoteForm.css";

export default function QuoteForm({ isModal = false, isServicePage = false, defaultFrom = "", defaultTo = "", layout = "standard", onClose = () => {} }) {
  const [step, setStep] = useState(1);
  const [moveType, setMoveType] = useState("");

  const defaultCity = defaultFrom ? defaultFrom.split(",")[0].trim() : "";
  const defaultState = defaultFrom ? defaultFrom.split(",")[1]?.trim() || "" : "";

  const defaultToCity = defaultTo ? defaultTo.split(",")[0].trim() : "";
  const defaultToState = defaultTo ? defaultTo.split(",")[1]?.trim() || "" : "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mf_input: defaultFrom || "",
    mfcity: defaultCity,
    mfstate: defaultState,
    mf_address: defaultFrom || "",
    mt_input: defaultTo || "",
    mtcity: defaultToCity,
    mtstate: defaultToState,
    mt_address: defaultTo || "",
    message: ""
  });

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showFromSug, setShowFromSug] = useState(false);
  const [showToSug, setShowToSug] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fromRef = useRef(null);
  const toRef = useRef(null);

  // Close suggestions on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setShowFromSug(false);
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setShowToSug(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMoveTypeSelect = (type) => {
    setMoveType(type);
  };

  const handleGetStarted = () => {
    if (!moveType) {
      alert("Please select a move type");
      return;
    }
    setStep(2);
  };

  // Autocomplete fetch for origin
  const handleFromChange = async (e) => {
    const val = e.target.value;
    setFormData({ ...formData, mf_input: val });
    if (val.trim().length < 2) {
      setFromSuggestions([]);
      return;
    }
    try {
      const res = await fetch("/api/places/autocomplete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: val })
      });
      const data = await res.json();
      setFromSuggestions(data);
      setShowFromSug(true);
    } catch (err) {
      console.error("Autocomplete error:", err);
    }
  };

  // Autocomplete fetch for destination
  const handleToChange = async (e) => {
    const val = e.target.value;
    setFormData({ ...formData, mt_input: val });
    if (val.trim().length < 2) {
      setToSuggestions([]);
      return;
    }
    try {
      const res = await fetch("/api/places/autocomplete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: val })
      });
      const data = await res.json();
      setToSuggestions(data);
      setShowToSug(true);
    } catch (err) {
      console.error("Autocomplete error:", err);
    }
  };

  const handleSelectFromCity = async (item) => {
    setShowFromSug(false);
    try {
      const res = await fetch("/api/places/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id })
      });
      const place = await res.json();
      
      let city = "", state = "";
      place.addressComponents.forEach((c) => {
        if (
          c.types.includes("locality") ||
          c.types.includes("administrative_area_level_2") ||
          c.types.includes("sublocality")
        ) {
          if (!city) city = c.longText;
        }
        if (c.types.includes("administrative_area_level_1")) {
          state = c.longText;
        }
      });

      setFormData({
        ...formData,
        mf_input: place.formattedAddress,
        mfcity: city,
        mfstate: state,
        mf_address: place.formattedAddress
      });
    } catch (err) {
      console.error("Details error:", err);
    }
  };

  const handleSelectToCity = async (item) => {
    setShowToSug(false);
    try {
      const res = await fetch("/api/places/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id })
      });
      const place = await res.json();
      
      let city = "", state = "";
      place.addressComponents.forEach((c) => {
        if (
          c.types.includes("locality") ||
          c.types.includes("administrative_area_level_2") ||
          c.types.includes("sublocality")
        ) {
          if (!city) city = c.longText;
        }
        if (c.types.includes("administrative_area_level_1")) {
          state = c.longText;
        }
      });

      setFormData({
        ...formData,
        mt_input: place.formattedAddress,
        mtcity: city,
        mtstate: state,
        mt_address: place.formattedAddress
      });
    } catch (err) {
      console.error("Details error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and mobile number are required!");
      return;
    }
    setIsLoading(true);
    setStatusMessage("Please wait...");
    try {
      const params = new URLSearchParams();
      params.append("name", formData.name);
      params.append("phone", formData.phone);
      params.append("mfcity", formData.mfcity);
      params.append("mfstate", formData.mfstate);
      params.append("mf_address", formData.mf_address);
      params.append("mtcity", formData.mtcity);
      params.append("mtstate", formData.mtstate);
      params.append("mt_address", formData.mt_address);
      params.append("message", formData.message + ` (Move Type: ${moveType})`);

      const res = await fetch("/api/contacts/booking", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      });
      const data = await res.text();
      if (data.trim() === "1") {
        setStatusMessage("success");
        setFormData({
          name: "",
          phone: "",
          mf_input: " ",
          mfcity: "",
          mfstate: "",
          mf_address: ", ",
          mt_input: "",
          mtcity: "",
          mtstate: "",
          mt_address: "",
          message: ""
        });
      } else {
        setStatusMessage("Failed to submit request. Please try again.");
      }
    } catch (err) {
      setStatusMessage("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isModal) {
    // Return modal version of form
    return (
      <form onSubmit={handleSubmit}>
        <div className="modal-body bg-light">
          {/* Row 1 */}
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label text-danger fw-semibold">
                <i className="bi bi-person-fill me-1"></i> Your Name
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label text-danger fw-semibold">
                <i className="bi bi-phone-fill me-1"></i> Mobile Number
              </label>
              <input
                type="tel"
                className="form-control shadow-sm"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row g-3 mb-3">
            <div className="col-md-6 position-relative" ref={fromRef}>
              <label className="form-label text-danger fw-semibold">
                <i className="bi bi-geo-alt-fill me-1"></i> From
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                value={formData.mf_input}
                onChange={handleFromChange}
                placeholder="Enter City"
                autoComplete="off"
              />
              {showFromSug && fromSuggestions.length > 0 && (
                <div className="list-group position-absolute w-100 search-suggestions-box">
                  {fromSuggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="list-group-item list-group-item-action"
                      onClick={() => handleSelectFromCity(item)}
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="col-md-6 position-relative" ref={toRef}>
              <label className="form-label text-danger fw-semibold">
                <i className="bi bi-pin-map-fill me-1"></i> To
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                value={formData.mt_input}
                onChange={handleToChange}
                placeholder="Enter City"
                autoComplete="off"
              />
              {showToSug && toSuggestions.length > 0 && (
                <div className="list-group position-absolute w-100 search-suggestions-box">
                  {toSuggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="list-group-item list-group-item-action"
                      onClick={() => handleSelectToCity(item)}
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="row g-3 mb-3">
            <div className="col-md-12">
              <label className="form-label text-danger fw-semibold">
                <i className="bi bi-chat-text-fill me-1"></i> Message
              </label>
              <textarea
                className="form-control shadow-sm"
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message"
              ></textarea>
            </div>
          </div>

          {statusMessage === "success" && (
            <div className="alert alert-success mt-3">
              <p style={{ color: "green", margin: 0 }}>
                Thank you! Your quote request successfully submitted. We'll respond soon.
              </p>
            </div>
          )}
          {statusMessage && statusMessage !== "success" && (
            <p style={{ color: "red" }} className="mt-3">
              {statusMessage}
            </p>
          )}
        </div>

        <div className="modal-footer d-flex justify-content-between bg-white">
          <button
            type="button"
            className="btn btn-outline-secondary px-4"
            onClick={() => {
              setFormData({
                name: "",
                phone: "",
                mf_input: " ",
                mfcity: "",
                mfstate: "",
                mf_address: ", ",
                mt_input: "",
                mtcity: "",
                mtstate: "",
                mt_address: "",
                message: ""
              });
              setStatusMessage("");
            }}
          >
            <i className="bi bi-arrow-counterclockwise me-1"></i> Clear
          </button>
          <button type="submit" className="btn btn-danger px-4" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    );
  }

  if (isServicePage) {
    return (
      <div className="slider-form-container shadow-lg rounded-4 text-start">
        <div className="slider-form-header px-3 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <span className="slider-form-title text-white">Get a Free Quote</span>
            <a href="tel:+919892325154" className="slider-form-phone-link fw-bold">
              <i className="bi bi-telephone-fill me-1"></i>9892325154
            </a>
          </div>
        </div>

        <div className="slider-form-body bg-white p-3">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-6 col-lg-4">
                <div className="form-floating position-relative">
                  <i className="bi bi-person-fill form-icon"></i>
                  <input
                    type="text"
                    className="form-control form-control-sm ps-5"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <label>Your Name</label>
                </div>
              </div>

              <div className="col-6 col-lg-4">
                <div className="form-floating position-relative">
                  <i className="bi bi-phone-fill form-icon"></i>
                  <input
                    type="tel"
                    className="form-control form-control-sm ps-5"
                    placeholder="Mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <label>Mobile</label>
                </div>
              </div>

              <div className="col-6 col-lg-4" ref={fromRef}>
                <div className="form-floating position-relative">
                  <i className="bi bi-geo-alt-fill form-icon"></i>
                  <input
                    type="text"
                    className="form-control ps-5"
                    placeholder="Enter City"
                    value={formData.mf_input}
                    onChange={handleFromChange}
                    autoComplete="off"
                  />
                  {showFromSug && fromSuggestions.length > 0 && (
                    <div className="list-group position-absolute w-100 search-suggestions-box" style={{ zIndex: 9999 }}>
                      {fromSuggestions.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className="list-group-item list-group-item-action"
                          onClick={() => handleSelectFromCity(item)}
                        >
                          {item.text}
                        </button>
                      ))}
                    </div>
                  )}
                  <label>Moving From</label>
                </div>
              </div>

              <div className="col-6 col-lg-4" ref={toRef}>
                <div className="form-floating position-relative">
                  <i className="bi bi-pin-map-fill form-icon"></i>
                  <input
                    type="text"
                    className="form-control ps-5"
                    placeholder="Enter City"
                    value={formData.mt_input}
                    onChange={handleToChange}
                    autoComplete="off"
                  />
                  {showToSug && toSuggestions.length > 0 && (
                    <div className="list-group position-absolute w-100 search-suggestions-box" style={{ zIndex: 9999 }}>
                      {toSuggestions.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className="list-group-item list-group-item-action"
                          onClick={() => handleSelectToCity(item)}
                        >
                          {item.text}
                        </button>
                      ))}
                    </div>
                  )}
                  <label>Moving To</label>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="form-floating position-relative">
                  <i className="bi bi-chat-text-fill form-icon textarea-icon"></i>
                  <textarea
                    rows="3"
                    className="form-control form-control-sm ps-5 pt-4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  <label style={{ top: "-10px" }}>Message (Optional)</label>
                </div>
              </div>

              <div className="col-12 d-flex gap-2">
                <button type="submit" className="btn btn-danger btn-sm mx-auto" disabled={isLoading}>
                  {isLoading ? "Please wait..." : "Submit Request"} <i className="bi bi-send-fill ms-1"></i>
                </button>
              </div>

              <div className="col-12">
                {statusMessage === "success" && (
                  <div className="alert alert-success text-center">
                    <p style={{ color: "green", margin: 0 }}>
                      Thank you! Your quote request successfully submitted. We'll respond soon.
                    </p>
                  </div>
                )}
                {statusMessage && statusMessage !== "success" && (
                  <p style={{ color: "red" }} className="text-center">
                    {statusMessage}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // If slider layout is requested, render the single-step route/city form directly
  if (layout === "slider") {
    return (
      <div className="slider-form-container shadow-lg rounded-4 overflow-hidden text-start">
        {/* Header */}
        <div className="slider-form-header px-3 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <span className="slider-form-title text-white">
              Get a Free Quote
            </span>
            <a href="tel:+919892325154" className="slider-form-phone-link fw-bold">
              <i className="bi bi-telephone-fill me-1"></i>9892325154
            </a>
          </div>
        </div>
        {/* Body */}
        <div className="slider-form-body bg-white p-3 border-start border-end border-bottom rounded-bottom-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Name */}
              <div className="col-6 col-lg-4">
                <div className="form-floating position-relative">
                  <i className="bi bi-person-fill form-icon"></i>
                  <input
                    type="text"
                    className="form-control form-control-sm ps-5"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <label>Your Name</label>
                </div>
              </div>

              {/* Phone */}
              <div className="col-6 col-lg-4">
                <div className="form-floating position-relative">
                  <i className="bi bi-phone-fill form-icon"></i>
                  <input
                    type="tel"
                    className="form-control form-control-sm ps-5"
                    placeholder="Mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <label>Mobile</label>
                </div>
              </div>

              {/* Moving From */}
              <div className="col-6 col-lg-4" ref={fromRef}>
                <div className="form-floating position-relative">
                  <i className="bi bi-geo-alt-fill form-icon"></i>
                  <input
                    type="text"
                    className="form-control ps-5"
                    placeholder="Enter City"
                    value={formData.mf_input}
                    onChange={handleFromChange}
                    autoComplete="off"
                  />
                  {showFromSug && fromSuggestions.length > 0 && (
                    <div className="list-group position-absolute w-100 search-suggestions-box" style={{ zIndex: 9999 }}>
                      {fromSuggestions.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className="list-group-item list-group-item-action"
                          onClick={() => handleSelectFromCity(item)}
                        >
                          {item.text}
                        </button>
                      ))}
                    </div>
                  )}
                  <label>Moving From</label>
                </div>
              </div>

              {/* Moving To */}
              <div className="col-6 col-lg-4" ref={toRef}>
                <div className="form-floating position-relative">
                  <i className="bi bi-pin-map-fill form-icon"></i>
                  <input
                    type="text"
                    className="form-control ps-5"
                    placeholder="Enter City"
                    value={formData.mt_input}
                    onChange={handleToChange}
                    autoComplete="off"
                  />
                  {showToSug && toSuggestions.length > 0 && (
                    <div className="list-group position-absolute w-100 search-suggestions-box" style={{ zIndex: 9999 }}>
                      {toSuggestions.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className="list-group-item list-group-item-action"
                          onClick={() => handleSelectToCity(item)}
                        >
                          {item.text}
                        </button>
                      ))}
                    </div>
                  )}
                  <label>Moving To</label>
                </div>
              </div>

              {/* Message */}
              <div className="col-12 col-lg-4">
                <div className="form-floating position-relative">
                  <i className="bi bi-chat-text-fill form-icon textarea-icon"></i>
                  <textarea
                    rows="3"
                    className="form-control form-control-sm ps-5 pt-4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  <label style={{ top: "-10px" }}>Message (Optional)</label>
                </div>
              </div>

              {/* Submit button */}
              <div className="col-12 d-flex gap-2">
                <button type="submit" className="btn btn-danger btn-sm mx-auto" disabled={isLoading}>
                  {isLoading ? "Please wait..." : "Submit Request"} <i className="bi bi-send-fill ms-1"></i>
                </button>
              </div>

              {/* Status alerts */}
              <div className="col-12 text-center mt-2">
                {statusMessage === "success" && (
                  <p style={{ color: "green", margin: 0 }} className="fw-semibold">
                    Thank you! Your quote request successfully submitted. We'll respond soon.
                  </p>
                )}
                {statusMessage && statusMessage !== "success" && (
                  <p style={{ color: "red", margin: 0 }} className="fw-semibold">
                    {statusMessage}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Otherwise, return homepage slider version
  return (
    <div className="quote-form-overlay">
      <div className="container">
        {step === 1 ? (
          <div className="quote-step active">
            <h1 className="quote-main-title">GET A FREE QUOTE</h1>
            <p className="quote-step-label">Select move type</p>

            <div className="move-type-selection">
              <div
                className={`move-type-option ${moveType === "domestic" ? "selected" : ""}`}
                onClick={() => handleMoveTypeSelect("domestic")}
              >
                <div className="move-type-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <p className="move-type-label">Domestic</p>
              </div>

              <div
                className={`move-type-option ${moveType === "international" ? "selected" : ""}`}
                onClick={() => handleMoveTypeSelect("international")}
              >
                <div className="move-type-icon">
                  <i className="bi bi-globe"></i>
                </div>
                <p className="move-type-label">International</p>
              </div>

              <div
                className={`move-type-option ${moveType === "local" ? "selected" : ""}`}
                onClick={() => handleMoveTypeSelect("local")}
              >
                <div className="move-type-icon">
                  <i className="bi bi-building"></i>
                </div>
                <p className="move-type-label">Local Shifting</p>
              </div>

              <div
                className={`move-type-option ${moveType === "Warehouse" ? "selected" : ""}`}
                onClick={() => handleMoveTypeSelect("Warehouse")}
              >
                <div className="move-type-icon">
                  <i className="bi bi-boxes"></i>
                </div>
                <p className="move-type-label">Warehouse</p>
              </div>
            </div>

            <button className="btn-get-started" onClick={handleGetStarted}>
              Get Quote Estimation
            </button>
          </div>
        ) : (
          <div className="quote-step active">
            <button className="btn-back" onClick={() => setStep(1)}>
              <i className="bi bi-chevron-left"></i> Back
            </button>

            <h1 className="quote-main-title mb-4">Complete Your Quote Request</h1>

            <div className="slider-form-container shadow-lg rounded-4 text-start">
              <div className="slider-form-header px-3 py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="slider-form-title text-white">Get a Free Quote</span>
                  <a href="tel:+919892325154" className="slider-form-phone-link fw-bold">
                    <i className="bi bi-telephone-fill me-1"></i>9892325154
                  </a>
                </div>
              </div>

              <div className="slider-form-body bg-white p-3">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-6 col-lg-4">
                      <div className="form-floating position-relative">
                        <i className="bi bi-person-fill form-icon"></i>
                        <input
                          type="text"
                          className="form-control form-control-sm ps-5"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                        <label>Your Name</label>
                      </div>
                    </div>

                    <div className="col-6 col-lg-4">
                      <div className="form-floating position-relative">
                        <i className="bi bi-phone-fill form-icon"></i>
                        <input
                          type="tel"
                          className="form-control form-control-sm ps-5"
                          placeholder="Mobile"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                        <label>Mobile</label>
                      </div>
                    </div>

                    <div className="col-6 col-lg-4" ref={fromRef}>
                      <div className="form-floating position-relative">
                        <i className="bi bi-geo-alt-fill form-icon"></i>
                        <input
                          type="text"
                          className="form-control ps-5"
                          placeholder="Enter City"
                          value={formData.mf_input}
                          onChange={handleFromChange}
                          autoComplete="off"
                        />
                        {showFromSug && fromSuggestions.length > 0 && (
                          <div className="list-group position-absolute w-100 search-suggestions-box" style={{ zIndex: 9999 }}>
                            {fromSuggestions.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                className="list-group-item list-group-item-action"
                                onClick={() => handleSelectFromCity(item)}
                              >
                                {item.text}
                              </button>
                            ))}
                          </div>
                        )}
                        <label>Moving From</label>
                      </div>
                    </div>

                    <div className="col-6 col-lg-4" ref={toRef}>
                      <div className="form-floating position-relative">
                        <i className="bi bi-pin-map-fill form-icon"></i>
                        <input
                          type="text"
                          className="form-control ps-5"
                          placeholder="Enter City"
                          value={formData.mt_input}
                          onChange={handleToChange}
                          autoComplete="off"
                        />
                        {showToSug && toSuggestions.length > 0 && (
                          <div className="list-group position-absolute w-100 search-suggestions-box" style={{ zIndex: 9999 }}>
                            {toSuggestions.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                className="list-group-item list-group-item-action"
                                onClick={() => handleSelectToCity(item)}
                              >
                                {item.text}
                              </button>
                            ))}
                          </div>
                        )}
                        <label>Moving To</label>
                      </div>
                    </div>

                    <div className="col-12 col-lg-4">
                      <div className="form-floating position-relative">
                        <i className="bi bi-chat-text-fill form-icon textarea-icon"></i>
                        <textarea
                          rows="3"
                          className="form-control form-control-sm ps-5 pt-4"
                          placeholder="Message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                        <label style={{ top: "-10px" }}>Message (Optional)</label>
                      </div>
                    </div>

                    <div className="col-12 d-flex gap-2">
                      <button type="submit" className="btn btn-danger btn-sm mx-auto" disabled={isLoading}>
                        {isLoading ? "Please wait..." : "Submit Request"} <i className="bi bi-send-fill ms-1"></i>
                      </button>
                    </div>

                    <div className="col-12">
                      {statusMessage === "success" && (
                        <div className="alert alert-success text-center">
                          <p style={{ color: "green", margin: 0 }}>
                            Thank you! Your quote request successfully submitted. We'll respond soon.
                          </p>
                        </div>
                      )}
                      {statusMessage && statusMessage !== "success" && (
                        <p style={{ color: "red" }} className="text-center">
                          {statusMessage}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
