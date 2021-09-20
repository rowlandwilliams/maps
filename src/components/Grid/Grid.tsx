import { motion } from "framer-motion";
import { ImgData, Project } from "../../types/types";
import { GridItem } from "./GridItem/GridItem";

interface Props {
  gridData: Project[];
  gridThumbnails: ImgData[];
  rootPath: string;
}

export const Grid = ({ gridData, gridThumbnails, rootPath }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="block mx-auto"
    >
      <div className="sm:grid gap-4 justify-center grid-cols-medium-grid xl:grid-cols-large-grid py-8 xl:px-16 ">
        {gridData.map((project) => (
          <GridItem
            key={project.projectTitle}
            projectTitle={project.projectTitle}
            projectThumbnail={
              gridThumbnails.filter((image) => {
                const re = new RegExp(project.imgSlug, "g");
                return image.slug.match(re);
              })[0]
            }
            rootPath={rootPath}
          />
        ))}
      </div>
    </motion.div>
  );
};
