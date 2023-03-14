import React, { useState } from "react";
import ProfileF from "./ProfileF";

const GetReqF = () => {
  const [user, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(async (res) => {
        const data = await res.json();
        setUsers(data.data);
      })
      // .then((res) => {
      //   setUsers(res.data.data);
      // })
      .then((res) => {
        alert("Users Accesed");
      })
      .catch((err) => {
        alert("Couldnot access the Users");
        console.log(err);
      });
  };

  return (
    <>
      <h2>Get Users</h2>
      <button onClick={getUsers}>GetUsers</button>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(user) &&
          user.map((user) => <ProfileF key={user.id} {...user} />)}
      </section>
      {/* {Array.isArray(user) &&
        user.map((user) => (
          <ProfileF
            key={user.id}
            id={user.id}
            email={user.email}
            fName={user.first_name}
            avatar={user.avatar}
          /> )} */}
    </>
  );
};

export default GetReqF;
