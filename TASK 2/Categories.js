import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const Link = styled(NavLink)({
  color: "#fff",
  padding: "3px 10px",
  margin: 10,
  display: "block",
  textDecoration: "none",
});
const Categories = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    alert("Received");
    loadCategories();
  }, []);

  return (
    <Box
      component="aside"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        padding: 1,
      }}
    >
      <Link
        to={`/all`}
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#f00" : "#f008",
        })}
      >
        All
      </Link>

      {categories &&
        categories.map((category, i) => (
          <Link
            key={category + i}
            to={`/${category}`}
            end
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#f00" : "#f008",
            })}
          >
            {category}
          </Link>
        ))}
    </Box>
  );
};

export default Categories;
