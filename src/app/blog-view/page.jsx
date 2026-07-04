import React from "react";
import Link from "next/link";
import "./blog-view.css";

export const metadata = {
  title: "Blog Details - Maruti Trans Car Carrier Shifting",
  description: "Read expert advice, shifting tips, and packers and movers guidelines from Maruti Trans Car Carrier Shifting.",
};

const BLOG_POSTS = {
  "14": {
    title: "Why Hydraulic Loading Ramps Are Essential for Luxury Car Shifting",
    desc: "Low ground clearance vehicles require specialized handling. Discover why hydraulic flatbeds with low incline ramps are mandatory for loading premium sports cars and luxury sedans safely.",
    img: "/assets/images/blog/blog_hydraulic_ramps.webp",
    date: "15 June, 2026",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. The Low-Approach Clearance Problem</h4>
        <p>
          Standard car trailers use fixed metal ramps that create a steep angle during loading. While hatchbacks and SUVs clear this easily, luxury sedans like the Mercedes S-Class, BMW 5-Series, or Audi A8 have front bumpers that sit just 120-150mm off the ground. A steep loading angle causes the front spoiler to scrape against the steel ramp, leading to expensive paint and bumper damage.
        </p>
        <h4>2. How Hydraulic Flatbeds Work</h4>
        <p>
          At Maruti Trans, we use specialized hydraulic trailers that descend completely flat onto the asphalt. This creates a low-approach incline of just 3 to 5 degrees. The vehicle rolls smoothly onto the deck without any vertical shock or underside contact. Once the car is secured, hydraulic cylinders lift the entire trailer platform back into its transport position.
        </p>
        <h4>3. Securing Low Ground Clearance Vehicles</h4>
        <p>
          Once on the deck, we never strap the car down by the suspension arms or exhaust frame, which can cause bending. Instead, we use wheel-harness tie-downs that loop directly over the tires, locking them into the deck wells. This isolates the car's body and allows its own suspension to absorb road bumps naturally during highway transit.
        </p>
      </>
    )
  },
  "13": {
    title: "Vehicle Transport Regulations in Maharashtra: Tolls, Permits, and Checkpoints",
    desc: "Navigate state border compliance smoothly. Learn about GST E-Way Bills, RTO checks, toll protocols, and local transport regulations when shifting vehicles into Maharashtra.",
    img: "/assets/images/blog/blog_maharashtra_rto.webp",
    date: "12 May, 2026",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Maharashtra Border Checkpoint Inspections</h4>
        <p>
          When transporting a car from northern states like Haryana, Delhi, or Rajasthan into Maharashtra, the carrier must pass major state checkpoints, such as the one at Vapi/Talasari. RTO officers inspect the vehicle registration certificate, tax receipt copies, and check for any outstanding traffic violations. Ensuring your paperwork is clear prevents transport delays.
        </p>
        <h4>2. GST E-Way Bill and Transit Declarations</h4>
        <p>
          Commercial car carrier trucks cannot move cargo across state borders in India without an active E-Way Bill. Since a car is a high-value item, the logistics provider must generate a Part A and Part B E-Way Bill matching the vehicle's valuation and the owner's invoice. Make sure your carrier generates this legally rather than trying to slip the car past border checks without documentation.
        </p>
        <h4>3. Toll Tax & Highway Permits</h4>
        <p>
          Maharashtra highways, including the Samruddhi Mahamarg and Mumbai-Pune Expressway, have strict toll systems and carrier axle weight limits. Maruti Trans pre-pays all highway taxes and keeps valid National Permits for our carrier fleet to guarantee your vehicle is not stopped or delayed at state line toll plazas.
        </p>
      </>
    )
  },
  "12": {
    title: "What to Do If Your Car Is Damaged During Relocation: Shifting Insurance Guide",
    desc: "Understand how transit insurance protects your investment. Learn the difference between standard comprehensive insurance and dedicated car carrier transit policies during highway transport.",
    img: "/assets/images/blog/blog_shifting_insurance.webp",
    date: "08 April, 2026",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. The Trap of Standard Car Insurance</h4>
        <p>
          Many vehicle owners assume their comprehensive policy covers any damage during professional transport. However, most standard policies have specific exclusion clauses for commercial transport or multi-car carrier transit. If a carrier truck encounters an accident or flying highway gravel cracks your windshield, your personal insurer might deny the claim or charge a high deductible.
        </p>
        <h4>2. What Transit Insurance Actually Covers</h4>
        <p>
          A dedicated transit insurance policy (Car Carrier Insurance) covers the vehicle from the moment it is loaded at your doorstep until it is offloaded at destination. It protects against highway collisions, fire, theft, and minor dents caused by road vibrations. It usually has zero deductibles, meaning the insurer pays for the repair bills directly without affecting your No Claim Bonus (NCB).
        </p>
        <h4>3. Documenting the Handover Inspection</h4>
        <p>
          To successfully claim insurance in the rare event of transit damage, you must have a signed Bill of Lading showing the car's pre-loading condition. Take high-resolution photographs of all bumpers, mirrors, and body panels alongside our driver. Having a clear paper trail makes claim settlement smooth and hassle-free.
        </p>
      </>
    )
  },
  "11": {
    title: "How Weather Conditions Affect Car Transport on National Highways",
    desc: "High winds, Yamuna Expressway winter fog, and summer heatwaves present unique logistics challenges. Read how professional carrier captains protect open-deck vehicle loads in severe weather.",
    img: "/assets/images/blog/blog_highway_weather.webp",
    date: "20 March, 2026",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Highway Fog and Winter Delays</h4>
        <p>
          During winter months (December to February), heavy fog along the Yamuna Expressway and NH-48 in Northern India drops visibility to near zero. Under these conditions, driving a large 10-car trailer is highly hazardous. Maruti Trans drivers are instructed to park at secure expressway motels or transit terminals until the fog clears, prioritizing your car's safety over tight schedules.
        </p>
        <h4>2. Protecting Paint from Summer Heatwaves</h4>
        <p>
          Direct exposure to harsh summer sun during long-distance open carrier transport can bake road dust and highway diesel soot onto your car's clear coat. To prevent paint damage, our team applies a temporary layer of liquid carnauba wax to all open-shipped vehicles before dispatch, creating a protective barrier against UV rays and highway grime.
        </p>
        <h4>3. Storm Protection on the Road</h4>
        <p>
          Dust storms and heavy downpours can kick up sand and small stones on national highways. If you are shipping your car via an open carrier during volatile weather seasons, we install custom heavy-duty mesh screen protectors over the front bumper and windshield to guard against flying gravel.
        </p>
      </>
    )
  },
  "10": {
    title: "Understanding Octroi and Entry Taxes for Shifting Cars into Mumbai",
    desc: "Planning a vehicle move to Mumbai? Learn about local municipal taxes, border clearances at Vapi and Dahisar checkpoints, and required tax filings to avoid unexpected fines.",
    img: "/assets/images/blog/blog_mumbai_octroi.webp",
    date: "14 February, 2026",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Municipal Entry Checks at Dahisar and Mulund</h4>
        <p>
          Even though GST has simplified interstate trade, vehicles entering the Mumbai Metropolitan Region (MMR) from other states are subject to local check-post verifications. RTO officers inspect out-of-state cars to ensure they are not being brought in for illegal commercial resale. Having a clear set of moving papers (transfer letter, packer bill) avoids municipal detentions.
        </p>
        <h4>2. The Road Tax Transfer Process</h4>
        <p>
          If you are relocating permanently to Maharashtra, you will eventually have to pay life-time road tax to the local RTO and apply for a new MH registration series. To do this, you require a clean NOC from your home RTO, a copy of the transport carrier receipt, and the vehicle shifting invoice. Maruti Trans provides these documents immediately upon delivery.
        </p>
        <h4>3. Pre-Clearing Border Fees</h4>
        <p>
          Many fly-by-night movers ask for extra cash at the Maharashtra border, claiming they were stopped for entry taxes. Reputable packers include all check-post clearance fees and toll costs in their initial quotes. Ensure your moving contract clearly states that all border entry fees are pre-paid by the carrier.
        </p>
      </>
    )
  },
  "9": {
    title: "Step-by-Step Guide to Booking Flatbed Towing for Express Car Courier",
    desc: "Need immediate delivery without consolidating cargo? Discover how single-car flatbed towing works, and how to inspect hydraulic winches and wheel-lashing configurations before loading.",
    img: "/assets/images/blog/blog_flatbed_towing.webp",
    date: "18 January, 2026",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. When to Choose Flatbed Shifting</h4>
        <p>
          Standard multi-car trailers operate on terminal consolidation schedules, meaning they wait until the truck is fully loaded with 8 cars before departing. If you need your vehicle shipped immediately, or if the car is a low-clearance luxury model that cannot wait at terminals, booking a dedicated single-car flatbed tow truck is the fastest and safest solution.
        </p>
        <h4>2. Hydraulic Winch Inspection</h4>
        <p>
          Before loading, check that the flatbed operator is using a synthetic winch rope rather than a steel cable. Synthetic ropes do not fray and are less likely to snap under load, protecting your car's front suspension. Ensure the driver uses rubber-padded hooks to connect to the factory chassis towing eyelet.
        </p>
        <h4>3. Securing Wheels on the Flatbed</h4>
        <p>
          Once the car is winched onto the platform, the driver must lock all four wheels using heavy-duty lashing straps. These straps anchor the tires directly to the flatbed deck. This ensures the car's suspension absorbs road vibrations naturally, preventing steering alignment issues during high-speed highway transport.
        </p>
      </>
    )
  },
  "8": {
    title: "Common Mistakes When Choosing Local Packers and Movers for Two-Wheeler Shifting",
    desc: "Avoid bent handles, broken mirror brackets, and fuel tank scrapes. Learn why standard furniture trucks are unsafe for bikes, and how dedicated wooden crates protect your two-wheeler.",
    img: "/assets/images/blog/blog_two_wheeler.webp",
    date: "05 December, 2025",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Packing Bikes in Standard Household Vans</h4>
        <p>
          The most common mistake is letting local packers load your motorcycle or scooter directly into a household shifting truck next to heavy cupboards or refrigerators. During transit, household items shift, resulting in bent handle bars, snapped clutch levers, and deep gashes on the bike's fuel tank. A two-wheeler must be shipped separately or secured in its own cage.
        </p>
        <h4>2. The Importance of Fuel Drainage</h4>
        <p>
          For safety reasons, transport guidelines require draining all fuel from the motorcycle's tank before loading. Petrol is highly volatile, and heat inside enclosed carrier trucks can build up vapor pressure, presenting a severe fire risk. Draining the tank and disconnecting the battery terminal are mandatory safety steps.
        </p>
        <h4>3. Utilizing Customized Bike Crates</h4>
        <p>
          For expensive cruiser bikes or heavy Royal Enfield motorcycles, we construct custom wooden crates. The bike is bolted to a wooden pallet baseline at the wheels, and bubble-wrapped handlebars are secured to structural support frames. This guarantees the bike remains vertical and isolated from other cargo during the entire journey.
        </p>
      </>
    )
  },
  "7": {
    title: "A Complete Guide to Shipping Electric Vehicles (EVs) Safely in Open Carriers",
    desc: "Electric vehicles are heavy and feature floor-mounted battery packs. Understand the safety protocols, strap configurations, and chassis safety checklists required for EV highway transport.",
    img: "/assets/images/blog/blog_ev_shipping.webp",
    date: "10 November, 2025",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. The Added Weight Factor</h4>
        <p>
          Electric vehicles (EVs) like the Tata Nexon EV, MG ZS EV, or BYD Atto 3 are significantly heavier than their ICE (petrol/diesel) counterparts due to heavy lithium-ion battery packs. This extra weight increases the kinetic load on the transport trailer. Auto carriers must adjust their deck layout to ensure proper axle weight distribution across the trailer.
        </p>
        <h4>2. Battery Pack Clearance and Anchors</h4>
        <p>
          Standard cars are often secured using chains hooked to undercarriage chassis holes. For EVs, this is extremely dangerous because the high-voltage battery casing covers the entire underbelly. Any chain contact can puncture the battery, causing thermal runaway. EVs must be secured using wheel-loop lashing straps that do not cross under the chassis.
        </p>
        <h4>3. State-of-Charge (SoC) for Transit</h4>
        <p>
          Always drain your EV battery to around 40% to 50% state-of-charge before handing it over to the carrier. Shipping a fully charged battery is a fire hazard, while shipping a completely drained battery (0%) can damage battery cells if parked at transit yards for multiple days. Disactivate auto-alarms and keep sentry modes off to prevent battery drain.
        </p>
      </>
    )
  },
  "6": {
    title: "How GPS Live Tracking Restores Peace of Mind During Long-Distance Vehicle Relocation",
    desc: "Track your car along NH-48 in real-time. Learn how fleet GPS integration works, how alerts prevent delivery coordinate confusion, and why automated tracking is essential for vehicle safety.",
    img: "/assets/images/blog/blog_gps_tracking.webp",
    date: "02 October, 2025",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Eliminating the Logistics Black Hole</h4>
        <p>
          In traditional car shipping, once the carrier truck departs, the owner has to call intermediate dispatch offices or truck drivers to know where their car is. Drivers often turn off their phones or give vague updates. GPS live tracking integrates directly with active satellite transponders fitted on the trailer, giving you 24/7 access to the exact coordinates.
        </p>
        <h4>2. Route Planning and Geofencing</h4>
        <p>
          Live tracking allows the transport coordinator to set up geofences around main highway junctions (like the Jaipur bypass or Vapi border toll). If the carrier deviates from the approved route or stops for an unusually long time, automated alarms notify the central control room, preventing any unauthorized detours or vehicle joyriding.
        </p>
        <h4>3. Coordinating Doorstep Offloading</h4>
        <p>
          With real-time GPS tracking, you don't have to wait at home all day expecting the truck. You can track the carrier as it enters your city's outer ring road and coordinate with the flatbed offloading driver. This ensures you are physically present to inspect the vehicle and sign the delivery receipt.
        </p>
      </>
    )
  },
  "5": {
    title: "How to Avoid Scams When Booking Car Carriers Online",
    desc: "Shipping your car across India is a major decision. Unfortunately, vehicle logistics is prone to online listing scams. Learn how to safeguard your car and identify fake carriers.",
    img: "/assets/images/blog/blog1.webp",
    date: "15 September, 2025",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Beware of Unbelievably Low Cost Estimates</h4>
        <p>
          Scam operators advertise extremely low car shifting rates to bait vehicle owners. Once they lift your car on their flatbed or ramp, they park it in a hidden yard and demand double or triple the initial amount under fake headings like loading charges, border taxes, or state permits. Always get a detailed, legally written quotation.
        </p>
        <h4>2. Verify IBA Approval and Business Registration</h4>
        <p>
          Always ask for the operator's GST registration number and crosscheck it on the government GST portal. Check if they have an active Indian Banks' Association (IBA) registration code. Verified car shifting companies like Maruti Trans have active registrations, valid GST numbers, and physical commercial yards.
        </p>
        <h4>3. Avoid Full Upfront Payments</h4>
        <p>
          Never pay 100% of the transport fare in advance. Professional car courier companies require a minor token amount at booking, with the balance payable upon loading verification or doorstep delivery. Avoid operators who insist on bank transfers to personal accounts rather than corporate accounts.
        </p>
        <h4>4. Check the Shifting Terminal and Fleet</h4>
        <p>
          Verify if the carrier has physical offices or yards. Many online listings are virtual aggregators who sell your booking to unverified third-party drivers. Reputed companies operate their own multi-car trailer networks and specialized hydraulic flatbeds.
        </p>
      </>
    )
  },
  "4": {
    title: "Ultimate Checklist: Preparing Your Car for Long-Distance Shipping",
    desc: "Before your vehicle is loaded onto a multi-car trailer, proper preparation is necessary. Read our step-by-step prep list recommended by car carrier captains.",
    img: "/assets/images/blog/blog2.webp",
    date: "28 August, 2025",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Clean the Car Thoroughly</h4>
        <p>
          Washing your car before shipping makes it easy to spot any pre-existing scratches, paint chips, or body dents during the loading inspection. It also ensures that road dust does not grind against pre-existing debris under the wheel tie-down straps.
        </p>
        <h4>2. Document Pre-Existing Damage</h4>
        <p>
          Take high-resolution photos of your vehicle from all angles, including the chassis, bumpers, wheels, and interior dashboard. Our team will fill out a formal condition checklist with you, and having your own photos guarantees complete safety records.
        </p>
        <h4>3. Remove Personal Belongings</h4>
        <p>
          Under RTO regulations, car carriers are licensed to ship vehicles, not personal goods or household baggage. Remove GPS devices, toll tags, chargers, and personal items from the glovebox. Keep the fuel tank at around 1/4 capacity to keep the vehicle weight optimized.
        </p>
        <h4>4. Lock the Car and Deactivate Alarms</h4>
        <p>
          Turn off any aftermarket car alarms so they do not drain your battery if triggered by road vibrations during highway transit. Ensure your spare key is available for the driver to steer the car up the hydraulic loading ramps.
        </p>
      </>
    )
  },
  "3": {
    title: "Open vs. Enclosed Car Carriers: Selecting the Best Shifting Option",
    desc: "Compare open multi-car trailers vs. enclosed container shipping to select the best vehicle transport method for your budget and car class.",
    img: "/assets/images/blog/blog3.webp",
    date: "19 July, 2025",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Open Multi-Car Trailers (Affordable & Standard)</h4>
        <p>
          Open trailers are the double-decker car carriers you frequently see on national highways. They are highly economical because they carry up to 8-10 cars at once. This is the industry standard for hatchbacks, sedans, and family SUVs, offering secure four-point wheel strapping at a budget-friendly price.
        </p>
        <h4>2. Enclosed Container Trailers (Maximum Security)</h4>
        <p>
          Enclosed carriers use hard-sided metal containers to shield your vehicle from environmental debris, highway dust, rain, and gravel. It provides 100% weather protection and ultimate privacy. This is highly recommended for vintage cars, luxury sports models, and brand new vehicles.
        </p>
        <h4>3. Flatbed Shifting (Express & Local)</h4>
        <p>
          For short distances, express city-to-city shifting, or non-operational vehicles, single flatbed tow trucks are the best choice. They offer dedicated direct transit with hydraulic beds, avoiding any intermediate terminal stops or consolidation delays.
        </p>
        <h4>4. Which One Should You Choose?</h4>
        <p>
          Choose open carrier trailer shipping if you want a reliable, cost-effective service for daily commute vehicles. Upgrade to enclosed container shipping if you own a luxury vehicle (BMW, Mercedes, Audi) or classic model that requires premium white-glove protection.
        </p>
      </>
    )
  },
  "2": {
    title: "Required Documentation for Interstate Car Shipping in India",
    desc: "To ship a vehicle across state borders in India, compliance with RTO rules is mandatory. Ensure you have these documents ready prior to dispatch.",
    img: "/assets/images/blog/blog4.webp",
    date: "30 June, 2025",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. Registration Certificate (RC Book)</h4>
        <p>
          A copy of your vehicle Registration Certificate (RC) is the most critical document. RTO check-posts inspect this to verify that the vehicle is legally registered and matches the engine and chassis numbers listed on the transport bill of lading.
        </p>
        <h4>2. Valid Car Insurance Policy</h4>
        <p>
          You must provide a copy of your active comprehensive car insurance policy. This is required to process any transit insurance covers during highway shifting. Car carrier companies will not accept vehicles without valid basic insurance.
        </p>
        <h4>3. Pollution Under Control (PUC) Certificate</h4>
        <p>
          Ensure your vehicle has an active, valid PUC certificate. Check-posts at state borders regularly inspect PUC validity for all vehicles being transported on open or enclosed trailers.
        </p>
        <h4>4. Owner's ID Proof and No Objection Certificate (NOC)</h4>
        <p>
          A government-issued photo ID (Aadhar Card, PAN Card, or Passport) of the owner must be attached to the transport booking sheet. If the vehicle is registered under a company name, an authorization letter on the corporate letterhead is required. For certain interstate moves, an RTO NOC may be necessary if the car is relocating permanently.
        </p>
      </>
    )
  },
  "1": {
    title: "Tips for Shipping Your Car During the Indian Monsoon Season",
    desc: "Monsoon road conditions and water logging delay highway carriers. Read our expert tips on choosing enclosed trailers and applying paint protectant wax before shipment.",
    img: "/assets/images/blog/blog_monsoon_shipping.webp",
    date: "05 June, 2025",
    author: "Maruti Trans Packers & Movers",
    content: (
      <>
        <h4>1. The Threat of Rust and Acidic Rain</h4>
        <p>
          During the Indian monsoon, highway transport exposed to heavy rain, mud splashes, and industrial air pollution faces corrosion risks. If shipped in an open carrier, acidic rainwater and mud collect in the wheel arches and underbody, promoting rust. We suggest applying an anti-rust underbody spray before hand-over.
        </p>
        <h4>2. Enclosed Carriers vs. Open Deck in Rains</h4>
        <p>
          While open trailers are suitable for dry seasons, we strongly recommend enclosed container shipping during peak monsoons. Enclosed metal containers isolate your car completely from water logging, flying mud, and rainstorms on the highway, ensuring it arrives at your doorstep clean and dry.
        </p>
        <h4>3. Pre-Waxing Your Car's Paint</h4>
        <p>
          If you choose open carrier shipping due to budget constraints, apply a thick coat of protective car wax or sealant before transport. This wax layer prevents mud and acidic rain deposits from etching into the clear coat, making it easy to wash off once the car is delivered.
        </p>
      </>
    )
  }
};

export default function BlogViewPage({ searchParams }) {
  const resolvedParams = React.use(searchParams);
  const postId = resolvedParams?.id || "14";
  const post = BLOG_POSTS[postId] || BLOG_POSTS["14"];

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
              <Link href="/blogs">Blogs</Link>
              <span>/</span>
              <span>Blog Details</span>
            </nav>
            <h1>Blog Details</h1>
            <p>Relocation tips, safety guidelines, and industry insights from the experts</p>
          </div>
        </div>
      </section>

      {/* Blog Details Container */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Left Content Card */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm blog-detail-card p-4">
                <div className="blog-detail-img-wrapper rounded-3 mb-4">
                  <img src={post.img} alt={post.title} loading="lazy" />
                </div>

                <div className="d-flex flex-wrap gap-3 mb-4 pb-3 border-bottom">
                  <div className="blog-meta-item d-flex align-items-center gap-2">
                    <i className="bi bi-person-fill blog-meta-icon"></i>
                    <span>{post.author}</span>
                  </div>
                  <div className="blog-meta-item d-flex align-items-center gap-2">
                    <i className="bi bi-calendar-event-fill blog-meta-icon"></i>
                    <span>{post.date}</span>
                  </div>
                  <div className="blog-meta-item d-flex align-items-center gap-2">
                    <i className="bi bi-tag-fill blog-meta-icon"></i>
                    <span>Moving Guide</span>
                  </div>
                </div>

                <h1 className="fw-bold mb-4 text-dark" style={{ fontSize: "2rem" }}>
                  {post.title}
                </h1>
                
                <p className="lead text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                  {post.desc}
                </p>

                <div className="blog-content">
                  {post.content}
                </div>

                <div className="mt-5 blog-cta-box">
                  <h5 className="fw-bold mb-3">Relocating Soon?</h5>
                  <p className="small text-muted mb-4">Get in touch with Maruti Trans Car Carrier Shifting to book your relocate or get an instant cost quote.</p>
                  <div className="d-flex flex-wrap gap-3">
                    <a href="tel:+918512000715" className="btn btn-danger px-4 py-2 rounded-pill fw-semibold">
                      <i className="bi bi-telephone-fill"></i>Call Now
                    </a>
                    <Link href="/contacts" className="btn btn-outline-danger px-4 py-2 rounded-pill fw-semibold">
                      Contact Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              
              {/* Search Widget */}
              <div className="card border-0 shadow-sm p-4 mb-4 blog-sidebar-card">
                <h5 className="blog-sidebar-title">Search Blogs</h5>
                <div className="position-relative mt-3">
                  <input 
                    type="text" 
                    placeholder="Type keywords..." 
                    className="form-control blog-search-input"
                  />
                  <i className="bi bi-search position-absolute top-50 translate-middle-y end-0 me-3 text-muted"></i>
                </div>
              </div>

              {/* Shifting Quote CTA Widget */}
              <div className="card border-0 shadow-sm p-4 mb-4 blog-sidebar-card text-white blog-sidebar-cta-card">
                <h5 className="fw-bold mb-2">Need Shifting Help?</h5>
                <p className="small text-white-80 mb-4">Get verified vehicle carrier quotes in just 10 minutes. Safe, insured and damage-free transit.</p>
                <a href="tel:+918512000715" className="btn w-100 fw-bold py-2.5 rounded-pill d-flex align-items-center justify-content-center gap-2 blog-sidebar-call-btn">
                  <i className="bi bi-telephone-fill"></i> Call +91-8512000715
                </a>
                <Link href="/contacts" className="btn btn-outline-light w-100 fw-semibold py-2.5 rounded-pill mt-2">
                  Get Online Quote
                </Link>
                <div className="blog-cta-light-1"></div>
                <div className="blog-cta-light-2"></div>
              </div>

              {/* Popular Articles Widget */}
              <div className="card border-0 shadow-sm p-4 blog-sidebar-card">
                <h5 className="blog-sidebar-title">Popular Articles</h5>
                <ul className="list-unstyled mb-0 blog-popular-list mt-3">
                  {Object.entries(BLOG_POSTS).slice(0, 5).map(([id, p]) => (
                    <li key={id} className="blog-popular-item">
                      <div className="blog-popular-thumb">
                        <img src={p.img} alt={p.title} loading="lazy" />
                      </div>
                      <div className="blog-popular-content">
                        <Link href={`/blog-view?id=${id}`} className="blog-popular-title">
                          {p.title}
                        </Link>
                        <span className="blog-popular-date">{p.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
