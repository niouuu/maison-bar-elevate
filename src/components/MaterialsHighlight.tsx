import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TreeDeciduous, Sparkles, Lightbulb, Snowflake } from "lucide-react";

interface Material {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
}

const materials: Material[] = [
  {
    icon: TreeDeciduous,
    title: "American Walnut",
    description: "Rich color & natural elegance",
    details: "Premium dark American walnut wood known for its durability, sophisticated grain patterns, and timeless appeal. Each piece is carefully selected for optimal beauty.",
  },
  {
    icon: Sparkles,
    title: "Stainless Steel",
    description: "Hygiene & professional grade",
    details: "Food-grade stainless steel interior ensures the highest hygiene standards. Built for professional bartenders who demand reliability and easy maintenance.",
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description: "Ambiance & customization",
    details: "Integrated LED lighting system illuminates the bar surface and bottle shelves. Adjustable to match any event theme or create the perfect atmosphere.",
  },
  {
    icon: Snowflake,
    title: "Glass Chiller",
    description: "CO₂ technology at -40°C",
    details: "Our exclusive glass chiller uses CO₂ to instantly chill glassware to -40°C, ensuring every cocktail is served at the perfect temperature with a stunning presentation.",
  },
];

const MaterialsHighlight = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Materials
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Every element has been carefully chosen for durability, beauty, and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background p-6 sm:p-8 rounded-lg border-2 border-border hover:border-foreground transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors duration-300">
                    <material.icon className="w-7 h-7 text-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-chamberi text-xl font-bold text-foreground mb-1">
                      {material.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground mb-3">
                      {material.description}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                      {material.details}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsHighlight;
