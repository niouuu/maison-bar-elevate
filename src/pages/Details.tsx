import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

// Import the 6 specific images
import craft3 from "@/assets/craft3.jpg";
import craft5 from "@/assets/craft5.jpg";
import maisondubar0062 from "@/assets/Maison_du_Bar_0062kin.jpg";
import craft4 from "@/assets/craft4.jpg";
import details1 from "@/assets/details_1.jpg";
import details2 from "@/assets/details_2.jpg";

// Import interior images
import details3 from "@/assets/details_3.jpg";
import details4 from "@/assets/details_4.jpg";
import details5 from "@/assets/details_5.jpg";
import details6 from "@/assets/details_6.jpg";
import details7 from "@/assets/details_7.jpg";
import details8 from "@/assets/details__8.jpg";
import details9 from "@/assets/details_9.jpg";

// Custom mobile-friendly carousel navigation arrows
const MobileCarouselPrevious = () => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 z-10",
        "h-10 w-10 rounded-full",
        "bg-white/80 backdrop-blur-sm border border-gray-300",
        "text-black",
        "shadow-md hover:shadow-lg",
        "transition-all duration-300",
        "disabled:opacity-30 disabled:cursor-not-allowed",
        "hover:bg-white hover:scale-110",
        "active:scale-95",
        "md:hidden",
      )}
      aria-label="Previous slide"
    >
      <ArrowLeft className="h-5 w-5 mx-auto" />
    </button>
  );
};

const MobileCarouselNext = () => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 z-10",
        "h-10 w-10 rounded-full",
        "bg-white/80 backdrop-blur-sm border border-gray-300",
        "text-black",
        "shadow-md hover:shadow-lg",
        "transition-all duration-300",
        "disabled:opacity-30 disabled:cursor-not-allowed",
        "hover:bg-white hover:scale-110",
        "active:scale-95",
        "md:hidden",
      )}
      aria-label="Next slide"
    >
      <ArrowRight className="h-5 w-5 mx-auto" />
    </button>
  );
};

const Details = () => {
  const [craftsmanshipRef, craftsmanshipInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [interiorRef, interiorInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useIsMobile();

  const craftsmanshipImages = [
    { src: craft3, alt: "Elegant black walnut wood finish detail" },
    { src: craft5, alt: "Professional bar setup with bottle display" },
    { src: maisondubar0062, alt: "Maison du Bar craftsmanship detail" },
    { src: craft4, alt: "Precision craftsmanship design detail" },
    { src: details1, alt: "Craftsmanship detail view 1" },
    { src: details2, alt: "Craftsmanship detail view 2" },
  ];

  const interiorImages = [
    { src: details3, alt: "Bar interior elegant lighting" },
    { src: details4, alt: "Luxury bar surface details" },
    { src: details5, alt: "Premium material finishes" },
    { src: details6, alt: "Sophisticated storage design" },
    { src: details7, alt: "Refined interior craftsmanship" },
    { src: details8, alt: "Exquisite wood grain patterns" },
    { src: details9, alt: "Signature interior elements" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-16 sm:py-20"
        >
          <h1 className="font-chamberi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            Discover the Details
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Every element tells a story of craftsmanship and elegance
          </p>
        </motion.div>
      </section>

      {/* Section 1: Craftsmanship Up Close */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black">
            Craftsmanship Up Close
          </h2>
          <p className="text-center font-sans text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore the exquisite details that make our bar truly exceptional
          </p>

          {!isMobile ? (
            // Desktop: 2x2 Grid Layout
            <motion.div
              ref={craftsmanshipRef}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {craftsmanshipImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={craftsmanshipInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square bg-gray-100 rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Mobile: Horizontal Carousel
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {craftsmanshipImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square bg-gray-100 rounded-lg border border-gray-200 shadow-md overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-bottom md:object-center"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <MobileCarouselPrevious />
              <MobileCarouselNext />
            </Carousel>
          )}
        </div>
      </section>

      {/* Section 2: The Interior */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black">
            The Interior
          </h2>
          <p className="text-center font-sans text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the elegant interior details of our signature bar
          </p>

          {!isMobile ? (
            <motion.div
              ref={interiorRef}
              className="grid grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {interiorImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={interiorInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square bg-gray-100 rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {interiorImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square bg-gray-100 rounded-lg border border-gray-200 shadow-md overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <MobileCarouselPrevious />
              <MobileCarouselNext />
            </Carousel>
          )}
        </div>
      </section>

      {/* Section 3: The Chiller (Placeholder) */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black">
            The Chiller
          </h2>
          <p className="text-center font-sans text-gray-600 mb-12 max-w-2xl mx-auto">
            Coming soon...
          </p>
          <div className="max-w-4xl mx-auto h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="font-sans text-gray-500 text-lg">Placeholder Section</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Details;
