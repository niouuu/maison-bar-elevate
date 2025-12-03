import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  const currentDate = "December 3rd, 2024";

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Maison du Bar</title>
        <meta name="description" content="Terms & Conditions for Maison du Bar - Please read our terms of service before using our website and services." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-black text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
              Terms & Conditions
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
                Welcome to Maison du Bar O.E. ("we", "us", "our"). These Terms & Conditions ("Terms") govern your use of our website <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a> and the services we offer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please discontinue use of the website.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Maison du Bar provides luxury mobile bar services for private events, corporate functions, weddings, and other special occasions throughout Greece.
              </p>
            </div>

            {/* Use of the Website */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">2. Use of the Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website is intended to showcase our services and provide a contact method for potential clients. By using this website, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the website in compliance with applicable laws</li>
                <li>Provide accurate and truthful information when contacting us</li>
                <li>Not engage in unlawful, fraudulent, or harmful activities</li>
                <li>Not attempt to access protected website areas or systems</li>
                <li>Not transmit viruses, malware, or harmful code</li>
                <li>Not reproduce, copy, or exploit website content without permission</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to suspend or terminate access for violations of these Terms.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website—including text, images, logos, graphics, design elements, and photographs—is the exclusive property of Maison du Bar O.E. or its licensors, protected by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Copyright law</li>
                <li>Trademark law</li>
                <li>Applicable EU and international IP laws</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">You may not:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Copy, reproduce, or distribute the content</li>
                <li>Use our trademarks or logo without written consent</li>
                <li>Create derivative works</li>
                <li>Use website content for commercial purposes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Unauthorized use may result in legal action.
              </p>
            </div>

            {/* Service Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">4. Service Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Maison du Bar offers luxury mobile bar services for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Private parties</li>
                <li>Corporate events</li>
                <li>Weddings</li>
                <li>Special occasions</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed mt-6 mb-4">
                <strong className="text-foreground">Important notes:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">No Online Sales:</strong> Our website does not process transactions.</li>
                <li><strong className="text-foreground">No Binding Agreement:</strong> Submitting a contact form does not constitute a contract.</li>
                <li><strong className="text-foreground">Availability:</strong> All services are subject to availability and confirmation.</li>
                <li><strong className="text-foreground">Pricing:</strong> Any pricing provided online is indicative; final pricing is issued in a formal quotation.</li>
                <li><strong className="text-foreground">Accuracy:</strong> We strive to keep information updated but cannot guarantee complete accuracy at all times.</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law, Maison du Bar O.E. shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Direct, indirect, incidental, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Inaccuracies, errors, or interruptions on the website</li>
                <li>Viruses or harmful code despite reasonable security measures</li>
                <li>Third-party content, links, or services</li>
                <li>Temporary or permanent unavailability of the website</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Liability for event-related services is governed by separate service agreements and Greek law.
              </p>
            </div>

            {/* External Links */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">6. External Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The website may include links to third-party websites. We do not control or monitor these websites and are not responsible for their:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Content</li>
                <li>Privacy practices</li>
                <li>Security standards</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You access third-party websites at your own risk. Inclusion of a link does not imply endorsement.
              </p>
            </div>

            {/* Data Protection & Privacy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">7. Data Protection & Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We handle personal data in accordance with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>The General Data Protection Regulation (GDPR)</li>
                <li>Greek data protection laws</li>
                <li>Our <a href="/privacy-policy" className="text-foreground underline hover:opacity-70">Privacy Policy</a></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using our website or submitting our contact form, you consent to the processing of your personal data as described in our Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please review our:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                <li><a href="/privacy-policy" className="text-foreground underline hover:opacity-70">Privacy Policy</a></li>
                <li><a href="/cookie-policy" className="text-foreground underline hover:opacity-70">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms & Conditions are governed by Greek law and applicable EU legislation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Athens, Greece.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found unenforceable, the remaining provisions will continue in effect.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">9. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update or modify these Terms at any time. When changes are made, the "Effective Date" will be updated.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Continued use of the website after changes indicates acceptance of the revised Terms. If you do not agree with the updated Terms, you must stop using the website.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions or clarifications regarding these Terms, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Company:</strong> Maison du Bar O.E.</li>
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:info@maisondubar.com" className="text-foreground underline hover:opacity-70">info@maisondubar.com</a></li>
                <li><strong className="text-foreground">Location:</strong> Athens, Greece</li>
                <li><strong className="text-foreground">Website:</strong> <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Thank you for choosing Maison du Bar — we look forward to elevating your next event with our luxury bar experience.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
