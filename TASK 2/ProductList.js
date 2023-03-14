import React, { useState } from "react";
import Box from "@mui/material/Box";
import Product from "./Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { loadProducts } from "./thunk-action";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../ReduxApp/Slices/ProductSlice";

const ProductList = () => {
  const { category } = useParams();

  const products = useSelector(selectProducts);
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // All var click kelyavar, URL madhe all jail ani category=all mhanun access hoil ethe but category != all so url = all products wala.

    // let url = "https://fakestoreapi.com/products";
    // if (category != "all")
    //   url = `https://fakestoreapi.com/products/category/${category}`;
    // axios
    //   .get(url)
    //   .then((response) => {
    //     setProducts(response.data);
    //   })
    //   .catch(console.error);

    dispatch(loadProducts(category));
  }, [category]);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "cyan",
        padding: 2,
      }}
    >
      {Array.isArray(products) &&
        products.map((prod, i) => <Product key={prod.id} {...prod} />)}
    </Box>
  );
};
export default ProductList;
