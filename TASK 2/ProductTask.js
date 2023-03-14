import React from "react";
import Categories from "./Categories";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import HeaderBar from "./HeaderBar";
import Checkout from "./Checkout";

const Catalog = () => {
  return (
    <>
      {/* Categories kayam disnar ani Route paiki one component at a time */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Categories />
        </Grid>
        <Grid item xs={12} md={9}>
          <Routes>
            {/* Navigate to = "" => Automatic rendering of page on opening of the site, i.e Automatically link madhe /all la je dilay tyachi request janar. */}
            <Route path="" element={<Navigate to="/all" />} />
            <Route path=":category" element={<ProductList />} />
            <Route path="/details/:id" element={<ProductDetails />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

const ProductTask = () => {
  return (
    <>
      {/* ProductTask aapan App.js madhun render kartoy, so yaatun je return karnar te aaplyala All time screen var disnar Except Route karan Route cha artacha aahe ki Konta component Render karayachay i.e konta tari ekach component render hoil. 
      So, here HeaderBar kayam disnar ani Route paiki one component at a time*/}
      <HeaderBar />
      <Container>
        <Routes>
          <Route path="/*" element={<Catalog />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </>
  );
};

export default ProductTask;
