import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Gem, Boxes, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import stationDeusImage from "@/assets/Maison_du_Bar_0085.jpg";
import stationDeusImageMobile from "@/assets/Maison_du_Bar_0090.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import frontView from "@/assets/Maison_du_Bar_0085.jpg";
import topView from "@/assets/Maison_du_Bar_0038.jpg";
import dimensionsView from "@/assets/dimension_bar.png";

const TheBar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useIsMobile();
  const [selectedOption, setSelectedOption] = useState("option1");

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
      subtitle: "1 Bartender Setup",
      images: [
        { label: "Front View", src: frontView },
        { label: "Top View", src: topView },
        { label: "Dimensions", src: dimensionsView },
      ],
    },
    {
      id: "option2",
      title: "Option 2",
      subtitle: "2 Bartender Setup",
      images: [
        { label: "Front View", src: frontView },
        { label: "Top View", src: topView },
        { label: "Dimensions", src: dimensionsView },
      ],
    },
    {
      id: "option3",
      title: "Option 3",
      subtitle: "3 Bartender Setup",
      images: [
        { label: "Front View", src: frontView },
        { label: "Top View", src: topView },
        { label: "Dimensions", src: dimensionsView },
      ],
    },
    {
      id: "option4",
      title: "Option 4",
      subtitle: "4 Bartender Setup",
      images: [
        { label: "Front View", src: frontView },
        { label: "Top View", src: topView },
        { label: "Dimensions", src: dimensionsView },
      ],
    },
    {
      id: "option5",
      title: "Option 5",
      subtitle: "4 Bartender Setup",
      images: [
        { label: "Front View", src: frontView },
        { label: "Top View", src: topView },
        { label: "Dimensions", src: dimensionsView },
      ],
    },
    {
      id: "option6",
      title: "Option 6",
      subtitle: "4 Bartender Setup",
      images: [
        { label: "Front View", src: frontView },
        { label: "Top View", src: topView },
        { label: "Dimensions", src: dimensionsView },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
          <div className="absolute inset-0 bg-black/50" />
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

      {/* Description Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-black">
              Portable Luxury, Seamless Design
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Our mobile bar is more than just a setup – it’s a statement piece that transforms any location into a
              refined cocktail destination. Designed with both aesthetics and functionality in mind, it combines elegant
              finishes, professional equipment, and a modular structure that adapts effortlessly to any venue.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Every detail has been considered: from compact storage that fits into travel cases, to sleek surfaces and
              integrated systems that ensure fast assembly, efficient service, and a flawless presentation. The result
              is a bar that delivers luxury and performance, wherever your event takes place.
            </p>

            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Crafted from American dark walnut wood and featuring interior details made of stainless steel, the bar
              embodies both durability and sophistication. It is fully mobile, easily transportable, and can adapt to
              any type of event imaginable — from private gatherings and corporate functions to complete indoor
              installations. A fully functional bar, it includes every feature you would expect from a world-class
              professional setup.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 lg:mb-20 text-black">
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center border-2 border-black rounded-full group-hover:bg-black transition-all duration-300">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-chamberi text-xl sm:text-2xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Bar Configuration Options */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black">
            Modular Bar Configurations
          </h2>
          <p className="text-center font-sans text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the perfect setup for your event
          </p>

          {!isMobile ? (
            // Desktop: Tabs Layout
            <Tabs value={selectedOption} onValueChange={setSelectedOption} className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100 p-1 rounded-lg h-auto">
                {barOptions.map((option) => (
                  <TabsTrigger
                    key={option.id}
                    value={option.id}
                    className="font-chamberi text-base sm:text-lg py-3 data-[state=active]:bg-black data-[state=active]:text-white rounded-md transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="font-bold">{option.title}</div>
                      <div className="text-xs sm:text-sm font-sans opacity-80">{option.subtitle}</div>
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {option.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="aspect-[4/3] bg-gray-100 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group relative"
                      >
                        <img src={image.src} alt={image.label} className="w-full h-full object-cover" />
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
                    <h3 className="font-chamberi text-2xl font-bold text-black">{option.title}</h3>
                    <p className="font-sans text-gray-600 text-sm">{option.subtitle}</p>
                  </div>

                  <Carousel className="w-full max-w-sm mx-auto">
                    <CarouselContent>
                      {option.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div className="aspect-[4/3] bg-gray-100 rounded-lg border border-gray-200 shadow-md overflow-hidden relative">
                            <img src={image.src} alt={image.label} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3">
                              <p className="font-chamberi text-base font-bold text-white text-center">{image.label}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Our Signature Bar Today
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform your event with our stunning portable bar. Contact us to discuss availability and packages.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="elegant-inverted"
                className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheBar;
