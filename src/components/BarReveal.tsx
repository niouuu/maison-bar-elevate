import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import barSurface from "@/assets/craft3.jpg";
import barSetup from "@/assets/Maison_du_Bar_0085.jpg";
import barDetail from "@/assets/details_5.jpg";

const BarReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const layer1Y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [150, -25]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], [50, -75]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 sm:py-40 lg:py-60 bg-background overflow-hidden"
    >
      {/* Background layers with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: layer1Y, opacity }}
          className="absolute -left-20 top-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-lg overflow-hidden opacity-20"
        >
          <img
            src={barSurface}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          style={{ y: layer2Y, opacity }}
          className="absolute -right-20 top-1/3 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-lg overflow-hidden opacity-15"
        >
          <img
            src={barSetup}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          style={{ y: layer3Y, opacity }}
          className="absolute left-1/4 bottom-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-lg overflow-hidden opacity-10"
        >
          <img
            src={barDetail}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-chamberi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            A Bar Unlike Any Other
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8"
          >
            Handcrafted from American dark walnut and stainless steel, our portable bar 
            brings luxury and sophistication to any location. Every detail has been 
            meticulously designed to create an unforgettable experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div>
              <p className="font-chamberi text-4xl sm:text-5xl font-bold text-foreground">500+</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Events Served</p>
            </div>
            <div>
              <p className="font-chamberi text-4xl sm:text-5xl font-bold text-foreground">50k+</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Cocktails Crafted</p>
            </div>
            <div>
              <p className="font-chamberi text-4xl sm:text-5xl font-bold text-foreground">100%</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BarReveal;
