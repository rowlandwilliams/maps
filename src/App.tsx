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

const mapThumbnails: ImgData[] = importAllImages(
  require.context("./assets/thumbnails/maps/"),
  ".png"
);

const graphThumbnails: ImgData[] = importAllImages(
  require.context("./assets/thumbnails/graphs/"),
  ".png"
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
