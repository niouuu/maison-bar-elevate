import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import ScrollToTop from "@/components/ScrollToTop";

const Services = () => {
  const services = [
    {
      title: "Standard Pack",
      description: "Perfect for intimate gatherings and smaller events",
      features: [
        "Basic bar setup with essential equipment",
        "Selection of standard cocktails and spirits",
        "Professional bartender for up to 4 hours",
        "Basic glassware and bar accessories",
        "Setup and cleanup included",
      ],
      variant: "standard" as const,
    },
    {
      title: "Premium Pack",
      description: "Ideal for weddings and corporate events",
      features: [
        "Everything in Standard Pack",
        "Extended cocktail menu with 15+ signature drinks",
        "Premium spirits and champagne selection",
        "Two professional bartenders",
        "Upgraded glassware and garnish station",
        "Custom menu consultation",
        "6 hours of service",
      ],
      variant: "premium" as const,
    },
    {
      title: "Ultra Premium Pack",
      description: "The ultimate luxury bar experience",
      features: [
        "Everything in Premium Pack",
        "Top-shelf luxury spirits and rare bottles",
        "Bespoke cocktail creation for your event",
        "Branded glassware with your event logo",
        "Three expert mixologists",
        "VIP bar manager and sommelier",
        "8 hours of unlimited service",
        "Post-event cocktail recipe booklet",
      ],
      variant: "ultra" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-primary-foreground">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-primary-foreground/80 max-w-3xl mx-auto px-4">
            Choose the perfect package for your event. Each service is designed to
            deliver an exceptional bar experience tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                variant={service.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-primary-foreground">
              Custom Packages Available
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed mb-6 sm:mb-8 px-4">
              Need something unique? We specialize in creating bespoke bar experiences.
              From themed cocktail menus to specific brand partnerships, we'll work
              with you to design the perfect service for your event.
            </p>
            <p className="text-sm sm:text-base text-primary-foreground/60 italic px-4">
              All packages include setup, service, and cleanup. Additional customizations
              and add-ons available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Services;
