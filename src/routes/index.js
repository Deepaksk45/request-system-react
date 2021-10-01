import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard, Request, Users } from "../pages";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/request" component={Request} />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      <Route path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
