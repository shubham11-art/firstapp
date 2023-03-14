import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProducts: (state, { payload }) => [...payload],
  },
});

export const { addProducts } = productSlice.actions;

// Selector for All
// state.products ksa kel Karan, data store var products ya reducer madhe aahe, So  => state.products
// state: {
//  products : {
//   data
//  }
// }

export const selectProducts = (state) => state.products;
// export const selectProducts = ({products})=> products;

// Selector for One Products
// state destructure keli aahe to {products}
// Fuction madhun function return kartoy => closure, parameter pass karata yava yasathi he kelay. (i.e (state) => state.products; ==  ({ products }) => products.find((pro) => pro.id == id);) i.e he Thunk creator sarkh kelay
// jo id pass karnar dispatch chya veli through payload tevdech product state madhun return hoil. Arrow function aslyamule return statement lihilel nahi. This code(products.find((pro) => pro.id == id);) is returning that individual product.
// .find() method vaprali, to return an aaray.
export const selectOneProduct =
  (id) =>
  ({ products }) =>
    products.find((pro) => pro.id == id);

export default productSlice.reducer;
