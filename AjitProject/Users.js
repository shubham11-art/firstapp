import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import AllUsersList from "./AllUsersList";
import Backdrop from "@mui/material/Backdrop";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState();

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "5px",
          color: "brown",
        }}
      >
        Users
      </h3>
      <Button variant="contained" style={{ margin: "5px" }} onClick={getUsers}>
        Get Users
      </Button>
      {<section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((user) => <AllUsersList key={user.id} {...user} />)}
      </section> ? (
        <section style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.isArray(users) &&
            users.map((user) => <AllUsersList key={user.id} {...user} />)}
        </section>
      ) : (
        <Backdrop sx={{ color: "#fff" }} open={open} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default Users;

// users?users : <Backdrop sx={{ color: "#fff" }} open={open} onClick={handleClose}><CircularProgress color="inherit" /></Backdrop>
