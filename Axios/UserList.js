import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";

const UserList = () => {
  const [users, setUsers] = useState([]);

  //   const onClick = (page = 1) => {
  //     axios
  //       .get(`https://reqres.in/api/users? ${page}`)
  //       .then((response) => {
  //         setUsers(response.data.data);
  //         console.table(response);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  const loadUsers = (page) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setUsers(response.data.data);
        console.table(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <h2> User List</h2>
      {/* <button onClick={onClick}>Load Users</button> */}
      <button onClick={() => loadUsers(1)}>Users of Page 1</button>
      <button onClick={() => loadUsers(2)}>Users of Page 2</button>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((user, i) => <UserProfile key={user.id} {...user} />)}
      </section>
    </>
  );
};
export default UserList;
