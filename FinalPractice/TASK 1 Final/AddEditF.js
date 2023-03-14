import React, { useContext } from "react";
import UserContextF from "./UserContextF";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import UserFormF from "./UserFormF";

const AddEditF = () => {
  const { openDialog, handleDailogClose, operation } = useContext(UserContextF);
  return (
    <>
      <Dialog open={openDialog} onClose={handleDailogClose}>
        <DialogTitle style={{ textAlign: "center" }}>
          <span style={{ textTransform: "capitalize" }}>{operation}</span> User
        </DialogTitle>
        <DialogContent>
          <UserFormF />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditF;
