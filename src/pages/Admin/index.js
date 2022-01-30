import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateCandidate from "./CreateCandidate";
import Home from "./Home";

const Admin = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/createcandidate`}>
        <CreateCandidate />
      </Route>
    </Switch>
  );
};

export default Admin;
