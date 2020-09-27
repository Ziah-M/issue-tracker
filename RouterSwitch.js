import React from "react";
import { Route, Switch } from "react-router-dom";
import * as P from "./Pages";
import * as R from "./routes.js";

const RouterSwitch = ({ location }) => {
  return (
    <Switch location={location}>
      <Route path={R.USER_PROFILE} component={P.Login} />
      <Route path={R.MY_TICKETS} component={P.Login} />
      <Route path={R.MY_PROJECTS} component={P.Login} />
      <Route path={R.MANAGE_USERS} component={P.Login} />
      <Route path={R.MANAGE_ROLES} component={P.Login} />
      <Route path={R.HOME} component={P.Login} />
      <Route path={R.LOGIN} component={P.Login} />
      <Route path={R.LANDING} component={P.Landing} />

    </Switch>
  );
};

export default RouterSwitch;