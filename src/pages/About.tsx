import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle2 } from "lucide-react";
import teamImage from "@/assets/ourmission.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const differentiators = [
    {
      title: "Portable Luxury Bar",
      description: "Our  bar is fully portable yet maintains the elegance of a premium cocktail lounge.",
    },
    {
      title: "Customizable Packages",
      description:
        "From intimate gatherings to large celebrations, we tailor our services to match your vision perfectly.",
    },
    {
      title: "Professional Staff",
      description:
        "Expert bartenders and mixologists with years of experience in luxury hospitality and event services.",
    },
    {
      title: "Premium Spirits",
      description: "We source only the finest spirits, liqueurs, and ingredients to craft exceptional cocktails.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-chamberi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              About Maison du Bar
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Redefining mobile bar services with elegance, expertise, and exceptional experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-black">
              Our Story
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Maison du Bar was born from a simple vision: to bring the sophistication and craft of premium cocktail
              bars to any location. We recognized that exceptional events deserve exceptional bar service, but
              traditional mobile bars often compromised on quality or aesthetics.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
              Our difference lies in our fully portable luxury bar, which can adapt to any event space with ease.
              Whether you're hosting an outdoor garden wedding, a rooftop corporate event, or an intimate private
              celebration, we deliver the same level of sophistication you'd expect from the finest cocktail
              establishments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">Our Mission</h2>
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                At Maison du Bar, we're committed to providing premium bar experiences that elevate every occasion. Our
                mission is to craft unique cocktail moments that your guests will remember long after the event ends.
              </p>
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                We believe that great drinks are more than just beverages – they're conversation starters, memory
                makers, and essential elements of any celebration. That's why we pour our expertise, passion, and
                attention to detail into every cocktail we serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <img
                src={teamImage}
                alt="Professional bartenders preparing luxury cocktails at Maison du Bar event"
                className="rounded-lg shadow-xl grayscale-hover w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 lg:mb-20 text-black">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-6 sm:p-8 rounded-lg border-2 border-gray-200 hover:border-black transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-black flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-chamberi text-xl sm:text-2xl font-semibold mb-3 text-black">{item.title}</h3>
                    <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
