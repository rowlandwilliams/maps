import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { NameHeader } from "./NameHeader/NameHeader";
import Voronoi from "./Voronoi/Voronoi";

export const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex md:flex-col justify-between items-center">
        <Link to="/" className="flex md:flex-col items-center">
          <Voronoi />
          <NameHeader />
        </Link>
        <Menu />
      </div>
    </motion.div>
  );
};
