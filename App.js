import React from "react";
import RouterSwitch from "./RouterSwitch";
import {withAuthentication} from './Session'

const App = () => {
  return <RouterSwitch />;
};

export default withAuthentication(App);