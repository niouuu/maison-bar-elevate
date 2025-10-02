import { Check, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  variant?: "standard" | "premium" | "ultra";
}

const ServiceCard = ({ title, description, features, variant = "standard" }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getVariantStyles = () => {
    switch (variant) {
      case "premium":
        return "border-accent bg-card border-2";
      case "ultra":
        return "border-accent bg-accent/5 border-2";
      default:
        return "border-border bg-card";
    }
  };

  const getBackgroundImage = () => {
    switch (variant) {
      case "standard":
        return "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80";
      case "premium":
        return "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80";
      case "ultra":
        return "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <Card className={`${getVariantStyles()} shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden group relative`}>
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          <img
            src={getBackgroundImage()}
            alt={title}
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Popular Badge */}
        {variant === "premium" && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
              <Award className="w-3 h-3" />
              Most Popular
            </div>
          </div>
        )}

        <CardHeader className="relative z-10">
          <CardTitle className="font-playfair text-2xl mb-2 text-card-foreground">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          {variant === "ultra" && (
            <p className="text-accent font-semibold text-sm mt-2">
              Ultimate Luxury Experience
            </p>
          )}
        </CardHeader>
        <CardContent className="flex-grow relative z-10">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <Check className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <span className="text-muted-foreground">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
