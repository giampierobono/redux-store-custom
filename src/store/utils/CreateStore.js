export const createStore = (...reducers) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = {
      ...reducers.reduce((stateAcc, reducer) => {
        stateAcc = { ...stateAcc, ...reducer(state, action) };
        return stateAcc;
      }, {}),
    };
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => (listeners = listeners.filter((l) => l !== listener));
  };

  dispatch({ type: "[Custom store] store initial state" }); // dummy action just to set the initial state

  return { getState, dispatch, subscribe };
};
