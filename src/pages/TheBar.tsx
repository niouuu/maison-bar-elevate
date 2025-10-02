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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-hover"
          style={{ backgroundImage: `url(${stationDeusImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-16"
        >
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 luxury-text-shadow">
            The StationDeus Experience
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Our signature portable bar – where luxury meets versatility
          </p>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-secondary-foreground">
              Portable Luxury, Uncompromising Quality
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              The StationDeus is not just a mobile bar – it's a statement piece that
              transforms any space into a premium cocktail destination. Designed with
              both aesthetics and functionality in mind, our signature bar features
              elegant finishes, professional equipment, and a layout that allows our
              bartenders to work their magic efficiently.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every detail has been carefully considered, from the LED accent lighting
              to the premium countertop surfaces and integrated storage systems. The
              result is a bar that looks stunning while providing everything needed
              to craft world-class cocktails.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-primary-foreground">
            What Makes StationDeus Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto" ref={ref}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card p-6 sm:p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-center text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-secondary-foreground">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {galleryPlaceholders.map((index) => (
              <div
                key={index}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-accent transition-colors duration-300 cursor-pointer group"
              >
                <div className="text-center p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-accent/20 transition-colors">
                    <span className="text-2xl sm:text-3xl">📸</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Photos & Videos Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground italic text-sm sm:text-base px-4">
            Professional photography and drone footage of the StationDeus bar in various
            event settings will be available soon.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-primary-foreground">
              Book the StationDeus Bar Today
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Transform your event with our stunning portable bar. Contact us to
              discuss availability and packages.
            </p>
            <Link to="/contact" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-black hover:text-white border-2 border-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto transition-all duration-300"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default TheBar;
