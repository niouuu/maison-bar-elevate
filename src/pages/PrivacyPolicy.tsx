import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const currentDate = "October 10th, 2025";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Maison du Bar</title>
        <meta name="description" content="Privacy Policy for Maison du Bar - Learn how we collect, use, and protect your personal data in compliance with GDPR and EU regulations." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-black text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
              Privacy Policy
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
                Maison du Bar O.E. ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a> or contact us through our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This policy complies with the General Data Protection Regulation (GDPR) and all applicable EU data protection laws.
              </p>
            </div>

            {/* Data Controller */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">2. Data Controller Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The data controller responsible for your personal data is:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Company Name:</strong> Maison du Bar O.E.</li>
                <li><strong className="text-foreground">Data Controller:</strong> Angelos Papadopoulos</li>
                <li><strong className="text-foreground">Registered Address:</strong> Athens, Greece</li>
                <li><strong className="text-foreground">Contact Email:</strong> <a href="mailto:maisondubar25@gmail.com" className="text-foreground underline hover:opacity-70">maisondubar25@gmail.com</a></li>
                <li><strong className="text-foreground">Website:</strong> <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a></li>
              </ul>
            </div>

            {/* Personal Data We Collect */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">3. Personal Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We only collect personal data that you voluntarily provide to us through our contact form. The information we collect includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Name:</strong> To address you properly in our communications</li>
                <li><strong className="text-foreground">Email Address:</strong> To respond to your inquiries</li>
                <li><strong className="text-foreground">Phone Number:</strong> To contact you regarding your event or service request</li>
                <li><strong className="text-foreground">Message Content:</strong> To understand your needs and provide appropriate services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">We do not:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Create user accounts</li>
                <li>Process online payments or collect financial information</li>
                <li>Use analytics tools (e.g., Google Analytics, Meta Pixel, Hotjar)</li>
                <li>Track your browsing behavior</li>
              </ul>
            </div>

            {/* How We Collect Your Data */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">4. How We Collect Your Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect personal data through the following method:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Contact Form:</strong> When you submit an inquiry through our website's contact form</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The data you provide is transmitted securely using the <strong className="text-foreground">Resend API</strong> for email delivery.
              </p>
            </div>

            {/* Purpose and Legal Basis */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">5. Purpose and Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We process your personal data for the following purposes:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground font-semibold mb-2">Purpose:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>To respond to your inquiries about our services</li>
                    <li>To provide information about our luxury mobile bar offerings</li>
                    <li>To arrange event consultations and service bookings</li>
                    <li>To communicate with you regarding your requests</li>
                  </ul>
                </div>
                <div>
                  <p className="text-foreground font-semibold mb-2">Legal Basis (GDPR Article 6):</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong className="text-foreground">Consent (Article 6(1)(a)):</strong> By submitting the contact form, you consent to us processing your data</li>
                    <li><strong className="text-foreground">Legitimate Interest (Article 6(1)(f)):</strong> Processing is necessary for our legitimate business interests in responding to inquiries and providing services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookies & Tracking */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">6. Cookies & Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website currently <strong className="text-foreground">does not use</strong> any cookies or tracking technologies for analytics, advertising, or behavioral tracking purposes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If we implement cookies in the future, we will update this Privacy Policy and provide clear notice and consent options. For more information, please refer to our <a href="/cookie-policy" className="text-foreground underline hover:opacity-70">Cookie Policy</a>.
              </p>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">7. Data Sharing & Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, rent, or share your personal data with third parties for marketing purposes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Third-Party Service Providers:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Resend API:</strong> We use Resend for sending emails. Resend processes your data solely for the purpose of email delivery and operates under GDPR-compliant terms.</li>
                <li><strong className="text-foreground">Hosting Provider (Vercel):</strong> Our website is hosted on Vercel, which provides secure infrastructure. Vercel complies with international data protection standards.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">International Transfers:</strong> Some service providers may store data outside the European Economic Area (EEA). When this occurs, we ensure appropriate safeguards are in place (e.g., Standard Contractual Clauses, adequacy decisions).
              </p>
            </div>

            {/* GDPR Rights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">8. Your GDPR Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Right of Access (Article 15):</strong> Request a copy of the personal data we hold about you</li>
                <li><strong className="text-foreground">Right to Rectification (Article 16):</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong className="text-foreground">Right to Erasure (Article 17):</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong className="text-foreground">Right to Restriction (Article 18):</strong> Request limitation of processing in certain circumstances</li>
                <li><strong className="text-foreground">Right to Data Portability (Article 20):</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong className="text-foreground">Right to Object (Article 21):</strong> Object to processing based on legitimate interests</li>
                <li><strong className="text-foreground">Right to Withdraw Consent (Article 7):</strong> Withdraw your consent at any time</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:maisondubar25@gmail.com" className="text-foreground underline hover:opacity-70">maisondubar25@gmail.com</a>. We will respond to your request within 30 days.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You also have the right to lodge a complaint with your local data protection authority if you believe your rights have been violated.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">9. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Contact Form Submissions:</strong> Retained for up to 2 years unless you request earlier deletion</li>
                <li><strong className="text-foreground">Email Communications:</strong> Retained as long as necessary to respond to your inquiry and provide services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                After the retention period expires, or upon your request, we will securely delete or anonymize your data.
              </p>
            </div>

            {/* Security Measures */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">10. Security Measures</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">SSL/TLS Encryption:</strong> All data transmitted through our website is encrypted using SSL/TLS protocols</li>
                <li><strong className="text-foreground">Secure Hosting:</strong> Our website is hosted on Vercel, which employs industry-standard security practices</li>
                <li><strong className="text-foreground">Firewalls & Access Controls:</strong> We use firewalls and restrict access to personal data to authorized personnel only</li>
                <li><strong className="text-foreground">Regular Security Reviews:</strong> We periodically review our security practices to ensure ongoing protection</li>
              </ul>
            </div>

            {/* Data Breach Policy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">11. Data Breach Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Notify the relevant supervisory authority within 72 hours (as required by GDPR Article 33)</li>
                <li>Inform affected individuals without undue delay if the breach poses a high risk (GDPR Article 34)</li>
                <li>Take immediate steps to contain and remediate the breach</li>
                <li>Document the breach and our response measures</li>
              </ul>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">12. Updates to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will update the "Effective Date" at the top of this page and notify you through appropriate channels (e.g., website notice or email). We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, your personal data, or wish to exercise your rights, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:maisondubar25@gmail.com" className="text-foreground underline hover:opacity-70">maisondubar25@gmail.com</a></li>
                <li><strong className="text-foreground">Data Controller:</strong> Angelos Papadopoulos</li>
                <li><strong className="text-foreground">Company:</strong> Maison du Bar O.E.</li>
                <li><strong className="text-foreground">Location:</strong> Athens, Greece</li>
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
