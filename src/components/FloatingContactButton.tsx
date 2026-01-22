import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Hide on contact page
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 400px (typical hero section)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show on mobile and not on contact page
  if (!isMobile || isContactPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            to="/contact"
            className="flex items-center justify-center w-14 h-14 bg-foreground text-background rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="Contact us"
          >
            <MessageCircle className="w-6 h-6" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
