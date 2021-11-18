import { Route } from "react-router";
import { ImgData } from "../../../types/types";
import { uxProjects } from "../../Grid/grid-data/uxProjects";
import { importAllImages } from "../../utils/utils";
import { PageTemplate } from "../PageTemplate/PageTemplate";

const uxProjectImages: ImgData[] = importAllImages(
  require.context("../../../assets/projectImages/ux/"),
  ".jpg"
);

const nProjects = uxProjects.length;

export const UxPages = () => {
  return (
    <>
      {uxProjects.map((project, i) => (
        <Route path={"/ux/" + project.imgSlug} key={project.imgSlug}>
          <PageTemplate
            key={project.imgSlug + "ux"}
            projectDescriptionArray={project.projectDescription}
            projectImages={uxProjectImages.filter((image) => {
              const re = new RegExp(project.imgSlug, "g");
              return image.slug.match(re);
            })}
            previousProjectLink={i !== 0 ? uxProjects[i - 1].imgSlug : null}
            nextProjectLink={
              i !== nProjects - 1 ? uxProjects[i + 1].imgSlug : null
            }
            gridName="UX"
          />
        </Route>
      ))}
    </>
  );
};
