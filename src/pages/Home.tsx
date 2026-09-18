import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage from "@/assets/Maison_du_Bar_0078.jpg";
import heroImageMobile from "@/assets/Maison_du_Bar_0062kin.jpg";

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valueRef, valueInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg-responsive"
          style={
            {
              "--hero-bg-mobile": `url(${heroImageMobile})`,
              "--hero-bg-desktop": `url(${heroImage})`,
            } as React.CSSProperties
          }
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <h1 className="font-chamberi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 elegant-text-shadow">
            Maison du Bar
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto">
            Luxury Mobile Bar — Wherever You Celebrate
          </p>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 sm:py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={valueRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
              Elevate Every Occasion
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your event with our premium mobile bar service. We bring sophistication, style and exceptional
              service directly to your venue.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-40 bg-black text-white">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Ready to Elevate Your Event?
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Let's create an unforgettable experience for your guests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services">
              <Button
                size="lg"
                variant="elegant-inverted"
                className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium w-full sm:w-auto"
              >
                View Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="elegant-inverted"
                className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
