import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import "./thane.css";

export const metadata = {
  title: "Best Car Shifting in Thane, Maharashtra, Maruti Trans Packers",
  description: "Your Search Ends Here! Maruti Trans Car Shifting in Thane – Expert Packing and Moving Services Providing Comprehensive Relocation Solutions in Thane, Maharashtra",
  keywords: "movers and packers in Thane, Movers Packers Thane, Movers near me Thane, Packers and movers in Thane, Moving companies near me Thane, Movers Thane, Packers and movers near me Thane",
};

export default function ThanePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="page-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/location">Location</Link>
              <span>/</span>
              <Link href="/maharashtra-packers-and-movers">Maharashtra</Link>
              <span>/</span>
              <span>Thane</span>
            </nav>
            <h1 className="page-title">Best Car Shifting in Thane</h1>
            <p className="page-description">
              Discover our trusted branches across Thane, delivering seamless and reliable moving experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Quote Form */}
      <div className="container mt-4 pt-2">
        <QuoteForm defaultFrom="Thane, Maharashtra" layout="slider" />
      </div>

      {/* About Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4">Popular Car Shifting in Thane, India</h2>
              <p className="text-muted">
                <a href="https://thane.nic.in/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark fw-bold">Thane</a> is a youthful city located in the state of Maharashtra which has beautiful lakes, historical beauty, and a growing economy. Being one of the biggest districts of the Mumbai Metropolitan Region, Thane is characterised by its numerous languages and historical sights.
              </p>
              <p className="text-muted">
                If you are in search of a reliable packers and movers service provider in Thane then you can blindly opt for Maruti Trans Car Carrier Shifting. We provide excellent packing and moving, loading and unloading services, and warehouse storage.
              </p>
              <p className="text-muted">
                Our complete packers and movers services are extended in-home and office shifting, and reliable car transportation from <Link href="/thane-packers-movers-maharashtra" className="text-decoration-none text-dark fw-bold">Thane</Link> to Nalanda. We also offer IBA-approved transit insurance domestic shifting services and more.
              </p>

              <h3 className="fw-bold text-dark mt-4 mb-3">Comprehensive Car Carrier Shifting Services Across Maharashtra</h3>
              <p className="text-muted">
                Maruti Trans Car Carrier Shifting is a leading company which offers packing and moving services in Maharashtra. Be it from Thane to <Link href="#!" className="text-decoration-none text-dark fw-bold">Ghatkopar</Link> or Bandra to Andheri we make sure that the customers get safe and fraud-free packers and movers services with us.
              </p>
              <p className="text-muted">
                We perform local shifting from <Link href="/pune-packers-movers-maharashtra" className="text-decoration-none text-dark fw-bold">Pune</Link> to <Link href="/navi-mumbai-packers-movers-maharashtra" className="text-decoration-none text-dark fw-bold">Navi Mumbai</Link>, <Link href="/nashik-packers-movers-maharashtra" className="text-decoration-none text-dark fw-bold">Nashik</Link> to <Link href="/nagpur-packers-movers-maharashtra" className="text-decoration-none text-dark fw-bold">Nagpur</Link>, <Link href="/mumbai-packers-movers-maharashtra" className="text-decoration-none text-dark fw-bold">Mumbai</Link> to <Link href="/aurangabad-packers-movers-maharashtra" className="text-decoration-none text-dark fw-bold">Aurangabad</Link> and many other locations with great safety. Our good movers packers service also includes Badlapur to Thane and <Link href="/panvel-packers-movers-maharashtra" className="text-decoration-none text-dark fw-bold">Panvel</Link> to Nashik.
              </p>
              <p className="text-muted">
                To avail of our top packing and moving services, Maruti Trans Car Carrier Shifting is the most preferred choice for you. Reliability and non-scammed, authentic and efficient packing and moving services can be obtained from the best IBA-approved movers and packers in Thane.
              </p>
            </div>

            <div className="col-md-5">
              <div className="card p-4 shadow-sm border rounded-3 bg-light">
                <h3 className="fw-bold text-dark mb-3">Car Shifting in Thane</h3>
                <address className="text-muted mb-4">
                  Plot no. 9, Shop no. 4, City inclave, sec.2a, koparkhairne Mumbai, Maharashtra 400709
                </address>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2412429580972!2d72.9733895!3d19.228315200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92ebb87e077%3A0x872b62ef9e570b5!2sMaruti Trans%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1767767761289!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="process-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="text-center process-header">
            <span className="process-badge">How It Works</span>
            <h2 className="process-title">
              Our Simple <span className="text-red">5-Step</span> Process
            </h2>
            <p className="process-subtitle">
              We've streamlined our moving process to make your relocation hassle-free and stress-free
            </p>
          </div>

          {/* Process Steps */}
          <div className="process-wrapper position-relative">
            {/* Connecting Line */}
            <div className="process-line d-none d-lg-block"></div>

            <div className="row g-4 justify-content-center align-items-center">
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

      {/* Why Choose Us Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-5">
              <img
                src="https://marutitrans.com/assets/images/gallery/gallery3.webp"
                alt="Thane Team"
                loading="lazy"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-md-7">
              <span className="badge bg-danger text-white px-3 py-2 rounded mb-3 d-inline-block">Why we best</span>
              <h3 className="heading-primary mt-2 mb-4 text-danger fw-bold">
                Why We Are the Best Choice in Thane
              </h3>

              <ul className="list-unstyled d-flex flex-column gap-3">
                <li className="text-muted">
                  <i className="bi bi-check-circle-fill text-danger me-2"></i>
                  <strong>Local Precision:</strong> Our deep knowledge of Thane's routes ensures we avoid traffic bottlenecks for faster delivery.
                </li>
                <li className="text-muted">
                  <i className="bi bi-check-circle-fill text-danger me-2"></i>
                  <strong>Safety Guaranteed:</strong> We prioritize the security of your goods with professional handling and specialized transport vehicles.
                </li>
                <li className="text-muted">
                  <i className="bi bi-check-circle-fill text-danger me-2"></i>
                  <strong>Transparent Estimates:</strong> We provide clear, upfront pricing with no hidden fees, helping you stay within your relocation budget.
                </li>
                <li className="text-muted">
                  <i className="bi bi-check-circle-fill text-danger me-2"></i>
                  <strong>Full-Service Support:</strong> From dismantling furniture to setting up your new space, we handle the heavy lifting while you focus on settling in.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-white py-5 border-top">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-12">
              <div className="text-center mb-5">
                <span className="badge bg-danger text-white px-3 py-2 rounded mb-3 d-inline-block">Our Service</span>
                <h3 className="heading-primary mt-2 mb-3 text-danger fw-bold">Our Services in Thane</h3>
              </div>

              {/* Service 1 */}
              <div className="col-12 col-md-12 mb-5 border-bottom pb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="/about" className="text-decoration-none text-dark hover-danger">
                    Office Shifting Services in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    Make your office move easy with our office shifting services in Thane. We handle everything from packing to setting up, ensuring a quick and smooth move with minimal disruption to your business.
                  </p>
                </div>
                <Link href="/about" className="text-danger fw-semibold text-decoration-none">
                  View Office Shifting Services... →
                </Link>
              </div>

              {/* Service 2 */}
              <div className="col-12 col-md-12 mb-5 border-bottom pb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="/logistic-services" className="text-decoration-none text-dark hover-danger">
                    Logistics Service in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    <strong>Maruti Trans Logistics Services</strong> provides businesses and individuals with dependable logistics solutions. Our exemplary service standards have built Maruti Trans's reputation as a trusted logistics provider in Thane through our years of experience transporting goods and consignments safely with efficiency.
                  </p>
                </div>
                <Link href="/logistic-services" className="text-danger fw-semibold text-decoration-none">
                  View Logistics Service... →
                </Link>
              </div>

              {/* Service 3 */}
              <div className="col-12 col-md-12 mb-5 border-bottom pb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="/residential-moving" className="text-decoration-none text-dark hover-danger">
                    Home Shifting Service in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    Enjoy a smooth and stress-free household shifting experience in Thane with Maruti Trans Car Carrier Shifting. Our experienced team handles every detail with care, ensuring a flawless and efficient relocation process.
                  </p>
                </div>
                <Link href="/residential-moving" className="text-danger fw-semibold text-decoration-none">
                  View Home Shifting Service... →
                </Link>
              </div>

              {/* Service 4 */}
              <div className="col-12 col-md-12 mb-5 border-bottom pb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="#!" className="text-decoration-none text-dark">
                    Industrial shifting Services in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    At <strong>Maruti Trans Car Carrier Shifting</strong>, our team handles <strong>industrial shifting services in Thane</strong> with a level of care and planning that large-scale moves genuinely require. Throughout our many years of being in the relocation industry, we have had the opportunity to work with several different industries.
                  </p>
                </div>
                <Link href="#!" className="text-danger fw-semibold text-decoration-none">
                  View Industrial shifting... →
                </Link>
              </div>

              {/* Service 5 */}
              <div className="col-12 col-md-12 mb-5 border-bottom pb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="/warehousing" className="text-decoration-none text-dark hover-danger">
                    Warehousing Service in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    Looking for dependable warehouse services in Amravati? Maruti Trans Car Carrier Shifting offers industry-leading storage space to store a variety of goods, for a short period and long period in Amravati.
                  </p>
                </div>
                <Link href="/warehousing" className="text-danger fw-semibold text-decoration-none">
                  View Warehousing Service... →
                </Link>
              </div>

              {/* Service 6 */}
              <div className="col-12 col-md-12 mb-5 border-bottom pb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="#!" className="text-decoration-none text-dark">
                    Bill For Claim Car Shifting in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    When people shift their home, office, or vehicle, one of the biggest requirements today is a Genuine Bill for Claim that can be used for insurance, relocation allowance, travel claims, or company reimbursement. A proper moving bill is not just a receipt; it is your official proof of relocation expenses. Maruti Trans Car Carrier Shifting specializes in providing transparent, verified, and fully compliant <strong>Bill for Claim Car Shifting in Thane</strong>, ensuring that your documentation is accepted without any hassle.
                  </p>
                </div>
                <Link href="#!" className="text-danger fw-semibold text-decoration-none">
                  View Bill For Claim Packers... →
                </Link>
              </div>

              {/* Service 7 */}
              <div className="col-12 col-md-12 mb-5 border-bottom pb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="#!" className="text-decoration-none text-dark">
                    IBA Approved Car Shifting in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    Trust the expertise of IBA Approved Car Shifting in Thane for your relocation needs. Our certified services ensure secure and efficient moves, offering peace of mind with every step of your journey.
                  </p>
                </div>
                <Link href="#!" className="text-danger fw-semibold text-decoration-none">
                  View IBA Approved Packers... →
                </Link>
              </div>

              {/* Service 8 */}
              <div className="col-12 col-md-12 mb-5 border-bottom pb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="/international-moving" className="text-decoration-none text-dark hover-danger">
                    International Car Shifting in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    <strong>Maruti Trans Car Carrier Shifting</strong> provides families and professionals with dependable international relocation services. Our exemplary service records have built Maruti Trans's credibility as the leading mover in your city through our years of experience transporting our customers' possessions overseas with integrity.
                  </p>
                </div>
                <Link href="/international-moving" className="text-danger fw-semibold text-decoration-none">
                  View International Packers... →
                </Link>
              </div>

              {/* Service 9 */}
              <div className="col-12 col-md-12 mb-4">
                <h4 className="fw-bold mb-2">
                  <Link href="/car-transportation-services" className="text-decoration-none text-dark hover-danger">
                    Car Transportation Services in Thane
                  </Link>
                </h4>
                <div className="mb-3 text-muted">
                  <p>
                    Experience safe and reliable car transportation services in Thane with our expert team. We ensure your vehicle is handled with the utmost care, providing timely and secure delivery to your destination.
                  </p>
                </div>
                <Link href="/car-transportation-services" className="text-danger fw-semibold text-decoration-none">
                  View Car Transportation... →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="bg-white py-5 border-top">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-12 areas-served-section">
              <div className="text-center mb-5">
                <span className="badge bg-danger text-white px-3 py-2 rounded mb-3 d-inline-block">Coverage Areas</span>
                <h2 className="heading-primary text-danger fw-bold">Areas We Serve Near Thane</h2>
                <p className="text-muted">We cover almost every part of Thane</p>
              </div>

              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {[
                  "Thane West", "Thane East", "Kalyan", "Dombivli", "Ulhasnagar", "Bhiwandi",
                  "Badlapur", "Ambernath", "Mira Road", "Bhayandar", "Vasai", "Virar", "Nalasopara",
                  "Mumbra", "Diva", "Kalwa", "Vartak Nagar", "Ghodbunder Road", "Majiwada",
                  "Manpada", "Kasarvadavali", "Wagle Estate", "Vasant Vihar", "Hiranandani Estate",
                  "Panch Pakhadi", "Palva City", "Kapurbawdi", "Owale", "Bramhand", "Patlipada",
                  "Vasant Lawns", "Balkum", "Kolshet Road", "Charai", "Lokmanya Nagar", "Jambli Naka",
                  "Louis Wadi", "Naupada", "Khopat", "Uthalsar", "Rabodi", "Samata Nagar",
                  "Pokhran Road", "Shree Nagar", "Dhokali", "Azad Nagar", "Khidkali", "Kalher",
                  "Shilphata", "Airoli"
                ].map((area, index) => (
                  <Link key={index} href="#!" className="text-decoration-none">
                    <div className="area-card">
                      <i className="bi bi-geo-alt-fill me-1"></i>
                      <span>{area} Branch</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Keywords Section */}
      <section className="bg-white py-5 border-top">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* FAQs */}
            <div className="col-lg-6">
              <div className="mb-4">
                <h2 className="display-6 fw-bold text-dark mb-0">Frequently Asked Questions</h2>
              </div>

              <div className="accordion" id="faqAccordion">
                {/* FAQ 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      1. What is the average cost of transporting cars through the trucking firms?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The rates for moving cars with the assistance of trailer trucks depend on the distance to be travelled, the type of car and other terms. To be provided with a specific price quote depending on your order specifications, please, do not hesitate to let us know.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      2. Apart from the actual cost for the logistics shifting, is that any other means of service charge possible?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Other expenses as part of service charges may be the cost of packing material, labour costs, insurance costs and any other special services which may include dismantling and reassembling of furniture.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      3. How long does it take to shift the logistics?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The length of shifting of logistics is also in function with distance as well as the quantity of lot. On average, it may take anything from 3 to 7 days depending on the kind of utensil and the cleaning service that is offering the service. This is explained by providing an estimated time of delivery at the checkout or at the time of the booking.
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                    >
                      4. General description of packers and movers, evaluation of the workflow. How do they work?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Packers and movers follow a systematic process: major activities are the identification of equipment required as well as the assessment of cost for such equipment, packing of equipment, loading of transportation of equipment, unloading of equipment and finally the unpacking of equipment. This is because your property is transported by special equipment and implements from one place to the other.
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                    >
                      5. How many days in advance should I need to book for shift my bike?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      It is, of course, wise to pre-book for a holiday and this should be for at least two weeks so that there will be ample time for planning.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="col-lg-6">
              <h6 className="fw-bold mb-3 text-dark">Relevant Keywords in Thane</h6>
              <div className="d-flex flex-wrap gap-2">
                {[
                  "Movers Thane",
                  "Cheap movers in Thane",
                  "Cheap moving companies in Thane",
                  "Best packers and movers in Thane",
                  "Professional movers in Thane",
                  "House removals Thane",
                  "International moving companies in Thane",
                  "Cheap movers Thane",
                  "Top 5 movers in Thane",
                  "Moving services near Thane",
                  "House movers near Thane",
                  "Top movers in Thane",
                  "Thane best moving companies",
                  "Local moving companies in Thane",
                  "Movers near me Thane",
                  "Moving companies near me Thane",
                  "Top 10 Packers in Thane",
                  "House movers Thane",
                  "International movers from Thane",
                  "Top 5 Packers in Thane",
                  "Packers and movers near me Thane",
                  "Affordable movers Thane",
                  "Local movers in Thane",
                  "Packers and movers in Thane",
                  "Removal companies in Thane",
                  "Packers movers Thane",
                  "Moving services in Thane"
                ].map((kw, idx) => (
                  <span key={idx} className="badge bg-secondary text-white px-3 py-2 rounded-pill font-monospace small">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs & Gallery Section */}
      <section className="bg-white py-5 border-top">
        <div className="container">
          <div className="row g-5">
            {/* Blogs */}
            <div className="col-lg-6">
              <h2 className="heading-primary text-danger mb-4">Latest Blogs</h2>
              <div className="row g-3">
                <div className="col-12">
                  <div className="card shadow-sm border rounded-3 overflow-hidden h-100">
                    <div className="row g-0 h-100">
                      <div className="col-4 h-100">
                        <img
                          src="https://marutitrans.com/assets/uploads/blog/591743671629.png"
                          className="w-100 h-100 object-fit-cover"
                          alt="Blog Image" loading="lazy" />
                      </div>
                      <div className="col-8">
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                          <h5 className="card-title text-dark small mb-2">
                            How to Avoid Fraud and Scams While Relocating
                          </h5>
                          <Link href="/blogs" className="btn btn-sm btn-danger align-self-start">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card shadow-sm border rounded-3 overflow-hidden h-100">
                    <div className="row g-0 h-100">
                      <div className="col-4 h-100">
                        <img
                          src="https://marutitrans.com/assets/uploads/blog/361729596410.png"
                          className="w-100 h-100 object-fit-cover"
                          alt="Blog Image" loading="lazy" />
                      </div>
                      <div className="col-8">
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                          <h5 className="card-title text-dark small mb-2">
                            Miracles of Engaging A Licensed and Safe Moving Company
                          </h5>
                          <Link href="/blogs" className="btn btn-sm btn-danger align-self-start">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card shadow-sm border rounded-3 overflow-hidden h-100">
                    <div className="row g-0 h-100">
                      <div className="col-4 h-100">
                        <img
                          src="https://marutitrans.com/assets/uploads/blog/771725693951.png"
                          className="w-100 h-100 object-fit-cover"
                          alt="Blog Image" loading="lazy" />
                      </div>
                      <div className="col-8">
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                          <h5 className="card-title text-dark small mb-2">
                            Moving Tips for Business the Right Approach to Office Moving
                          </h5>
                          <Link href="/blogs" className="btn btn-sm btn-danger align-self-start">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card shadow-sm border rounded-3 overflow-hidden h-100">
                    <div className="row g-0 h-100">
                      <div className="col-4 h-100">
                        <img
                          src="https://marutitrans.com/assets/uploads/blog/621724397335.png"
                          className="w-100 h-100 object-fit-cover"
                          alt="Blog Image" loading="lazy" />
                      </div>
                      <div className="col-8">
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                          <h5 className="card-title text-dark small mb-2">
                            Guide How To Check The Authenticity Of Packers And Movers
                          </h5>
                          <Link href="/blogs" className="btn btn-sm btn-danger align-self-start">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link href="/blogs" className="btn btn-danger px-4">
                  View All
                </Link>
              </div>
            </div>

            {/* Gallery */}
            <div className="col-lg-6">
              <h2 className="heading-primary text-danger mb-4">Gallery</h2>
              <div className="row g-3">
                {[
                  "g1.jpg", "g2.jpg", "g3.jpg",
                  "g4.jpg", "g5.jpg", "g6.jpg"
                ].map((gImg, idx) => (
                  <div key={idx} className="col-4">
                    <img
                      src={`https://marutitrans.com/assets/images/srs_gallery/${gImg}`}
                      className="img-fluid rounded shadow-sm h-100"
                      alt="Gallery" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link href="/gallery" className="btn btn-danger px-4">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
