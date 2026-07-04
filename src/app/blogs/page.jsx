"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./blogs.css";

export default function OurBlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const BLOGS = [
    {
      id: 14,
      slug: "hydraulic-loading-ramps-luxury-car-shifting",
      title: "Why Hydraulic Loading Ramps Are Essential for Luxury Car Shifting",
      img: "/assets/images/blog/blog_hydraulic_ramps.webp",
      day: "15",
      month: "Jun",
      year: "2026",
      category: "Guides",
      desc: "Low ground clearance vehicles require specialized handling. Discover why hydraulic flatbeds with low incline ramps are mandatory for loading premium sports cars and luxury sedans safely."
    },
    {
      id: 13,
      slug: "vehicle-transport-regulations-maharashtra",
      title: "Vehicle Transport Regulations in Maharashtra: Tolls, Permits, and Checkpoints",
      img: "/assets/images/blog/blog_maharashtra_rto.webp",
      day: "12",
      month: "May",
      year: "2026",
      category: "Documentation",
      desc: "Navigate state border compliance smoothly. Learn about GST E-Way Bills, RTO checks, toll protocols, and local transport regulations when shifting vehicles into Maharashtra."
    },
    {
      id: 12,
      slug: "car-damage-shifting-insurance-guide",
      title: "What to Do If Your Car Is Damaged During Relocation: Shifting Insurance Guide",
      img: "/assets/images/blog/blog_shifting_insurance.webp",
      day: "08",
      month: "Apr",
      year: "2026",
      category: "Safety Guide",
      desc: "Understand how transit insurance protects your investment. Learn the difference between standard comprehensive insurance and dedicated car carrier transit policies during highway transport."
    },
    {
      id: 11,
      slug: "weather-effects-highway-car-transport",
      title: "How Weather Conditions Affect Car Transport on National Highways",
      img: "/assets/images/blog/blog_highway_weather.webp",
      day: "20",
      month: "Mar",
      year: "2026",
      category: "Guides",
      desc: "High winds, Yamuna Expressway winter fog, and summer heatwaves present unique logistics challenges. Read how professional carrier captains protect open-deck vehicle loads in severe weather."
    },
    {
      id: 10,
      slug: "octroi-entry-taxes-shifting-cars-mumbai",
      title: "Understanding Octroi and Entry Taxes for Shifting Cars into Mumbai",
      img: "/assets/images/blog/blog_mumbai_octroi.webp",
      day: "14",
      month: "Feb",
      year: "2026",
      category: "Documentation",
      desc: "Planning a vehicle move to Mumbai? Learn about local municipal taxes, border clearances at Vapi and Dahisar checkpoints, and required tax filings to avoid unexpected fines."
    },
    {
      id: 9,
      slug: "flatbed-towing-express-car-courier",
      title: "Step-by-Step Guide to Booking Flatbed Towing for Express Car Courier",
      img: "/assets/images/blog/blog_flatbed_towing.webp",
      day: "18",
      month: "Jan",
      year: "2026",
      category: "Checklists",
      desc: "Need immediate delivery without consolidating cargo? Discover how single-car flatbed towing works, and how to inspect hydraulic winches and wheel-lashing configurations before loading."
    },
    {
      id: 8,
      slug: "mistakes-choosing-two-wheeler-shifting",
      title: "Common Mistakes When Choosing Local Packers and Movers for Two-Wheeler Shifting",
      img: "/assets/images/blog/blog_two_wheeler.webp",
      day: "05",
      month: "Dec",
      year: "2025",
      category: "Safety Guide",
      desc: "Avoid bent handles, broken mirror brackets, and fuel tank scrapes. Learn why standard furniture trucks are unsafe for bikes, and how dedicated wooden crates protect your two-wheeler."
    },
    {
      id: 7,
      slug: "shipping-electric-vehicles-evs-open-carriers",
      title: "A Complete Guide to Shipping Electric Vehicles (EVs) Safely in Open Carriers",
      img: "/assets/images/blog/blog_ev_shipping.webp",
      day: "10",
      month: "Nov",
      year: "2025",
      category: "Guides",
      desc: "Electric vehicles are heavy and feature floor-mounted battery packs. Understand the safety protocols, strap configurations, and chassis safety checklists required for EV highway transport."
    },
    {
      id: 6,
      slug: "gps-live-tracking-vehicle-relocation",
      title: "How GPS Live Tracking Restores Peace of Mind During Long-Distance Vehicle Relocation",
      img: "/assets/images/blog/blog_gps_tracking.webp",
      day: "02",
      month: "Oct",
      year: "2025",
      category: "Guides",
      desc: "Track your car along NH-48 in real-time. Learn how fleet GPS integration works, how alerts prevent delivery coordinate confusion, and why automated tracking is essential for vehicle safety."
    },
    {
      id: 5,
      slug: "how-to-avoid-car-carrier-scams-online",
      title: "How to Avoid Scams When Booking Car Carriers Online",
      img: "/assets/images/blog/blog1.webp",
      day: "15",
      month: "Sep",
      year: "2025",
      category: "Safety Guide",
      desc: "Shipping your car across India is a major decision. Unfortunately, vehicle logistics is prone to online listing scams. Learn how to safeguard your car and identify fake carriers."
    },
    {
      id: 4,
      slug: "checklist-preparing-your-car-for-shipping",
      title: "Ultimate Checklist: Preparing Your Car for Long-Distance Shipping",
      img: "/assets/images/blog/blog2.webp",
      day: "28",
      month: "Aug",
      year: "2025",
      category: "Checklists",
      desc: "Before your vehicle is loaded onto a multi-car trailer, proper preparation is necessary. Read our step-by-step prep list recommended by car carrier captains."
    },
    {
      id: 3,
      slug: "open-vs-enclosed-car-carriers-comparison",
      title: "Open vs. Enclosed Car Carriers: Selecting the Best Shifting Option",
      img: "/assets/images/blog/blog3.webp",
      day: "19",
      month: "Jul",
      year: "2025",
      category: "Guides",
      desc: "Compare open multi-car trailers vs. enclosed container shipping to select the best vehicle transport method for your budget and car class."
    },
    {
      id: 2,
      slug: "required-documentation-for-interstate-car-shipping",
      title: "Required Documentation for Interstate Car Shipping in India",
      img: "/assets/images/blog/blog4.webp",
      day: "30",
      month: "Jun",
      year: "2025",
      category: "Documentation",
      desc: "To ship a vehicle across state borders in India, compliance with RTO rules is mandatory. Ensure you have these documents ready prior to dispatch."
    },
    {
      id: 1,
      slug: "shipping-car-during-indian-monsoon-season",
      title: "Tips for Shipping Your Car During the Indian Monsoon Season",
      img: "/assets/images/blog/blog_monsoon_shipping.webp",
      day: "05",
      month: "Jun",
      year: "2025",
      category: "Checklists",
      desc: "Monsoon road conditions and water logging delay highway carriers. Read our expert tips on choosing enclosed trailers and applying paint protectant wax before shipment."
    }
  ];

  const categories = ["All", "Safety Guide", "Checklists", "Guides", "Documentation"];

  // Filter posts based on category selection AND search query
  const filteredBlogs = BLOGS.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Define featured post and remaining posts
  const featuredPost = BLOGS[0]; // Keep Post 14 as featured
  
  // Recent posts: exclude the featured post ONLY if we are viewing "All" and there is no search query active.
  const isDefaultView = activeCategory === "All" && searchQuery === "";
  const recentPosts = isDefaultView 
    ? filteredBlogs.filter(blog => blog.id !== featuredPost.id)
    : filteredBlogs;

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
              <span>Blogs</span>
            </nav>
            <h1>Knowledge Center</h1>
            <p>Expert guides, shifting checklists, and vehicle shipping insights from industry leaders</p>
          </div>
        </div>
      </section>

      {/* Blogs Listing Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            
            {/* Left Content Column */}
            <div className="col-lg-8">
              
              {/* Featured Article */}
              {isDefaultView && (
                <div className="mb-5">
                  <div className="featured-blog-badge mb-3">Featured Article</div>
                  <div className="card border-0 shadow-sm featured-blog-card">
                    <div className="row g-0">
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="position-relative overflow-hidden featured-blog-img-wrapper h-100">
                          <img src={featuredPost.img} alt={featuredPost.title} className="w-100 h-100 object-fit-cover" loading="lazy" />
                          <div className="position-absolute top-0 end-0 m-3">
                            <div className="badge bg-white text-dark shadow-sm blog-date-badge">
                              <div className="d-flex flex-column align-items-center py-2 px-3">
                                <span className="fs-4 fw-bold lh-1 text-danger">{featuredPost.day}</span>
                                <span className="text-uppercase small">{featuredPost.month}</span>
                                <span className="small text-muted">{featuredPost.year}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center p-4">
                        <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill align-self-start mb-3">
                          {featuredPost.category}
                        </span>
                        <h3 className="fw-bold mb-3">
                          <Link href={`/blog-view?id=${featuredPost.id}`} className="text-decoration-none text-dark hover-red">
                            {featuredPost.title}
                          </Link>
                        </h3>
                        <p className="text-muted small mb-4">{featuredPost.desc}</p>
                        <div>
                          <Link href={`/blog-view?id=${featuredPost.id}`} className="btn blog-read-btn px-4 py-2">
                            Read Featured Article <i className="bi bi-arrow-right ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category Navigation */}
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div className="d-flex flex-wrap gap-2 category-nav">
                    {categories.map((cat, idx) => (
                      <button
                        key={idx}
                        className={`btn category-btn px-3 py-2 ${activeCategory === cat ? "active" : ""}`}
                        onClick={() => {
                          setActiveCategory(cat);
                        }}
                      >
                        {cat === "All" ? "All Articles" : cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid of Articles */}
              <div className="row g-4">
                {recentPosts.length > 0 ? (
                  recentPosts.map((blog, idx) => (
                    <div key={idx} className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm blog-card">
                        {/* Image with Overlay Badge */}
                        <div className="position-relative overflow-hidden blog-img-wrapper">
                          <img src={blog.img} className="card-img-top" alt={blog.title} loading="lazy" />
                          <div className="position-absolute top-0 end-0 m-3">
                            <div className="badge bg-white text-dark shadow-sm blog-date-badge">
                              <div className="d-flex flex-column align-items-center py-2 px-3">
                                <span className="fs-4 fw-bold lh-1">{blog.day}</span>
                                <span className="text-uppercase small">{blog.month}</span>
                                <span className="small text-muted">{blog.year}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="card-body d-flex flex-column p-4">
                          <span className="badge bg-light text-muted align-self-start mb-2 px-2.5 py-1.5 border">
                            {blog.category}
                          </span>
                          {/* Blog Title */}
                          <h5 className="card-title mb-3 fw-bold lh-base">
                            <Link href={`/blog-view?id=${blog.id}`} className="text-decoration-none blog-title-link">
                              {blog.title}
                            </Link>
                          </h5>
                          <p className="text-muted small mb-4 line-clamp-3">
                            {blog.desc}
                          </p>

                          {/* Read More Button */}
                          <div className="mt-auto">
                            <Link href={`/blog-view?id=${blog.id}`} className="btn w-100 d-flex align-items-center justify-content-between blog-read-btn">
                              <span>Read Full Article</span>
                              <i className="bi bi-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5 bg-white rounded-3 shadow-sm border mt-4">
                    <i className="bi bi-search fs-1 text-muted d-block mb-3"></i>
                    <h5 className="fw-semibold">No Articles Found</h5>
                    <p className="text-muted small mb-0">We couldn't find any articles matching your search query or category filter.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="col-lg-4">
              
              {/* Search Widget */}
              <div className="card border-0 shadow-sm p-4 mb-4 blog-sidebar-card">
                <h5 className="blog-sidebar-title">Search Articles</h5>
                <div className="position-relative mt-3">
                  <input 
                    type="text" 
                    placeholder="Type keywords..." 
                    className="form-control blog-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <i className="bi bi-search position-absolute top-50 translate-middle-y end-0 me-3 text-muted"></i>
                </div>
              </div>

              {/* Shifting Quote CTA Widget */}
              <div className="card border-0 shadow-sm p-4 mb-4 blog-sidebar-card text-white blog-sidebar-cta-card">
                <h5 className="fw-bold mb-2">Need Shifting Help?</h5>
                <p className="small text-white-80 mb-4">Get verified vehicle carrier quotes in just 10 minutes. Safe, insured and damage-free transit.</p>
                <a href="tel:+918512000715" className="btn w-100 fw-bold py-2.5 rounded-pill d-flex align-items-center justify-content-center gap-2 blog-sidebar-call-btn">
                  <i className="bi bi-telephone-fill"></i> Call +91-8512000715
                </a>
                <Link href="/contacts" className="btn btn-outline-light w-100 fw-semibold py-2.5 rounded-pill mt-2">
                  Get Online Quote
                </Link>
                <div className="blog-cta-light-1"></div>
                <div className="blog-cta-light-2"></div>
              </div>

              {/* Popular Articles Widget */}
              <div className="card border-0 shadow-sm p-4 blog-sidebar-card">
                <h5 className="blog-sidebar-title">Popular Articles</h5>
                <ul className="list-unstyled mb-0 blog-popular-list mt-3">
                  {BLOGS.slice(0, 5).map((blog, idx) => (
                    <li key={idx} className="blog-popular-item">
                      <div className="blog-popular-thumb">
                        <img src={blog.img} alt={blog.title} loading="lazy" />
                      </div>
                      <div className="blog-popular-content">
                        <Link href={`/blog-view?id=${blog.id}`} className="blog-popular-title">
                          {blog.title}
                        </Link>
                        <span className="blog-popular-date">{blog.day} {blog.month}, {blog.year}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Conversion CTA Banner */}
          <div className="mt-5 pt-2">
            <div className="blog-cta-banner p-4 p-md-5 text-white position-relative overflow-hidden rounded-3 shadow-lg">
              <div className="row align-items-center position-relative z-1">
                <div className="col-lg-8 mb-4 mb-lg-0 text-center text-lg-start">
                  <h3 className="fw-bold mb-2">Planning to Transport Your Vehicle?</h3>
                  <p className="mb-0 text-white-80">Get a free, transparent car shifting quote from Maruti Trans today.</p>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-end">
                    <a href="tel:+918512000715" className="btn btn-light px-4 py-2.5 rounded-pill fw-bold text-danger d-flex align-items-center gap-2">
                      <i className="bi bi-telephone-fill"></i> +91-8512000715
                    </a>
                    <Link href="/contacts" className="btn btn-outline-light px-4 py-2.5 rounded-pill fw-semibold">
                      Get Online Quote
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog-cta-light-1"></div>
              <div className="blog-cta-light-2"></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
