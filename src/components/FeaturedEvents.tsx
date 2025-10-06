import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturedEvents = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Elegant Garden Wedding",
      category: "Wedding",
      description: "150 guests, Premium Package",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    },
    {
      title: "Corporate Launch Event",
      category: "Corporate",
      description: "200 guests, Ultra Premium Package",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    },
    {
      title: "Private Celebration",
      category: "Private",
      description: "80 guests, Premium Package",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-chamberi text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Recent Events
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Explore some of our recent bar setups and see how we bring luxury to
            every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale-hover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                    {event.category}
                  </span>
                  <h3 className="font-chamberi text-2xl font-bold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/events">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 group"
            >
              View All Events
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
