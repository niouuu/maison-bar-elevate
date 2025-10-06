import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  const getCardStyles = () => {
    if (variant === "premium") {
      return "border-2 border-black bg-white shadow-lg relative";
    }
    return "border-2 border-gray-300 bg-white hover:border-black transition-all duration-300";
  };

  return (
    <Card ref={ref} className={`h-full flex flex-col ${getCardStyles()}`}>
      {variant === "premium" && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-black text-white px-4 py-1 font-sans text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      
      <CardHeader className="text-center pb-4 pt-8">
        <CardTitle className="font-chamberi text-2xl sm:text-3xl font-bold text-black mb-2">
          {title}
        </CardTitle>
        <CardDescription className="font-sans text-sm sm:text-base text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <Link to="/contact" className="w-full">
          <Button
            variant={variant === "premium" ? "default" : "outline"}
            className="w-full font-sans font-medium text-base py-6"
          >
            Get a Quote
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
