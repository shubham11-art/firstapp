import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContextF from "./UserContextF";
import APIF from "../Task1ApiF/APIF";
import endpointsF from "../Task1ApiF/endpointsF";

const UserFormF = () => {
  const { handleDailogClose, loadUsers, operation, initialUser } =
    useContext(UserContextF);
  const [user, setUser] = useState({});

  // initialUser useEffect through ka assign kelay karan, every time when initial user yeil tenvha tenvha user update zala pahije.

  useEffect(() => {
    setUser({ ...user, ...initialUser });
  }, [initialUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (operation == "add") {
      APIF.post(endpointsF.api.user.create, user)
        .then((res) => {
          console.log(res);
          loadUsers();
          handleDailogClose();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // yaat ek space jaat padala tar request jaat navhati.
      APIF.put(`${endpointsF.api.user.update}${user.id}`, user)
        .then((res) => {
          loadUsers();
          handleDailogClose();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            name="name"
            value={user.name || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Age"
            name="age"
            value={user.age || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={user.mobile || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={handleSubmit}>
            {operation == "add" ? "Create" : "Update"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UserFormF;
