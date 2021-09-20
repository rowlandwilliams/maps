import { motion } from "framer-motion";
import { Bio } from "./Bio/Bio";
import { Clients } from "./Clients/Clients";
import { Footer } from "./Footer/Footer";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="block mx-auto py-8 h-screen  w-full lg:px-16 xl:w-3/4">
        <Bio />
        <Clients />
        <Footer />
      </div>
    </motion.div>
  );
};
