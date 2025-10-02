import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats: Stat[] = [
    { label: "Events Completed", value: 500, suffix: "+" },
    { label: "Happy Clients", value: 350, suffix: "+" },
    { label: "Cocktails Served", value: 50000, suffix: "+" },
    { label: "Years Experience", value: 8, suffix: "" },
  ];

  return (
    <section className="py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              inView={inView}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({
  stat,
  inView,
  delay,
}: {
  stat: Stat;
  inView: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-playfair text-5xl md:text-6xl font-bold text-accent mb-2">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-primary-foreground/80 text-sm md:text-base">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default Statistics;
