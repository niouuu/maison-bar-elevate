import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServicePackageCard";
import FAQ from "@/components/FAQ";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [customRef, customInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const customFeatures = [
    {
      title: "Cocktails",
      description:
        "Choose what cocktails will be served, how many you'd like, and even create a fully personalized cocktail list. Whether you prefer timeless classics or specially crafted signature cocktails, everything is possible.",
    },
    {
      title: "Bar Setup",
      description:
        "Customize the bar layout and decide which type of bar will be used. Choose from different setup styles to match the vibe of your event.",
    },
    {
      title: "Drinks & Beverages",
      description:
        "Fully customize your selection. Choose from a wide range of spirits, wines, beers, and soft drinks to best suit your preferences.",
    },
    {
      title: "Details & Extras",
      description:
        "From the type of ice and glassware to every finishing touch, everything can be designed exactly the way you imagine.",
    },
  ];

  const servicePackages = [
    {
      title: "🍹 Standard Pack",
      description: "Perfect for intimate gatherings and small events.",
      includes: [
        "Full open bar with plain drinks (alcoholic spirits, beverages, wines, beers)",
        "4 classic cocktails of your choice",
        "Full mobile bar setup",
        "All necessary equipment for the selected cocktails and long drinks",
        "Professional bartenders and barbacks with years of hands - on work in hospitality industry.",
        "Regular ice",
        "Disposable cups",
      ],
      spirits:
        "Smirnoff Vodka; Gordons Gin; Pampero Blanco Rum; Jose Cuervo Blanco Tequila; Plain whiskey of your choice; Plain liqueurs/bitters/aperitifs; Plain beverages; Plain wine of your choice.",
      cocktails: "Margarita, Paloma, Pornstar Martini, Negroni.",
    },
    {
      title: "🍸 Advanced Pack",
      description: "Designed for elevated occasions with premium options.",
      includes: [
        "Full open bar with premium drinks (premium alcoholic spirits, premium beverages, selected origin wines, beers)",
        "5 classic cocktails of your choice",
        "Full mobile bar setup",
        "All necessary equipment for the selected cocktails and long drinks",
        "Professional bartenders and barbacks with years of hands - on work in hospitality industry.",
        "Regular ice",
        "Glassware or disposable cups",
      ],
      spirits:
        "Ketel One Vodka; Tanqueray Gin; Havana Club Añejo 3 Rum; Havana Club Añejo Reserva Rum; El Jimador Blanco & Reposado Tequila; Premium whiskey of your choice; Premium liqueurs/bitters/aperitifs; Premium beverages; selected-origin wines.",
      cocktails: "Margarita, Paloma, Pornstar Martini, Negroni, Dry Martini.",
    },
    {
      title: "🥂 Premium Pack",
      description: "A luxury experience with aged spirits and signature creations.",
      includes: [
        "Full open bar with premium drinks (aged spirits, premium beverages, selected origin and aged wines, champagnes)",
        "4 signature cocktails of your choice",
        "Full mobile bar setup",
        "All necessary equipment for the selected cocktails and long drinks",
        "Professional bartenders and barbacks with years of hands - on work in hospitality industry.",
        "Regular ice & ice cubes",
        "Glassware",
      ],
      spirits:
        "Grey Goose Vodka; Belvedere Vodka; Tanqueray No. Ten; Hendrick's Gin; Ron Zacapa 23 Rum; Don Papa 7 Rum; Diplomático Reserva Exclusiva Rum; Don Julio Blanco & Reposado Tequila; Premium whiskey of your choice; Premium liqueurs/bitters/aperitifs; Premium beverages; selected-origin wines & champagnes.",
      cocktails: "Spicy Pineapple Margarita, Mandarine Paloma, Peachy Negroni, Cherry Mai Tai.",
    },
    {
      title: "🍾 Ultra Premium Pack",
      description: "The ultimate luxury bar experience for unforgettable events.",
      includes: [
        "Full open bar with ultra-premium drinks (well-aged spirits, premium beverages, selected origin and well-aged wines, premium champagnes)",
        "5 signature cocktails of your choice",
        "Full mobile bar setup",
        "All necessary equipment for the selected cocktails and long drinks",
        "Professional bartenders and barbacks with years of hands - on work in hospitality industry.",
        "Regular ice, ice cubes, ice columns",
        "Glassware",
      ],
      spirits:
        "Beluga Vodka (including Beluga Gold Line); Monkey 47; Hendrick's; Roku Gin; Ron Zacapa 23 & XO; Casamigos Blanco, Reposado & Mezcal Tequila; Don Julio 1942 Añejo; Clase Azul Reposado; Ultra-premium whiskey of your choice; Ultra-premium liqueurs/bitters/aperitifs; Premium beverages; Selected origin & well-aged wines; Premium champagnes.",
      cocktails:
        "Basil Mescalita, Spicy Mango Margarita, Strawberry Daiquiri (with white-chocolate foam), Clarified Pornstar Martini, Strawberry & Long-Pepper Negroni.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Custom Design Intro Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="font-chamberi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 sm:mb-12 text-center">
              Exclusively Designed for You, by You
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-12 text-center">
              In addition to our main packages, we also offer the option to create a fully customized bar experience
              crafted entirely to your preferences. This 100% tailored solution allows you to choose every detail —
              guaranteeing a truly personalized experience that reflects your unique taste and style.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {customFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="font-chamberi text-2xl font-bold text-black">{feature.title}</h3>
                  <p className="font-sans text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-12 sm:mb-16"
          >
            Our Service Packages
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <ServiceCard
                  title={pkg.title}
                  description={pkg.description}
                  includes={pkg.includes}
                  spirits={pkg.spirits}
                  cocktails={pkg.cocktails}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-20 sm:py-24 lg:py-40 bg-black text-white">
        <motion.div
          ref={customRef}
          initial={{ opacity: 0, y: 30 }}
          animate={customInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Need Something Unique?
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating custom packages tailored to your exact needs. Let's discuss how we can make your
            vision a reality.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="elegant-inverted"
              className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto font-sans font-medium"
            >
              Request a Quote
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Services;
