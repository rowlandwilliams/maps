import { ImgData } from "../../types/types";
import { importAllImages } from "../utils/utils";
import { mapProjects } from "./mapProjects";
import { MapsGridItem } from "./MapsGridItem/MapsGridItem";

const mapImages: ImgData[] = importAllImages(
  require.context("../../assets/img/"),
  ".png"
);

export const MapsGrid = () => {
  return (
    <div className="md:flex justify-center flex-wrap py-8 w-full xl:px-24 ">
      {mapProjects.map((project) => (
        <MapsGridItem
          projectTitle={project.projectTitle}
          projectThumbnail={
            mapImages.filter((image) => {
              const re = new RegExp(project.imgSlug, "g");
              return image.slug.match(re);
            })[0]
          }
        />
      ))}
    </div>
  );
};
