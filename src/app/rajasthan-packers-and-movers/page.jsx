import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Maruti Trans Car Shifting in Rajasthan",
  description: "Find reliable and professional packers and movers in Car Shifting in Rajasthan. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/ajmer-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ajmer</strong>"
  },
  {
    "path": "/alwar-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Alwar</strong>"
  },
  {
    "path": "/banswara-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Banswara</strong>"
  },
  {
    "path": "/barmer-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Barmer</strong>"
  },
  {
    "path": "/bharatpur-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bharatpur</strong>"
  },
  {
    "path": "/bhilwara-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhilwara</strong>"
  },
  {
    "path": "/bikaner-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bikaner</strong>"
  },
  {
    "path": "/bundi-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bundi</strong>"
  },
  {
    "path": "/chittorgarh-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chittorgarh</strong>"
  },
  {
    "path": "/churu-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Churu</strong>"
  },
  {
    "path": "/dausa-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dausa</strong>"
  },
  {
    "path": "/dungarpur-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dungarpur</strong>"
  },
  {
    "path": "/ganganagar-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ganganagar</strong>"
  },
  {
    "path": "/hanumangarh-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hanumangarh</strong>"
  },
  {
    "path": "/jaipur-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jaipur</strong>"
  },
  {
    "path": "/jaisalmer-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jaisalmer</strong>"
  },
  {
    "path": "/jhalawar-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jhalawar</strong>"
  },
  {
    "path": "/jhunjhunu-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jhunjhunu</strong>"
  },
  {
    "path": "/jodhpur-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jodhpur</strong>"
  },
  {
    "path": "/karauli-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karauli</strong>"
  },
  {
    "path": "/kota-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kota</strong>"
  },
  {
    "path": "/nagaur-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagaur</strong>"
  },
  {
    "path": "/pali-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pali</strong>"
  },
  {
    "path": "/pratapgarh-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pratapgarh</strong>"
  },
  {
    "path": "/rajsamand-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajsamand</strong>"
  },
  {
    "path": "/sawai-madhopur-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sawai Madhopur</strong>"
  },
  {
    "path": "/sikar-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sikar</strong>"
  },
  {
    "path": "/sirohi-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sirohi</strong>"
  },
  {
    "path": "/tonk-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tonk</strong>"
  },
  {
    "path": "/udaipur-packers-movers-rajasthan",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Udaipur</strong>"
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
              <span>Rajasthan</span>
            </nav>
            <h1>Car Shifting in Rajasthan</h1>
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
