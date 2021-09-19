import { select } from "d3";
import { Link } from "react-router-dom";
import { ImgData } from "../../../types/types";
import {
  generateRandomPoints,
  plot,
} from "../../NavBar/Voronoi/utils/plot-utils";
import { pickColor, points } from "../../NavBar/Voronoi/Voronoi";

interface Props {
  projectTitle: string;
  projectThumbnail: ImgData;
}

export const MapsGridItem = ({ projectTitle, projectThumbnail }: Props) => {
  const rotateVoronoi = () => {
    // plot on load

    plot(pickColor, points);

    // .attr("transform", "rotate(90)");
  };
  return (
    <Link to={projectThumbnail.slug} onClick={rotateVoronoi}>
      <div className="flex flex-col items-center md:mx-4">
        <div className="w-80 h-80 transition-opacity duration-150 hover:opacity-90 overflow-hidden">
          <img
            src={projectThumbnail.module.default}
            alt={projectThumbnail.slug}
          />
        </div>
        <div className="py-2 text-2xs">{projectTitle}</div>
      </div>
    </Link>
  );
};
