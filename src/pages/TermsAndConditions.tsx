import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/utils/seo";
import { organizationSchema } from "@/utils/schema";
import { Mail, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <>
      <SEO
        title={seoConfig.termsAndConditions.title}
        description={seoConfig.termsAndConditions.description}
        canonical={seoConfig.termsAndConditions.canonical}
        schema={organizationSchema}
      />
      <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-black text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-center">Terms & Conditions</h1>
              <p className="text-center mt-4 text-lg text-white/80">Effective Date: October 9th, 2025</p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              {/* 1. Introduction */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">1. Introduction</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Welcome to <strong>Maison du Bar Ο.Ε.</strong> ("we", "us", "our").
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  By using our website{" "}
                  <a href="https://maisondubar.com" className="text-black underline hover:opacity-70">
                    https://maisondubar.com
                  </a>
                  , you agree to the following Terms and Conditions. If you do not agree, please discontinue use of the
                  site.
                </p>
              </div>

              {/* 2. Services */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">2. Services</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Maison du Bar provides <strong>mobile bar and event services</strong> across Greece.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  All service details, pricing, and booking conditions are provided upon request via our{" "}
                  <Link to="/contact" className="text-black underline hover:opacity-70">
                    contact form
                  </Link>{" "}
                  or direct communication.
                </p>
              </div>

              {/* 3. Use of Website */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">3. Use of Website</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  You agree to use this website lawfully and respectfully.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li>You may not upload, transmit, or share malicious or illegal content.</li>
                  <li>Unauthorized attempts to access restricted parts of the site are strictly prohibited.</li>
                </ul>
              </div>

              {/* 4. Bookings and Payments */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  4. Bookings and Payments
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li>All quotes are non-binding until a formal agreement is confirmed.</li>
                  <li>A deposit may be required to secure your event date.</li>
                  <li>Cancellations or changes must be made according to your booking contract.</li>
                </ul>
              </div>

              {/* 5. Intellectual Property */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  5. Intellectual Property
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  All content, photos, text, and logo of Maison du Bar are protected by <strong>copyright</strong> and
                  may not be reproduced without written consent.
                </p>
              </div>

              {/* 6. Limitation of Liability */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  6. Limitation of Liability
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Maison du Bar shall not be held liable for indirect, incidental, or consequential damages resulting
                  from use of this website or services.
                </p>
              </div>

              {/* 7. Governing Law */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">7. Governing Law</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  These Terms and Conditions are governed by <strong>Greek law</strong> and fall under the jurisdiction
                  of the courts of Athens.
                </p>
              </div>

              {/* 8. Contact Information */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  8. Contact Information
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  For any legal or service-related inquiries:
                </p>
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
                      <p className="text-sm text-gray-500 mb-1">Representative</p>
                      <p className="text-base text-gray-600">Angelos Papadopoulos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-black text-white rounded-lg p-8">
                <h3 className="font-serif text-2xl sm:text-3xl mb-6 text-center">Related Legal Documents</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/privacy-policy"
                    className="inline-block bg-white text-black px-6 py-3 rounded-md hover:bg-white/90 transition-colors duration-200 font-semibold text-center"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/cookie-policy"
                    className="inline-block bg-white text-black px-6 py-3 rounded-md hover:bg-white/90 transition-colors duration-200 font-semibold text-center"
                  >
                    Cookie Policy
                  </Link>
                </div>
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

export default TermsAndConditions;
