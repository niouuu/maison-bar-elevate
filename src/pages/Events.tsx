import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Weddings", "Corporate", "Private", "Venues"];

  const events = [
    {
      title: "Elegant Garden Wedding",
      category: "Weddings",
      guests: "150 guests",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      description: "Premium Package with custom cocktail menu",
    },
    {
      title: "Corporate Product Launch",
      category: "Corporate",
      guests: "200 guests",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      description: "Ultra Premium Package with branded glassware",
    },
    {
      title: "Rooftop Private Celebration",
      category: "Private",
      guests: "80 guests",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      description: "Premium Package with signature drinks",
    },
    {
      title: "Beachside Wedding Reception",
      category: "Weddings",
      guests: "120 guests",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      description: "Ultra Premium with sommelier service",
    },
    {
      title: "Tech Startup Conference",
      category: "Corporate",
      guests: "300 guests",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      description: "Multiple bars with themed stations",
    },
    {
      title: "Anniversary Celebration",
      category: "Private",
      guests: "60 guests",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
      description: "Standard Package with champagne bar",
    },
    {
      title: "Hotel Grand Opening",
      category: "Venues",
      guests: "250 guests",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      description: "Ultra Premium with VIP service",
    },
    {
      title: "Estate Vineyard Wedding",
      category: "Weddings",
      guests: "180 guests",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      description: "Premium Package with wine pairing",
    },
    {
      title: "Birthday Pool Party",
      category: "Private",
      guests: "100 guests",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      description: "Standard Package with tropical cocktails",
    },
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-6 text-primary-foreground">
              Our Event Portfolio
            </h1>
            <p className="text-xl text-center text-primary-foreground/80 max-w-3xl mx-auto">
              Explore our collection of luxury bar experiences across weddings,
              corporate events, and private celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:bg-accent/20 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Masonry Grid */}
      <section className="py-20 bg-secondary" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-card">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-hover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3 w-fit">
                        {event.category}
                      </span>
                      <h3 className="font-playfair text-2xl font-bold text-primary-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm mb-1">
                        {event.guests}
                      </p>
                      <p className="text-primary-foreground/70 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Events;
