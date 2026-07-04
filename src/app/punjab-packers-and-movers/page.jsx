import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Maruti Trans Car Shifting in Punjab",
  description: "Find reliable and professional packers and movers in Car Shifting in Punjab. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/abohar-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Abohar</strong>"
  },
  {
    "path": "/amritsar-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amritsar</strong>"
  },
  {
    "path": "/barnala-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Barnala</strong>"
  },
  {
    "path": "/batala-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Batala</strong>"
  },
  {
    "path": "/bhatinda-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhatinda</strong>"
  },
  {
    "path": "/faridkot-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Faridkot</strong>"
  },
  {
    "path": "/fazilka-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Fazilka</strong>"
  },
  {
    "path": "/firozpur-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Firozpur</strong>"
  },
  {
    "path": "/gobindgarh-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gobindgarh</strong>"
  },
  {
    "path": "/gurdaspur-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gurdaspur</strong>"
  },
  {
    "path": "/hoshiarpur-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hoshiarpur</strong>"
  },
  {
    "path": "/jagraon-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jagraon</strong>"
  },
  {
    "path": "/jalandhar-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jalandhar</strong>"
  },
  {
    "path": "/kapurthala-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kapurthala</strong>"
  },
  {
    "path": "/khanna-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khanna</strong>"
  },
  {
    "path": "/ludhiana-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ludhiana</strong>"
  },
  {
    "path": "/malerkotla-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Malerkotla</strong>"
  },
  {
    "path": "/moga-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Moga</strong>"
  },
  {
    "path": "/mohali-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mohali</strong>"
  },
  {
    "path": "/nawanshahr-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nawanshahr</strong>"
  },
  {
    "path": "/pathankot-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pathankot</strong>"
  },
  {
    "path": "/patiala-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Patiala</strong>"
  },
  {
    "path": "/phagwara-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Phagwara</strong>"
  },
  {
    "path": "/rajpura-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajpura</strong>"
  },
  {
    "path": "/rupnagar-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rupnagar</strong>"
  },
  {
    "path": "/sangrur-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sangrur</strong>"
  },
  {
    "path": "/sri-muktsar-sahib-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sri Muktsar Sahib</strong>"
  },
  {
    "path": "/sunam-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sunam</strong>"
  },
  {
    "path": "/tarn-taran-sahib-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tarn Taran Sahib</strong>"
  },
  {
    "path": "/zirakpur-packers-movers-punjab",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Zirakpur</strong>"
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
              <span>Punjab</span>
            </nav>
            <h1>Car Shifting in Punjab</h1>
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
