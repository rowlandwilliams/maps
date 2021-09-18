import { select, selectAll, range, hsl } from "d3";
import voronoi from "d3-voronoi/src/voronoi";
import { colorSchemes } from "./colors";

const voronoiWidth = 96;

const colorGlobal =
  colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
const pointSeed = 2;

const polyToPath = (polygon) => {
  return polygon ? "M" + polygon.join("L") + "Z" : null;
};

// generate points for a given g size
export const generateRandomPoints = (nPoints, minX, maxX, minY, maxY) => {
  return range(0, nPoints).map(function (i) {
    return [
      Math.floor(Math.random() * (maxX - minX)) + minX,
      Math.floor(Math.random() * (maxY - minY)) + minY,
    ];
  });
};

const addClipPath = (outline, pathId, defs) => {
  defs
    .append("clipPath")
    .attr("id", pathId)
    .append("path")
    .attr("d", polyToPath(outline));
};

export const drawSubPolygons = (level, defs, pickColor) => {
  var parentLevel = level - 1;

  // find all parent polygons using parent level
  var selection = selectAll('path[data-level="' + parentLevel + '"]');

  // iterate across each parent polygon
  selection.each(function (d, i) {
    // determine the bounding box
    var box = this.getBBox();

    // gernerate new points for the bounding box of each polygon
    var pointsNew = generateRandomPoints(
      pointSeed * level,
      box.x,
      box.x + box.width,
      box.y,
      box.y + box.height
    );

    // set extent of new voronoi based on bounding coords
    var voronoi2 = voronoi().extent([
      [box.x, box.y],
      [box.x + box.width, box.y + box.height],
    ]);

    //define new coords
    var polygons2 = voronoi2.polygons(pointsNew);
    var isSub = true;
    // draw new Voronoi and clip based on parent clip path id
    drawVoronoi(
      select(this.parentNode),
      polygons2,
      "cp-" + parentLevel + "-" + i,
      level,
      pickColor,
      isSub
    );
    addClipPath(d, "cp-" + parentLevel + "-" + i, defs);
  });
};

export const drawVoronoi = (
  parent,
  polygons,
  clipArea,
  level,
  pickColor,
  isSub
) => {
  if (pickColor) {
    var localColor =
      colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
  }

  parent
    .insert("g", ":first-child")
    .attr("clip-path", function (d) {
      return clipArea ? "url(#" + clipArea + ")" : "";
    })
    .attr("class", "polygons")
    .selectAll("path")
    .data(polygons)
    .enter()
    .insert("path")
    .attr("data-level", level)
    .attr("stroke-width", function () {
      return 4 / ((level + 1) * 2);
    })
    .attr("stroke", function () {
      hsl("#000").brighter(level);
    })
    .attr("fill", function () {
      return level === 0
        ? ""
        : pickColor
        ? localColor(Math.random())
        : colorGlobal(Math.random());
    })
    .attr("fill-opacity", "0.4")
    .attr("d", polyToPath);
};

// initial voronoi function
var generateVoronoi = voronoi().extent([
  [0, 0],
  [voronoiWidth, voronoiWidth],
]);



export const plot = (pickColor, points) => {
  var initialPolygons = generateVoronoi(points).polygons();

  var polygonsGroup = select("#polygon-group");

  // append defs here and pass down
  var defs = select(".chart").append("defs");

  drawVoronoi(polygonsGroup, initialPolygons, undefined, 0, pickColor);
  var subPolygons = drawSubPolygons(1, defs, pickColor);
  subPolygons = drawSubPolygons(2, defs, pickColor);
};
