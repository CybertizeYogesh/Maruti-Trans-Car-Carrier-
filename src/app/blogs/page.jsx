import React from "react";
import Link from "next/link";
import "./blogs.css";

export const metadata = {
  title: "Official Blog of SRS Packers And Movers India",
  description: "Read our latest articles to learn best practices for packing, shifting household goods safely, choosing transit insurance, and avoiding common relocation mistakes.",
  keywords: "packers and movers blog, relocation tips, home shifting guides, safe moving advice",
};

export default function OurBlogsPage() {
  const BLOGS = [
    {
      id: 5,
      slug: "how-to-avoid-fraud-and-scams-while-relocating",
      title: "How to Avoid Fraud and Scams While Relocating",
      img: "https://srspackersandmovers.com/assets/uploads/blog/591743671629.png",
      day: "03",
      month: "Apr",
      year: "2025"
    },
    {
      id: 4,
      slug: "miracles-of-engaging-a-licensed-and-safe-moving-company",
      title: "Miracles of Engaging A Licensed and Safe Moving Company",
      img: "https://srspackersandmovers.com/assets/uploads/blog/361729596410.png",
      day: "22",
      month: "Oct",
      year: "2024"
    },
    {
      id: 3,
      slug: "moving-tips-for-business-the-right-approach-to-office-moving",
      title: "Moving Tips for Business the Right Approach to Office Moving",
      img: "https://srspackersandmovers.com/assets/uploads/blog/771725693951.png",
      day: "07",
      month: "Sep",
      year: "2024"
    },
    {
      id: 2,
      slug: "guide-how-to-check-the-authenticity-of-packers-and-movers",
      title: "Guide How To Check The Authenticity Of Packers And Movers",
      img: "https://srspackersandmovers.com/assets/uploads/blog/621724397335.png",
      day: "23",
      month: "Aug",
      year: "2024"
    }
  ];

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
            <h1>Blogs</h1>
            <p>industry insights, and relocation guides from your trusted partner since 2009</p>
          </div>
        </div>
      </section>

      {/* Blogs Listing Section */}
      <div className="py-5 bg-light">
        <div className="container">
          {/* Section Title */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="text-center">
                <h2 className="display-5 fw-bold mb-3 blog-section-title">Latest Blogs</h2>
                <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                  <i className="bi bi-newspaper fs-4 blog-icon"></i>
                  <p className="mb-0 text-muted">Stay updated with our latest insights and tips</p>
                </div>
                <div className="blog-divider mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="row g-4">
            {BLOGS.map((blog, idx) => (
              <div key={idx} className="col-xl-4 col-lg-6 col-md-6">
                <div className="card h-100 border-0 shadow-sm blog-card">
                  {/* Image with Overlay Badge */}
                  <div className="position-relative overflow-hidden blog-img-wrapper">
                    <img src={blog.img} className="card-img-top" alt={blog.title} />
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
                    {/* Author Info */}
                    <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                      <div className="rounded-circle bg-light d-flex align-items-center justify-content-center blog-author-icon me-3">
                        <i className="bi bi-person-circle fs-4"></i>
                      </div>
                      <div>
                        <small class="text-muted d-block">Written by</small>
                        <Link href={`/blog-view?id=${blog.id}`} className="text-decoration-none fw-semibold blog-author-link">
                          SRS Packers and Movers
                        </Link>
                      </div>
                    </div>

                    {/* Blog Title */}
                    <h5 className="card-title mb-3 fw-bold lh-base">
                      <Link href={`/blog-view?id=${blog.id}`} className="text-decoration-none blog-title-link">
                        {blog.title}
                      </Link>
                    </h5>

                    {/* Read More Button */}
                    <div className="mt-auto">
                      <Link href={`/blog-view?id=${blog.id}`} className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between blog-read-btn">
                        <span>Read Full Article</span>
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
