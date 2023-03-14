import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    customer: {},
    items: [],
  },
  reducers: {
    // action destructure karun direct payload pan gheu shakato. => action = {payload}
    addProduct: (state, action) => {
      // mutable changes avoid karnyasathi state array madhe ghetali.
      // let arr = [...state.items];
      let arr = Array.isArray(state.items) ? [...state.items] : [];
      const index = arr.findIndex((prod) => prod.id == action.payload.id);

      if (index == -1) {
        // update the arr
        arr = [...arr, action.payload];
      } else if (index >= 0 && action.payload.qty <= 0) {
        // remove from cart
        arr.splice(index, 1);
      } else if (index >= 0) {
        // id match zala tar to payload ne replace hoil
        arr.splice(index, 1, action.payload);
      }
      // return arr;
      return { ...state, items: arr };
    },
  },
});

export const { addProduct } = cartSlice.actions;

export const selectCart = (state) => state.cart;
export const selectCartItems = (state) => state.cart.items;
export const selectCartLength = (state) => state?.cart?.items?.length;

export default cartSlice.reducer;

// Ya logic madhe mi id and qty expect karat aahe from payload. So jenvha jenvha addProduct sathi action dispatch karnar tenvha id and qty dyayachi.

// khali explain kelel logic aaplyala reducers madhe dyayach aahe.

// customer madhe customer chya details asnar.
// items madhe products asnar
// konta product, kiti quantity, tyacha id etc ekach product chya quantity add kelya tar same id var quantity vadhalya pahijet.
// Cart madhe jar quantity sathi dropdown ghenar asal tar, id sobat direct quantity pass karu shakato. And +/- ghenar aso tar logic change hoil.
// Aapan dropdown gheun reducer banvatoy.

// NOTE
// payload jasa pass karnar tas logic reducer madhe asnar.

// Ethe asa payload asnar
// const payload = {id:2, qty:5}

// cart object asa asnar aahe
// const cart = {
//     customer : { },
//     items : [
//         {id:1,qty:1},
//     ],
// }

// ha cart state madhe save aahe So
// state.cart. => asa access ghyachay.

// Reducer logic
// Payload through pathavlelya product cha id ani state madhil item array madhe je products aahet tyacha id jar equal asel tar item madhil tya product cha index no. return kelay const index madhe.

// Return kartana aadhi array kela hota, DevTool pahun tyala object kela karan cart he initially object madhe aahe.
// return arr => return { ...state, items: arr }
// Addhi object la override karun tya jagi array yaycha. Navin return nusar object yeil jyat aadhichi state access keli aani tyatil items update kele
