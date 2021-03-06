import { useEffect } from "react";
import { generateRandomPoints, plot } from "./utils/plot-utils";
import "./styles.css";

const voronoiWidth = 64;
const padding = 1;

var pointSeed = 5; // Math.floor(Math.random() * 8) + 5;

export const pickColor = Math.random() < 0.5;

export const points = generateRandomPoints(
  pointSeed,
  0,
  voronoiWidth,
  0,
  voronoiWidth
);

const Voronoi = () => {
  // plot on load
  useEffect(() => {
    plot(pickColor, points);
  });

  return (
    <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-150 border-2 border-gray-800 hover:border-white ">
      <svg width="100%" height="100%" className="chart">
        <defs>
          <clipPath id="rect-clip">
            <rect
              width={voronoiWidth + padding}
              height={voronoiWidth + padding}
              rx="5px"
              ry="5px"
              stroke="none"
            ></rect>
          </clipPath>
        </defs>
        <g
          id="polygon-group"
          clipPath="url(#rect-clip)"
          transform={"translate(" + -padding + "," + -padding + ")"}
        ></g>
      </svg>
    </div>
  );
};

export default Voronoi;
