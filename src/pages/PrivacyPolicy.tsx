import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const currentDate = "December 3rd, 2024";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Maison du Bar</title>
        <meta
          name="description"
          content="Privacy Policy for Maison du Bar - Learn how we collect, use, and protect your personal data in compliance with GDPR and EU regulations."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-black text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">Privacy Policy</h1>
            <p className="text-center text-lg text-white/80">Effective Date: {currentDate}</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* 1. Introduction */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Maison du Bar O.E. ("we", "us", "our") is committed to protecting your privacy and ensuring the lawful
                processing of your personal data. This Privacy Policy explains how we collect, use, store, and protect
                your information when you visit our website{" "}
                <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">
                  https://maisondubar.com
                </a>{" "}
                or contact us through our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This policy complies with the EU General Data Protection Regulation (GDPR) and applicable EU data
                protection laws.
              </p>
            </div>

            {/* 2. Data Controller Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">2. Data Controller Information</h2>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Company Name:</strong> Maison du Bar O.E.
                </li>
                <li>
                  <strong className="text-foreground">Data Controller:</strong> Angelos Papadopoulos
                </li>
                <li>
                  <strong className="text-foreground">Registered Address:</strong> Athens, Greece
                </li>
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:info@maisondubar.com" className="text-foreground underline hover:opacity-70">
                    info@maisondubar.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Website:</strong>{" "}
                  <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">
                    https://maisondubar.com
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Personal Data We Collect */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">3. Personal Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We only collect personal data that you voluntarily provide through our contact form. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                <li>
                  <strong className="text-foreground">Name</strong> — to address you in our communication
                </li>
                <li>
                  <strong className="text-foreground">Email Address</strong> — to respond to your inquiry
                </li>
                <li>
                  <strong className="text-foreground">Phone Number</strong> — for follow-up or clarifications
                </li>
                <li>
                  <strong className="text-foreground">Event Type</strong> — to understand your service request
                </li>
                <li>
                  <strong className="text-foreground">Event Date</strong> — to confirm availability
                </li>
                <li>
                  <strong className="text-foreground">Number of Guests</strong> — to provide accurate information
                </li>
                <li>
                  <strong className="text-foreground">Message Content</strong> — details about your event or requirements
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong className="text-foreground">We do not:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Create user accounts</li>
                <li>Process online payments</li>
                <li>Collect financial information</li>
                <li>Use analytics tools</li>
                <li>Use advertising trackers</li>
                <li>Track your browsing behavior</li>
              </ul>
            </div>

            {/* 4. How We Collect Your Data */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">4. How We Collect Your Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect personal data only through the contact form on our website.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit the form, your information is sent directly to our business email, which is hosted by
                Papaki. This process is handled entirely server-side, and:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>No cookies are stored on your device</li>
                <li>No tracking or profiling occurs</li>
                <li>No third-party email APIs (e.g., Resend) are used</li>
              </ul>
            </div>

            {/* 5. Purpose and Legal Basis for Processing */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">5. Purpose and Legal Basis for Processing</h2>
              <div className="mb-6">
                <p className="text-foreground font-semibold mb-2">Purpose of Processing</p>
                <p className="text-muted-foreground leading-relaxed mb-2">We process your data to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Respond to your inquiries</li>
                  <li>Provide information about our services</li>
                  <li>Arrange consultations</li>
                  <li>Communicate with you regarding your event</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">Legal Basis (GDPR Article 6)</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong className="text-foreground">Consent (Art. 6(1)(a))</strong> — by submitting the contact form
                  </li>
                  <li>
                    <strong className="text-foreground">Legitimate Interest (Art. 6(1)(f))</strong> — responding to
                    customer inquiries
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Cookies & Tracking Technologies */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">6. Cookies & Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website <strong className="text-foreground">does not use cookies</strong> or any tracking
                technologies. We do not use analytics, advertising cookies, social media pixels, or performance
                monitoring tools.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If we introduce cookies in the future, we will update this policy and request your explicit consent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For more information, see our{" "}
                <a href="/cookie-policy" className="text-foreground underline hover:opacity-70">
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            {/* 7. Data Sharing & Transfers */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">7. Data Sharing & Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell or share your personal data with third parties for marketing purposes.
              </p>
              <div className="mb-6">
                <p className="text-foreground font-semibold mb-2">Service Providers</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong className="text-foreground">Papaki (Hosting Provider):</strong> Hosts our website and email
                    services under GDPR-compliant standards.
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">International Transfers</p>
                <p className="text-muted-foreground leading-relaxed">
                  Papaki may store data within the EU. If any future provider stores data outside the EEA, appropriate
                  safeguards will be applied (Standard Contractual Clauses, adequacy decisions).
                </p>
              </div>
            </div>

            {/* 8. Your GDPR Rights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">8. Your GDPR Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Access to your data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion ("right to be forgotten")</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To exercise your rights, email us at{" "}
                <a href="mailto:info@maisondubar.com" className="text-foreground underline hover:opacity-70">
                  info@maisondubar.com
                </a>
                . We respond within 30 days.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You also have the right to submit a complaint to your local data protection authority.
              </p>
            </div>

            {/* 9. Data Retention */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">9. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We keep your data only as long as necessary:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>
                  <strong className="text-foreground">Contact form submissions:</strong> up to 2 years, unless earlier
                  deletion is requested
                </li>
                <li>
                  <strong className="text-foreground">Email communications:</strong> as long as needed to respond and
                  provide services
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Afterward, data is securely deleted or anonymized.
              </p>
            </div>

            {/* 10. Security Measures */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">10. Security Measures</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate security measures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SSL/TLS encryption</li>
                <li>Secure hosting</li>
                <li>Firewalls & access controls</li>
                <li>Authorized personnel access only</li>
                <li>Regular reviews of our security practices</li>
              </ul>
            </div>

            {/* 11. Data Breach Procedure */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">11. Data Breach Procedure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">If a breach occurs:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>We notify the supervisory authority within 72 hours</li>
                <li>We notify affected individuals if there is high risk</li>
                <li>We take immediate steps to contain and resolve the issue</li>
                <li>We document all incidents and actions</li>
              </ul>
            </div>

            {/* 12. Updates to This Privacy Policy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">12. Updates to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this policy due to changes in law or in our practices. When changes occur, we will update
                the Effective Date and post a notice on our website.
              </p>
            </div>

            {/* 13. Contact Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions, concerns, or GDPR requests:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:info@maisondubar.com" className="text-foreground underline hover:opacity-70">
                    info@maisondubar.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Data Controller:</strong> Angelos Papadopoulos
                </li>
                <li>
                  <strong className="text-foreground">Company:</strong> Maison du Bar O.E.
                </li>
                <li>
                  <strong className="text-foreground">Location:</strong> Athens, Greece
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
