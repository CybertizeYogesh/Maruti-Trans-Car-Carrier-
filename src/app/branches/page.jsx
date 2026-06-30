import React from "react";
import Link from "next/link";
import "./branches.css";

export const metadata = {
  title: "Our Branches | SRS Packers And Movers Packers and Movers Network Across India",
  description: "SRS Packers and Movers has fully functional branches across Mumbai, Navi Mumbai, Thane, and Pune. Visit our nearest office or contact us for local shifting support.",
  keywords: "srs packers branches, mumbai shifting office, pune relocation branch, thane packers address",
};

export default function BranchesPage() {
  const BRANCHES = [
    {
      city: "THANE - BRANCH OFFICE",
      address: "SRS Packers And Movers, Shop No.04, Sunshine Heights, Manpada, Thane West, Thane, Maharashtra 400607",
      email: "info@srspackersandmovers.com",
      phone: "7499977287",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15068.964990179014!2d72.97339!3d19.228315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92ebb87e077%3A0x872b62ef9e570b5!2sSRS%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1769591618979!5m2!1sen!2sin"
    },
    {
      city: "WAKAD - BRANCH OFFICE",
      address: "S No.179/163, SRS Packers And Movers, Pratham Society, Aundh - Ravet BRTS Rd, Pratham Reflections Society, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057",
      email: "info@srspackersandmovers.com",
      phone: "9784798602",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7562.574249568149!2d73.770434!3d18.606151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9451b1cfc1d%3A0x2b137cba26127886!2sSRS%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1769591784161!5m2!1sen!2sin"
    },
    {
      city: "KOPARKHAIRNE - BRANCH OFFICE",
      address: "Shop Number 4, SRS Packers & Movers, City Enclave, Sector 2, Kopar Khairane, Navi Mumbai, Maharashtra 400709",
      email: "info@srspackersandmovers.com",
      phone: "9892925154",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.744492112115!2d73.004386!3d19.110458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1aa09d326a7%3A0xf318f576f4887445!2sSRS%20Packers%20%26%20Movers!5e0!3m2!1sen!2sin!4v1769591863520!5m2!1sen!2sin"
    },
    {
      city: "ANDHERI - BRANCH OFFICE",
      address: "Shop No. 124, SRS Packers And Movers, Maruti Sadan, Andheri East, Mumbai, Maharashtra 400069",
      email: "info@srspackersandmovers.com",
      phone: "9772005324",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15078.89073448075!2d72.886874!3d19.119818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f9990649c3%3A0xd89e5420a87ce3fe!2sSRS%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1769592286246!5m2!1sen!2sin"
    },
    {
      city: "NAVI MUMBAI - BRANCH OFFICE",
      address: "Shop No.2, CST ROAD, Sector 21, Ghansoli, Navi Mumbai, Maharashtra 400701",
      email: "info@srspackersandmovers.com",
      phone: "9892325154",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15078.095630280026!2d72.996916!3d19.128531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c107c58671a5%3A0xa76c0315afef2cbf!2sSRS%20PACKERS%20AND%20MOVERS!5e0!3m2!1sen!2sin!4v1769592484349!5m2!1sen!2sin"
    },
    {
      city: "DOMBIVLI - BRANCH OFFICE",
      address: "Shop No.6, Maduban Society, Lodha Casa Rio Gold Rd, Palava City, Nilje Gaon, Dombivli, Maharashtra 421204",
      email: "info@srspackersandmovers.com",
      phone: "9892345154",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15075.459522863192!2d73.076571!3d19.157391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf5cbfe243fb%3A0x3222fa7bfffb0a7!2sSRS%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1769592538079!5m2!1sen!2sin"
    },
    {
      city: "PUNE - BRANCH OFFICE",
      address: "Shop No. 03, SRS Packers and Movers, Ganadhish Residency, behind Chul Muttan, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027",
      email: "info@srspackersandmovers.com",
      phone: "9892315154",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15125.520209823362!2d73.804543!3d18.601968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b994e55feb29%3A0x1a7d78c3f513b384!2sSRS%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1769592619472!5m2!1sen!2sin"
    },
    {
      city: "HINJEWADI - BRANCH OFFICE",
      address: "Sr. No. 360, opp. Wipro Circle, Phase 2, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
      email: "info@srspackersandmovers.com",
      phone: "9892305154",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15126.033079037503!2d73.719346!3d18.596195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb0b860acc19%3A0xedd79dfb092a7892!2sSRS%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1769592673297!5m2!1sen!2sin"
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
              <span>Branches</span>
            </nav>
            <h1>Branches</h1>
            <p>Our extensive branch network to support your relocation smoothly across India</p>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="branches-section py-5">
        <div className="container">
          <div className="row g-4">
            {BRANCHES.map((b, idx) => (
              <div key={idx} className="col-lg-6 col-xl-4">
                <div className="branch-card h-100 p-4 rounded-4 shadow-sm bg-white d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="branch-title mb-2 text-uppercase">{b.city}</h3>
                    <p className="mb-2 text-muted" style={{ fontSize: "0.98rem", lineHeight: "1.6" }}>
                      <strong>Address: </strong>
                      {b.address}
                    </p>
                    <p className="mb-2 text-muted" style={{ fontSize: "0.98rem" }}>
                      <strong>Our Email: </strong>
                      <a href={`mailto:${b.email}`} className="text-decoration-none text-muted">{b.email}</a>
                    </p>
                    <p className="mb-3 text-muted" style={{ fontSize: "0.98rem" }}>
                      <strong>Phone: </strong>
                      <a href={`tel:+91${b.phone}`} className="text-decoration-none text-muted">{b.phone}</a>
                    </p>
                  </div>
                  <div className="branch-map mt-2">
                    <iframe
                      src={b.map}
                      className="branch-map-iframe"
                      allowFullScreen=""
                      loading="lazy"
                      title={b.city}
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
