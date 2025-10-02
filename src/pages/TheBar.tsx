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
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 luxury-text-shadow">
            The StationDeus Experience
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Our signature portable bar – where luxury meets versatility
          </p>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold mb-8 text-secondary-foreground">
              Portable Luxury, Uncompromising Quality
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The StationDeus is not just a mobile bar – it's a statement piece that
              transforms any space into a premium cocktail destination. Designed with
              both aesthetics and functionality in mind, our signature bar features
              elegant finishes, professional equipment, and a layout that allows our
              bartenders to work their magic efficiently.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every detail has been carefully considered, from the LED accent lighting
              to the premium countertop surfaces and integrated storage systems. The
              result is a bar that looks stunning while providing everything needed
              to craft world-class cocktails.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-16 text-primary-foreground">
            What Makes StationDeus Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" ref={ref}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-accent-foreground" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-center text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-secondary-foreground">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {galleryPlaceholders.map((index) => (
              <div
                key={index}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-accent transition-colors duration-300 cursor-pointer group"
              >
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                    <span className="text-3xl">📸</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Photos & Videos Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground italic">
            Professional photography and drone footage of the StationDeus bar in various
            event settings will be available soon.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Book the StationDeus Bar Today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Transform your event with our stunning portable bar. Contact us to
              discuss availability and packages.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
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
