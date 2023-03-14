import React from "react";

const PracProfile = (props) => {
  return (
    <>
      <div
        style={{
          width: "25%",
          border: "1px solid black",
          backgroundColor: "cyan",
          margin: 2,
          padding: 5,
        }}
      >
        <img src={props.img} />
        <h3>First Name : {props.fName}</h3>
        <h3>Last Name : {props.lName}</h3>
        <h4>Email : {props.email}</h4>
      </div>
    </>
  );
};

export default PracProfile;
