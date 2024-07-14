import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/products";

const rootReducer = {
  products: productReducer
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_PATH !== "production"
});

export default store;
