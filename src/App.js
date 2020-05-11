import React from "react";
import "./App.css";
import { createStore, Provider } from "./store/utils";
import { counterReducer } from "./store/reducers";
import CounterContainer from "./Counter";

const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
      </div>
    </Provider>
  );
}

export default App;
