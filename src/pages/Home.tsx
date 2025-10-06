import { Link } from "react-router-dom";
import { Sparkles, Truck, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage from "@/assets/hero-bar.jpg";

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
          className="absolute inset-0 bg-cover bg-center grayscale-hover"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 elegant-text-shadow">
            Maison du Bar
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto">
            Luxury Mobile Bar – Anywhere, Anytime
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="elegant"
              className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium"
            >
              Book Now
            </Button>
          </Link>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={valueRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
              Elevate Every Occasion
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your event with our premium mobile bar service. We bring sophistication, style, and exceptional service directly to your venue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Premium Experience",
                description: "Exceptional service and a curated selection of premium drinks, designed to elevate every celebration.",
              },
              {
                icon: Truck,
                title: "Fully Portable",
                description: "A complete luxury mobile bar setup, ready to elevate your event anywhere in Greece – from city venues to the islands.",
              },
              {
                icon: Settings,
                title: "Customizable Service",
                description: "Tailor-made packages designed to reflect your unique style and create an unforgettable experience.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valueInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center border-2 border-black rounded-full group-hover:bg-black transition-all duration-300">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
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
                Get in Touch
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
