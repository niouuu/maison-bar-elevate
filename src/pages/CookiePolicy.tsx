import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/utils/seo";
import { organizationSchema } from "@/utils/schema";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <>
      <SEO
        title={seoConfig.cookiePolicy.title}
        description={seoConfig.cookiePolicy.description}
        canonical={seoConfig.cookiePolicy.canonical}
        schema={organizationSchema}
      />
      <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-center">
                Cookie Policy
              </h1>
              <p className="text-center mt-4 text-lg text-white/80">
                Effective Date: March 1st, 2025
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              
              {/* 1. What Are Cookies */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  1. What Are Cookies
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Cookies are small text files stored on your device to help our website function properly and securely.
                  For more information about how we handle your personal data, please see our{" "}
                  <Link to="/privacy-policy" className="text-black underline hover:opacity-70">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              {/* 2. Types of Cookies We Use */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  2. Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-foreground">
                      Essential Cookies
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Required for basic site operation, e.g., loading pages and submitting forms.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-foreground">
                      Functional Cookies
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Ensure optimal website display and security.
                    </p>
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed mt-6">
                  <strong>We do not use analytics, advertising, or tracking cookies.</strong>
                </p>
              </div>

              {/* 3. How to Control Cookies */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  3. How to Control Cookies
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  You can disable cookies via your browser settings, but the website may not function correctly without them.
                </p>
              </div>

              {/* 4. Third-Party Services */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  4. Third-Party Services
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Our hosting provider (Vercel / Lovable) may use technical cookies strictly for load balancing and security.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Emails sent through Resend API use encrypted transmission and do not track recipients.
                </p>
              </div>

              {/* 5. Updates */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
                  5. Updates
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  We may occasionally update this Cookie Policy. Please revisit this page to stay informed.
                </p>
              </div>

              {/* CTA to Privacy Policy */}
              <div className="bg-black text-white rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl sm:text-3xl mb-4">
                  Want to Learn More?
                </h3>
                <p className="text-base mb-6">
                  Read our comprehensive Privacy Policy for full details on data protection.
                </p>
                <Link
                  to="/privacy-policy"
                  className="inline-block bg-white text-black px-8 py-3 rounded-md hover:bg-white/90 transition-colors duration-200 font-semibold"
                >
                  View Privacy Policy
                </Link>
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

export default CookiePolicy;
