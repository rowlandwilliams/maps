import { NameHeader } from "./NameHeader/NameHeader";
import Voronoi from "./Voronoi/Voronoi";

export const NavBar = () => {
  return (
    <div className="flex flex-col items-center">
      <Voronoi />
      <NameHeader />
    </div>
  );
};
