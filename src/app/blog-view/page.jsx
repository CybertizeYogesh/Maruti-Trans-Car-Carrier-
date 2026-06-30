import React from "react";
import Link from "next/link";
import "./blog-view.css";

export const metadata = {
  title: "Blog Details - SRS Packers And Movers",
  description: "Read expert advice, shifting tips, and packers and movers guidelines from SRS Packers and Movers.",
};

const BLOG_POSTS = {
  "5": {
    title: "How to Avoid Fraud and Scams While Relocating",
    desc: "Relocating to a new home or office is an exciting transition, but it can quickly turn into a nightmare if you fall victim to fraudulent packers and movers. Shifting scams are unfortunately common in the logistics industry. Here is a comprehensive guide by SRS Packers and Movers to help you safeguard your move and avoid scams.",
    img: "https://srspackersandmovers.com/assets/uploads/blog/591743671629.png",
    date: "03 April, 2025",
    author: "SRS Packers and Movers",
    content: (
      <>
        <h4>1. Beware of Extremely Low Cost Estimates</h4>
        <p>
          Scam movers often bait customers with unbelievably low quotes to secure the booking. Once they load your goods onto their truck, they hold your belongings hostage and demand double or triple the initial amount under the guise of hidden charges, toll taxes, or handling fees. Always get a written quotation after a physical or video survey of your items.
        </p>

        <h4>2. Verify Physical Address and Documents</h4>
        <p>
          Never hire a moving company based solely on an online search or phone call. Always ask for their physical office address and pay a visit if possible. Verify key registration documents such as GST registration, PAN card, Shop Establishment License, and IBA approval certificates. Scammers often operate using fake names and throwaway phone numbers.
        </p>

        <h4>3. Say No to Advance Payments</h4>
        <p>
          Reputable packers and movers do not demand large advance payments or full upfront payments before loading. A standard token amount is acceptable, but full payments are only processed once the transport vehicle is dispatched or delivered. Be extremely wary of companies demanding direct bank transfers to individual personal accounts.
        </p>

        <h4>4. Check Online Reviews and Ratings</h4>
        <p>
          Do a background check of the packers on Google Reviews, mouthshut.com, and consumer forums. Look for consistent complaints regarding broken items, delayed deliveries, rudeness, and extortion. Avoid companies with a sudden surge of 5-star reviews from generic accounts as they are often paid reviews.
        </p>
      </>
    )
  },
  "4": {
    title: "Miracles of Engaging A Licensed and Safe Moving Company",
    desc: "Hiring a licensed, professional, and safe moving company is one of the best decisions you can make to ensure a peaceful relocation experience. It goes beyond simple transport – it's about security, safety, and accountability. Here are the core benefits of engaging verified removalists.",
    img: "https://srspackersandmovers.com/assets/uploads/blog/361729596410.png",
    date: "22 October, 2024",
    author: "SRS Packers and Movers",
    content: (
      <>
        <h4>1. Accountability and Security</h4>
        <p>
          A licensed relocation company is legally accountable for the safety of your household goods. In the rare event of transit accidents or damage, you can claim losses via comprehensive transit insurance. Unregistered operators will simply switch off their phones and leave you stranded.
        </p>

        <h4>2. Professional Packing Quality</h4>
        <p>
          Professional movers utilize premium packing materials such as multi-layer corrugated sheets, air-bubble wraps, waterproof packing tapes, and stretch film. This ensures absolute protection for your fragile kitchenware, mirrors, and electronic appliances.
        </p>

        <h4>3. Proper Shifting Equipment</h4>
        <p>
          Moving heavy wardrobes, double beds, refrigerators, and washing machines requires specialized shifting tools. Experienced crews are equipped with hand trucks, furniture dollies, slider pads, and safety ropes to move large items down narrow staircases and lift doors safely.
        </p>

        <h4>4. Peace of Mind</h4>
        <p>
          Relocation is an exhausting process. Letting a trained moving crew handle the packing, loading, driving, and unloading lets you focus on adjusting to your new home and setting up utilities without physical fatigue.
        </p>
      </>
    )
  },
  "3": {
    title: "Moving Tips for Business the Right Approach to Office Moving",
    desc: "Office shifting requires a structured, meticulous approach to minimize business downtime and prevent damage to expensive IT equipment and documents. Planning a commercial relocation? Here is the checklist to execute your corporate move successfully.",
    img: "https://srspackersandmovers.com/assets/uploads/blog/771725693951.png",
    date: "07 September, 2024",
    author: "SRS Packers and Movers",
    content: (
      <>
        <h4>1. Plan and Announce Early</h4>
        <p>
          Commercial moves should be planned at least 4-8 weeks in advance depending on the size of the office. Form a moving committee, assign coordinators for different departments, and notify employees, vendors, and clients about the new address and transition timeline.
        </p>

        <h4>2. Safeguard IT and Data Infrastructure</h4>
        <p>
          Laptops, servers, desktop monitors, and routers are highly valuable and contain sensitive business data. Label all cables, back up data servers before dismantling, and utilize specialized anti-static bubble wrap. Allocate the transport of main servers to a dedicated vehicle with GPS tracking.
        </p>

        <h4>3. Label and Box by Employee / Department</h4>
        <p>
          Distribute cartons to employees to pack their personal desk items. Label each carton with the employee name, employee ID, and department name. This makes unpacking and setting up desks at the new office location structured and effortless.
        </p>

        <h4>4. Coordinate with Building Management</h4>
        <p>
          Make sure you coordinate with the building managers at both your old and new office complexes to secure permissions for using service elevators, parking trucks in loading zones, and operating moving crews outside standard business hours.
        </p>
      </>
    )
  },
  "2": {
    title: "Guide How To Check The Authenticity Of Packers And Movers",
    desc: "How do you distinguish authentic packers and movers from scammers? With thousands of operators listing their services online, verifying credentials is critical. Use this checklist to verify your relocation partner's authenticity before booking.",
    img: "https://srspackersandmovers.com/assets/uploads/blog/621724397335.png",
    date: "23 August, 2024",
    author: "SRS Packers and Movers",
    content: (
      <>
        <h4>1. GSTIN Registration Verification</h4>
        <p>
          Every authentic business entity in India must have a GSTIN number. Request their GST registration certificate and search it on the official GST portal to confirm that the business name, address, and status are active and match their quotes.
        </p>

        <h4>2. Look for IBA Approval</h4>
        <p>
          The Indian Banks' Association (IBA) approves and registers reliable transport operators for shifting bank employees. An IBA-approved packer has passed rigorous security, reliability, and background checks. Always prioritize IBA-registered movers.
        </p>

        <h4>3. Physical Office Inspection</h4>
        <p>
          Scammers operate from virtual offices. Ask for their local branch address and make a surprise visit. Verify if they have local staff, storage warehouses, and standard moving tools, rather than just a single desk.
        </p>

        <h4>4. Check Logo and Branding Consistency</h4>
        <p>
          Scammers copy logos of reputed brands like SRS Packers and Movers, Gati, or DHL by adding minor suffixes. Verify their email address domains (e.g. info@srspackersandmovers.com rather than a gmail.com address), website certificates, and standard bill formats.
        </p>
      </>
    )
  }
};

export default function BlogViewPage({ searchParams }) {
  const resolvedParams = React.use(searchParams);
  const postId = resolvedParams?.id || "5";
  const post = BLOG_POSTS[postId] || BLOG_POSTS["5"];

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
              <Link href="/blogs">Blogs</Link>
              <span>/</span>
              <span>Blog Details</span>
            </nav>
            <h1>Blog Details</h1>
            <p>Relocation tips, safety guidelines, and industry insights from the experts</p>
          </div>
        </div>
      </section>

      {/* Blog Details Container */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Left Content Card */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm blog-detail-card p-4">
                <div className="blog-detail-img-wrapper rounded-3 mb-4">
                  <img src={post.img} alt={post.title} />
                </div>

                <div className="d-flex flex-wrap gap-3 mb-4 pb-3 border-bottom">
                  <div className="blog-meta-item d-flex align-items-center gap-2">
                    <i className="bi bi-person-fill blog-meta-icon"></i>
                    <span>{post.author}</span>
                  </div>
                  <div className="blog-meta-item d-flex align-items-center gap-2">
                    <i className="bi bi-calendar-event-fill blog-meta-icon"></i>
                    <span>{post.date}</span>
                  </div>
                  <div className="blog-meta-item d-flex align-items-center gap-2">
                    <i className="bi bi-tag-fill blog-meta-icon"></i>
                    <span>Moving Guide</span>
                  </div>
                </div>

                <h1 className="fw-bold mb-4 text-dark" style={{ fontSize: "2rem" }}>
                  {post.title}
                </h1>
                
                <p className="lead text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                  {post.desc}
                </p>

                <div className="blog-content">
                  {post.content}
                </div>

                <div className="mt-5 pt-4 border-top">
                  <h5 className="fw-bold mb-3">Relocating Soon?</h5>
                  <p className="small text-muted">Get in touch with SRS Packers and Movers to book your relocate or get an instant cost quote.</p>
                  <div className="d-flex flex-wrap gap-3">
                    <a href="tel:+919892325154" className="btn btn-danger px-4 py-2 rounded-pill fw-semibold">
                      <i className="bi bi-telephone-fill me-2"></i>Call Now
                    </a>
                    <Link href="/contacts" className="btn btn-outline-danger px-4 py-2 rounded-pill fw-semibold">
                      Contact Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4 mb-4">
                <h5 className="blog-sidebar-title">Search Blogs</h5>
                <div className="blog-search-group d-flex">
                  <input type="text" placeholder="Type keywords..." />
                  <button className="blog-search-btn">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>

              <div className="card border-0 shadow-sm p-4">
                <h5 className="blog-sidebar-title">Popular Articles</h5>
                <ul className="list-unstyled mb-0">
                  {Object.entries(BLOG_POSTS).map(([id, p]) => (
                    <li key={id} className="mb-3 pb-3 border-bottom">
                      <Link href={`/blog-view?id=${id}`} className="text-decoration-none text-dark fw-semibold d-block lh-base mb-1" style={{ fontSize: "0.95rem" }}>
                        {p.title}
                      </Link>
                      <small className="text-muted">{p.date}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
