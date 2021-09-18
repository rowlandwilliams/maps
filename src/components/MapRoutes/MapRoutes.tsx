import { Route } from "react-router";
import { mapProjects } from "../MapsGrid/mapProjects";

export const MapRoutes = () => {
  return (
    <>
      {mapProjects.map((project) => (
        <Route path={"/" + project.imgSlug}>{project.projectTitle}</Route>
      ))}
    </>
  );
};
