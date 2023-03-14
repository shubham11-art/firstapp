import React, { useState } from "react";
import PracProfile from "./PracProfile";

const Practice = () => {
  const [users, setUsers] = useState([]);
  const pracUsers = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then(async (response) => {
        const userData = await response.json();
        setUsers(userData.data);
        console.log(userData.data);
      })
      .then((response) => {
        alert("Users Accessed....");
      })
      .catch((error) => {
        alert("Error Occured");
      });
  };

  // He hon shakya nahi
  // Aapan array destructure karun pan vapru shakato
  // const {id, email, first_name, last_name, avatar } = user;
  // SO,  key={id},  fName={first_name}, img={avatar} etc i.e they will become the variable itself.

  return (
    <>
      <h2>Get Practice Users</h2>

      <button onClick={pracUsers}>Get Prac Users</button>

      <section style={{ display: "flex" }}>
        {Array.isArray(users) &&
          users.map((user, i) => (
            <PracProfile
              key={user.id}
              email={user.email}
              fName={user.first_name}
              lName={user.last_name}
              img={user.avatar}
            />
          ))}
      </section>
    </>
  );
};

export default Practice;
