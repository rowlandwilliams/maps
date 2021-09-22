import { DesignPages } from "./DesignPages/DesignPages";
import { GraphPages } from "./GraphPages/GraphPages";
import { MapPages } from "./MapPages/MapPages";

export const ProjectPages = () => {
  return (
    <>
      <MapPages />
      <GraphPages />
      <DesignPages />
    </>
  );
};
