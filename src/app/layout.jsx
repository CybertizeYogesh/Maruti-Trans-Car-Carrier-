import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteForm from "@/components/QuoteForm";
import Script from "next/script";

export const metadata = {
  title: "SRS Packers And Movers, +91 9892325154",
  description: "Your trusted partner for hassle-free, secure relocations. Efficient home and office moving services with competitive pricing.",
  keywords: "Packers and Movers, Home Movers, Office Movers, Household Shifting, Packing and Unpacking",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
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
