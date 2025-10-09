import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/utils/seo";
import { organizationSchema } from "@/utils/schema";
import { Mail, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title={seoConfig.privacyPolicy.title}
        description={seoConfig.privacyPolicy.description}
        canonical={seoConfig.privacyPolicy.canonical}
        schema={organizationSchema}
      />
      <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-black text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-center">
                Privacy Policy
              </h1>
              <p className="text-center mt-4 text-lg text-white/80">
                Effective Date: March 1st, 2025
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              
              {/* 1. Introduction */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  1. Introduction
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Welcome to the Privacy Policy of <strong>Maison du Bar Ο.Ε.</strong> ("Company", "we", "us", or "our").
                  We are committed to protecting your personal data and ensuring transparency in how we collect, use, and safeguard your information when you interact with our website{" "}
                  <a href="https://maisondubar.com" className="text-black underline hover:opacity-70">
                    https://maisondubar.com
                  </a>.
                </p>
              </div>

              {/* 2. Data Controller Information */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  2. Data Controller Information
                </h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
                  <p className="text-base text-gray-600"><strong>Company Name:</strong> Maison du Bar Ο.Ε.</p>
                  <p className="text-base text-gray-600"><strong>Registered Address:</strong> Athens, Greece</p>
                  <p className="text-base text-gray-600"><strong>Email Contact:</strong>{" "}
                    <a href="mailto:maisondubar25@gmail.com" className="text-black underline hover:opacity-70">
                      maisondubar25@gmail.com
                    </a>
                  </p>
                  <p className="text-base text-gray-600"><strong>Data Controller:</strong> Angelos Papadopoulos</p>
                </div>
              </div>

              {/* 3. Personal Data We Collect */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  3. Personal Data We Collect
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  We collect the following categories of personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li><strong>Identity and Contact Data:</strong> Name, email address, phone number.</li>
                  <li><strong>Communication Data:</strong> Messages submitted through our contact form.</li>
                  <li><strong>Technical Data:</strong> IP address and basic server logs for security and performance monitoring.</li>
                </ul>
              </div>

              {/* 4. How We Collect Your Data */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  4. How We Collect Your Data
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li><strong>Directly from you:</strong> When you fill out our contact form.</li>
                  <li><strong>Automatically:</strong> Through our secure hosting provider (for system logs and spam prevention).</li>
                </ul>
              </div>

              {/* 5. Purpose and Legal Basis */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  5. Purpose and Legal Basis for Processing
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  We process your personal data for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 mb-4">
                  <li><strong>Communication:</strong> Responding to your inquiries or event requests.</li>
                  <li><strong>Service Delivery:</strong> Providing event quotes and managing client relationships.</li>
                  <li><strong>Administration:</strong> Website security and performance.</li>
                </ul>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our legal basis for processing your data is your <strong>consent</strong> (Article 6(1)(a) GDPR).
                </p>
              </div>

              {/* 6. Cookies & Tracking */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  6. Cookies & Tracking Technologies
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our website uses only <strong>essential cookies</strong> to ensure proper operation and form delivery.
                  We do not use Google Analytics, Meta Pixel, or advertising cookies.
                  Email communications are handled securely via Resend API. For more details, see our{" "}
                  <Link to="/cookie-policy" className="text-black underline hover:opacity-70">
                    Cookie Policy
                  </Link>.
                </p>
              </div>

              {/* 7. Data Sharing */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  7. Data Sharing & Transfers
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  We do not share personal data with third parties, except:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li><strong>Resend API:</strong> Used for sending contact form submissions securely.</li>
                  <li><strong>Hosting Provider (Vercel / Lovable):</strong> Secure, GDPR-compliant servers.</li>
                </ul>
              </div>

              {/* 8. Your GDPR Rights */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  8. Your GDPR Rights
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 mb-4">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Restrict or object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-base text-gray-600 leading-relaxed">
                  To exercise these rights, email us at{" "}
                  <a href="mailto:maisondubar25@gmail.com" className="text-black underline hover:opacity-70">
                    maisondubar25@gmail.com
                  </a>.
                </p>
              </div>

              {/* 9. Data Retention */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  9. Data Retention
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  We retain personal data only as long as necessary to respond to inquiries or manage bookings, then securely delete it.
                </p>
              </div>

              {/* 10. Security Measures */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  10. Security Measures
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  We apply strong security practices including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li>SSL encryption</li>
                  <li>Firewalls</li>
                  <li>Secure managed hosting</li>
                </ul>
              </div>

              {/* 11. Data Breach Policy */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  11. Data Breach Policy
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  If a data breach occurs, we will notify affected users and authorities as required by GDPR.
                </p>
              </div>

              {/* 12. Updates */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  12. Updates to This Privacy Policy
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  We may update this policy from time to time. Please check this page periodically for updates.
                </p>
              </div>

              {/* 13. Contact Information */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  13. Contact Information
                </h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-black flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a href="mailto:maisondubar25@gmail.com" className="text-base text-black hover:opacity-70">
                        maisondubar25@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-black flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Address</p>
                      <p className="text-base text-gray-600">Athens, Greece</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-black flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Data Controller</p>
                      <p className="text-base text-gray-600">Angelos Papadopoulos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Statement */}
              <div className="bg-black text-white rounded-lg p-6 text-center">
                <p className="text-sm">
                  This Privacy Policy complies with <strong>GDPR (EU 2016/679)</strong> and reflects the data protection practices of Maison du Bar Ο.Ε.
                </p>
              </div>

            </article>
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default PrivacyPolicy;
