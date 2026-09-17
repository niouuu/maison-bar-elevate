import { useState, useEffect, useRef, type KeyboardEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/maison-du-bar-new-logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBarMenuOpen, setIsBarMenuOpen] = useState(false);
  const [isMobileBarOpen, setIsMobileBarOpen] = useState(false);
  const location = useLocation();
  const barLinkRef = useRef<HTMLAnchorElement>(null);
  const barMenuItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsBarMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Details", path: "/details" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isBarActive = location.pathname === "/the-bar" || location.pathname === "/the-bar/white";
  const barChildren = [
    { name: "Signature Bar", path: "/the-bar" },
    { name: "White Bar", path: "/the-bar/white" },
  ];

  const openBarMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsBarMenuOpen(true);
  };

  const closeBarMenuWithDelay = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setIsBarMenuOpen(false), 180);
  };

  const handleBarLinkKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsBarMenuOpen((open) => !open);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openBarMenu();
      window.setTimeout(() => barMenuItemRefs.current[0]?.focus(), 0);
    }
    if (event.key === "Escape") {
      setIsBarMenuOpen(false);
      barLinkRef.current?.focus();
    }
  };

  const handleBarItemKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = (index + direction + barChildren.length) % barChildren.length;
      barMenuItemRefs.current[nextIndex]?.focus();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setIsBarMenuOpen(false);
      barLinkRef.current?.focus();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background shadow-sm">
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
            {navLinks.slice(0, 2).map((link) => (
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
            <div
              className="relative"
              onMouseEnter={openBarMenu}
              onMouseLeave={closeBarMenuWithDelay}
              onFocus={openBarMenu}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) closeBarMenuWithDelay();
              }}
            >
              <Link
                ref={barLinkRef}
                to="/the-bar"
                aria-haspopup="menu"
                aria-expanded={isBarMenuOpen}
                onKeyDown={handleBarLinkKeyDown}
                className={`px-3 lg:px-4 py-2 text-sm lg:text-base text-foreground font-medium relative whitespace-nowrap inline-flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-300 after:ease-in-out hover:after:w-[60%] ${
                  isBarActive ? "after:!w-[60%]" : ""
                }`}
              >
                The Bar
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform duration-200 ${isBarMenuOpen ? "rotate-180" : ""}`}
                />
              </Link>
              <div
                role="menu"
                aria-label="The Bar"
                className={`absolute left-1/2 top-full z-50 min-w-52 -translate-x-1/2 bg-background px-3 py-3 shadow-soft transition-all duration-200 ${
                  isBarMenuOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0 pointer-events-none"
                }`}
              >
                {barChildren.map((item, index) => (
                  <Link
                    key={item.path}
                    ref={(element) => {
                      barMenuItemRefs.current[index] = element;
                    }}
                    role="menuitem"
                    tabIndex={isBarMenuOpen ? 0 : -1}
                    to={item.path}
                    onKeyDown={(event) => handleBarItemKeyDown(event, index)}
                    className={`block px-4 py-3 font-sans text-sm whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:bg-muted ${
                      isActive(item.path) ? "bg-muted text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            {navLinks.slice(2).map((link) => (
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
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            {navLinks.slice(0, 2).map((link) => (
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
            <div>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsMobileBarOpen((open) => !open)}
                aria-expanded={isMobileBarOpen}
                aria-controls="mobile-bar-links"
                className={`w-full min-h-12 justify-between rounded-none px-4 py-3 font-sans font-medium text-foreground hover:bg-muted relative after:content-[''] after:absolute after:bottom-2 after:left-4 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-300 ${
                  isBarActive ? "after:!w-[calc(100%-2rem)]" : ""
                }`}
              >
                The Bar
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 transition-transform duration-200 ${isMobileBarOpen ? "rotate-180" : ""}`}
                />
              </Button>
              <div
                id="mobile-bar-links"
                className={`grid bg-muted/50 transition-[grid-template-rows,opacity] duration-200 ${
                  isMobileBarOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {barChildren.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex min-h-12 items-center px-8 py-3 font-sans text-sm transition-colors ${
                        isActive(item.path)
                          ? "bg-muted text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.slice(2).map((link) => (
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
