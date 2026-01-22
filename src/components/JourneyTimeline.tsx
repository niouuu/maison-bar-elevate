import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, PartyPopper, Trophy, Star } from "lucide-react";

interface Milestone {
  icon: React.ElementType;
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    icon: Lightbulb,
    year: "The Beginning",
    title: "An Idea Is Born",
    description: "Three friends united by a shared passion for hospitality conceived the vision of Maison du Bar.",
  },
  {
    icon: PartyPopper,
    year: "First Event",
    title: "Making It Real",
    description: "Our first event marked the beginning of bringing luxury bar experiences to life across Greece.",
  },
  {
    icon: Trophy,
    year: "Growing",
    title: "Building Excellence",
    description: "Word spread as we served events from Athens to the Cyclades, establishing our reputation for quality.",
  },
  {
    icon: Star,
    year: "Today",
    title: "The Maison Standard",
    description: "Now recognized as a premier mobile bar service, we continue to elevate every celebration we touch.",
  },
];

const JourneyTimeline = () => {
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
            Our Journey
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            From a conversation between friends to a premier mobile bar service
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-foreground flex items-center justify-center flex-shrink-0 relative z-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <milestone.icon className="w-7 h-7 text-foreground" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-grow lg:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
                    }`}
                  >
                    <p className="font-sans text-sm text-muted-foreground mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-chamberi text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
