import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  deleteUser,
  selectUsers,
  updateUser,
} from "../ReduxApp/Slices/UsersSlice";
import Swal from "sweetalert2";

import UserContext from "./UserContext";
import UserForm from "./UserForm";

const UserProfile = ({ id, email, first_name, last_name, avatar }) => {
  const dispatch = useDispatch(selectUsers);
  const [openDialog, setOpenDialog] = useState(false);

  // const [user, setUser] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  // });

  // useEffect(() => {
  //   setUser({ email, first_name, last_name });
  // }, [first_name]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser({ id }));
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };

  const editUser = () => {
    setOpenDialog(true);
  };

  // const handleUpdateUser = () => {
  //   dispatch(updateUser({ id, updateData: user }));
  //   handleClose();
  // };

  return (
    <>
      <UserContext.Provider
        value={{
          openDialog,
          handleClose,
          editUser,
          id,
          email,
          first_name,
          last_name,
          avatar,
        }}
      >
        <UserForm />
      </UserContext.Provider>
      {/* <Dialog open={openDialog} onClose={handleClose}>
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
      </Dialog> */}
      <Card sx={{ width: 150, padding: 1, margin: 1 }}>
        <img src={avatar} style={{ width: "100%", height: 150 }} />
        <h3>
          {id} {first_name}
          {last_name}
        </h3>
        <p>{email}</p>
        <Button variant="contained" color="primary" onClick={editUser}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Card>
    </>
  );
};
export default UserProfile;
