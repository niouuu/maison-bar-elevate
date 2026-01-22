import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MaterialsHighlight from "@/components/MaterialsHighlight";
import ImageLightbox from "@/components/ImageLightbox";
import { Gem, Boxes, PackageCheck, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import stationDeusImage from "@/assets/Maison_du_Bar_0085.jpg";
import stationDeusImageMobile from "@/assets/Maison_du_Bar_0090.jpg";
import dimensionBar from "@/assets/dimension_bar.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useState } from "react";
import topView_op1 from "@/assets/option1.2.jpg";
import frontView_op2 from "@/assets/option2.1.jpg";
import topView_op2 from "@/assets/option2.2.jpg";
import frontView_op3 from "@/assets/option3.1.jpg";
import topView_op3 from "@/assets/option3.2.jpg";
import frontView_op4 from "@/assets/option4.1.jpg";
import topView_op4 from "@/assets/option4.2.jpg";
import frontView_op5 from "@/assets/option5.1.jpg";
import topView_op5 from "@/assets/option5.2.jpg";
import frontView_op6 from "@/assets/option6.1.jpg";
import topView_op6 from "@/assets/option6.3.jpg";
import detail1 from "@/assets/details_5.jpg";
import detail2 from "@/assets/craft2.jpg";
import detail3 from "@/assets/craft3.jpg";
import detail4 from "@/assets/craft4.jpg";
import detail5 from "@/assets/craft5.jpg";
import detail6 from "@/assets/craft6.jpg";
import detail7 from "@/assets/craft7.jpg";
import detail8 from "@/assets/craft8.jpg";
import detail9 from "@/assets/craft9.jpg";

// Event gallery images
import event1 from "@/assets/Maison_du_Bar_0003.jpg";
import event2 from "@/assets/Maison_du_Bar_0007.jpg";
import event3 from "@/assets/Maison_du_Bar_0021.jpg";
import event4 from "@/assets/Maison_du_Bar_0073.jpg";
import event5 from "@/assets/Maison_du_Bar_0076.jpg";
import event6 from "@/assets/Maison_du_Bar_0099.jpg";

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

const TheBar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useIsMobile();
  const [selectedOption, setSelectedOption] = useState("option1");

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: { src: string; alt: string }[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const features = [
    {
      icon: Gem,
      title: "Elegant Design",
      description: "A refined, minimal aesthetic that enhances any event.",
    },
    {
      icon: Boxes,
      title: "Modular Flexibility",
      description: "Adaptable to any space, from intimate gatherings to grand celebrations.",
    },
    {
      icon: PackageCheck,
      title: "Effortless Setup",
      description: "Quick to assemble, discreet to transport, always event-ready.",
    },
  ];

  const barOptions = [
    {
      id: "option1",
      title: "Option 1",
      bartenderSetup: "1 Bartender Setup",
      guestCount: "Guest Capacity: 1-50",
      length: "Bar Surface Length: 1.50 m",
      images: [{ label: "Front View", src: topView_op1 }],
    },
    {
      id: "option2",
      title: "Option 2",
      bartenderSetup: "1 Bartender and 1 Barback Setup",
      guestCount: "Guest Capacity: 1-50",
      length: "Bar Surface Length: 3.20 m",
      images: [
        { label: "Front View", src: frontView_op2 },
        { label: "Top View", src: topView_op2 },
      ],
    },
    {
      id: "option3",
      title: "Option 3",
      bartenderSetup: "1-2 Bartender and 1 Barback Setup",
      guestCount: "Guest Capacity: 50-100",
      length: "Bar Surface Length: 6.20 m",
      images: [
        { label: "Front View", src: frontView_op3 },
        { label: "Top View", src: topView_op3 },
      ],
    },
    {
      id: "option4",
      title: "Option 4",
      bartenderSetup: "2 Bartender and 1-2 Barback Setup",
      guestCount: "Guest Capacity: 50-100",
      length: "Bar Surface Length: 4.70 m",
      images: [
        { label: "Front View", src: frontView_op4 },
        { label: "Top View", src: topView_op4 },
      ],
    },
    {
      id: "option5",
      title: "Option 5",
      bartenderSetup: "2-4 Bartender and 2 Barback Setup",
      guestCount: "Guest Capacity: 100-200",
      length: "Bar Surface Length: 6.00 m",
      images: [
        { label: "Front View", src: frontView_op5 },
        { label: "Top View", src: topView_op5 },
      ],
    },
    {
      id: "option6",
      title: "Option 6",
      bartenderSetup: "2-4 Bartender and 2 Barback Setup",
      guestCount: "Guest Capacity: 100-250",
      length: "Bar Surface Length: 9.40 m",
      images: [
        { label: "Front View", src: frontView_op6 },
        { label: "Top View", src: topView_op6 },
      ],
    },
  ];

  const detailImages = [
    { src: detail1, alt: "Solid walnut countertop close-up view" },
    { src: detail2, alt: "Premium materials and elegant finishes" },
    { src: detail3, alt: "Elegant black walnut wood finish detail" },
    { src: detail4, alt: "Precision craftsmanship design detail" },
    { src: detail5, alt: "Professional bar setup with bottle display" },
    { src: detail6, alt: "Professional quality construction and materials" },
    { src: detail7, alt: "American dark walnut wood grain detail" },
    { src: detail8, alt: "Stainless steel interior detail and fixtures" },
    { src: detail9, alt: "Modular components and built-in LED lighting" },
  ];

  const eventImages = [
    { src: event1, alt: "Elegant bar setup at a beachside wedding" },
    { src: event2, alt: "Corporate event bar service" },
    { src: event3, alt: "Luxury private party bar experience" },
    { src: event4, alt: "Bar service at an island villa celebration" },
    { src: event5, alt: "Professional bartender crafting cocktails" },
    { src: event6, alt: "Evening event with ambient bar lighting" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg-responsive"
          style={
            {
              "--hero-bg-mobile": `url(${stationDeusImageMobile})`,
              "--hero-bg-desktop": `url(${stationDeusImage})`,
            } as React.CSSProperties
          }
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <h1 className="font-chamberi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 elegant-text-shadow">
            Our Signature Bar Experience
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Our signature portable bar – where luxury meets versatility
          </p>
        </motion.div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 sm:py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 lg:mb-20 text-foreground">
            What Makes Maison Du Bar Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto" ref={ref}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center border-2 border-foreground rounded-full group-hover:bg-foreground transition-all duration-300">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-foreground group-hover:text-background transition-colors duration-300" />
                </div>
                <h3 className="font-chamberi text-xl sm:text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Highlight Section */}
      <MaterialsHighlight />

      {/* Gallery Section - Bar Configuration Options */}
      <section className="py-16 sm:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Modular Bar Configurations
          </h2>
          <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the perfect setup for your event
          </p>

          {!isMobile ? (
            // Desktop: Tabs Layout
            <Tabs value={selectedOption} onValueChange={setSelectedOption} className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 bg-muted p-2 rounded-lg h-auto">
                {barOptions.map((option) => (
                  <TabsTrigger
                    key={option.id}
                    value={option.id}
                    className="font-chamberi text-base sm:text-lg py-3 data-[state=active]:bg-foreground data-[state=active]:text-background rounded-md transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="font-bold">{option.title}</div>
                      <div className="text-xs sm:text-sm font-sans opacity-80">{option.bartenderSetup}</div>
                      <div className="text-xs sm:text-sm font-sans opacity-80">{option.guestCount}</div>
                      <div className="text-xs sm:text-sm font-sans opacity-80">{option.length}</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {barOptions.map((option) => (
                <TabsContent key={option.id} value={option.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`grid gap-6 max-w-5xl mx-auto justify-items-center place-items-center ${
                      option.images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
                    }`}
                  >
                    {option.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="aspect-[4/3] bg-muted rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group relative w-full max-w-2xl"
                      >
                        <img
                          src={image.src}
                          alt={image.label}
                          className="w-full h-full object-cover object-bottom md:object-center"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3">
                          <p className="font-chamberi text-base font-bold text-white text-center">{image.label}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            // Mobile: Carousel Layout with Options
            <div className="space-y-8">
              {barOptions.map((option) => (
                <div key={option.id} className="space-y-4">
                  <div className="text-center">
                    <h3 className="font-chamberi text-2xl font-bold text-foreground">{option.title}</h3>
                    <p className="font-sans text-muted-foreground text-sm">{option.bartenderSetup}</p>
                    <p className="font-sans text-muted-foreground text-sm">{option.guestCount}</p>
                    <p className="font-sans text-muted-foreground text-sm">{option.length}</p>
                  </div>

                  <Carousel className="w-full max-w-sm mx-auto">
                    <CarouselContent>
                      {option.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div className="aspect-[4/3] bg-muted rounded-lg border border-border shadow-md overflow-hidden relative">
                            <img
                              src={image.src}
                              alt={image.label}
                              className="w-full h-full object-cover object-bottom md:object-center"
                              loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3">
                              <p className="font-chamberi text-base font-bold text-white text-center">{image.label}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <MobileCarouselPrevious />
                    <MobileCarouselNext />
                  </Carousel>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Dimensions Infographic */}
      <section className="py-16 sm:py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Bar Dimensions
          </h2>
          <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technical specifications for event planning
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src={dimensionBar}
              alt="Bar dimensions technical drawing"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground">
              Portable Luxury, Seamless Design
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Our mobile bar is more than just a setup – it's a statement piece that transforms any location into a
              refined cocktail destination. Designed with both aesthetics and functionality in mind, it combines elegant
              finishes, professional equipment and a modular structure that adapts effortlessly to any venue.
            </p>
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Every detail has been considered: from compact storage that fits into travel cases, to sleek surfaces and
              integrated systems that ensure fast assembly, efficient service and a flawless presentation. The result is
              a bar that delivers luxury and performance, wherever your event takes place.
            </p>

            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Crafted from American dark walnut wood and featuring interior details made of stainless steel, the bar
              embodies both durability and sophistication. It is fully mobile, easily transportable and can adapt to any
              type of event imaginable — from private gatherings and corporate functions to complete indoor
              installations.
            </p>

            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              It also includes built-in LED lighting inside and on the bottle shelves, adding a stylish glow and
              enhancing the overall atmosphere. A fully functional bar, it includes every feature you would expect from
              a world-class professional setup.
            </p>
          </div>
        </div>
      </section>

      {/* See It In Action - Event Gallery */}
      <section className="py-16 sm:py-20 lg:py-32 bg-muted" ref={galleryRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            See It In Action
          </h2>
          <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto">
            From beachside weddings to rooftop celebrations, our bar adapts to any setting
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {eventImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(eventImages, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Reserve Our Signature Bar Experience
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transform your event with our stunning portable bar. Contact us to discuss availability and packages.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="elegant-inverted"
                className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
      />

      <Footer />
    </div>
  );
};

export default TheBar;
