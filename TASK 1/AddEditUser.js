import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UserContext from "./UserContext";
import UserForm from "./UserForm";

const AddEditUser = () => {
  const { operation, handleDialogClose, openDialog } = useContext(UserContext);
  return (
    <>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          <span style={{ textTransform: "capitalize" }}>{operation}</span>
          User
        </DialogTitle>
        <DialogContent>
          <UserForm />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddEditUser;
