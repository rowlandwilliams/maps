import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MapsGrid } from "./components/MapsGrid/MapsGrid";
import { About } from "./components/About/About";
import { MapRoutes } from "./components/MapRoutes/MapRoutes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="p-2 md:p-16 font-inter-light text-lg text-gray-800">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/">
              <MapsGrid />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <MapRoutes />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
