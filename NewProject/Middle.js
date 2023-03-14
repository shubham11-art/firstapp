import { Grid } from "@mui/material";
import React from "react";

const Middle = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Middle Part</h1>
      <Grid
        container
        style={{
          width: 1000,
          height: 200,
          border: "1px solid red",
          display: "flex",
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            width: 200,
            height: 100,
            border: "1px solid black",
            margin: 12,
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            // width: 200,
            // height: 100,
            // border: "1px solid black",
            margin: 12,
          }}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, unde non. Quas voluptatum dicta unde beatae tenetur
            laudantium blanditiis perspiciatis voluptatem officiis eligendi hic,
            odio esse harum officia, aliquid inventore.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            width: 200,
            height: 100,
            border: "1px solid black",
            margin: 12,
          }}
        ></Grid>
      </Grid>
    </div>
  );
};

export default Middle;
