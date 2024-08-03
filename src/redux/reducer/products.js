import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload];
    },
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  setProducts,
  addToCart,
  incrementCart,
  decrementCart,
  removeFromCart,
} = productsSlice.actions;

export default productsSlice.reducer;
