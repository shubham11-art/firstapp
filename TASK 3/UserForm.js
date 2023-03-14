import React, { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updateUser } from "../ReduxApp/Slices/UsersSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const {
    openDialog,
    handleClose,
    // handleChange,
    // handleUpdateUser,
    id,
    email,
    first_name,
    last_name,
  } = useContext(UserContext);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    setUser({ email, first_name, last_name });
  }, [first_name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdateUser = () => {
    dispatch(updateUser({ id, updateData: user }));
    handleClose();
  };

  return (
    <section>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle> Update User</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleUpdateUser}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default UserForm;
