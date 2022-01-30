import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Admin from "./Admin";

const Pages = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dashBoard" component={Dashboard} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
};

export default Pages;
