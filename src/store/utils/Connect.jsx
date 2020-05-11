import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "./Provider";

export const connect = (mapToState, mapToDispatch) => (
  WrappedComponent
) => () => {
  const store = useContext(StoreContext);
  useEffect(() => {
    store.subscribe(setNewState); // unsubscribe!!!
  }, [store]);
  const [state, setNewState] = useState(store.getState());
  return React.createElement(WrappedComponent, {
    ...mapToState(state),
    ...Object.keys(mapToDispatch).reduce((acc, current) => {
      acc[current] = () => store.dispatch(mapToDispatch[current]());
      return acc;
    }, {}),
  });
};
