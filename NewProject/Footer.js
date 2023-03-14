import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { IconButton, Link, styled, Navlink } from "@mui/material";

const Footer = () => {
  const Link = styled("Navlink")({
    textDecoration: "none",
    cursor: "pointer",
  });

  const Para = styled("p")({
    margin: 2,
  });

  return (
    <footer>
      <Grid
        container
        xs={12}
        style={{
          maxWidth: "100%",
          backgroundColor: "#164a73",
          paddingTop: "25px",
          paddingBottom: "15px",
          color: "#fff",
          display: { xs: "block" },
        }}
      >
        <Grid
          item
          container
          xs={12}
          style={{
            display: "flex",
            // justifyContent: "space-between",
            textDecoration: "none",
          }}
        >
          <Grid item style={{ width: "33%", fontWeight: 600 }}>
            <Para>©2022 Baker & Taylor, Inc.</Para>
            <Para> 2810 Coliseum Centre Drive</Para>
            <Para> Suite 300</Para>
            <Para> Charlotte, NC 28217-4574</Para>
          </Grid>
          <Grid item style={{ width: "33%" }}>
            <Para>
              <Link> Online Customer Support (OCS)</Link>
            </Para>
            <Para>
              <Link>Contact Us</Link>
            </Para>
            <Para>
              <Link> New Account Registration</Link>
            </Para>
          </Grid>
          <Grid item style={{ width: "33%" }}>
            <Para>
              <Link>Privacy Policy</Link>
            </Para>
            <Para>
              <Link>Terms</Link>
            </Para>
            <Para>
              <Link> Transparency in Coverage</Link>
            </Para>
            <Para>
              <Link> Careers and Jobs</Link>
            </Para>
          </Grid>
        </Grid>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
            marginBottom: 25,
          }}
        >
          <Link>Twitter | Facebook | YouTube | Instagram | Linkedin</Link>
        </Container>
      </Grid>
    </footer>
  );
};

export default Footer;
