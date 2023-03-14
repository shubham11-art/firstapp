import React from "react";
import { Link } from "react-router-dom";

const User = ({ id, name, email, mobile, age, address }) => {
  return (
    <>
      <div
        style={{
          width: 200,
          padding: 5,
          margin: 3,
          boxShadow: "0 0 3 1 #8888",
        }}
      >
        <img src={avatar} style={{ width: "100%", height: 200 }} />

        <h3>
          <Link to={`${id}`}>
            {id} - {name}
          </Link>
        </h3>
        <h4>Email: {email} </h4>
        <h4>Mobile: {mobile} </h4>
        <h4>Age: {age} </h4>
        <h4>City: {address?.city} </h4>
      </div>
    </>
  );
};
export default User;
