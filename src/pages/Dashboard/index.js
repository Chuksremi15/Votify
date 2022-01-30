import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Election from "./Election";
import Result from "./Result";

const Dashboard = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/election/:id`}>
        <Election />
      </Route>
      <Route path={`${path}/result/:id`}>
        <Result />
      </Route>
    </Switch>
  );
};

export default Dashboard;
