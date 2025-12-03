import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  const currentDate = "October 10th, 2025";

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Maison du Bar</title>
        <meta name="description" content="Cookie Policy for Maison du Bar - Our website does not use cookies." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-black text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">Cookie Policy</h1>
            <p className="text-center text-lg text-white/80">Effective Date: {currentDate}</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* No Cookies Statement */}
            <div className="mb-12 bg-muted/30 border border-border rounded-lg p-6">
              <h2 className="font-serif text-3xl font-bold mb-6">This Website Does Not Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Maison du Bar O.E. ("we," "us," or "our") does not use any cookies on our website{" "}
                <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">
                  https://maisondubar.com
                </a>
                . This includes essential cookies, functional cookies, analytics cookies, marketing cookies, and any
                other type of cookie or similar tracking technology.
              </p>
            </div>

            {/* Why No Cookie Banner */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">1. Why No Cookie Banner?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the General Data Protection Regulation (GDPR) and the EU ePrivacy Directive, cookie consent
                banners are only required when a website uses cookies that require user consent (such as analytics,
                advertising, or non-essential cookies).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since our website does not use any cookies whatsoever, no cookie consent banner is required or
                displayed. This approach ensures a cleaner browsing experience while remaining fully compliant with EU
                regulations.
              </p>
            </div>

            {/* Contact Form Processing */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">2. Contact Form Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit our contact form, your information is processed entirely server-side. The contact form
                does not set any cookies on your device.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Specifically:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>No session cookies are created</li>
                <li>No tracking cookies are placed</li>
                <li>No third-party cookies are loaded</li>
                <li>
                  Your form data is transmitted directly to our email service without storing anything in your browser
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For information about how we handle the personal data you submit through the contact form, please refer
                to our{" "}
                <a href="/privacy-policy" className="text-foreground underline hover:opacity-70">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* What We Do NOT Use */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">3. Technologies We Do NOT Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">To be clear, our website does not employ:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong className="text-foreground">Analytics Cookies:</strong> No Google Analytics, Hotjar, or
                  similar tools
                </li>
                <li>
                  <strong className="text-foreground">Marketing/Advertising Cookies:</strong> No tracking for
                  advertising purposes
                </li>
                <li>
                  <strong className="text-foreground">Social Media Cookies:</strong> No Facebook Pixel, Meta tracking,
                  or similar technologies
                </li>
                <li>
                  <strong className="text-foreground">Performance Cookies:</strong> No data collection about website
                  performance or user behavior
                </li>
                <li>
                  <strong className="text-foreground">Session Cookies:</strong> No cookies to maintain user sessions
                </li>
                <li>
                  <strong className="text-foreground">Local Storage/Session Storage:</strong> No browser storage
                  mechanisms for tracking
                </li>
              </ul>
            </div>

            {/* Future Changes */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">4. Future Changes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If we decide to implement cookies or similar tracking technologies in the future, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Update this Cookie Policy with detailed information about the cookies used</li>
                <li>Implement a cookie consent banner allowing you to choose which cookies to accept</li>
                <li>Ensure full compliance with GDPR and ePrivacy regulations</li>
                <li>Notify you of any significant changes to our practices</li>
              </ul>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">5. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time. When we make changes, we will update the "Effective
                Date" at the top of this page. We encourage you to review this policy periodically to stay informed
                about our practices.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">6. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Cookie Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:info@maisondubar.com" className="text-foreground underline hover:opacity-70">
                    info@maisondubar.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Company:</strong> Maison du Bar O.E.
                </li>
                <li>
                  <strong className="text-foreground">Location:</strong> Athens, Greece
                </li>
                <li>
                  <strong className="text-foreground">Website:</strong>{" "}
                  <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">
                    https://maisondubar.com
                  </a>
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

export default CookiePolicy;
