import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loadingReducer from "./loadingSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
  },
});
