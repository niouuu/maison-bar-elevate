import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquare, Users, ClipboardCheck, PartyPopper, Heart } from "lucide-react";

interface TimelineStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    icon: MessageSquare,
    title: "Inquiry",
    description: "Tell us about your event and vision",
  },
  {
    icon: Users,
    title: "Consultation",
    description: "We discuss details and customize your package",
  },
  {
    icon: ClipboardCheck,
    title: "Planning",
    description: "We handle all logistics and preparations",
  },
  {
    icon: PartyPopper,
    title: "Event Day",
    description: "We deliver a flawless bar experience",
  },
  {
    icon: Heart,
    title: "Follow-up",
    description: "Your satisfaction is our priority",
  },
];

const ProcessTimeline = () => {
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
            How It Works
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            From first contact to event day, we ensure a seamless experience
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-border" />
            
            <div className="flex justify-between relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center w-1/5"
                >
                  <div className="w-20 h-20 rounded-full bg-background border-2 border-foreground flex items-center justify-center mb-4 relative z-10">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-chamberi text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 relative"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-foreground flex items-center justify-center flex-shrink-0 relative z-10">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="pt-3">
                    <h3 className="font-chamberi text-lg font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
