import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { selectCartLength } from "../ReduxApp/Slices/CartSlice";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const HeaderBar = () => {
  const cartLength = useSelector(selectCartLength);
  console.log("cartLength:", cartLength);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Apana Store
          </Typography>
          <Link to="/">Products</Link>
          <IconButton aria-label="cart">
            <Link to="/checkout">
              <StyledBadge badgeContent={cartLength} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
