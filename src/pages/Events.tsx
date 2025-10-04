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
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              Events by Maison du Bar
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore our collection of luxury bar experiences across weddings,
              corporate events, and private celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b-2 border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-sans text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-black border-2 border-gray-300 hover:border-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Masonry Grid */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 max-w-7xl mx-auto">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <div className="group relative overflow-hidden bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-hover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-white text-black font-sans text-xs font-semibold mb-2">
                        {event.category}
                      </span>
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="font-sans text-sm text-white/80 mb-1">
                        {event.guests}
                      </p>
                      <p className="font-sans text-sm text-white/90">
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

      <Footer />
    </div>
  );
};

export default Events;
