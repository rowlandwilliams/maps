import { Route } from "react-router";
import { ImgData } from "../../../types/types";
import { mapProjects } from "../../Grid/grid-data/mapProjects";
import { importAllImages } from "../../utils/utils";
import { PageTemplate } from "../PageTemplate/PageTemplate";

const mapProjectImages: ImgData[] = importAllImages(
  require.context("../../../assets/projectImages/maps"),
  ".png"
);

const nProjects = mapProjects.length;

export const MapPages = () => {
  return (
    <>
      {mapProjects.map((project, i) => (
        <Route path={"/maps/" + project.imgSlug} key={project.imgSlug}>
          <PageTemplate
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
