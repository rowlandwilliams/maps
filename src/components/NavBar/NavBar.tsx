import { NameHeader } from "./NameHeader/NameHeader";
import Voronoi from "./Voronoi/Voronoi";

export const NavBar = () => {
  return (
    <div className="w-full flex md:flex-col justify-between items-center">
      <Voronoi />
      <NameHeader />
    </div>
  );
};
