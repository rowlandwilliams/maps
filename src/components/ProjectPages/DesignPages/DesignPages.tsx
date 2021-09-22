import { Route } from "react-router";
import { ImgData } from "../../../types/types";
import { designProjects } from "../../Grid/grid-data/designProjects";
import { graphProjects } from "../../Grid/grid-data/graphProjects";
import { importAllImages } from "../../utils/utils";
import { PageTemplate } from "../PageTemplate/PageTemplate";

const designProjectImages: ImgData[] = importAllImages(
  require.context("../../../assets/projectImages/design/"),
  ".png"
);

const nProjects = designProjects.length;

export const DesignPages = () => {
  return (
    <>
      {designProjects.map((project, i) => (
        <Route path={"/design/" + project.imgSlug} key={project.imgSlug}>
          <PageTemplate
            key={project.imgSlug}
            projectDescriptionArray={project.projectDescription}
            projectImages={designProjectImages.filter((image) => {
              const re = new RegExp(project.imgSlug, "g");
              return image.slug.match(re);
            })}
            previousProjectLink={i !== 0 ? graphProjects[i - 1].imgSlug : null}
            nextProjectLink={
              i !== nProjects - 1 ? graphProjects[i + 1].imgSlug : null
            }
            gridName="design"
          />
        </Route>
      ))}
    </>
  );
};
