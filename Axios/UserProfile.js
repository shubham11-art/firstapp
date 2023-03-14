import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ id, email, first_name, last_name, avatar }) => {
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
          <Link to={`/${id}`}>
            {id} - {first_name} {last_name}
          </Link>
        </h3>
        <h4>Email: {email} </h4>
      </div>
    </>
  );
};
export default UserProfile;
