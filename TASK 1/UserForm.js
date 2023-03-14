import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import Api from "../API/Api";
import endpoints from "../API/config.json";
import UserContext from "./UserContext";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/Textfield";

const UserForm = () => {
  const { operation, loadUsers, handleDialogClose, initialUser } =
    useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ ...user, ...initialUser });
  }, [initialUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    if (operation == "edit") {
      console.log("User:", user);
      Api.put(`${endpoints.api.user.update}${user.id}`, user)
        .then((response) => {
          loadUsers();
          handleDialogClose();
          alert("Updated The User");
        })
        .catch((err) => {
          console.log(err);
          alert("Could not update..");
        });
    } else {
      console.log("User:", user);
      Api.post(endpoints.api.user.create, user)
        .then((response) => {
          loadUsers();
          handleDialogClose();
          alert("Created User");
        })
        .catch((err) => {
          console.log(err);
          alert("Could not create..");
        });
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Textfield
            fullWidth
            variant="outlined"
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Textfield
            fullWidth
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Textfield
            fullWidth
            variant="outlined"
            label="Age"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Textfield
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            {operation == "edit" ? "Update" : "Create"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default UserForm;
