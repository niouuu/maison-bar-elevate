import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-black mb-4">
              Maison du Bar
            </h3>
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              Bringing luxury and sophistication to every event across Belgium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-lg font-bold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "The Bar", path: "/the-bar" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-lg font-bold text-black mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@maisondubar.be"
                className="flex items-center gap-3 font-sans text-sm text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                contact@maisondubar.be
              </a>
              <a
                href="tel:+32123456789"
                className="flex items-center gap-3 font-sans text-sm text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                +32 123 456 789
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-70 transition-opacity duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-70 transition-opacity duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="font-sans text-sm text-gray-600">
            © {currentYear} Maison du Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
