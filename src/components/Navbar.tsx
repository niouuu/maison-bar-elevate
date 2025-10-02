import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "The Bar", path: "/the-bar" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="font-playfair text-2xl font-bold text-black tracking-tight"
          >
            Maison du Bar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-black transition-all duration-300 relative group ${
                  isActive(link.path) ? "font-bold underline underline-offset-4" : ""
                }`}
              >
                {link.name}
                <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-black hover:bg-transparent hover:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/20 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-black hover:bg-black hover:text-white transition-all duration-300 px-4 ${
                  isActive(link.path) ? "font-bold underline underline-offset-4" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
