import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bar.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import FeaturedEvents from "@/components/FeaturedEvents";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-hover"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 luxury-text-shadow"
          >
            Maison du Bar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light"
          >
            Luxury Mobile Bar – Anywhere, Anytime
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-black hover:text-white border-2 border-black px-8 py-6 text-lg group transition-all duration-300"
              >
                Book Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
              Elevate Every Occasion
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Maison du Bar brings the luxury bar experience directly to your event.
              Whether it's a wedding, corporate gathering, or private celebration,
              our mobile bar service delivers exceptional cocktails and impeccable
              service that your guests will remember.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-16 text-primary-foreground">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-black" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-primary-foreground">
                Premium Experience
              </h3>
              <p className="text-primary-foreground/80">
                Expert bartenders crafting signature cocktails with top-shelf spirits
                and fresh ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-black" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-primary-foreground">
                Fully Portable
              </h3>
              <p className="text-primary-foreground/80">
                Our StationDeus bar adapts to any venue – indoors or outdoors,
                bringing luxury wherever you need it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-black" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-primary-foreground">
                Customizable Service
              </h3>
              <p className="text-primary-foreground/80">
                Choose from our curated service packs or create a bespoke experience
                tailored to your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Featured Events */}
      <FeaturedEvents />

      {/* Testimonials */}
      <Testimonials />

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
              Ready to Elevate Your Event?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's create an unforgettable bar experience for your guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-black hover:text-white border-2 border-black transition-all duration-300"
                >
                  View Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
