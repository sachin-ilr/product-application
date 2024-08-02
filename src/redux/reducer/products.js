import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ id, title, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    incrementCart: (state, action) => {
      const { id } = action.payload;
      const product = state.cart.find((item) => item.id === id);
      if (product) {
        product.quantity++;
      }
    },
    decrementCart: (state, action) => {
      const { id } = action.payload;
      const product = state.cart.find((item) => item.id === id);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  incrementCart,
  decrementCart,
} = productsSlice.actions;

export default productsSlice.reducer;
