import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Maruti Trans Car Shifting in Telangana",
  description: "Find reliable and professional packers and movers in Car Shifting in Telangana. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/adilabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Adilabad</strong>"
  },
  {
    "path": "/bhadrachalam-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhadrachalam</strong>"
  },
  {
    "path": "/bhadradri-kothagudem-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhadradri Kothagudem</strong>"
  },
  {
    "path": "/bhongir-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhongir</strong>"
  },
  {
    "path": "/bodhan-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bodhan</strong>"
  },
  {
    "path": "/farooqnagar-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Farooqnagar</strong>"
  },
  {
    "path": "/gadwal-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gadwal</strong>"
  },
  {
    "path": "/huzurabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Huzurabad</strong>"
  },
  {
    "path": "/hyderabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hyderabad</strong>"
  },
  {
    "path": "/jagtial-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jagtial</strong>"
  },
  {
    "path": "/kamareddy-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kamareddy</strong>"
  },
  {
    "path": "/karimnagar-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karimnagar</strong>"
  },
  {
    "path": "/khammam-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khammam</strong>"
  },
  {
    "path": "/mahbubnagar-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahbubnagar</strong>"
  },
  {
    "path": "/mancherial-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mancherial</strong>"
  },
  {
    "path": "/medak-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Medak</strong>"
  },
  {
    "path": "/miryalaguda-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Miryalaguda</strong>"
  },
  {
    "path": "/nagarkurnool-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagarkurnool</strong>"
  },
  {
    "path": "/nalgonda-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nalgonda</strong>"
  },
  {
    "path": "/narayanpet-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narayanpet</strong>"
  },
  {
    "path": "/nizamabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nizamabad</strong>"
  },
  {
    "path": "/ramagundam-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ramagundam</strong>"
  },
  {
    "path": "/sangareddy-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sangareddy</strong>"
  },
  {
    "path": "/siddipet-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Siddipet</strong>"
  },
  {
    "path": "/suryapet-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Suryapet</strong>"
  },
  {
    "path": "/tandur-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tandur</strong>"
  },
  {
    "path": "/vikarabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vikarabad</strong>"
  },
  {
    "path": "/wanaparthy-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wanaparthy</strong>"
  },
  {
    "path": "/warangal-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Warangal</strong>"
  },
  {
    "path": "/yellandu-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Yellandu</strong>"
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
              <span>Telangana</span>
            </nav>
            <h1>Car Shifting in Telangana</h1>
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
