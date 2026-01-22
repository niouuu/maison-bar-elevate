import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SectionNavigation from "@/components/SectionNavigation";
import ImageLightbox from "@/components/ImageLightbox";
import CarouselDots from "@/components/CarouselDots";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

// Import chiller images
import chiller1 from "@/assets/chiller_1.jpg";
import chiller2 from "@/assets/chiller_2.jpg";
import chiller3 from "@/assets/chiller3.jpg";
import chiller4 from "@/assets/chiller4.jpg";
import chiller5 from "@/assets/chiller5.jpg";

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
        "text-foreground",
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
        "text-foreground",
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

const sections = [
  { id: "craftsmanship", label: "The Wood" },
  { id: "interior", label: "The Interior" },
  { id: "chiller", label: "The Chiller" },
];

const Details = () => {
  const [craftsmanshipRef, craftsmanshipInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [interiorRef, interiorInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [chillerRef, chillerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useIsMobile();

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Parallax refs
  const craftsmanshipSectionRef = useRef<HTMLElement>(null);
  const interiorSectionRef = useRef<HTMLElement>(null);
  const chillerSectionRef = useRef<HTMLElement>(null);

  // Parallax scroll effects
  const { scrollYProgress: craftProgress } = useScroll({
    target: craftsmanshipSectionRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: interiorProgress } = useScroll({
    target: interiorSectionRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: chillerProgress } = useScroll({
    target: chillerSectionRef,
    offset: ["start end", "end start"],
  });

  const craftTitleY = useTransform(craftProgress, [0, 1], [30, -30]);
  const interiorTitleY = useTransform(interiorProgress, [0, 1], [30, -30]);
  const chillerTitleY = useTransform(chillerProgress, [0, 1], [30, -30]);

  const openLightbox = (images: { src: string; alt: string }[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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

  const chillerImages = [
    { src: chiller1, alt: "Premium chiller unit front view" },
    { src: chiller2, alt: "Chiller interior storage design" },
    { src: chiller3, alt: "Temperature-controlled compartment" },
    { src: chiller4, alt: "Elegant chiller finish detail" },
    { src: chiller5, alt: "Chiller integrated with bar design" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-16 sm:py-20"
        >
          <h1 className="font-chamberi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Discover the Details
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Every element tells a story of craftsmanship and elegance
          </p>
        </motion.div>
      </section>

      {/* Section Navigation */}
      <SectionNavigation sections={sections} />

      {/* Section 1: Craftsmanship Up Close */}
      <section
        id="craftsmanship"
        ref={craftsmanshipSectionRef}
        className="py-16 sm:py-20 lg:py-32 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            style={{ y: craftTitleY }}
            className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
          >
            Craftsmanship Up Close
          </motion.h2>
          <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            The wood is made from dark American walnut, known for its rich color, durability, and natural elegance.
          </p>

          {!isMobile ? (
            // Desktop: 2x3 Grid Layout
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
                  className="aspect-square bg-muted rounded-lg border border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(craftsmanshipImages, index)}
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
                    <div
                      className="aspect-square bg-muted rounded-lg border border-border shadow-md overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(craftsmanshipImages, index)}
                    >
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
              <CarouselDots totalSlides={craftsmanshipImages.length} />
            </Carousel>
          )}
        </div>
      </section>

      {/* Section 2: The Interior */}
      <section
        id="interior"
        ref={interiorSectionRef}
        className="py-16 sm:py-20 lg:py-32 bg-muted"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            style={{ y: interiorTitleY }}
            className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
          >
            The Interior
          </motion.h2>
          <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            The bar is internally constructed from stainless steel. All details are fully custom-made, and every product has been carefully selected with great attention to detail to ensure the highest quality and a refined final result.
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
                  className="aspect-square bg-muted rounded-lg border border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(interiorImages, index)}
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
                    <div
                      className="aspect-square bg-muted rounded-lg border border-border shadow-md overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(interiorImages, index)}
                    >
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
              <CarouselDots totalSlides={interiorImages.length} />
            </Carousel>
          )}
        </div>
      </section>

      {/* Section 3: The Chiller */}
      <section
        id="chiller"
        ref={chillerSectionRef}
        className="py-16 sm:py-20 lg:py-32 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            style={{ y: chillerTitleY }}
            className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
          >
            The Chiller
          </motion.h2>
          <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Our exclusive glass chiller uses CO₂ to instantly chill glassware to -40°C, ensuring every cocktail and long drink is served perfectly chilled and beautifully presented.
          </p>

          {!isMobile ? (
            <motion.div
              ref={chillerRef}
              className="grid grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {chillerImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={chillerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square bg-muted rounded-lg border border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(chillerImages, index)}
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
                {chillerImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div
                      className="aspect-square bg-muted rounded-lg border border-border shadow-md overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(chillerImages, index)}
                    >
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
              <CarouselDots totalSlides={chillerImages.length} />
            </Carousel>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Bring the Maison du Bar experience to your next event. Every detail crafted to perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/the-bar">
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg"
              >
                View The Bar
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      <Footer />
    </div>
  );
};

export default Details;
