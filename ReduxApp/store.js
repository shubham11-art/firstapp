// setting store through toolkit

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/CounterSlice";
import userReducer from "./Slices/UsersSlice";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/CartSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE, // punha load karane
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
  products: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
