"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            {/* Breadcrumb */}
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
              <span>/</span>
              <span>Privacy Policy</span>
            </nav>
            {/* Title */}
            <h1>Privacy Policy</h1>
            {/* Subtitle */}
            <p>Protecting your privacy and data with SRS Packers and Movers</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="privacy-section container py-5">
        <h2>Privacy Policy for SRS Packers And Movers</h2>
        <p>
          Terms and Conditions of SRS Packers And Movers: We do not collect and do not solicit personal information from
          our users. This Privacy Policy explains the process by which we obtain and process your information when you
          interact with us. By using our services, you accept the terms stated in this document, which is a Privacy
          Policy.
        </p>

        <h3>Information We Collect</h3>
        <ul>
          <li>
            <strong>Personal Information:</strong> If you register or get in touch with us, we might ask you for your
            name and/or initials, e-mail address, telephone number, and/or mailing address.
          </li>
          <li>
            <strong>Transactional Information:</strong> We obtain information about your interactions with us involving
            the use of our services and products, payments made, and the communications we have with each other about
            our transactions.
          </li>
          <li>
            <strong>Technical Information:</strong> The limited data which might be gathered for the use of the online
            platform includes technical data like the type of MSC, the type of browser, the operating system, and the
            time of access.
          </li>
        </ul>

        <h3>Our Uses of the Information</h3>
        <ul>
          <li>
            <strong>Service Delivery:</strong> For delivering our packers and movers services, booking and managing the
            moves, attending and responding to queries, and handling the payment procedures.
          </li>
          <li>
            <strong>Customer Support:</strong> To provide you help not only during your moving process but before and
            after as well, should you have any issues or inquiries.
          </li>
          <li>
            <strong>Communication:</strong> To provide you with relevant information on your services offered, informing
            you, confirming among other uses.
          </li>
          <li>
            <strong>Improvement of Services:</strong> To develop and find ways to enhance the services delivered to
            clients based on their feedback, usage rates, and prevailing trends within the profession.
          </li>
          <li>
            <strong>Annual Conference:</strong> To update you on our moving industry annual conference and other events
            that create awareness and facilitate knowledge sharing.
          </li>
        </ul>

        <h3>Information Sharing and Disclosure</h3>
        <ul>
          <li>
            <strong>With Service Providers:</strong> We may disclose your information with other third-party parties
            with whom we have business operations to help us provide our services, for instance, moving companies and
            payment processors.
          </li>
          <li>
            <strong>Legal Requirements:</strong> You understand that we might disclose your information if legislation
            obliges us to do so or upon the request of other state authorities.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the case of a merger, acquisition, or sale of assets, part or all of
            the company, your information will be transferred to the new owner.
          </li>
        </ul>

        <h3>Data Security</h3>
        <p>
          We utilize appropriate security measures that would enable the protection of your information from any form of
          misuse, loss, modification or disclosure. Nevertheless, any information that is transmitted over the World Wide
          Web and any material downloaded or otherwise acquired through the use of this website is done at the user's own
          risk.
        </p>

        <h3>Your Choices</h3>
        <ul>
          <li>
            <strong>Access and Correction:</strong> You have certain rights to privacy and personal information, such as
            the right to access and the right to correct. If you need to make changes, kindly let us know.
          </li>
          <li>
            <strong>Opt-Out:</strong> The only other instance of sharing your personal information is when you have
            signed up for our promotional communications and do not wish to receive them anymore. You can opt-out by
            following the instructions in the mail or by contacting us personally.
          </li>
        </ul>

        <h3>Third-Party Links</h3>
        <p>
          It is possible to note that the given site may contain links to other sites owned by third parties. We do not
          control or accept any liability for the content and these website's privacy policies and we encourage you to
          read them.
        </p>

        <h3>Revisions to This Privacy Policy</h3>
        <p>
          It is always recommended that we read this Privacy Policy periodically for changes since updating this Privacy
          Policy from time to time is possible. Any updates in the policy will be also communicated by making a post on
          our website and changing the "last updated" date.
        </p>

        <h3>Contact Us</h3>
        <div className="privacy-contact">
          <strong>SRS Packers And Movers</strong>
          <br />
          <span>Plot no. 9, Shop no. 4, City inclave, sec.2a, koparkhairne Mumbai, Maharashtra 400709</span>
          <br />
          <span>
            Shop No. 03, Ganadhish Residency, Behind Chul Muttan, Pimple Saudagar, Pimpri-Chinchwad, Pune,
            Maharashtra, 411027
          </span>
          <br />
          <span>Shop No-2, Shree Sadguru Krupa Niwas, Sector 21 Navi Mumbai, 400701</span>
          <br />
          <span>
            Email:{" "}
            <a href="mailto:info@srspackersandmovers.com" className="text-danger">
              info@srspackersandmovers.com
            </a>
          </span>
          <br />
          <span>
            Call us:{" "}
            <a href="tel:+919892325154" className="text-danger">
              +91-9892325154
            </a>
          </span>
        </div>
      </section>
    </>
  );
}
