import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find((product) => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
