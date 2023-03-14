import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <p>Ooops!!! 404 Errrroooorr Page </p>
      <NavLink to="/">Go Back To Home</NavLink>
      {/* <button onClick={history.goBack()}>Go Back To Home</button>
      <button onClick={history.push("/")}>Go Back To Home</button> */}
    </>
  );
};
export default Error;
