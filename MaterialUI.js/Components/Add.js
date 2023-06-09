import { Fab, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Add as AddIcon } from "@mui/icons-material/";

const Add = () => {
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;

// Tooltip => Naav yenyasathi
// AddIcon => + sign sathi
