const counterInitialState = {
  counter: 0,
};

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: ++state.counter,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: --state.counter,
      };
    }
    default: {
      return state;
    }
  }
};
