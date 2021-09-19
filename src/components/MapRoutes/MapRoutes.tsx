import { Route } from "react-router";
import { ImgData } from "../../types/types";
import { mapProjects } from "../MapsGrid/mapProjects";
import { importAllImages } from "../utils/utils";
import { MapPageTemplate } from "./MapPageTemplate/MapPageTemplate";

const mapProjectImages: ImgData[] = importAllImages(
  require.context("../../assets/mapProjectImages/"),
  ".png"
);

const nProjects = mapProjects.length;

export const MapRoutes = () => {
  return (
    <>
      {mapProjects.map((project, i) => (
        <Route path={"/" + project.imgSlug}>
          <MapPageTemplate
            key={project.imgSlug}
            projectDescriptionArray={project.projectDescription}
            projectImages={mapProjectImages.filter((image) => {
              const re = new RegExp(project.imgSlug, "g");
              return image.slug.match(re);
            })}
            previousProjectLink={i !== 0 ? mapProjects[i - 1].imgSlug : null}
            nextProjectLink={
              i !== nProjects - 1 ? mapProjects[i + 1].imgSlug : null
            }
          />
        </Route>
      ))}
    </>
  );
};
