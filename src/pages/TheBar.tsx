import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Sparkles, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import stationDeusImage from "@/assets/stationdeus-bar.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TheBar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description:
        "Built with high-grade materials and elegant finishes that reflect luxury in every detail.",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description:
        "Our portable design allows for rapid deployment at any venue, saving time without compromising elegance.",
    },
    {
      icon: Users,
      title: "Versatile Service",
      description:
        "Accommodates events from intimate gatherings to large celebrations with professional efficiency.",
    },
  ];

  const galleryPlaceholders = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-hover"
          style={{ backgroundImage: `url(${stationDeusImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 elegant-text-shadow">
            The StationDeus Experience
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Our signature portable bar – where luxury meets versatility
          </p>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-black">
              Portable Luxury, Seamless Design

            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              The StationDeus is not just a mobile bar – it's a statement piece that
              transforms any space into a premium cocktail destination. Designed with
              both aesthetics and functionality in mind, our signature bar features
              elegant finishes, professional equipment, and a layout that allows our
              bartenders to work their magic efficiently.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
              Every detail has been carefully considered, from the LED accent lighting
              to the premium countertop surfaces and integrated storage systems. The
              result is a bar that looks stunning while providing everything needed
              to craft world-class cocktails.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 lg:mb-20 text-black">
            What Makes StationDeus Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto" ref={ref}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center border-2 border-black rounded-full group-hover:bg-black transition-all duration-300">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-4 text-black">
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

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-black">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {galleryPlaceholders.map((index) => (
              <div
                key={index}
                className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-black transition-colors duration-300 cursor-pointer group"
              >
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-black/10 transition-colors">
                    <span className="text-3xl">📸</span>
                  </div>
                  <p className="font-sans text-gray-500 text-sm">
                    Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center font-sans text-gray-500 italic text-sm sm:text-base max-w-2xl mx-auto">
            Professional photography and drone footage of the StationDeus bar in various
            event settings will be available soon.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book the StationDeus Bar Today
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform your event with our stunning portable bar. Contact us to
              discuss availability and packages.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="elegant-inverted"
                className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheBar;
