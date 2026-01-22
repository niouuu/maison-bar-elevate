import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import logoImage from "@/assets/maison-du-bar-new-logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 500));
    toast.success("Thank you for subscribing!");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-background border-t-2 border-border overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 w-full md:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src={logoImage}
              alt="Maison du Bar"
              className="h-24 sm:h-28 md:h-32 w-auto object-contain max-w-[280px] sm:max-w-[320px]"
            />
            <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed max-w-xs text-center md:text-left">
              Bringing luxury and sophistication to every event across Greece.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-sans text-lg lg:text-xl font-bold text-foreground mb-4 lg:mb-6 text-center md:text-left">
              Quick Links
            </h4>
            <ul className="space-y-3 lg:space-y-4 flex flex-col items-center md:items-start">
              {[
                { name: "Services", path: "/services" },
                { name: "The Bar", path: "/the-bar" },
                { name: "Details", path: "/details" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-sans text-lg lg:text-xl font-bold text-foreground mb-4 lg:mb-6 text-center md:text-left">
              Contact Us
            </h4>
            <div className="space-y-3 lg:space-y-4 flex flex-col items-center md:items-start w-full">
              <a
                href="mailto:info@maisondubar.com"
                className="flex items-center justify-center md:justify-start gap-3 font-sans text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="break-all">info@maisondubar.com</span>
              </a>
              <a
                href="tel:6973291777"
                className="flex items-center justify-center md:justify-start gap-3 font-sans text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                697 329 1777
              </a>
              <a
                href="tel:6944199717"
                className="flex items-center justify-center md:justify-start gap-3 font-sans text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                694 419 9717
              </a>
              <div className="flex gap-3 pt-2 justify-center md:justify-start items-center">
                <a
                  href="https://www.instagram.com/maison_du_bar_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity duration-200"
                  aria-label="Instagram - maison_du_bar_"
                >
                  <Instagram className="w-6 h-6 lg:w-7 lg:h-7" />
                  <span className="font-sans text-sm lg:text-base">maison_du_bar_</span>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-sans text-lg lg:text-xl font-bold text-foreground mb-4 lg:mb-6 text-center md:text-left">
              Stay Updated
            </h4>
            <p className="font-sans text-sm text-muted-foreground mb-4 text-center md:text-left">
              Join our mailing list for exclusive updates and offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="w-full max-w-xs space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-border focus:border-foreground"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-background hover:text-foreground border-2 border-foreground transition-all duration-300"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-10 sm:mt-12 lg:mt-16 pt-8 lg:pt-10 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/cookie-policy" className="hover:text-foreground transition-colors duration-200">
              Cookie Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
          <p className="font-sans text-sm lg:text-base text-muted-foreground">
            © 2025 Maison du Bar. All rights reserved.
          </p>
          <p className="font-sans text-xs sm:text-sm text-muted-foreground">
            Maison du Bar O.E. — Luxury Mobile Bar Services in Greece
          </p>
          <p className="font-sans text-xs text-muted-foreground opacity-60">
            Powered by{" "}
            <a
              href="https://www.amox.gr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-70 transition-opacity duration-200 font-semibold"
            >
              AMOX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
