import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  const currentDate = "December 3rd, 2025";

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Maison du Bar</title>
        <meta name="description" content="Cookie Policy for Maison du Bar - Learn about how we handle cookies on our website." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-black text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
              Cookie Policy
            </h1>
            <p className="text-center text-lg text-white/80">
              Effective Date: {currentDate}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Cookie Policy explains how Maison du Bar O.E. ("we", "us", "our") uses cookies and similar technologies on our website <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to transparency and compliance with the EU General Data Protection Regulation (GDPR) and the EU ePrivacy Directive.
              </p>
            </div>

            {/* Do We Use Cookies */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">2. Do We Use Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Our website does not use any cookies.</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not install:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Essential cookies</li>
                <li>Analytics cookies</li>
                <li>Advertising or marketing cookies</li>
                <li>Social media tracking pixels</li>
                <li>Performance or behavioral cookies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                As a result:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>We do not track your activity</li>
                <li>We do not collect browsing behavior</li>
                <li>No cookie consent banner is required or displayed</li>
              </ul>
            </div>

            {/* Contact Form and Server-Side Processing */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">3. Contact Form and Server-Side Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit our contact form, the information you provide is sent directly to our business email, hosted by Papaki.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This process is handled entirely server-side, and:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>No cookies are stored on your device</li>
                <li>No third-party tracking is used</li>
                <li>No external email API (such as Resend) is involved</li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">4. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website does not use any third-party tools or integrations that place cookies on your device.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Examples of services we do not use include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Google Analytics</li>
                <li>Facebook/Meta Pixel</li>
                <li>reCAPTCHA</li>
                <li>Hotjar</li>
                <li>Any advertising or tracking services</li>
              </ul>
            </div>

            {/* Managing Cookies in Your Browser */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">5. Managing Cookies in Your Browser</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Although our website does not set cookies, you can control or delete cookies from other websites at any time through your browser settings.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Common browser paths:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Chrome:</strong> Settings → Privacy and security → Cookies</li>
                <li><strong className="text-foreground">Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                <li><strong className="text-foreground">Safari:</strong> Preferences → Privacy</li>
                <li><strong className="text-foreground">Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For general information, visit:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:opacity-70">www.allaboutcookies.org</a></li>
                <li><a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:opacity-70">www.youronlinechoices.eu</a></li>
              </ul>
            </div>

            {/* Future Changes */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">6. Future Changes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If we choose to introduce new features that use cookies in the future (e.g., analytics), we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Update this Cookie Policy</li>
                <li>Display a cookie consent banner</li>
                <li>Request your explicit consent for any non-essential cookies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You will always have the option to accept or decline them.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">7. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about our Cookie Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:info@maisondubar.com" className="text-foreground underline hover:opacity-70">info@maisondubar.com</a></li>
                <li><strong className="text-foreground">Company:</strong> Maison du Bar O.E.</li>
                <li><strong className="text-foreground">Location:</strong> Athens, Greece</li>
                <li><strong className="text-foreground">Website:</strong> <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a></li>
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
