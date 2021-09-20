import { Route } from "react-router";
import { ImgData } from "../../../types/types";
import { graphProjects } from "../../Grid/grid-data/graphProjects";
import { importAllImages } from "../../utils/utils";
import { PageTemplate } from "../PageTemplate/PageTemplate";

const graphProjectImages: ImgData[] = importAllImages(
  require.context("../../../assets/projectImages/graphs/"),
  ".png"
);

const nProjects = graphProjects.length;

export const GraphPages = () => {
  return (
    <>
      {graphProjects.map((project, i) => (
        <Route path={"/graphs/" + project.imgSlug} key={project.imgSlug}>
          <PageTemplate
            key={project.imgSlug}
            projectDescriptionArray={project.projectDescription}
            projectImages={graphProjectImages.filter((image) => {
              const re = new RegExp(project.imgSlug, "g");
              return image.slug.match(re);
            })}
            previousProjectLink={i !== 0 ? graphProjects[i - 1].imgSlug : null}
            nextProjectLink={
              i !== nProjects - 1 ? graphProjects[i + 1].imgSlug : null
            }
          />
        </Route>
      ))}
    </>
  );
};
