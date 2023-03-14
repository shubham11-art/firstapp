import React from "react";

const OtherReqF = () => {
  const createUser = () => {
    fetch("", {});
  };
  return (
    <>
      <h4>Post Request</h4>
      <button onClick={createUser}>CreateUser</button>
    </>
  );
};

export default OtherReqF;
