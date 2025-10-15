import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface ServicePackageCardProps {
  title: string;
  description: string;
  includes: string[];
  spirits: string;
  cocktails: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServicePackageCard = ({
  title,
  description,
  includes,
  spirits,
  cocktails,
  isExpanded,
  onToggle,
}: ServicePackageCardProps) => {

  return (
    <Card className="h-full bg-white border-2 border-black shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
      <CardContent className="p-6 sm:p-8">
        <div className="space-y-4">
          <h3 className="font-chamberi text-2xl sm:text-3xl font-bold text-black">
            {title}
          </h3>
          <p className="font-sans text-base text-gray-600 leading-relaxed">
            {description}
          </p>

          <Button
            variant="outline"
            onClick={onToggle}
            className="w-full justify-between font-sans font-medium border-2 border-black hover:text-white transition-colors"
          >
            View Details
            {isExpanded ? (
              <ChevronUp className="ml-2 h-5 w-5" />
            ) : (
              <ChevronDown className="ml-2 h-5 w-5" />
            )}
          </Button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-6 border-t border-gray-200">
                  {/* Includes Section */}
                  <div className="space-y-3">
                    <h4 className="font-chamberi text-xl font-bold text-black">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {includes.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 font-sans text-sm text-gray-700"
                        >
                          <Check className="h-5 w-5 text-black shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spirits Section */}
                  <div className="space-y-2">
                    <h4 className="font-chamberi text-lg font-bold text-black">
                      Recommended Spirits:
                    </h4>
                    <p className="font-sans text-sm text-gray-700 leading-relaxed">
                      {spirits}
                    </p>
                  </div>

                  {/* Cocktails Section */}
                  <div className="space-y-2">
                    <h4 className="font-chamberi text-lg font-bold text-black">
                      Recommended Cocktails:
                    </h4>
                    <p className="font-sans text-sm text-gray-700 leading-relaxed">
                      {cocktails}
                    </p>
                  </div>

                  {/* Get Quote Button */}
                  <div className="pt-4">
                    <Link to="/contact" className="block">
                      <Button
                        size="lg"
                        className="w-full bg-black text-white hover:bg-gray-800 font-sans font-medium"
                      >
                        Request a Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicePackageCard;
