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
        "Choose what cocktails will be served, how many you'd like and even create a fully personalized cocktail list. Whether you prefer timeless classics or specially crafted signature cocktails, everything is possible.",
    },
    {
      title: "Bar Setup",
      description:
        "Customize the bar layout and decide which type of bar will be used. Choose from different setup styles to match the vibe of your event.",
    },
    {
      title: "Drinks & Beverages",
      description:
        "Fully customize your selection. Choose from a wide range of spirits, wines, beers and soft drinks to best suit your preferences.",
    },
    {
      title: "Details & Extras",
      description:
        "From the type of ice and glassware to every finishing touch, everything can be designed exactly the way you imagine.",
    },
  ];

  const servicePackages = [
    {
      title: "Standard Pack",
      summary: [
        { title: "Full open bar with plain drinks", detail: "Alcoholic spirits, beverages, wines, beers, water" },
        { title: "Welcome drinks (Optional)", detail: "Prosecco or homemade lemonade with flavors" },
        { title: "Dinner beverages (Optional)", detail: "Wine, water & soft drinks" },
        { title: "4 Classic cocktails of your choice" },
        { title: "Full mobile bar setup" },
        { title: "All necessary equipment", detail: "for the selected cocktails and long drinks" },
        {
          title: "Professional bartenders and barbacks",
          detail: "with years of hands - on work in hospitality industry",
        },
        { title: "Regular ice, crushed ice" },
        { title: "Glass Chiller" },
        { title: "Glassware" },
      ],
      categories: [
        {
          title: "Spirits",
          items: [
            { name: "Smirnoff Vodka" },
            { name: "Tanqueray Gin" },
            { name: "Havana Club Anejo 3 Años Rum" },
            { name: "El Jimador Blanco Tequila" },
            { name: "El Jimador Reposado Tequila" },
            { name: "Johnnie Walker Red Scotch Whiskey" },
            { name: "Jameson Irish Whiskey" },
            { name: "Aperol" },
            { name: "Campari bitter" },
            { name: "Mastiha Greek spirit" },
          ],
        },
        {
          title: "Wines",
          items: [
            { name: "Paraga Kyr Gianni Estate White Dry Wine", detail: "Malagouzia, Roditis" },
            { name: "Paraga Kyr Gianni Estate Rose Medium Dry Wine", detail: "Xinomavro, Merlot" },
            { name: "Paraga Kyr Gianni Estate Red Dry Wine", detail: "Merlot, Syrah, Xinomavro" },
            { name: "Prosecco", detail: "Miravento" },
          ],
        },
        {
          title: "Beers",
          items: [
            { name: "Peroni Nastro Azzurro Beer" },
            { name: "Peroni Nastro Azzurro Beer", detail: "non alcoholic" },
          ],
        },
        {
          title: "Cocktails",
          items: [
            { name: "Pornstar martini" },
            { name: "Paloma" },
            { name: "Negroni" },
            { name: "Aperol spritz" },
          ],
        },
        {
          title: "Beverages",
          items: [
            { name: "Soda water" },
            { name: "Grapefruit soda" },
            { name: "Tonic" },
            { name: "Coca cola" },
            { name: "Coca cola zero" },
            { name: "Sprite" },
            { name: "Lemon juice" },
            { name: "Cranberry juice" },
            { name: "Orange juice" },
          ],
        },
        { title: "Water", items: [{ name: "Still water" }, { name: "Sparkling water" }] },
      ],
    },
    {
      title: "Premium Pack",
      premium: true,
      summary: [
        {
          title: "Full open bar with plain and premium drinks",
          detail: "Alcoholic spirits, beverages, wines, beers, water",
        },
        { title: "Welcome drinks (Optional)", detail: "Prosecco or homemade lemonade with flavors" },
        { title: "Dinner beverages (Optional)", detail: "Wine, water & soft drinks" },
        { title: "4 Classic and signature cocktails of your choice" },
        { title: "Full mobile bar setup" },
        { title: "All necessary equipment", detail: "for the selected cocktails and long drinks" },
        {
          title: "Professional bartenders and barbacks",
          detail: "with years of hands - on work in hospitality industry",
        },
        { title: "Regular ice, ice cubes, crushed ice" },
        { title: "Glass Chiller" },
        { title: "Glassware" },
      ],
      categories: [
        {
          title: "Spirits",
          items: [
            { name: "Belvedere Vodka" },
            { name: "Hendricks Gin" },
            { name: "Havana Club Anejo Reserva 3 Años Rum" },
            { name: "Casamigos Blanco Tequila" },
            { name: "Casamigos Reposado Tequila" },
            { name: "Johnnie Walker Black Scotch Whiskey" },
            { name: "Jameson Irish Whiskey" },
            { name: "Aperol" },
            { name: "Campari bitter" },
            { name: "Mastiha Greek spirit" },
          ],
        },
        {
          title: "Wines",
          items: [
            { name: "Alpha Estate White Dry Wine", detail: "Sauvignon Blanc" },
            { name: "Alpha Estate Rose Dry Wine", detail: "Xinomavro" },
            { name: "Alpha Estate Red Dry Wine", detail: "Merlot, Xinomavro, Syrah" },
            { name: "Prosecco", detail: "Miravento" },
          ],
        },
        {
          title: "Beers",
          items: [
            { name: "Peroni Nastro Azzurro Beer" },
            { name: "Peroni Nastro Azzurro Beer", detail: "non alcoholic" },
          ],
        },
        {
          title: "Cocktails",
          items: [
            { name: "Pornstar martini with white chocolate foam" },
            { name: "Spicy Paloma with pepper mix" },
            { name: "Negroni infused with peaches" },
            { name: "Aperol spritz infused with berrie mix" },
          ],
        },
        {
          title: "Beverages",
          items: [
            { name: "Soda water" },
            { name: "Grapefruit soda" },
            { name: "Ginger beer" },
            { name: "Tonic" },
            { name: "Coca cola" },
            { name: "Coca cola zero" },
            { name: "Sprite" },
            { name: "Lemon juice" },
            { name: "Cranberry juice" },
            { name: "Orange juice" },
          ],
        },
        { title: "Water", items: [{ name: "Still water" }, { name: "Sparkling water" }] },
      ],
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

      {/* Our Cocktails Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-chamberi text-4xl sm:text-5xl md:text-6xl font-bold text-black uppercase">
              Our Cocktails
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-2 font-sans text-[11px] sm:text-xs uppercase tracking-widest text-gray-500">
              <span>Crafted for your event</span>
              <span aria-hidden="true" className="h-px w-10 bg-gray-300" />
              <span>Made to be remembered</span>
            </div>

            <div className="mt-10 space-y-6 font-sans text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
              <p>Our cocktail selection is designed to complement the style and atmosphere of each event.</p>
              <p>
                Depending on the selected package, guests can enjoy a selection of classic cocktails, while our
                upgraded packages also include signature cocktails created by Maison Du Bar.
              </p>
              <p>
                Cocktail selections can be customized according to your preferences and the style of your event.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              <div>
                <h3 className="font-chamberi text-2xl sm:text-3xl font-bold text-black uppercase">Classic Cocktails</h3>
                <span aria-hidden="true" className="mt-3 block h-0.5 w-12 bg-black" />
                <p className="mt-6 font-sans text-base text-gray-600 leading-relaxed max-w-md">
                  Timeless favourites, carefully prepared by our bar team. Selected classics are pre-batched to
                  ensure perfect balance, consistency and quality in every serve.
                </p>
              </div>
              <div>
                <h3 className="font-chamberi text-2xl sm:text-3xl font-bold text-black uppercase">
                  Signature Cocktails
                </h3>
                <span aria-hidden="true" className="mt-3 block h-0.5 w-12 bg-black" />
                <p className="mt-6 font-sans text-base text-gray-600 leading-relaxed max-w-md">
                  Unique Maison Du Bar creations combining premium ingredients, homemade elements and modern
                  techniques.
                </p>
              </div>
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
                  summary={pkg.summary}
                  categories={pkg.categories}
                  premium={pkg.premium}
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
