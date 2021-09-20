import { Link } from "react-router-dom";
import { ImgData } from "../../../types/types";
import { plot } from "../../NavBar/Voronoi/utils/plot-utils";
import { pickColor, points } from "../../NavBar/Voronoi/Voronoi";

interface Props {
  projectTitle: string;
  projectThumbnail: ImgData;
  rootPath: string;
}

export const GridItem = ({
  projectTitle,
  projectThumbnail,
  rootPath,
}: Props) => {
  return (
    <Link
      to={rootPath + projectThumbnail.slug}
      onClick={() => plot(pickColor, points)}
    >
      <div className="flex flex-col items-center">
        <div className="w-80 h-80 transition-opacity duration-150 hover:opacity-90 overflow-hidden">
          <img
            src={projectThumbnail.module.default}
            alt={projectThumbnail.slug}
            className="w-80 h-80 object-cover"
          />
        </div>
        <div className="py-2 text-2xs">{projectTitle}</div>
      </div>
    </Link>
  );
};
