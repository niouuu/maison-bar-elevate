import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle2 } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";
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
      description:
        "Our StationDeus bar is fully portable yet maintains the elegance of a premium cocktail lounge.",
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
      description:
        "We source only the finest spirits, liqueurs, and ingredients to craft exceptional cocktails.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-6 text-primary-foreground">
            About Maison du Bar
          </h1>
          <p className="text-xl text-center text-primary-foreground/80 max-w-3xl mx-auto">
            Redefining mobile bar services with elegance, expertise, and exceptional experiences.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold mb-8 text-secondary-foreground">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Maison du Bar was born from a simple vision: to bring the sophistication
              and craft of premium cocktail bars to any location. We recognized that
              exceptional events deserve exceptional bar service, but traditional mobile
              bars often compromised on quality or aesthetics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our difference lies in our fully portable luxury bar, the StationDeus,
              which can adapt to any event space with ease. Whether you're hosting an
              outdoor garden wedding, a rooftop corporate event, or an intimate private
              celebration, we deliver the same level of sophistication you'd expect from
              the finest cocktail establishments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6 text-primary-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
                At Maison du Bar, we're committed to providing premium bar experiences
                that elevate every occasion. Our mission is to craft unique cocktail
                moments that your guests will remember long after the event ends.
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                We believe that great drinks are more than just beverages – they're
                conversation starters, memory makers, and essential elements of any
                celebration. That's why we pour our expertise, passion, and attention
                to detail into every cocktail we serve.
              </p>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Professional bartenders at work"
                className="rounded-lg shadow-2xl grayscale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary" ref={ref}>
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-16 text-secondary-foreground">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold mb-3 text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About;
