import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  variant?: "standard" | "premium" | "ultra";
}

const ServiceCard = ({
  title,
  description,
  features,
  variant = "standard",
}: ServiceCardProps) => {
  const bgColor = {
    standard: "bg-secondary",
    premium: "bg-primary",
    ultra: "bg-secondary",
  }[variant];

  const textColor = {
    standard: "text-secondary-foreground",
    premium: "text-primary-foreground",
    ultra: "text-secondary-foreground",
  }[variant];

  const isPremium = variant === "premium";

  return (
    <Card
      className={`${bgColor} ${textColor} border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
    >
      <CardHeader>
        <CardTitle className="font-playfair text-3xl mb-2">
          <span className={isPremium ? "text-accent" : ""}>{title}</span>
        </CardTitle>
        <p className={`text-sm ${isPremium ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className={`${isPremium ? "text-accent" : "text-accent"} flex-shrink-0 mt-0.5`} size={20} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact">
          <Button
            className={`w-full ${
              isPremium
                ? "bg-accent text-accent-foreground hover:bg-accent/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            Get a Quote
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
