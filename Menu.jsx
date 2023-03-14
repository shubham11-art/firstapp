import React from "react";

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/about">About Page</NavLink>
      <NavLink to="/contact">Contact Page</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/search">Search</NavLink>

      <br />
      <br />
    </>
  );
};

export default Menu;
