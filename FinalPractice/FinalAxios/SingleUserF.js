import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleUserF = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { email, last_name, avatar } = user;

  return (
    <div
      style={{
        margin: 15,
        padding: 15,
        border: "1px solid red",
        width: 200,
        backgroundColor: "gray",
        boxShadow: "1px 2px 3px green",
      }}
    >
      <h4 style={{ marginBottom: 8 }}>Single User</h4>
      <img src={avatar} alt="avatar" style={{ width: "100%" }} />
      <p>{last_name}</p>
      <p>{email}</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default SingleUserF;
