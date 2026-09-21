import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ImageLightbox from "@/components/ImageLightbox";
import CarouselDots from "@/components/CarouselDots";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import cocktails1 from "@/assets/cocktails1.jpg";
import cocktails2 from "@/assets/cocktails2.jpg";
import cocktails3 from "@/assets/cocktails3.jpg";
import cocktails4 from "@/assets/cocktails4.jpg";
import cocktails5 from "@/assets/cocktails5.jpeg";
import cocktails6 from "@/assets/cocktails6.jpeg";
import cocktails7 from "@/assets/cocktails7.jpg";
import cocktails8 from "@/assets/cocktails8.jpeg";
import cocktails9 from "@/assets/cocktails9.jpeg";
import cocktails10 from "@/assets/cocktails10.png";
import cocktails11 from "@/assets/cocktails11.jpeg";
import cocktails12 from "@/assets/cocktails12.png";
import cocktails13 from "@/assets/cocktails13.jpeg";
import cocktails14 from "@/assets/cocktails14.jpg";

interface CocktailImage {
  src: string;
  alt: string;
}

export const classicImages: CocktailImage[] = [
  { src: cocktails1, alt: "Classic cocktail presented with a refined garnish" },
  { src: cocktails2, alt: "Freshly prepared classic cocktail at the Maison du Bar counter" },
  { src: cocktails3, alt: "Elegant classic cocktail served over ice" },
  { src: cocktails4, alt: "Balanced classic cocktail with a citrus garnish" },
  { src: cocktails5, alt: "Classic cocktail prepared for an elegant event" },
  { src: cocktails6, alt: "Premium classic cocktail in delicate glassware" },
  { src: cocktails7, alt: "Maison du Bar classic cocktail presentation" },
];

export const signatureImages: CocktailImage[] = [
  { src: cocktails8, alt: "Maison du Bar signature cocktail with a distinctive garnish" },
  { src: cocktails9, alt: "Creative signature cocktail made with premium ingredients" },
  { src: cocktails10, alt: "Modern signature cocktail in elegant glassware" },
  { src: cocktails11, alt: "Handcrafted signature cocktail for a private event" },
  { src: cocktails12, alt: "Contemporary Maison du Bar cocktail creation" },
  { src: cocktails13, alt: "Signature cocktail featuring homemade elements" },
  { src: cocktails14, alt: "Refined signature cocktail ready to be served" },
];

const MobileCarouselPrevious = () => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className="absolute left-3 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border-border bg-background/95 text-foreground shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-background hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-20 md:hidden"
      aria-label="Previous cocktail"
    >
      <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
    </Button>
  );
};

const MobileCarouselNext = () => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className="absolute right-3 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border-border bg-background/95 text-foreground shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-background hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-20 md:hidden"
      aria-label="Next cocktail"
    >
      <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
    </Button>
  );
};

interface CocktailGalleryProps {
  images: CocktailImage[];
  onOpen: (images: CocktailImage[], index: number) => void;
}

const CocktailGallery = ({ images, onOpen }: CocktailGalleryProps) => {
  const isMobile = useIsMobile();
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (isMobile) {
    return (
      <Carousel className="mx-auto w-full max-w-md">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.src}>
              <div className="aspect-square touch-pan-x overflow-hidden bg-muted shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full cursor-pointer object-cover"
                  loading="lazy"
                  onClick={() => onOpen(images, index)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <MobileCarouselPrevious />
        <MobileCarouselNext />
        <CarouselDots totalSlides={images.length} />
      </Carousel>
    );
  }

  return (
    <motion.div ref={galleryRef} className="mx-auto grid max-w-5xl grid-cols-3 gap-8">
      {images.map((image, index) => (
        <motion.button
          type="button"
          key={image.src}
          initial={{ opacity: 0, y: 30 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
          className="group aspect-square cursor-pointer overflow-hidden bg-muted shadow-sm transition-all duration-500 hover:shadow-xl"
          onClick={() => onOpen(images, index)}
          aria-label={`Open ${image.alt}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-95"
            loading="lazy"
          />
        </motion.button>
      ))}
    </motion.div>
  );
};

const pageTitle = "Cocktails | Maison du Bar";
const pageDescription =
  "Explore classic cocktails and signature Maison du Bar creations, crafted with premium ingredients for unforgettable events.";

const Cocktails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<CocktailImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const pageUrl = "https://maison-bar-elevate.lovable.app/cocktails";
  const socialImage = `${window.location.origin}${cocktails1}`;

  const openLightbox = (images: CocktailImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={socialImage} />
      </Helmet>

      <Navbar />
      <ScrollToTop />

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cocktails1})` }}
          role="img"
          aria-label="Maison du Bar cocktail selection"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8"
        >
          <div className="mx-auto mb-8 h-px w-16 bg-background/40" />
          <h1 className="elegant-text-shadow mb-6 font-chamberi text-4xl font-bold text-background sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Our Cocktails
          </h1>
          <p className="mx-auto max-w-3xl font-sans text-lg text-background/80 sm:text-xl md:text-2xl">
            Crafted for your event — made to be remembered
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-background/40" />
        </motion.div>
      </section>

      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-3xl space-y-6 px-4 text-center font-sans text-base leading-relaxed text-muted-foreground sm:px-6 sm:text-lg lg:px-8"
        >
          <p>Our cocktail selection is designed to complement the style and atmosphere of each event.</p>
          <p>
            Depending on the selected package, guests can enjoy a selection of classic cocktails, while our upgraded
            packages also include signature cocktails created by Maison du Bar.
          </p>
          <p>
            Cocktail selections can be customized according to your preferences and the style of your event.
          </p>
        </motion.div>
      </section>

      <section className="bg-muted py-20 sm:py-24 lg:py-40">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-16"
          >
            <h2 className="font-chamberi text-3xl uppercase text-foreground sm:text-4xl md:text-5xl">
              Classic Cocktails
            </h2>
            <div className="mt-5 h-px w-full bg-menu-rule" />
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              Timeless favourites, carefully prepared by our bar team. Selected classics are pre-batched to ensure
              perfect balance, consistency and quality in every serve.
            </p>
          </motion.div>
          <CocktailGallery images={classicImages} onOpen={openLightbox} />
        </div>
      </section>

      <div className="bg-muted px-4 sm:px-6 lg:px-8">
        <div className="mx-auto h-px max-w-6xl bg-border" />
      </div>

      <section className="bg-muted py-20 sm:py-24 lg:py-40">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-16"
          >
            <h2 className="font-chamberi text-3xl uppercase text-foreground sm:text-4xl md:text-5xl">
              Signature Cocktails
            </h2>
            <div className="mt-5 h-px w-full bg-menu-rule" />
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              Unique Maison du Bar creations combining premium ingredients, homemade elements and modern techniques.
            </p>
          </motion.div>
          <CocktailGallery images={signatureImages} onOpen={openLightbox} />
        </div>
      </section>

      <section className="bg-primary py-20 sm:py-24 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="container mx-auto max-w-4xl px-4 text-center"
        >
          <div className="mx-auto mb-8 h-px w-12 bg-primary-foreground/30" />
          <h2 className="mb-10 font-chamberi text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Let's Create Your Cocktail Menu
          </h2>
          <Link to="/contact">
            <Button
              size="lg"
              variant="elegant-inverted"
              className="h-auto w-full px-8 py-4 font-sans text-base font-medium sm:w-auto sm:px-12 sm:py-6 sm:text-lg"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </section>

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

export default Cocktails;