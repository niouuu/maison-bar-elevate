import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import logoImage from "@/assets/maison-du-bar-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <img
              src={logoImage}
              alt="Maison du Bar"
              className="h-16 w-auto object-contain mb-4"
            />
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
                href="mailto:maisondubar25@gmail.com"
                className="flex items-center gap-3 font-sans text-sm text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                maisondubar25@gmail.com
              </a>
              <a
                href="tel:6973291777"
                className="flex items-center gap-3 font-sans text-sm text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                697 329 1777
              </a>
              <a
                href="tel:6944199717"
                className="flex items-center gap-3 font-sans text-sm text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                694 419 9717
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
