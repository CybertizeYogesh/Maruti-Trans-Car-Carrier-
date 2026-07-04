import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import dynamic from "next/dynamic";
import Script from "next/script";

const QuoteForm = dynamic(() => import("@/components/QuoteForm"));

export const metadata = {
  title: "Maruti Trans Car Carrier | Professional Car Transport India",
  description: "Maruti Trans Car Carrier Shifting offers secure car carrier, single vehicle flatbed, and enclosed car transportation services. Licensed vehicle shifting in Haryana & nationwide.",
  keywords: "Maruti Trans, Car Carrier, Car Transportation, Vehicle Shifting, Enclosed Car Transport, Single Car Carrier, Haryana Shifting",
  robots: "index, follow",
  alternates: {
    canonical: "https://srspackersandmovers.com",
  },
  openGraph: {
    title: "Maruti Trans Car Carrier | Professional Car Transport India",
    description: "Maruti Trans Car Carrier Shifting offers secure car carrier, single vehicle flatbed, and enclosed car transportation services. Licensed vehicle shifting in Haryana & nationwide.",
    url: "https://srspackersandmovers.com",
    siteName: "Maruti Trans Packers",
    images: [
      {
        url: "https://srspackersandmovers.com/assets/images/services/home_shifting.webp",
        width: 1200,
        height: 630,
        alt: "Maruti Trans Car Carrier Shifting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maruti Trans Car Carrier | Professional Car Transport India",
    description: "Maruti Trans Car Carrier Shifting offers secure car carrier, single vehicle flatbed, and enclosed car transportation services. Licensed vehicle shifting in Haryana & nationwide.",
    images: ["https://srspackersandmovers.com/assets/images/services/home_shifting.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://srspackersandmovers.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Maruti Trans Packers & Movers",
              "image": "https://srspackersandmovers.com/assets/images/logo/logo.svg",
              "@id": "https://srspackersandmovers.com/#localbusiness",
              "url": "https://srspackersandmovers.com",
              "telephone": "+918512000715",
              "priceRange": "INR 3000 - INR 35000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "House No. 84, Ground Floor, Chandwass Road, Nearby Hari Om Irritation Company, Chandwass, Badhra",
                "addressLocality": "Charkhi Dadri",
                "addressRegion": "Haryana",
                "postalCode": "127312",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5303,
                "longitude": 76.1264
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <div className="page-wrapper">
          <main>{children}</main>
          <Footer />
        </div>
        <FloatingCTA />

        {/* Global Quote Modal */}
        <div className="modal fade" id="qteModal" tabIndex="-1" aria-labelledby="qteModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg modal-rounded">
              {/* Header */}
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title fw-semibold">
                  <i className="bi bi-clipboard-check me-2"></i> Get a Free Quote
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              {/* Body & Form */}
              <QuoteForm isModal={true} />
            </div>
          </div>
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
