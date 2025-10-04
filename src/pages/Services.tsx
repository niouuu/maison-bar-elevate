import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [customRef, customInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      title: "Standard Pack",
      description: "Perfect for intimate gatherings and small events",
      features: [
        "Professional bartender service",
        "Basic bar setup and equipment",
        "Standard beverage selection",
        "Glassware and ice provision",
        "3-hour service duration",
        "Setup and breakdown included",
      ],
      variant: "standard" as const,
    },
    {
      title: "Premium Pack",
      description: "Our most popular choice for special occasions",
      features: [
        "Expert mixologist team",
        "Premium bar setup with lighting",
        "Extended beverage selection",
        "Custom cocktail menu design",
        "Premium glassware collection",
        "5-hour service duration",
        "Signature drink creation",
        "Bar decoration included",
      ],
      variant: "premium" as const,
    },
    {
      title: "Ultra Premium Pack",
      description: "The ultimate luxury bar experience",
      features: [
        "Master mixologist & support staff",
        "StationDeus luxury bar setup",
        "Unlimited premium beverages",
        "Bespoke cocktail menu creation",
        "Crystal glassware collection",
        "Full-day service (8+ hours)",
        "Multiple signature drinks",
        "Complete custom decoration",
        "VIP concierge service",
        "Photo-worthy bar presentation",
      ],
      variant: "ultra" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 sm:mb-8">
              Our Services
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Choose the perfect package for your event. From intimate gatherings to grand celebrations, we have a service tier designed to exceed your expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <motion.div
          ref={customRef}
          initial={{ opacity: 0, y: 30 }}
          animate={customInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Need Something Unique?
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating custom packages tailored to your exact needs. Let's discuss how we can make your vision a reality.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="elegant-inverted"
              className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium"
            >
              Get a Custom Quote
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Services;
