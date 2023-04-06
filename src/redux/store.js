import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loadingReducer from "./loadingSlice";
import changeCartReducer from "./cartfixedSlice";
import deletehistoryReducer from "./deleteHistorySlice";
import wishlistReducer from "./wishlistSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
    changeCart: changeCartReducer,
    deleteList: deletehistoryReducer,
    wishlist: wishlistReducer,
  },
});
