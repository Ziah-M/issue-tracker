import React from "react";
import RouterSwitch from "./RouterSwitch";
import Firebase, { FirebaseContext } from "./Firebase";

const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <RouterSwitch />
    </FirebaseContext.Provider>
  );
};

export default App;