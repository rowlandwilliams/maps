import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "./components/Grid/Grid";
import { About } from "./components/About/About";
import { AnimatePresence } from "framer-motion";
import { mapProjects } from "./components/Grid/grid-data/mapProjects";
import { importAllImages } from "./components/utils/utils";
import { ImgData } from "./types/types";
import { graphProjects } from "./components/Grid/grid-data/graphProjects";
import { ProjectPages } from "./components/ProjectPages/ProjectPages";
import { designProjects } from "./components/Grid/grid-data/designProjects";
import { uxProjects } from "./components/Grid/grid-data/uxProjects";

const mapThumbnails: ImgData[] = importAllImages(
  require.context("./assets/thumbnails/maps/"),
  ".png"
);

const graphThumbnails: ImgData[] = importAllImages(
  require.context("./assets/thumbnails/graphs/"),
  ".png"
);

const designThumbnails: ImgData[] = importAllImages(
  require.context("./assets/thumbnails/design/"),
  ".png"
);

const uxThumbnails: ImgData[] = importAllImages(
  require.context("./assets/thumbnails/ux/"),
  ".jpg"
);

function App() {
  return (
    <div className="p-2 md:p-16 font-inter-light text-lg text-gray-800 flex flex-col justify-center">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/">
              <Grid
                gridData={mapProjects}
                gridThumbnails={mapThumbnails}
                rootPath="/maps/"
              />
            </Route>
            <Route exact path="/graphs">
              <Grid
                gridData={graphProjects}
                gridThumbnails={graphThumbnails}
                rootPath="/graphs/"
              />
            </Route>
            <Route exact path="/design">
              <Grid
                gridData={designProjects}
                gridThumbnails={designThumbnails}
                rootPath="/design/"
              />
            </Route>
            <Route exact path="/ux">
              <Grid
                gridData={uxProjects}
                gridThumbnails={uxThumbnails}
                rootPath="/ux/"
              />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <ProjectPages />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
