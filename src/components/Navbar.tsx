import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/maison-du-bar-new-logo.jpg";

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
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "The Bar", path: "/the-bar" },
    { name: "Details", path: "/details" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-background shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="relative flex items-center justify-center h-20 sm:h-24 lg:h-28">
          {/* Logo - Absolutely positioned left */}
          <Link to="/" className="absolute left-0 flex-shrink-0 hover:opacity-80 transition-opacity">
            <img
              src={logoImage}
              alt="Maison du Bar"
              className="h-24 sm:h-28 lg:h-32 w-auto object-contain max-w-[240px] sm:max-w-[280px]"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 lg:px-4 py-2 text-sm lg:text-base text-foreground font-medium relative whitespace-nowrap after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-300 after:ease-in-out hover:after:w-[60%] ${
                  isActive(link.path) ? "after:!w-[60%]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Absolutely positioned right */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 md:hidden text-foreground hover:bg-muted flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-foreground px-4 font-medium relative after:content-[''] after:absolute after:bottom-2 after:left-4 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-300 after:ease-in-out hover:after:w-[calc(100%-2rem)] ${
                  isActive(link.path) ? "after:!w-[calc(100%-2rem)]" : ""
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
