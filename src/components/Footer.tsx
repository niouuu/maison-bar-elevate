import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Maison du Bar
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Luxury mobile bar services for unforgettable occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/the-bar"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  The Bar
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-accent" />
                <a
                  href="mailto:contact@maisondubar.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  contact@maisondubar.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-accent" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Maison du Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
