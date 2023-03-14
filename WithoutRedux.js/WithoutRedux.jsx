import React from "react";
import ParentComp from "./parentComp";
import CounterContext from "./CounterContext";
import { useReducer } from "react";

const WithoutRedux = () => {
  const initialstate = { count: 0 };

  const reducer = (state = initialstate, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return initialstate;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <h1>Without Redux</h1>
      <CounterContext.Provider value={{ state, dispatch }}>
        <ParentComp />
      </CounterContext.Provider>
    </>
  );
};
export default WithoutRedux;
