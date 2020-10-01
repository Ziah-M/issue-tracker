import React from "react";

export const DemoDataContext = React.createContext(null);

export const withDemoData = (Component) => (props) => {
    const store=JSON.parse(localStorage.getItem())
  return (
    <DemoDataContext.Provider>
      <Component {...props} />
    </DemoDataContext.Provider>
  );
};
