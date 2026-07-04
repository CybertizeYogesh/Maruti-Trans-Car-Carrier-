import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Maruti Trans Car Shifting in Madhya pradesh",
  description: "Find reliable and professional packers and movers in Car Shifting in Madhya pradesh. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/betul-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Betul</strong>"
  },
  {
    "path": "/bhind-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhind</strong>"
  },
  {
    "path": "/bhopal-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhopal</strong>"
  },
  {
    "path": "/burhanpur-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Burhanpur</strong>"
  },
  {
    "path": "/chhindwara-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chhindwara</strong>"
  },
  {
    "path": "/damoh-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Damoh</strong>"
  },
  {
    "path": "/dewas-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dewas</strong>"
  },
  {
    "path": "/guna-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Guna</strong>"
  },
  {
    "path": "/gwalior-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gwalior</strong>"
  },
  {
    "path": "/hoshangabad-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hoshangabad</strong>"
  },
  {
    "path": "/indore-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Indore</strong>"
  },
  {
    "path": "/itarsi-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Itarsi</strong>"
  },
  {
    "path": "/jabalpur-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jabalpur</strong>"
  },
  {
    "path": "/katni-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Katni</strong>"
  },
  {
    "path": "/khandwa-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khandwa</strong>"
  },
  {
    "path": "/khargone-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khargone</strong>"
  },
  {
    "path": "/mandsaur-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mandsaur</strong>"
  },
  {
    "path": "/morena-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Morena</strong>"
  },
  {
    "path": "/murwara-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Murwara</strong>"
  },
  {
    "path": "/neemuch-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Neemuch</strong>"
  },
  {
    "path": "/ratlam-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ratlam</strong>"
  },
  {
    "path": "/rewa-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rewa</strong>"
  },
  {
    "path": "/sagar-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sagar</strong>"
  },
  {
    "path": "/satna-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Satna</strong>"
  },
  {
    "path": "/seoni-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Seoni</strong>"
  },
  {
    "path": "/shahdol-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shahdol</strong>"
  },
  {
    "path": "/shivpuri-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shivpuri</strong>"
  },
  {
    "path": "/singrauli-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Singrauli</strong>"
  },
  {
    "path": "/ujjain-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ujjain</strong>"
  },
  {
    "path": "/vidisha-packers-movers-madhya-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vidisha</strong>"
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
              <span>Madhya Pradesh</span>
            </nav>
            <h1>Car Shifting in Madhya pradesh</h1>
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
