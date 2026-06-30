import React from "react";
import Link from "next/link";

export const metadata = {
  title: "SRS Packers and Movers All India Branches",
  description: "Find reliable and professional packers and movers in Our services in all over India. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/packers-movers-in-kolkata",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Kolkata</b>"
  },
  {
    "path": "/packers-movers-in-chandigarh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Chandigarh</b>"
  },
  {
    "path": "/packers-movers-in-varanasi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Varanasi</b>"
  },
  {
    "path": "/packers-movers-in-greater-noida",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Greater Noida</b>"
  },
  {
    "path": "/packers-movers-in-dehradun",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Dehradun</b>"
  },
  {
    "path": "/packers-movers-in-agra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Agra</b>"
  },
  {
    "path": "/packers-movers-in-bhubaneswar",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Bhubaneswar</b>"
  },
  {
    "path": "/packers-movers-in-aligarh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Aligarh</b>"
  },
  {
    "path": "/packers-movers-in-prayagraj",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Prayagraj</b>"
  },
  {
    "path": "/packers-movers-in-gorakhpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Gorakhpur</b>"
  },
  {
    "path": "/packers-movers-in-ludhiana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Ludhiana</b>"
  },
  {
    "path": "/packers-movers-in-gurugram",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Gurugram</b>"
  },
  {
    "path": "/packers-movers-in-faridabad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Faridabad</b>"
  },
  {
    "path": "/packers-movers-in-guwahati",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Guwahati</b>"
  },
  {
    "path": "/packers-movers-in-chennai",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Chennai</b>"
  },
  {
    "path": "/packers-movers-in-lucknow",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Lucknow</b>"
  },
  {
    "path": "/packers-movers-in-delhi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Delhi</b>"
  },
  {
    "path": "/packers-movers-in-noida",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Noida</b>"
  },
  {
    "path": "/packers-movers-in-anantapur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Anantapur</b>"
  },
  {
    "path": "/packers-movers-in-tirupati",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Tirupati</b>"
  },
  {
    "path": "/packers-movers-in-bilaspur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Bilaspur</b>"
  },
  {
    "path": "/packers-movers-in-visakhapatnam",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Visakhapatnam</b>"
  },
  {
    "path": "/packers-movers-in-guntur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Guntur</b>"
  },
  {
    "path": "/packers-movers-in-mysore",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Mysore</b>"
  },
  {
    "path": "/packers-movers-in-cochin",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Cochin</b>"
  },
  {
    "path": "/packers-movers-in-bareilly",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Bareilly</b>"
  },
  {
    "path": "/packers-movers-in-bangalore",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Bangalore</b>"
  },
  {
    "path": "/packers-movers-in-ranchi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Ranchi</b>"
  },
  {
    "path": "/packers-movers-in-raipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Raipur</b>"
  },
  {
    "path": "/packers-movers-in-kanpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Kanpur</b>"
  },
  {
    "path": "/packers-movers-in-raigarh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Raigarh</b>"
  },
  {
    "path": "/packers-movers-in-moradabad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Moradabad</b>"
  },
  {
    "path": "/packers-movers-in-chikmagalur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Chikmagalur</b>"
  },
  {
    "path": "/packers-movers-in-rourkela",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Rourkela</b>"
  },
  {
    "path": "/packers-movers-in-kakinada",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Kakinada</b>"
  },
  {
    "path": "/packers-movers-in-darbhanga",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Darbhanga</b>"
  },
  {
    "path": "/packers-movers-in-jamshedpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Jamshedpur</b>"
  },
  {
    "path": "/packers-movers-in-salem",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Salem</b>"
  },
  {
    "path": "/packers-movers-in-coimbatore",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Coimbatore</b>"
  },
  {
    "path": "/packers-movers-in-sambhalpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Sambhalpur</b>"
  },
  {
    "path": "/packers-movers-in-ghaziabad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Ghaziabad</b>"
  },
  {
    "path": "/packers-movers-in-hubli",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Hubli</b>"
  },
  {
    "path": "/packers-movers-in-thiruvananthapuram",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Thiruvananthapuram</b>"
  },
  {
    "path": "/packers-movers-in-vijayawada",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Vijayawada</b>"
  },
  {
    "path": "/packers-movers-in-patna",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Patna</b>"
  },
  {
    "path": "/packers-movers-in-hassan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Hassan</b>"
  },
  {
    "path": "/packers-movers-in-jammu",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Jammu</b>"
  },
  {
    "path": "/packers-movers-in-meerut",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Meerut</b>"
  },
  {
    "path": "/packers-movers-in-rajahmundry",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Rajahmundry</b>"
  },
  {
    "path": "/packers-movers-in-new-delhi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>New Delhi</b>"
  },
  {
    "path": "/packers-movers-in-devanagere",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Devanagere</b>"
  },
  {
    "path": "/packers-movers-in-bellary",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Bellary</b>"
  },
  {
    "path": "/packers-movers-in-dharwad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Dharwad</b>"
  },
  {
    "path": "/packers-movers-in-balasore",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Balasore</b>"
  },
  {
    "path": "/packers-movers-in-malda",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Malda</b>"
  },
  {
    "path": "/packers-movers-in-rohtak",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Rohtak</b>"
  },
  {
    "path": "/packers-movers-in-jhansi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Jhansi</b>"
  },
  {
    "path": "/packers-movers-in-siliguri",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers in <b>Siliguri</b>"
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
              <Link href="/location">Locations We Serve</Link>
              <span>/</span>
              <span>India</span>
            </nav>
            <h1>Our services in all over India</h1>
            <p>Choose your city for reliable and professional moving services</p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
            {LINKS.map((link, idx) => (
              <div key={idx} className="col">
                <Link href={link.path} className="state-city-box text-decoration-none d-block">
                  <i className={link.icon || "bi bi-truck state-city-icon"}></i>
                  <span className="state-city-text" dangerouslySetInnerHTML={{ __html: link.html }}></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
