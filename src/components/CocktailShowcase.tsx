import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Cocktail {
  name: string;
  description: string;
  tier: string;
  ingredients: string[];
}

const cocktails: Cocktail[] = [
  {
    name: "Clarified Pornstar Martini",
    description: "A crystal-clear, refined take on the classic passion fruit martini",
    tier: "Ultra Premium",
    ingredients: ["Vanilla Vodka", "Passion Fruit", "Lime", "Champagne"],
  },
  {
    name: "Hazelnut Old Fashioned",
    description: "Rich bourbon balanced with nutty hazelnut and aromatic bitters",
    tier: "Premium",
    ingredients: ["Bourbon", "Hazelnut Liqueur", "Angostura Bitters", "Orange"],
  },
  {
    name: "Coffee & Cocoa Negroni",
    description: "A sophisticated twist with espresso and dark chocolate notes",
    tier: "Premium",
    ingredients: ["Gin", "Campari", "Sweet Vermouth", "Coffee", "Cocoa"],
  },
  {
    name: "Spicy Mango Margarita",
    description: "Fresh mango meets chili heat for a perfectly balanced cocktail",
    tier: "Ultra Premium",
    ingredients: ["Tequila", "Triple Sec", "Mango", "Lime", "Chili"],
  },
  {
    name: "Strawberry Daiquiri",
    description: "Frozen perfection topped with chocolate foam",
    tier: "Ultra Premium",
    ingredients: ["Rum", "Strawberry", "Lime", "Chocolate Foam"],
  },
  {
    name: "Basil Mescalita",
    description: "Smoky mezcal meets fresh basil for an herbaceous experience",
    tier: "Ultra Premium",
    ingredients: ["Mezcal", "Basil", "Lime", "Agave"],
  },
];

const CocktailShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-chamberi text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Signature Cocktails
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Expertly crafted cocktails that define the Maison du Bar experience
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {cocktails.map((cocktail, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="bg-card border-2 border-border rounded-lg p-6 h-full flex flex-col hover:border-foreground transition-colors duration-300 group">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-chamberi text-xl font-bold text-card-foreground group-hover:text-foreground transition-colors">
                          {cocktail.name}
                        </h3>
                        <span className="text-xs font-sans font-medium px-2 py-1 bg-muted text-muted-foreground rounded">
                          {cocktail.tier}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-muted-foreground mb-4 flex-grow">
                        {cocktail.description}
                      </p>
                      <div className="pt-4 border-t border-border">
                        <p className="font-sans text-xs text-muted-foreground mb-2">Ingredients</p>
                        <div className="flex flex-wrap gap-1">
                          {cocktail.ingredients.map((ingredient, i) => (
                            <span
                              key={i}
                              className="text-xs font-sans px-2 py-0.5 bg-muted rounded text-foreground"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CocktailShowcase;
