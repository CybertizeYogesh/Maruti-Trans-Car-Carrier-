import React from "react";
import Link from "next/link";

export const metadata = {
  title: "SRS Packers and Movers in Pune, Maharashtra",
  description: "Find reliable and professional packers and movers in Pune to the Major Cities of India. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/maharashtra/packers-movers-from-pune-to-kolkata",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Kolkata</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-chandigarh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Chandigarh</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-aurangabad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Aurangabad</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-nashik",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Nashik</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-varanasi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Varanasi</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-greater-noida",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Greater Noida</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-dehradun",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Dehradun</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-agra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Agra</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-navi-mumbai",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Navi Mumbai</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-bhubaneswar",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Bhubaneswar</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-aligarh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Aligarh</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-mumbai",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Mumbai</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-prayagraj",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Prayagraj</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-gorakhpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Gorakhpur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-ludhiana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Ludhiana</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-gurugram",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Gurugram</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-nagpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Nagpur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-faridabad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Faridabad</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-guwahati",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Guwahati</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-chennai",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Chennai</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-lucknow",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Lucknow</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-delhi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Delhi</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-noida",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Noida</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-anantapur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Anantapur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-tirupati",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Tirupati</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-bilaspur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Bilaspur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-visakhapatnam",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Visakhapatnam</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-guntur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Guntur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-mysore",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Mysore</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-cochin",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Cochin</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-bareilly",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Bareilly</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-bangalore",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Bangalore</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-ranchi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Ranchi</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-raipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Raipur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-kolhapur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Kolhapur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-kanpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Kanpur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-sangli",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Sangli</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-raigarh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Raigarh</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-moradabad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Moradabad</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-chikmagalur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Chikmagalur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-rourkela",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Rourkela</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-kakinada",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Kakinada</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-darbhanga",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Darbhanga</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-jamshedpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Jamshedpur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-salem",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Salem</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-coimbatore",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Coimbatore</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-sambhalpur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Sambhalpur</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-ghaziabad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Ghaziabad</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-hubli",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Hubli</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-thiruvananthapuram",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Thiruvananthapuram</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-vijayawada",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Vijayawada</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-patna",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Patna</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-hassan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Hassan</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-jammu",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Jammu</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-meerut",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Meerut</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-rajahmundry",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Rajahmundry</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-new-delhi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>New Delhi</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-devanagere",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Devanagere</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-bellary",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Bellary</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-dharwad",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Dharwad</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-balasore",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Balasore</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-malda",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Malda</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-rohtak",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Rohtak</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-jhansi",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Jhansi</b>"
  },
  {
    "path": "/maharashtra/packers-movers-from-pune-to-siliguri",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers movers from <b>Pune</b> to <b>Siliguri</b>"
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
              <span>Pune Route</span>
            </nav>
            <h1>Pune to the Major Cities of India</h1>
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
