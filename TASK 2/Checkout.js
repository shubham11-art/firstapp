import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectCartItems } from "../ReduxApp/Slices/CartSlice";
import { selectProducts } from "../ReduxApp/Slices/ProductSlice";
import DisplayItem from "./DisplayItem";

const Checkout = () => {
  const productList = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);
  const [products, setProducts] = useState([]);
  const [pricing, setPricing] = useState({ subTotal: 0 });

  useEffect(() => {
    // cartItems madhale elements item madhe ghetale ani .find() method vaprun productList array madhala toch element return kela jyacha id item.id barobar match karnar. Ani mag to item ani product combine karun return kele.
    const output =
      Array.isArray(cartItems) &&
      cartItems.map((item) => {
        // item = {id:1, qty:2}
        const product = productList.find((prod) => prod.id == item.id);
        // product = {item.id barobar match karnara product from productList(all products)}

        return { ...item, ...product };
      });
    // Cart madhil sagale products Output madhe aale with all detalis.
    setProducts(output);

    const subTotal = output.reduce(
      (prev, item) => prev + item.price * item.qty,
      0
    );

    // setPricing madhun pan aapan immutable change kela
    //  ...pricing, subTotal: subTotal => ki pricing object access kela ani tyatil subTotal key update keli with subTotal(calcutaled value).
    setPricing({
      ...pricing,
      subTotal: subTotal,
    });
    console.log("output: ", output);
  }, [cartItems]);

  return (
    <section>
      <Typography component="h2">Products In Cart</Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <Box>
            {Array.isArray(products) &&
              products.map((prod) => <DisplayItem key={prod.id} {...prod} />)}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Card sx={{ padding: 2, margin: 2 }}>
              <h3>Sub Total: {pricing?.subTotal} </h3>
              <Button variant="contained" color="primary">
                Proceed To Pay
              </Button>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Checkout;

// cartItem asa aahe
// cartItems = [
//     { id:1, qty:2},
//     { id:2, qty:3}

// ]

// products asa aahe
// products = [
//     {
//       id: 2,
//       title: 'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats',
//       price: 56.99,
//       description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; ,
//       category: 'women\'s clothing',
//       image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
//       rating: {
//         rate: 2.6,
//         count: 235
//       }
//     ]

// Output asa pahije

// const output = [
//   {
//     id: 2,
//     qty: 3,
//       title: 'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats',
//       price: 56.99,
//       description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; ,
//       category: 'women\'s clothing',
//       image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
//       rating: {
//         rate: 2.6,
//         count: 235
//   },
// ];
