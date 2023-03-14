import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { email, first_name, last_name, avatar } = user;

  return (
    <>
      <div style={{ margin: "20px" }}>
        <img src={avatar} />
        <h3>
          Name: {first_name} {last_name}
        </h3>
        <h4>Email: {email} </h4>
      </div>
      <Link to="/">User List</Link>
    </>
  );
};
export default SingleUser;
