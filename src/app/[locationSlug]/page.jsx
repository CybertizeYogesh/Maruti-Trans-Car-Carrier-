import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import locationsData from "@/data/locations.json";
import "./location-slug.css";

export async function generateMetadata({ params }) {
  const { locationSlug } = await params;
  const location = locationsData[locationSlug];
  const url = `https://srspackersandmovers.com/${locationSlug}`;

  if (!location) {
    return {
      title: "Best Car Carrier Shifting - Maruti Trans Packers",
      description: "Maruti Trans Car Carrier Shifting offers premium vehicle relocation and shifting services."
    };
  }

  const title = `Best Car Shifting in ${location.city}, ${location.state} | Maruti Trans Packers`;
  const description = `Maruti Trans Car Shifting in ${location.city}, ${location.state} offers professional, damage-free vehicle shipping, car carriers, and flatbed transport. Get a free quote today.`;

  return {
    title,
    description,
    keywords: `car shifting ${location.city.toLowerCase()}, packers and movers ${location.city.toLowerCase()}, vehicle transport ${location.city.toLowerCase()}, car carrier ${location.city.toLowerCase()}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: "https://srspackersandmovers.com/assets/images/services/home_shifting.webp",
          width: 1200,
          height: 630,
          alt: `Car Shifting in ${location.city}`
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://srspackersandmovers.com/assets/images/services/home_shifting.webp"]
    }
  };
}

export async function generateStaticParams() {
  const topSlugs = Object.keys(locationsData).slice(0, 20);
  return topSlugs.map(slug => ({
    locationSlug: slug
  }));
}

export default async function LocationSlugPage({ params }) {
  const { locationSlug } = await params;
  const location = locationsData[locationSlug];

  if (!location) {
    notFound();
  }

  const { city, state } = location;

  // Filter list of sibling cities in the same state for the "Areas We Serve" section
  const siblingCities = Object.values(locationsData)
    .filter(loc => loc.state === state && loc.slug !== locationSlug)
    .slice(0, 48); // Limit to top 48 sibling cities to keep the page clean

  // Schemas definition
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://srspackersandmovers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://srspackersandmovers.com/location"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city,
        "item": `https://srspackersandmovers.com/${locationSlug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Car Shifting & Vehicle Transportation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Maruti Trans Packers & Movers",
      "telephone": "+918512000715",
      "priceRange": "INR 3500 - INR 32000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "House No. 84, Ground Floor, Chandwass Road, Chandwass, Badhra",
        "addressLocality": "Charkhi Dadri",
        "addressRegion": "Haryana",
        "postalCode": "127312",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": city
    },
    "description": `Professional, secure, and damage-free vehicle shifting, car carriers, and flatbed transport services in ${city}, ${state}.`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

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
              <span>{city}</span>
            </nav>
            <h1>Best Car Shifting in {city}</h1>
            <p>Choose your city for reliable and professional moving services</p>
          </div>
        </div>
      </section>

      {/* Top Quote Form Container */}
      <div className="container mt-4 pt-2">
        <QuoteForm defaultFrom={`${city}, ${state}`} layout="slider" />
      </div>

      {/* Main Content Sections */}
      <section className="bg-white py-4">
        <div className="container">
          <div className="row g-4">
            
            {/* Left Main Content Block */}
            <div className="col-lg-7 col-md-7">
              <h2 className="fw-bold text-dark h3 mb-3">
                Maruti Trans Car Carrier in {city}, {state} – Your Trusted Vehicle Shipping Partner
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Maruti Trans Car Shifting in {city}, {state}, is a professional and experienced vehicle transport company providing hassle-free car shipping. From local towing to interstate car carrier transit, we make it stress-free. Our cheap Car Carrier Services in {city}, {state} cover everything from family hatchbacks, luxury sedans, premium SUVs, to enclosed transport trailer shifting.
              </p>

              <h3 className="fw-bold text-dark h4 mb-3">{city}, {state} Vehicle Securement & Handling</h3>
              <p className="text-muted leading-relaxed mb-4">
                We use premium hydraulic flatbeds and double-decker open trailers to ship vehicles. To protect your car against rough highway terrain, we secure each wheel using four-point soft-touch straps, ensuring zero movement and chassis scrapes during transit.
              </p>

              <h3 className="fw-bold text-dark h4 mb-3">Affordable Car Carrier Services {city}, {state}</h3>
              <p className="text-muted leading-relaxed mb-4">
                Searching for affordable car shifting near me? Maruti Trans provides competitive and transparent pricing. Our car transport rates are highly affordable, with no hidden highway fuel surcharges or surprise tolls.
              </p>

              <h3 className="fw-bold text-dark h4 mb-3">Our Core Car Shifting Services in {city}, {state}</h3>
              
              <h4 className="fw-bold text-danger h5 mt-4 mb-2">Door-to-Door Car Shifting in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                We handle the complete shipping process at your door. Our crew picks up the vehicle directly from your home and rolls it off right at your new doorstep, eliminating terminal yard visits.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Luxury & Sports Car Shifting in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                For high-value luxury sports and vintage cars, we provide customized flatbed carriers and covered transport container trucks equipped with air-ride shock-absorbing suspensions.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Single Car Carrier Flatbeds in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                Need urgent delivery? Our single car carrier towing vehicles provide direct, dedicated routing for your vehicle without intermediate stops.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Enclosed Carrier Services in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                Safeguard your vehicle from public view, highway dust, rain, and gravel. Our hard-sided covered trailers offer complete environmental protection.
              </p>

              <h3 className="fw-bold text-dark h4 mt-5 mb-3">Car Transport in {city}, {state} Price Comparison</h3>
              <p className="text-muted leading-relaxed mb-3">
                Below are the approximate car transportation rates from {city}. Costs are calculated based on model size, transport type (Open vs. Enclosed), and distance.
              </p>
              <p className="text-muted leading-relaxed mb-2">
                The 3 main factors affecting vehicle transport costs are:
              </p>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Distance and Route:</strong> Long-distance highway transits incur higher fuel and toll costs.</li>
                <li className="mb-2"><strong>Vehicle Size & Model:</strong> Heavy SUVs require more carrier space and fuel capacity than light hatchbacks.</li>
                <li className="mb-2"><strong>Carrier Type Selected:</strong> Enclosed container shipping carries a premium over open-trailer shipping.</li>
              </ul>

              {/* Price comparison rates table */}
              <div className="table-responsive my-4">
                <table className="table table-bordered table-striped text-center">
                  <thead>
                    <tr className="bg-danger text-white">
                      <th>Vehicle Category</th>
                      <th>Local Shipping Rates</th>
                      <th>Domestic Shifting Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hatchback Shifting</td>
                      <td>Rs 3,500 - 6,000</td>
                      <td>Rs 7,500 - 12,000</td>
                    </tr>
                    <tr>
                      <td>Sedan Shifting</td>
                      <td>Rs 4,500 - 7,500</td>
                      <td>Rs 9,000 - 15,000</td>
                    </tr>
                    <tr>
                      <td>SUV / MUV Shifting</td>
                      <td>Rs 5,500 - 9,500</td>
                      <td>Rs 11,000 - 18,000</td>
                    </tr>
                    <tr>
                      <td>Luxury & Sports Car</td>
                      <td>Rs 8,000 - 15,000</td>
                      <td>Rs 18,000 - 32,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="fw-bold text-dark h4 mt-5 mb-3">Why Choose Maruti Trans in {city}, {state}?</h3>
              <ul className="text-muted ps-3 mb-5">
                <li className="mb-2">Over 10 years of vehicle shipping experience.</li>
                <li className="mb-2">Registered corporate GST invoice and IBA bills.</li>
                <li className="mb-2">Certified tie-down wheel straps for zero-scratch transit.</li>
                <li className="mb-2">Real-time GPS coordinator highway updates.</li>
                <li className="mb-2">Full transit insurance coverage for complete security.</li>
              </ul>
            </div>

            {/* Right Map Column */}
            <div className="col-lg-5 col-md-5">
              <div className="sticky-top" style={{ top: "100px" }}>
                <div className="p-2 bg-light border rounded-3 shadow-sm">
                  <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(city + ' ' + state)}&z=13&output=embed`}
                    title={`Map of Maruti Trans Car Shifting in ${city}`}
                    width="100%" 
                    height="400" 
                    loading="lazy"
                    frameBorder="0" 
                    style={{ border: 0 }}
                    className="rounded-3"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Full Width Column */}
            <div className="col-12 mt-4">

              {/* 5-Step Process */}
              <section className="process-section py-4 border-top border-bottom my-5">
                <div className="container">
                  <div className="text-center process-header">
                    <span className="process-badge">How It Works</span>
                    <h2 className="process-title">
                      Our Simple <span className="text-danger">5-Step</span> Process
                    </h2>
                    <p className="process-subtitle">
                      We've streamlined our moving process to make your relocation hassle-free and stress-free
                    </p>
                  </div>

                  <div className="process-wrapper position-relative">
                    <div className="process-line d-none d-lg-block"></div>
                    <div className="row g-4 justify-content-center align-items-stretch">
                      
                      <div className="col-12 col-sm-6 col-lg-2 process-item text-center">
                        <div className="process-icon-wrapper d-flex flex-column align-items-center mx-auto">
                          <div className="process-icon">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <span className="process-step-number">01</span>
                        </div>
                        <h5 className="process-step-title">Book Your Move</h5>
                        <p className="process-step-desc">
                          Call us or fill the form to get a free instant personalized quote tailored specifically for your relocation
                        </p>
                      </div>

                      <div className="col-12 col-sm-6 col-lg-2 process-item text-center">
                        <div className="process-icon-wrapper d-flex flex-column align-items-center mx-auto">
                          <div className="process-icon">
                            <i className="bi bi-clipboard-check"></i>
                          </div>
                          <span className="process-step-number">02</span>
                        </div>
                        <h5 className="process-step-title">Survey & Planning</h5>
                        <p className="process-step-desc">
                          Our team visits for detailed survey and creates a customized moving plan
                        </p>
                      </div>

                      <div className="col-12 col-sm-6 col-lg-2 process-item text-center">
                        <div className="process-icon-wrapper d-flex flex-column align-items-center mx-auto">
                          <div className="process-icon">
                            <i className="bi bi-box-seam"></i>
                          </div>
                          <span className="process-step-number">03</span>
                        </div>
                        <h5 className="process-step-title">Professional Packing</h5>
                        <p className="process-step-desc">
                          Expert packing with quality materials ensuring zero damage transit
                        </p>
                      </div>

                      <div className="col-12 col-sm-6 col-lg-2 process-item text-center">
                        <div className="process-icon-wrapper d-flex flex-column align-items-center mx-auto">
                          <div className="process-icon">
                            <i className="bi bi-truck"></i>
                          </div>
                          <span className="process-step-number">04</span>
                        </div>
                        <h5 className="process-step-title">Safe Transportation</h5>
                        <p className="process-step-desc">
                          Secure transportation GPS tracking for complete peace of mind
                        </p>
                      </div>

                      <div className="col-12 col-sm-6 col-lg-2 process-item text-center">
                        <div className="process-icon-wrapper d-flex flex-column align-items-center mx-auto">
                          <div className="process-icon">
                            <i className="bi bi-house-check"></i>
                          </div>
                          <span className="process-step-number">05</span>
                        </div>
                        <h5 className="process-step-title">Unpack & Setup</h5>
                        <p className="process-step-desc">
                          Careful unpacking and systematic professional arrangement of all items at your new destination
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

              {/* Sibling Areas serve grid */}
              {siblingCities.length > 0 && (
                <div className="bg-light p-4 rounded-4 shadow-sm border mb-5">
                  <h3 className="fw-bold text-dark h4 mb-4">Areas We Serve across in {state}</h3>
                  <p className="text-muted mb-3">Services range from top quality relocation from all major cities of {state} such as:</p>
                  
                  <div className="row g-2">
                    {siblingCities.map((sibling, idx) => (
                      <div key={idx} className="col-12 col-sm-6 col-md-4">
                        <Link href={`/${sibling.slug}`} className="text-decoration-none text-danger fw-semibold d-flex align-items-center gap-2">
                          <i className="bi bi-geo-alt-fill"></i>
                          <span>Car Shifting in {sibling.city}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why We Are the Best Choice */}
              <section className="bg-white py-5 border-top border-bottom my-5">
                <div className="container">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-5">
                      <img 
                        src="/assets/images/gallery/gallery3.webp" 
                        alt={`${city} Team`} 
                        loading="lazy"
                        className="img-fluid rounded-4 shadow-sm border"
                      />
                    </div>
                    <div className="col-md-7">
                      <span className="badge bg-danger text-white px-3 py-2 rounded mb-3 d-inline-block">Why we best</span>
                      <h3 className="heading-primary mt-2 mb-3 text-danger fw-bold h3">
                        Why We Are the Best Choice in {city}
                      </h3>
                      <ul className="list-unstyled d-flex flex-column gap-3 mt-3 text-muted">
                        <li className="d-flex align-items-start gap-2">
                          <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                          <span><strong>Local Precision:</strong> Our deep knowledge of {city}'s routes ensures we avoid traffic bottlenecks for faster delivery.</span>
                        </li>
                        <li className="d-flex align-items-start gap-2">
                          <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                          <span><strong>Safety Guaranteed:</strong> We prioritize the security of your goods with professional handling and specialized transport vehicles.</span>
                        </li>
                        <li className="d-flex align-items-start gap-2">
                          <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                          <span><strong>Transparent Estimates:</strong> We provide clear, upfront pricing with no hidden fees, helping you stay within your relocation budget.</span>
                        </li>
                        <li className="d-flex align-items-start gap-2">
                          <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                          <span><strong>Full-Service Support:</strong> From dismantling furniture to setting up your new space, we handle the heavy lifting while you focus on settling in.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Services in City Section */}
              <section className="bg-light p-4 rounded-4 shadow-sm border mb-5">
                <div className="container">
                  <div className="text-center mb-4">
                    <span className="badge bg-danger text-white px-3 py-2 rounded mb-3 d-inline-block">Our Service</span>
                    <h3 className="heading-primary mt-2 mb-3 text-danger fw-bold h3">
                      Our Services in {city}
                    </h3>
                  </div>

                  <div className="row g-4">
                    
                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-send"></i>
                        </div>
                        <h4 className="city-service-title">Car Courier Service in {city}</h4>
                        <p className="city-service-desc">
                          Express state-to-state vehicle shipping with optimized corridor routing for quick delivery. Perfect for individual car shipping.
                        </p>
                        <Link href="/car-courier-service" className="city-service-link">
                          View Courier Service →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-house-check"></i>
                        </div>
                        <h4 className="city-service-title">Door-to-Door Car Shifting</h4>
                        <p className="city-service-desc">
                          Convenient home pickup and direct doorstep delivery with certified check sheets and hydraulic rollback loaders.
                        </p>
                        <Link href="/door-to-door-car-transport" className="city-service-link">
                          View Door-to-Door Transport →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-arrow-left-right"></i>
                        </div>
                        <h4 className="city-service-title">Car Relocation Service</h4>
                        <p className="city-service-desc">
                          Coordinated vehicle shifting for corporate transfers and family relocations across India with complete transit tracking.
                        </p>
                        <Link href="/car-relocation-service" className="city-service-link">
                          View Relocation Service →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-truck"></i>
                        </div>
                        <h4 className="city-service-title">Car Carrier Shifting</h4>
                        <p className="city-service-desc">
                          Economical multi-car shipping via open double-decker carrier trailers, secured by four-point wheel-strapping systems.
                        </p>
                        <Link href="/car-carrier" className="city-service-link">
                          View Car Carrier →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <h4 className="city-service-title">Luxury Car Shifting</h4>
                        <p className="city-service-desc">
                          White-glove handling with soft wheel straps and air-ride trailers for sports, classic, and premium brand automobiles.
                        </p>
                        <Link href="/luxury-car-transport-services" className="city-service-link">
                          View Luxury Shifting →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-shield-lock"></i>
                        </div>
                        <h4 className="city-service-title">Enclosed Car Carrier</h4>
                        <p className="city-service-desc">
                          Covered hard-sided trailer containers protecting luxury and vintage cars from weather conditions and road debris.
                        </p>
                        <Link href="/enclosed-car-carrier-services" className="city-service-link">
                          View Enclosed Carrier →
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Frequently Asked Questions & Keywords */}
              <section className="bg-white py-5 border-top border-bottom my-5 rounded-4 shadow-sm border p-4">
                <div className="container p-0">
                  <div className="row g-4 align-items-start">
                    
                    {/* Left FAQ Accordion */}
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <h2 className="display-6 fw-bold mb-0 text-dark h3">Frequently Asked Questions</h2>
                      </div>

                      <div className="accordion" id="faqAccordion">
                        
                        <div className="accordion-item border mb-2 rounded-3 overflow-hidden">
                          <h2 className="accordion-header" id="faqHead1">
                            <button 
                              className="accordion-button fw-bold text-dark bg-white" 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target="#faqCollapse1"
                              aria-expanded="true"
                            >
                              1. What is the average cost of transporting cars through the trucking firms?
                            </button>
                          </h2>
                          <div id="faqCollapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted leading-relaxed small">
                              The rates for moving cars with the assistance of trailer trucks depend on the distance to be travelled, the type of car and other terms. To be provided with a specific price quote depending on your order specifications, please, do not hesitate to let us know.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item border mb-2 rounded-3 overflow-hidden">
                          <h2 className="accordion-header" id="faqHead2">
                            <button 
                              className="accordion-button collapsed fw-bold text-dark bg-white" 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target="#faqCollapse2"
                            >
                              2. Apart from the actual cost for the logistics shifting, is that any other means of service charge possible?
                            </button>
                          </h2>
                          <div id="faqCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted leading-relaxed small">
                              Other expenses as part of service charges may be the cost of packing material, labour costs, insurance costs and any other special services which may include dismantling and reassembling of furniture.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item border mb-2 rounded-3 overflow-hidden">
                          <h2 className="accordion-header" id="faqHead3">
                            <button 
                              className="accordion-button collapsed fw-bold text-dark bg-white" 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target="#faqCollapse3"
                            >
                              3. How long does it take to shift the logistics?
                            </button>
                          </h2>
                          <div id="faqCollapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted leading-relaxed small">
                              The length of shifting of logistics is also in function with distance as well as the quantity of lot. On average, it may take anything from 3 to 7 days depending on the kind of shifting and the custom options.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item border mb-2 rounded-3 overflow-hidden">
                          <h2 className="accordion-header" id="faqHead4">
                            <button 
                              className="accordion-button collapsed fw-bold text-dark bg-white" 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target="#faqCollapse4"
                            >
                              4. General description of packers and movers, evaluation of the workflow. How do they work?
                            </button>
                          </h2>
                          <div id="faqCollapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted leading-relaxed small">
                              Packers and movers follow a systematic process: major activities are the identification of equipment required as well as the assessment of cost for such equipment, packing, loading, transportation, unloading and unpacking of equipment.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item border mb-2 rounded-3 overflow-hidden">
                          <h2 className="accordion-header" id="faqHead5">
                            <button 
                              className="accordion-button collapsed fw-bold text-dark bg-white" 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target="#faqCollapse5"
                            >
                              5. How many days in advance should I book for shifting my bike?
                            </button>
                          </h2>
                          <div id="faqCollapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted leading-relaxed small">
                              It is, of course, wise to pre-book bike shifting and household moves at least one to two weeks in advance so that there will be ample time for planning.
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Right Relevant Keywords Badge Cloud */}
                    <div className="col-lg-6">
                      <h6 className="fw-bold mb-3 text-danger h5">Relevant Keywords in {city}</h6>
                      <div className="d-flex flex-wrap gap-2 mt-3">
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">Local movers in {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">Moving services near {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">Cheap movers {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">House movers near {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">Cheap movers in {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">House movers {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">Affordable movers {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">Movers near me {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">{city} best moving companies</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">International movers from {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">Movers {city}</span>
                        <span className="badge bg-dark text-white p-2 px-3 fw-normal">Local moving companies in {city}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Final callout */}
              <div className="city-callout-box">
                <h3 className="city-callout-title">Contact us today to get free quote for your shifting</h3>
                <p className="city-callout-desc">Packers and movers in {city}, {state} like Maruti Trans Car Carrier Shifting offer best packers and movers services which would be smooth and hassle free.</p>
                <a href="tel:+918512000715" className="city-callout-btn">
                  <i className="bi bi-telephone-fill"></i> Call Now: +91 8512000715
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
