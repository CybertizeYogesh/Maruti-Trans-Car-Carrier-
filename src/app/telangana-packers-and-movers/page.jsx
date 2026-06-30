import React from "react";
import Link from "next/link";

export const metadata = {
  title: "SRS Packers And Movers in Telangana",
  description: "Find reliable and professional packers and movers in Packers & Movers in Telangana. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/adilabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Adilabad</strong>"
  },
  {
    "path": "/bhadrachalam-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhadrachalam</strong>"
  },
  {
    "path": "/bhadradri-kothagudem-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhadradri Kothagudem</strong>"
  },
  {
    "path": "/bhongir-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhongir</strong>"
  },
  {
    "path": "/bodhan-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bodhan</strong>"
  },
  {
    "path": "/farooqnagar-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Farooqnagar</strong>"
  },
  {
    "path": "/gadwal-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gadwal</strong>"
  },
  {
    "path": "/huzurabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Huzurabad</strong>"
  },
  {
    "path": "/hyderabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hyderabad</strong>"
  },
  {
    "path": "/jagtial-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jagtial</strong>"
  },
  {
    "path": "/kamareddy-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kamareddy</strong>"
  },
  {
    "path": "/karimnagar-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Karimnagar</strong>"
  },
  {
    "path": "/khammam-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Khammam</strong>"
  },
  {
    "path": "/mahbubnagar-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mahbubnagar</strong>"
  },
  {
    "path": "/mancherial-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mancherial</strong>"
  },
  {
    "path": "/medak-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Medak</strong>"
  },
  {
    "path": "/miryalaguda-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Miryalaguda</strong>"
  },
  {
    "path": "/nagarkurnool-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nagarkurnool</strong>"
  },
  {
    "path": "/nalgonda-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nalgonda</strong>"
  },
  {
    "path": "/narayanpet-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Narayanpet</strong>"
  },
  {
    "path": "/nizamabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nizamabad</strong>"
  },
  {
    "path": "/ramagundam-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ramagundam</strong>"
  },
  {
    "path": "/sangareddy-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sangareddy</strong>"
  },
  {
    "path": "/siddipet-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Siddipet</strong>"
  },
  {
    "path": "/suryapet-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Suryapet</strong>"
  },
  {
    "path": "/tandur-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tandur</strong>"
  },
  {
    "path": "/vikarabad-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vikarabad</strong>"
  },
  {
    "path": "/wanaparthy-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Wanaparthy</strong>"
  },
  {
    "path": "/warangal-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Warangal</strong>"
  },
  {
    "path": "/yellandu-packers-movers-telangana",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Yellandu</strong>"
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
            <h1>Packers & Movers in Telangana</h1>
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
