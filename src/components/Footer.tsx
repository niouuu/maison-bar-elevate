import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import logoImage from "@/assets/maison-du-bar-new-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t-2 border-border overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 w-full">
          {/* Brand */}
          <div className="text-center md:text-left space-y-4">
            <img
              src={logoImage}
              alt="Maison du Bar"
              className="h-32 sm:h-36 lg:h-40 w-auto object-contain mx-auto md:mx-0 max-w-[340px] sm:max-w-[400px]"
            />
            <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">
              Bringing luxury and sophistication to every event across Greece.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-sans text-lg lg:text-xl font-bold text-foreground mb-4 lg:mb-6">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              {[
                { name: "Services", path: "/services" },
                { name: "The Bar", path: "/the-bar" },
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
          <div className="text-center md:text-left">
            <h4 className="font-sans text-lg lg:text-xl font-bold text-foreground mb-4 lg:mb-6">Contact Us</h4>
            <div className="space-y-3 lg:space-y-4">
              <a
                href="mailto:maisondubar25@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 font-sans text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="break-all">maisondubar25@gmail.com</span>
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
        </div>

        <div className="border-t border-border mt-10 sm:mt-12 lg:mt-16 pt-8 lg:pt-10 text-center space-y-2">
          <p className="font-sans text-sm lg:text-base text-muted-foreground">
            © {currentYear} Maison du Bar. All rights reserved.
          </p>
          <p className="font-sans text-sm lg:text-base text-muted-foreground opacity-60">
            Designed by{" "}
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
