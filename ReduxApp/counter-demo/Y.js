import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  reset,
} from "../Slices/CounterSlice";

const Y = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Y Component- {count}</h3>
      <button onClick={() => dispatch(increment(1))}>++</button>
      <button onClick={() => dispatch(increment(5))}>++ by 5</button>
      <button onClick={() => dispatch(decrement(1))}>--</button>
      <button onClick={() => dispatch(decrement(10))}>-- by 10</button>
      <button onClick={() => dispatch(reset())}>X</button>
    </>
  );
};
export default Y;
