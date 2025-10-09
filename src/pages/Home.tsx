import { Link } from "react-router-dom";
import { Sparkles, Truck, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/utils/seo";
import { organizationSchema } from "@/utils/schema";
import heroImage from "@/assets/Maison_du_Bar_0078.jpg";
import heroImageMobile from "@/assets/Maison_du_Bar_0062kin.jpg";

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valueRef, valueInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <SEO {...seoConfig.home} schema={organizationSchema} />
      <div className="min-h-screen bg-white">
        <Navbar />
        <ScrollToTop />

        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
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
              Luxury Mobile Bar Services Across Greece
            </h1>
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto">
              Premium cocktail bar experiences for weddings, parties, and corporate events — wherever you celebrate in Greece
            </p>
          </motion.div>
        </header>

        {/* Value Proposition */}
        <main>
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
                  Elevate Every Event Across Greece
                </h2>
                <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Transform your event with our premium mobile bar service. We bring sophisticated cocktail catering, professional bartenders, and exceptional service directly to your venue — from Athens to the Greek Islands.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {[
                  {
                    icon: Sparkles,
                    title: "Premium Bar Experience",
                    description:
                      "Exceptional cocktail service and a curated selection of premium spirits, designed to elevate every celebration across Greece.",
                  },
                  {
                    icon: Truck,
                    title: "Fully Portable Luxury Bar",
                    description:
                      "Complete luxury mobile bar setup, ready for any event anywhere in Greece – from Athens venues to the Greek Islands.",
                  },
                  {
                    icon: Palette,
                    title: "Customizable Bar Packages",
                    description:
                      "Tailor-made cocktail catering packages designed for weddings, corporate events, and private parties to reflect your unique style.",
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
                <h3 className="font-chamberi text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{feature.title}</h3>
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
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
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Home;
