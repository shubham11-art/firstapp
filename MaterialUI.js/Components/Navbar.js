import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import InputBase from "@mui/material/InputBase";
import theme from "../theme";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  // borderRadius: theme.palette.border.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  // 600px pekshya up zal tar khalchi property i.e bakichya properties applied rahtil fakt display condition nusar change honar.
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  // 600px pekshya up zal tar khalchi property i.e bakichya properties applied rahtil fakt display condition nusar change honar.
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      {/* <Toolbar>Navbar</Toolbar> */}
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <AirlineSeatReclineNormalIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Searchbar>
          <InputBase placeholder="Serach..." />
        </Searchbar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: " 25px", height: "25px" }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: " 25px", height: "25px" }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">Jhon</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

// Appbar => nili Patti
// Toolbar => Yaat content yenar jo tya pattit dakhvayachay i.e it is like a wrapper
// InputBase => search icon sathi. // Searchbar ha styledComponent aahe jo Box ch kaam kartoy.
// Icon ani UserBox => Right side of the navBar.
// Menu => Avtar var click kelyavar, je open hot tyachya sathichi styling.
