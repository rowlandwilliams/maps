import { Link } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { NameHeader } from "./NameHeader/NameHeader";
import Voronoi from "./Voronoi/Voronoi";

export const NavBar = () => {
  return (
    <div className="w-full flex md:flex-col justify-between items-center">
      <Link to="/" className="flex md:flex-col items-center">
        <Voronoi />
        <NameHeader />
      </Link>
      <Menu />
    </div>
  );
};
