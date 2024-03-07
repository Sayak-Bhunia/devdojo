/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Home from "./Home";
import Hackathons from "./Hackathons";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/Hackathons" component={Hackathons} />
    </Switch>
  </BrowserRouter>
);

export default App;
