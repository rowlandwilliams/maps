import { motion } from "framer-motion";
import { ImgData } from "../../../types/types";
import { FadeInOnScrollComponent } from "./FadeInOnScrollComponent/FadeInOnScrollComponent";
import { PageDescription } from "./PageDescription/PageDescription";
import { PageNavArrows } from "./PageNavArrows/PageNavArrows";

interface Props {
  projectDescriptionArray: string[];
  projectImages: ImgData[];
  previousProjectLink: string | null;
  nextProjectLink: string | null;
  gridName: string;
}

export const PageTemplate = ({
  projectDescriptionArray,
  projectImages,
  previousProjectLink,
  nextProjectLink,
  gridName,
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
            <div className="w-full sm:w-3/4 md:w-600">
              {projectImages.map((projectImage) => (
                <FadeInOnScrollComponent threshold={0.05}>
                  <img
                    src={projectImage.module.default}
                    alt={projectImage.slug}
                    className="mb-2"
                  />
                </FadeInOnScrollComponent>
              ))}
            </div>
          </div>
          <PageDescription projectDescriptionArray={projectDescriptionArray} />
        </div>
        <PageNavArrows
          previousProjectLink={previousProjectLink}
          nextProjectLink={nextProjectLink}
          gridName={gridName}
        />
      </div>
    </motion.div>
  );
};
