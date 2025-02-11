import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice/CartSlice";
import authReducer from "../cartSlice/AuthSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;