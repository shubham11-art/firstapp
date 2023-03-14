import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectCartItems } from "../ReduxApp/Slices/CartSlice";

const Product = ({ id, title, price, description, image, rating }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addToCart = () => {
    // addProduct la ka dispatch keli karan cart madhale products aapan tithe maintain karat aahot.
    dispatch(addProduct({ id, qty: 1 }));
  };

  const isAdded =
    cartItems.findIndex((pro) => pro.id == id) >= 0 ? true : false;

  return (
    <Card sx={{ width: 200, margin: 1, padding: 1 }}>
      <img src={image} style={{ width: "100%", height: 200 }} />
      <Link to={`/details/${id}`}>
        <h4>
          {id} - {title}
        </h4>
      </Link>

      <Typography>
        <b>Price:</b>
        {price}
      </Typography>
      <Rating name="read-only" value={rating?.rate} readOnly />
      <Typography>
        {description?.length > 100
          ? `${description.substr(0, 100)}...`
          : description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={addToCart}
        disabled={isAdded}
      >
        {isAdded ? "Added" : "Add To Cart"}
      </Button>
    </Card>
  );
};
export default Product;
