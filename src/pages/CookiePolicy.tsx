import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Maison du Bar</title>
        <meta name="description" content="Cookie Policy for Maison du Bar - Learn about our use of cookies and how we protect your privacy." />
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
                This Cookie Policy explains how Maison du Bar O.E. ("we," "us," or "our") uses cookies and similar technologies on our website <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This policy complies with the General Data Protection Regulation (GDPR) and the EU ePrivacy Directive. By using our website, you agree to the use of cookies as described in this policy.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">2. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember your preferences, recognize you on return visits, and improve your browsing experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cookies can be "persistent" (remaining on your device until deleted or expired) or "session" (deleted when you close your browser).
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">3. Types of Cookies We Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently, our website uses <strong className="text-foreground">minimal cookies</strong> and does not employ tracking or analytics technologies. The cookies we may use are:
              </p>
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Essential / Functional Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies are necessary for the website to function properly. They enable basic features such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Form submission functionality (contact form)</li>
                  <li>Security and authentication (if applicable)</li>
                  <li>Session management</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong className="text-foreground">Legal Basis:</strong> These cookies are strictly necessary and do not require consent under GDPR.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Third-Party Service Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our email service provider, <strong className="text-foreground">Resend API</strong>, may use essential cookies or similar technologies to facilitate email delivery when you submit our contact form. These are necessary for the service to function and are not used for tracking or advertising.
                </p>
              </div>

              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">What We Do NOT Use:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong className="text-foreground">Analytics Cookies:</strong> We do not use Google Analytics, Hotjar, or similar tools</li>
                  <li><strong className="text-foreground">Marketing/Advertising Cookies:</strong> We do not track users for advertising purposes</li>
                  <li><strong className="text-foreground">Social Media Cookies:</strong> We do not use Facebook Pixel, Meta tracking, or similar technologies</li>
                  <li><strong className="text-foreground">Performance Cookies:</strong> We do not collect data about website performance or user behavior</li>
                </ul>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">4. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to accept or refuse cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
              </p>
              
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">How to Disable Cookies:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and delete cookies through your browser settings. Here are instructions for common browsers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li><strong className="text-foreground">Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong className="text-foreground">Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong className="text-foreground">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong className="text-foreground">Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Note:</strong> Disabling essential cookies may affect the functionality of our website, particularly the contact form.
              </p>

              <div className="mt-6 bg-muted/30 border border-border rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  For more information about cookies and how to manage them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:opacity-70">www.allaboutcookies.org</a> or <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:opacity-70">www.youronlinechoices.eu</a>.
                </p>
              </div>
            </div>

            {/* Future Changes */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">5. Future Use of Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If we decide to implement additional cookies or tracking technologies in the future (such as analytics, advertising, or performance monitoring tools), we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Update this Cookie Policy with clear information about the new cookies</li>
                <li>Provide you with a cookie consent banner to choose which cookies you accept</li>
                <li>Notify you of any significant changes to our cookie practices</li>
                <li>Ensure compliance with GDPR and ePrivacy regulations</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You will always have the option to accept or decline non-essential cookies.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">6. Updates to This Cookie Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices, legal requirements, or the types of cookies we use. When we make changes, we will update the "Effective Date" at the top of this page. We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">7. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:maisondubar25@gmail.com" className="text-foreground underline hover:opacity-70">maisondubar25@gmail.com</a></li>
                <li><strong className="text-foreground">Company:</strong> Maison du Bar O.E.</li>
                <li><strong className="text-foreground">Location:</strong> Athens, Greece</li>
                <li><strong className="text-foreground">Website:</strong> <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For more information about how we handle your personal data, please refer to our <a href="/privacy-policy" className="text-foreground underline hover:opacity-70">Privacy Policy</a>.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
