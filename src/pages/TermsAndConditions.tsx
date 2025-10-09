import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

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
                Welcome to Maison du Bar O.E. ("we," "us," "our"). These Terms & Conditions ("Terms") govern your use of our website <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a> and the services we offer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Maison du Bar provides luxury mobile bar services for private events, corporate functions, weddings, and other special occasions throughout Greece.
              </p>
            </div>

            {/* Use of the Website */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">2. Use of the Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website is provided for informational purposes to showcase our services and allow potential clients to contact us. By using this website, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the website in compliance with all applicable laws and regulations</li>
                <li>Provide accurate and truthful information when contacting us</li>
                <li>Not use the website for any unlawful, fraudulent, or harmful purposes</li>
                <li>Not attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Not transmit viruses, malware, or any harmful code</li>
                <li>Not reproduce, duplicate, or exploit any content without our written permission</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to suspend or terminate your access to the website if you violate these Terms.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website, including but not limited to text, images, graphics, logos, photographs, videos, and design elements, is the exclusive property of Maison du Bar O.E. or its licensors and is protected by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Copyright laws</li>
                <li>Trademark laws</li>
                <li>Other intellectual property rights under Greek, EU, and international law</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">You may not:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Copy, reproduce, distribute, or publicly display any content without our written consent</li>
                <li>Use our brand name, logo, or trademarks without authorization</li>
                <li>Create derivative works based on our content</li>
                <li>Use our images or materials for commercial purposes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Unauthorized use of our intellectual property may result in legal action.
              </p>
            </div>

            {/* Service Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">4. Service Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Maison du Bar specializes in luxury mobile bar services for events, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Private parties and celebrations</li>
                <li>Corporate events and functions</li>
                <li>Weddings and receptions</li>
                <li>Special occasions and gatherings</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed mt-6 mb-4">
                <strong className="text-foreground">Important Notes:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">No Online Sales:</strong> Our website is informational only. We do not sell products or services directly through the website.</li>
                <li><strong className="text-foreground">No Binding Agreements:</strong> Contacting us through the website does not create a binding contract. Service agreements are made separately after consultation.</li>
                <li><strong className="text-foreground">Service Availability:</strong> All services are subject to availability and confirmation. We reserve the right to decline service requests.</li>
                <li><strong className="text-foreground">Pricing:</strong> Prices displayed on the website are indicative and may vary based on event requirements. Final pricing will be provided in a formal quote.</li>
                <li><strong className="text-foreground">Accuracy of Information:</strong> While we strive to keep information accurate and up-to-date, we do not guarantee that all details (prices, service descriptions, availability) are error-free.</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law, Maison du Bar O.E. and its directors, employees, agents, and partners shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Errors, omissions, or inaccuracies in website content</li>
                <li>Interruptions or unavailability of the website</li>
                <li>Viruses or malicious code transmitted through the website (despite our reasonable security measures)</li>
                <li>Third-party content, links, or services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Website Availability:</strong> We do not guarantee that the website will be available at all times or free from errors. We reserve the right to suspend, modify, or discontinue the website at any time without notice.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Service Liability:</strong> Liability for services provided at events will be governed by separate service agreements and applicable Greek law.
              </p>
            </div>

            {/* External Links */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">6. External Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website may contain links to third-party websites or services (e.g., social media platforms, partners, suppliers) that are not owned or controlled by Maison du Bar.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>We are not responsible for any damage or loss caused by your use of third-party websites</li>
                <li>You access third-party websites at your own risk</li>
                <li>You should review the terms and privacy policies of any third-party websites you visit</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The inclusion of any link does not imply endorsement by Maison du Bar.
              </p>
            </div>

            {/* Data Protection & Privacy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">7. Data Protection & Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your privacy is important to us. When you use our website or contact us, we collect and process personal data in accordance with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>The General Data Protection Regulation (GDPR)</li>
                <li>Greek data protection laws</li>
                <li>Our <a href="/privacy-policy" className="text-foreground underline hover:opacity-70">Privacy Policy</a></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using our website, you consent to the collection and use of your personal data as described in our Privacy Policy. For detailed information about how we handle your data, please review our:
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
                These Terms & Conditions are governed by and construed in accordance with the laws of <strong className="text-foreground">Greece</strong> and the <strong className="text-foreground">European Union</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes arising from or relating to these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of <strong className="text-foreground">Athens, Greece</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable by a court, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">9. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to update or modify these Terms & Conditions at any time without prior notice. When we make changes, we will update the "Effective Date" at the top of this page.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your continued use of the website after any changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed about your rights and obligations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree with the updated Terms, you must stop using the website immediately.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions or need further clarification, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Company Name:</strong> Maison du Bar O.E.</li>
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:maisondubar25@gmail.com" className="text-foreground underline hover:opacity-70">maisondubar25@gmail.com</a></li>
                <li><strong className="text-foreground">Location:</strong> Athens, Greece</li>
                <li><strong className="text-foreground">Website:</strong> <a href="https://maisondubar.com" className="text-foreground underline hover:opacity-70">https://maisondubar.com</a></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Thank you for choosing Maison du Bar. We look forward to bringing luxury and sophistication to your next event.
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
