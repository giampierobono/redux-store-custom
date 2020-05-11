import React from "react";

export const StoreContext = React.createContext({});

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {React.Children.only(props.children)}
    </StoreContext.Provider>
  );
};
