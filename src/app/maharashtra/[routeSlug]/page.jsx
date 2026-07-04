import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import routesData from "@/data/routes.json";

export async function generateMetadata({ params }) {
  const { routeSlug } = await params;
  const route = routesData[routeSlug];

  if (!route) {
    return {
      title: "Intercity Car Carrier Shifting - Maruti Trans Packers",
      description: "Maruti Trans Car Carrier Shifting offers premium intercity shifting and relocation."
    };
  }

  return {
    title: `Packers And Movers from ${route.from} To ${route.to} | Maruti Trans Car Carrier Shifting`,
    description: `Best Car Carrier Shifting from ${route.from} to ${route.to}. Premium packing, containerized vehicle transit, damage-free shifting, and prompt transport schedules.`,
    keywords: `packers and movers ${route.from.toLowerCase()} to ${route.to.toLowerCase()}, shifting ${route.from.toLowerCase()} to ${route.to.toLowerCase()}`
  };
}

export async function generateStaticParams() {
  // Pre-render a selection of top intercity routes at build time to keep build times extremely fast
  const topSlugs = Object.keys(routesData).slice(0, 20);
  return topSlugs.map(slug => ({
    routeSlug: slug
  }));
}

export default async function RouteSlugPage({ params }) {
  const { routeSlug } = await params;
  const route = routesData[routeSlug];

  if (!route) {
    notFound();
  }

  const { from, to } = route;

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
              <span>{from} to {to}</span>
            </nav>
            <h1>Best Car Carrier Shifting from {from} to {to}</h1>
            <p>Seamless intercity residential shifting and vehicle logistics from {from} to {to}</p>
          </div>
        </div>
      </section>

      {/* Top Quote Form Container */}
      <div className="container mt-4 pt-2">
        <QuoteForm defaultFrom={from} defaultTo={to} layout="slider" />
      </div>

      {/* Main Content Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            
            {/* Left Content Column */}
            <div className="col-lg-8">
              <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
                <span className="badge bg-danger mb-3 p-2 text-white">Intercity Car Shipping Route</span>
                <h2 className="fw-bold text-dark h3 mb-3">
                  Professional Vehicle Relocation from {from} to {to}
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Moving your vehicle from <strong>{from}</strong> to <strong>{to}</strong>? 
                  Maruti Trans Car Carrier Shifting provides highly secure and reliable long-distance transit. We understand that intercity relocations require heavy-duty car carrier trailers and certified driving captains. Our open double-decker carriers and hard-sided enclosed containers protect your vehicle from gravel chips, weather, and road grime.
                </p>

                <h3 className="fw-bold text-dark h5 mt-4 mb-3">Rate Chart from {from} to {to}</h3>
                <div className="table-responsive my-3">
                  <table className="table table-bordered table-striped text-center">
                    <thead>
                      <tr className="bg-danger text-white">
                        <th>Vehicle Category</th>
                        <th>Approximate Rates</th>
                        <th>Estimated Transit Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Hatchback Shifting</td>
                        <td>Rs 7,500 - 12,000</td>
                        <td>3 - 5 Days</td>
                      </tr>
                      <tr>
                        <td>Sedan Shifting</td>
                        <td>Rs 9,000 - 15,000</td>
                        <td>3 - 5 Days</td>
                      </tr>
                      <tr>
                        <td>SUV / MUV Shifting</td>
                        <td>Rs 11,000 - 18,000</td>
                        <td>4 - 6 Days</td>
                      </tr>
                      <tr>
                        <td>Luxury & Sports Car Shifting</td>
                        <td>Rs 18,000 - 32,000</td>
                        <td>4 - 6 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <small className="text-muted d-block mt-2" style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
                  Disclaimer: The rates listed above are approximate estimates. Final pricing depends on cargo weight, car model length, toll charges, insurance value, and seasonal demands. Please submit a request for an exact customized quote.
                </small>

                <h3 className="fw-bold text-dark h5 mt-5 mb-3">How it Works – 4 Simple Steps</h3>
                <div className="row g-3 text-center mt-2">
                  <div className="col-md-3">
                    <div className="p-3 border rounded-3 bg-light h-100">
                      <div className="text-danger fw-bold h4 mb-2">01</div>
                      <h6 className="fw-bold text-dark">Get Free Quote</h6>
                      <p className="small text-muted mb-0">Fill out our request form to get a transparent price quote.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="p-3 border rounded-3 bg-light h-100">
                      <div className="text-danger fw-bold h4 mb-2">02</div>
                      <h6 className="fw-bold text-dark">Inspection</h6>
                      <p className="small text-muted mb-0">Formal condition report checklist filled at pickup.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="p-3 border rounded-3 bg-light h-100">
                      <div className="text-danger fw-bold h4 mb-2">03</div>
                      <h6 className="fw-bold text-dark">Secure Load</h6>
                      <p className="small text-muted mb-0">Mounting onto the trailer via four-point soft-touch tire straps.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="p-3 border rounded-3 bg-light h-100">
                      <div className="text-danger fw-bold h4 mb-2">04</div>
                      <h6 className="fw-bold text-dark">Doorstep Delivery</h6>
                      <p className="small text-muted mb-0">Prompt roll-off and final signature checklist in {to}.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Info Column */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: "100px", zIndex: 10 }}>
                {/* Local Contact Info */}
                <div className="bg-danger text-white p-4 rounded-4 shadow-sm border">
                  <h4 className="fw-bold mb-3">Route Helpline</h4>
                  <p className="mb-4">Call our intercity dispatch center for updates:</p>
                  <a href="tel:+918512000715" className="btn btn-light btn-lg w-100 fw-bold text-danger mb-3">
                    <i className="bi bi-telephone-fill me-2"></i> +91 8512000715
                  </a>
                  <p className="small text-center opacity-75 mb-0">100% Insured Transit Logistics</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
