import { motion } from "framer-motion";
import { ImgData } from "../../../types/types";
import { MapPageDescription } from "./MapPageDescription/MapPageDescription";
import { MapPageNavArrows } from "./MapPageNavArrows/MapPageNavArrows";

interface Props {
  projectDescriptionArray: string[];
  projectImages: ImgData[];
  previousProjectLink: string | null;
  nextProjectLink: string | null;
}

export const MapPageTemplate = ({
  projectDescriptionArray,
  projectImages,
  previousProjectLink,
  nextProjectLink,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-xs">
        <div className="flex flex-col-reverse md:flex-row py-8">
          <div className="md:w-1/2 flex justify-end">
            <div className="w-full md:w-600">
              {projectImages.map((projectImage) => (
                <img
                  src={projectImage.module.default}
                  alt={projectImage.slug}
                  className="mb-2"
                />
              ))}
            </div>
          </div>
          <MapPageDescription
            projectDescriptionArray={projectDescriptionArray}
          />
        </div>
        <MapPageNavArrows
          previousProjectLink={previousProjectLink}
          nextProjectLink={nextProjectLink}
        />
      </div>
    </motion.div>
  );
};
