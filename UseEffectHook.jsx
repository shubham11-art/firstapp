import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const tm = setInterval(() => {
  //       setTime(new Date().toLocaleTimeString());
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
  }, [count]);

  return (
    <>
      <h1>UseEffectHook {count}</h1>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
    </>
  );
};
export default UseEffectHook;
