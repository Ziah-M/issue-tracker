import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Index;
