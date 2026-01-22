import { motion } from "framer-motion";
import logoImage from "@/assets/maison-du-bar-new-logo.jpg";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <motion.img
          src={logoImage}
          alt="Maison du Bar"
          className="h-24 w-auto object-contain"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="mt-6 h-0.5 bg-foreground/20 rounded-full overflow-hidden"
          style={{ width: 120 }}
        >
          <motion.div
            className="h-full bg-foreground"
            animate={{
              x: [-120, 120],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: 60 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageLoader;
