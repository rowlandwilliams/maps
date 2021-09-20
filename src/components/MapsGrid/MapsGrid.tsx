import { motion } from "framer-motion";
import { ImgData } from "../../types/types";
import { importAllImages } from "../utils/utils";
import { mapProjects } from "./mapProjects";
import { MapsGridItem } from "./MapsGridItem/MapsGridItem";

const mapThumbnails: ImgData[] = importAllImages(
  require.context("../../assets/thumbnails/"),
  ".png"
);

export const MapsGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:flex justify-center flex-wrap py-8 w-full xl:px-24 ">
        {mapProjects.map((project) => (
          <MapsGridItem
            key={project.projectTitle}
            projectTitle={project.projectTitle}
            projectThumbnail={
              mapThumbnails.filter((image) => {
                const re = new RegExp(project.imgSlug, "g");
                return image.slug.match(re);
              })[0]
            }
          />
        ))}
      </div>
    </motion.div>
  );
};
