import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  reset,
} from "../Slices/CounterSlice";

const Z = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Z Component - {count}</h3>
      <button onClick={() => dispatch(increment(1))}>++</button>
      <button onClick={() => dispatch(increment(15))}>++ by 15</button>
      <button onClick={() => dispatch(decrement(1))}>--</button>
      <button onClick={() => dispatch(reset())}>X</button>
    </>
  );
};
export default Z;
