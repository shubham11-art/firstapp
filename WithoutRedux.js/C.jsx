import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const C = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <h2>C Component, total visitors - {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>++</button>
      <button onClick={() => dispatch({ type: "decrement" })}>--</button>
    </>
  );
};
export default C;
