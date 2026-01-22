import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

import craft3 from "@/assets/craft3.jpg";
import craft4 from "@/assets/craft4.jpg";
import craft5 from "@/assets/craft5.jpg";
import details3 from "@/assets/details_3.jpg";
import details5 from "@/assets/details_5.jpg";
import chiller1 from "@/assets/chiller_1.jpg";

const galleryImages = [
  { src: craft3, alt: "Walnut wood detail" },
  { src: details3, alt: "Bar interior lighting" },
  { src: craft5, alt: "Professional bar setup" },
  { src: chiller1, alt: "Glass chiller unit" },
  { src: craft4, alt: "Precision craftsmanship" },
  { src: details5, alt: "Premium materials" },
];

const FeaturedGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Craftsmanship in Detail
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Every element of our bar tells a story of precision and elegance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/details"
            className="inline-flex items-center gap-2 font-sans font-medium text-foreground hover:opacity-70 transition-opacity group"
          >
            Explore the Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
