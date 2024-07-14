import { createSlice } from "@reduxjs/toolkit";

const prodcutsSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    cart: 0,
    totalPrice: 0
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload];
    }
  }
});

export const { setProducts } = prodcutsSlice.actions;

export default prodcutsSlice.reducer;
