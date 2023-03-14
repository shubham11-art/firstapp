import React, { useState } from "react";
import Profile from "./Profile";

const GetRqe = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    // fetch ne promise return kel, te resolve zalyanantar tyatil data realize karnyasathi mi .then() function attach kel to that promise. (.then() madhe jo res ahe tyat mi to data ghetla). When i logged res i get to know ki it again returning a promise. Parat .then() pasun vachanyasathi we used await ghetaly. Await fakt async madhech chalate mhanun async ghetalay. Await stops the execution till that promise settles. Await mule te promise(i.e tyatil data) realization yogya hot w/o .then.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (res) => {
        const data = await res.json();
        setUsers(data);
        console.log(data);
        console.log(users);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h3>Get Request</h3>
      <button onClick={getUsers}>Get User</button>
      {Array.isArray(users) &&
        users.map((user) => <Profile key={user.id} {...user} />)}
    </>
  );
};

export default GetRqe;
