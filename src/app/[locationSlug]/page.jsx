import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import locationsData from "@/data/locations.json";
import "./location-slug.css";

export async function generateMetadata({ params }) {
  const { locationSlug } = await params;
  const location = locationsData[locationSlug];

  if (!location) {
    return {
      title: "Best Packers and Movers - SRS Packers",
      description: "SRS Packers And Movers offers premium relocation and shifting services."
    };
  }

  return {
    title: `Best Packers and Movers in ${location.city}, ${location.state}, SRS Packers`,
    description: `SRS Packers and Movers in ${location.city}, ${location.state} offers premium relocation, home shifting, and office moving services. Get a free quote today.`,
    keywords: `packers and movers ${location.city.toLowerCase()}, home shifting ${location.city.toLowerCase()}, local moving ${location.city.toLowerCase()}`
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
              <span>{city}</span>
            </nav>
            <h1>Best Packers and Movers in {city}</h1>
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
                SRS Packers and Movers in {city}, {state} – Your Trusted Moving Partner Since 2018
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                SRS Packers and Movers in {city}, {state}, is a professional and experienced removal company, which provides hassle free relocation services. From local to cross country moving, it’s all stress free. Our cheap Best Packers and Movers in {city}, {state} covers everything from residential moving, move to office, vehicle shift or transport of the fragile items. We are a hassle free, affordable and safe move with our expert team of packing materials and advanced logistics.
              </p>

              <h3 className="fw-bold text-dark h4 mb-3">{city}, {state} Packing and Moving Services</h3>
              <p className="text-muted leading-relaxed mb-4">
                The best packing material, which we provide our customers at SRS Packers and Movers, ensures that your valuables are safe and intact while in transit. For this purpose we use materials like bubble wraps, blankets, thermocol, wooden frames, cardboard/ corrugated and wardrobe boxes, plastic crates, foam sheets and corrugated rolls. We make sure to pack our belongings in the best way possible in order to maintain quality of packing for comfortable transportation.
              </p>

              <h3 className="fw-bold text-dark h4 mb-3">Affordable Packers and Movers {city}, {state}</h3>
              <p className="text-muted leading-relaxed mb-4">
                Looking for Cheap Packers and Movers in {city}, {state}. Being one of the reliable and affordable moving solutions provider SRS Packers and Movers provides packers and movers services at the best price or at the cheapest price than others. We offer transparent pricing and competitive rates which are much more affordable than any other home or office relocations company.
              </p>

              <h3 className="fw-bold text-dark h4 mb-3">Our Major Services we provide in {city}, {state}</h3>
              
              <h4 className="fw-bold text-danger h5 mt-4 mb-2">Household Shifting Services in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                Being considered as one of the Best Packers and Movers in {city}, {state}, SRS Packers and Movers is specialized in home shifting and residential moving. Whatever be your requirement, whether it be a 1BHK, 2BHK, 3BHK, 4BHK or bungalow, our team makes sure to help you through the process smoothly. We are a known and trusted home moving company that efficiently takes charge of all the areas of shifting house and make your move easy and stress free.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Office Relocation Services in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                For commercial or corporate solutions, we have various packages for personal or business customers. Our service covers safely transporting office laptops, desktops, printers, monitors and electrical appliances, office furniture etc. We also offer our de-assembling and reassembling furniture services that do not disrupt your business operation.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Car Transportation Services in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                Need vehicle relocation services? One more service offered by SRS Packers and Movers is secure Car carriers for car shifting and car transport. Be it an SUV, Sedan or any other car, we provide safe car driving services at really low cost and are able to deliver cars on time without any damage.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Bike Shifting Services in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                We are into the two wheeler transport in which we do bike transport and bike relocation service with a secure mode. Whatever the mode of transport and however plush the wheels of the vehicle, our bike shifting and bike transportation promises your vehicle would make it safely and without any damage.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">{city}, {state} Packers and Movers with Insurance</h4>
              <p className="text-muted leading-relaxed mb-4">
                We offer transit insurance and goods insurance for added peace of mind. Our comprehensive coverage ensures that your belongings are protected against unforeseen events during the move.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Professional Packers and Movers {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                Please have no doubt that SRS Packers and Movers is the best Packers and Movers of {city}, {state}. Our handymen, trained in our Professional Moving Services have years of experience in handling them. In {state}, we are the best and reliable packers and movers when you are looking for shifting within {city} or from {city} to any other city of {state} or any city across India.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Local Packers and Movers {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                In case of local shifting solutions, SRS Packers and Movers are offering fast and effective local moving services. Our local moving company handles all kinds of moving whether you are moving around {city}, within {state} or anywhere near the area. You can also come to our local office for you hassle free relocation.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Furniture Moving and Packing in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                We provide heavy or delicate furniture with our experts. Secure transportation of your valuable items is ensured and we provide furniture shifting and furniture de-assembling services to make sure these furniture items are safe during transit.
              </p>

              <h4 className="fw-bold text-danger h5 mb-2">Packers and Movers for Fragile Items in {city}, {state}</h4>
              <p className="text-muted leading-relaxed mb-4">
                We are specialized in the handling of delicate goods: art pieces, electronics, and glass ware so we provide glass moving, fragile care, handle with care as well as antique arts transportation services for the utmost safety.
              </p>

              <h3 className="fw-bold text-dark h4 mt-5 mb-3">Packers and Movers Near Me in {city}, {state}</h3>
              <p className="text-muted leading-relaxed mb-4">
                In search to find the Cheapest or the Best Packers and Movers near me? SRS Packers and Movers provides services across {state} for quick and efficient moving solutions available near you.
              </p>

              <h3 className="fw-bold text-dark h4 mt-4 mb-3">IBA Approved Packers in {city}, {state}</h3>
              <p className="text-muted leading-relaxed mb-4">
                An IBA approved transporter offering IBA approved bills to the government employees is SRS Packers and Movers. We also provide IBA bills to the packers and movers if required.
              </p>

              <h3 className="fw-bold text-dark h4 mt-4 mb-3">Packers and Movers in {city}, {state} Price Comparison</h3>
              <p className="text-muted leading-relaxed mb-3">
                Make sure you compare our prices of {city}, {state} with the Free Quote offered by various service providers before opting for one. But still you will find SRS Packers And Movers as the cheapest and the best shifting service provider in the affordable price range. So feel free to hiring us anytime.
              </p>
              <p className="text-muted leading-relaxed mb-2">
                The 3 factors affecting cost of packing and moving are:
              </p>
              <ul className="text-muted ps-3 mb-4">
                <li className="mb-2"><strong>Distance and destination:</strong> Long distances will naturally cost more due to fuel and tolls.</li>
                <li className="mb-2"><strong>Volume of goods:</strong> The size of your house determines the truck size and staff size required.</li>
                <li className="mb-2"><strong>Type of packing materials used:</strong> Heavy multi-layer wrapping for fragile assets adds to quality costs.</li>
              </ul>

              {/* Price comparison rates table */}
              <div className="table-responsive my-4">
                <table className="table table-bordered table-striped text-center">
                  <thead>
                    <tr className="bg-danger text-white">
                      <th>Shifting Category</th>
                      <th>Local Shifting Rates</th>
                      <th>Domestic Shifting Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 BHK House Shifting</td>
                      <td>Rs 5,500 - 9,500</td>
                      <td>Rs 11,500 - 18,000</td>
                    </tr>
                    <tr>
                      <td>2 BHK House Shifting</td>
                      <td>Rs 8,000 - 15,500</td>
                      <td>Rs 14,000 - 24,000</td>
                    </tr>
                    <tr>
                      <td>3 BHK House Shifting</td>
                      <td>Rs 12,000 - 21,000</td>
                      <td>Rs 20,000 - 32,000</td>
                    </tr>
                    <tr>
                      <td>Car Carrier Services</td>
                      <td>Rs 4,000 - 8,000</td>
                      <td>Rs 9,000 - 22,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="fw-bold text-dark h4 mt-5 mb-3">Why Choose SRS Packers and Movers in {city}, {state}?</h3>
              <ul className="text-muted ps-3 mb-5">
                <li className="mb-2">With over 6 years of experience dated since 2018.</li>
                <li className="mb-2">Affordable and reliable relocation solutions.</li>
                <li className="mb-2">Secured transit by packing materials of best quality.</li>
                <li className="mb-2">Household, office as well as vehicle transferring with the expert manner.</li>
                <li className="mb-2">IBA-approved packers for government employees.</li>
                <li className="mb-2">Insurance coverage for added protection.</li>
              </ul>
            </div>

            {/* Right Map Column */}
            <div className="col-lg-5 col-md-5">
              <div className="sticky-top" style={{ top: "100px" }}>
                <div className="p-2 bg-light border rounded-3 shadow-sm">
                  <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(city + ' ' + state)}&z=13&output=embed`}
                    title={`Map of SRS Packers and Movers in ${city}`}
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
                          <span>Packers and Movers in {sibling.city}</span>
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
                        src="/assets/images/gallery/gallery3.jpg" 
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
                          <i className="bi bi-boxes"></i>
                        </div>
                        <h4 className="city-service-title">Warehousing Service in {city}</h4>
                        <p className="city-service-desc">
                          Looking for dependable warehouse services in {city}? SRS Packers and Movers offers industry-leading storage space to store a variety of goods, for a short period and long period.
                        </p>
                        <Link href="/warehousing" className="city-service-link">
                          View Warehousing Service →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-globe"></i>
                        </div>
                        <h4 className="city-service-title">International Packers and Movers</h4>
                        <p className="city-service-desc">
                          SRS Packers and Movers provides families and professionals with dependable international relocation services. Our exemplary service records have built SRS's credibility through our years of experience.
                        </p>
                        <Link href="/international-moving" className="city-service-link">
                          View International Moving →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-building-gear"></i>
                        </div>
                        <h4 className="city-service-title">Industrial Shifting Services</h4>
                        <p className="city-service-desc">
                          At SRS Packers and Movers, our team handles industrial shifting services in {city} with a level of care and planning that large-scale moves genuinely require.
                        </p>
                        <Link href="/services" className="city-service-link">
                          View Industrial Shifting →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-house-door"></i>
                        </div>
                        <h4 className="city-service-title">Home Shifting Service</h4>
                        <p className="city-service-desc">
                          Enjoy a smooth and stress-free household shifting experience in {city} with SRS Packers and Movers. Our experienced team handles every detail with care.
                        </p>
                        <Link href="/residential-moving" className="city-service-link">
                          View Home Shifting →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-receipt"></i>
                        </div>
                        <h4 className="city-service-title">Bill For Claim Packers</h4>
                        <p className="city-service-desc">
                          SRS Packers and Movers specializes in providing transparent, verified, and fully compliant Bill for Claim Packers and Movers in {city}, ensuring documentation is accepted without hassle.
                        </p>
                        <Link href="/contacts" className="city-service-link">
                          View Bill For Claim →
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="city-service-card">
                        <div className="city-service-icon">
                          <i className="bi bi-truck"></i>
                        </div>
                        <h4 className="city-service-title">Car Transportation Services</h4>
                        <p className="city-service-desc">
                          Experience safe and reliable car transportation services in {city} with our expert team. We ensure your vehicle is handled with the utmost care and delivered on time.
                        </p>
                        <Link href="/car-transportation-services" className="city-service-link">
                          View Car Transportation →
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
                <p className="city-callout-desc">Packers and movers in {city}, {state} like SRS Packers and Movers offer best packers and movers services which would be smooth and hassle free.</p>
                <a href="tel:+919892325154" className="city-callout-btn">
                  <i className="bi bi-telephone-fill"></i> Call Now: +91 9892325154
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
