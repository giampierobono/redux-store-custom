import React from "react";
import { connect } from "./store/utils";

const Counter = (props) => (
  <div>
    <button onClick={props.onIncrement}>+</button>
    <span>{props.counterValue}</span>
    <button onClick={props.onDecrement}>-</button>
  </div>
);

const mapToState = (state) => ({
  counterValue: state.counter,
});

const mapToDispatch = {
  onIncrement: () => ({ type: "INCREMENT" }),
  onDecrement: () => ({ type: "DECREMENT" }),
};

const connector = connect(mapToState, mapToDispatch);

const CounterContainer = (props) => (
  <Counter
    onIncrement={props.onIncrement}
    onDecrement={props.onDecrement}
    counterValue={props.counterValue}
  />
);

export default connector(CounterContainer);
