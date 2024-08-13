import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slices/cartAddSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
