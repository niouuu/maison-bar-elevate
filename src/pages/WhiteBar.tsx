import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import whiteBarDesktopFallback from "@/assets/white1.jpeg";
import whiteBarMobileFallback from "@/assets/white3.png";
import whiteBarDesktop960 from "@/assets/white-bar/white-bar-desktop-960.webp";
import whiteBarDesktop1440 from "@/assets/white-bar/white-bar-desktop-1440.webp";
import whiteBarDesktop1920 from "@/assets/white-bar/white-bar-desktop-1920.webp";
import whiteBarMobile640 from "@/assets/white-bar/white-bar-mobile-640.webp";
import whiteBarMobile960 from "@/assets/white-bar/white-bar-mobile-960.webp";
import whiteBarMobile1122 from "@/assets/white-bar/white-bar-mobile-1122.webp";
import stoneLeft480 from "@/assets/white-bar/white-stone-left-480.webp";
import stoneLeft720 from "@/assets/white-bar/white-stone-left-720.webp";
import stoneLeft960 from "@/assets/white-bar/white-stone-left-960.webp";
import stoneLeft1440 from "@/assets/white-bar/white-stone-left-1440.webp";
import stoneLeftFallback from "@/assets/white-bar/white-stone-left-960.jpg";
import stoneRight480 from "@/assets/white-bar/white-stone-right-480.webp";
import stoneRight720 from "@/assets/white-bar/white-stone-right-720.webp";
import stoneRight960 from "@/assets/white-bar/white-stone-right-960.webp";
import stoneRight1440 from "@/assets/white-bar/white-stone-right-1440.webp";
import stoneRightFallback from "@/assets/white-bar/white-stone-right-960.jpg";

const pageTitle = "The White Bar | Maison du Bar";
const pageDescription =
  "Discover The White Bar by Maison du Bar, a refined mobile bar with a clean white stone-effect finish inspired by Cycladic simplicity.";

const WhiteBar = () => {
  const socialImage = `${window.location.origin}${whiteBarDesktop1920}`;
  const pageUrl = `${window.location.origin}/the-bar/white`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={socialImage} />
      </Helmet>

      <Navbar />
      <ScrollToTop />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            media="(min-width: 768px)"
            type="image/webp"
            srcSet={`${whiteBarDesktop960} 960w, ${whiteBarDesktop1440} 1440w, ${whiteBarDesktop1920} 1920w`}
            sizes="100vw"
          />
          <source
            media="(max-width: 767px)"
            type="image/webp"
            srcSet={`${whiteBarMobile640} 640w, ${whiteBarMobile960} 960w, ${whiteBarMobile1122} 1122w`}
            sizes="100vw"
          />
          <source media="(min-width: 768px)" srcSet={whiteBarDesktopFallback} />
          <img
            src={whiteBarMobileFallback}
            alt="White stone-effect Maison du Bar mobile bar in a bright Cycladic setting"
            className="h-full w-full object-cover object-center md:object-[center_65%]"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/35 to-foreground/75" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <h1 className="font-chamberi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-4 sm:mb-6 elegant-text-shadow">
            The White Bar
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-background max-w-3xl mx-auto">
            A clean, minimal finish — where Cycladic simplicity meets our signature craft
          </p>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 lg:py-32 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-12 xl:px-16"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr_1.2fr] lg:gap-12 xl:gap-20 lg:items-center">
            <div className="order-2 lg:order-1">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  type="image/webp"
                  srcSet={`${whiteBarMobile640} 640w, ${whiteBarMobile960} 960w, ${whiteBarMobile1122} 1122w`}
                  sizes="34vw"
                />
                <source media="(min-width: 1024px)" srcSet={whiteBarMobileFallback} />
                <source
                  type="image/webp"
                  srcSet={`${stoneLeft480} 480w, ${stoneLeft720} 720w, ${stoneLeft960} 960w, ${stoneLeft1440} 1440w`}
                  sizes="100vw"
                />
                <img
                  src={stoneLeftFallback}
                  alt="Maison du Bar counter with backlit spirits display against an ivy-covered white wall"
                  className="w-full aspect-[3/4] object-cover object-[center_70%]"
                  loading="lazy"
                />
              </picture>
            </div>

            <div className="order-1 lg:order-2 text-center">
              <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground">
                White Stone Finish
              </h2>
              <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed text-left">
                Our mobile bar can be fully transformed with a white stone-effect finish, offering a clean, minimal and
                sophisticated aesthetic.
              </p>
              <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed text-left mt-6">
                The entire exterior of the bar is dressed with flexible gypsum-based panels featuring a natural stone
                texture, creating the appearance of a solid architectural surface while maintaining the modular
                character of our bar.
              </p>
              <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed text-left mt-6">
                The white finish can cover the entire bar setup, making it an ideal choice for weddings, Cycladic
                settings and events where a bright, elegant and timeless aesthetic is desired.
              </p>
              <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed text-left mt-6">
                The white finish is available across all our modular configurations —{" "}
                <Link
                  to="/the-bar#configurations"
                  className="text-foreground underline decoration-foreground/40 decoration-1 underline-offset-4 hover:decoration-accent hover:decoration-2 transition-all duration-300"
                >
                  see the full range of bar setups
                </Link>
              </p>
            </div>

            <div className="order-3">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${stoneRight480} 480w, ${stoneRight720} 720w, ${stoneRight960} 960w, ${stoneRight1440} 1440w`}
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
                <img
                  src={stoneRightFallback}
                  alt="White stone-effect bar with a walnut counter overlooking the Aegean sea"
                  className="w-full aspect-[3/4] object-cover object-[center_60%]"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </motion.div>
      </section>

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
            <p className="font-sans text-base sm:text-lg md:text-xl text-background/70 mb-12 max-w-2xl mx-auto">
              Transform your event with our stunning portable bar. Contact us to discuss availability and packages.
            </p>
            <Button
              asChild
              size="lg"
              variant="elegant-inverted"
              className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhiteBar;