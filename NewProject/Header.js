import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PageviewIcon from "@mui/icons-material/Pageview";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, Menu, Popover, styled } from "@mui/material";
import { fontSize } from "@mui/system";
import { useState } from "react";

const Header = () => {
  const Para = styled("p")({
    color: "#000",
    cursor: "pointer",
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#164a73",
            minHeight: "70px",
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="#">
              <img
                src="https://www.sirsidynix.com/wp-content/uploads/2019/03/Baker-Taylor-color.png"
                style={{ width: "155px", height: "25px", cursor: "pointer" }}
              />
            </Link>
            <Box
              style={{
                width: "1000px",
                height: "55px",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Para onClick={handleClick}>
                Library Solutions
                <IconButton>
                  <ArrowDropDownIcon
                    style={{
                      color: "black",
                      fontSize: "25px",
                      marginLeft: "-7px",
                    }}
                  />
                </IconButton>
              </Para>

              <Para>
                Collections Developement and Management
                <IconButton>
                  <ArrowDropDownIcon
                    style={{
                      color: "black",
                      fontSize: "25px",
                      marginLeft: "-7px",
                    }}
                  />
                </IconButton>
              </Para>
              <Para>
                Order
                <IconButton>
                  <ArrowDropDownIcon
                    style={{
                      color: "black",
                      fontSize: "25px",
                      marginLeft: "-7px",
                    }}
                  />
                </IconButton>
              </Para>
              <Box
                style={{
                  width: "220px",
                  height: "35px",
                  backgroundColor: "gray",
                  display: "flex",
                  justifyContent: "space-evenly",
                  // alignItems: "center",
                  borderRadius: "22px",
                }}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  fontSize="17px"
                  marginTop="5px"
                >
                  How Can We help?
                </Typography>
                <img src="https://www.mycapacious.com/cap/assets/images/login-icon.png" />
              </Box>
              <Button color="error">Login</Button>
              <MenuIcon style={{ color: "black" }} />
              <PageviewIcon style={{ color: "black" }} />
            </Box>
          </Toolbar>
        </AppBar>
        <Popover
          position="absolute"
          open={open}
          // anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Typography sx={{ p: 2 }}></Typography>
        </Popover>
      </Box>
    </header>
  );
};

export default Header;
