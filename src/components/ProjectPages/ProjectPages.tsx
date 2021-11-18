import { DesignPages } from "./DesignPages/DesignPages";
import { GraphPages } from "./GraphPages/GraphPages";
import { MapPages } from "./MapPages/MapPages";
import { UxPages } from "./UxPages/UxPages";

export const ProjectPages = () => {
  return (
    <>
      <MapPages />
      <GraphPages />
      <DesignPages />
      <UxPages />
    </>
  );
};
