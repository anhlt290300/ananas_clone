import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loadingReducer from "./loadingSlice";
import changeCartReducer from "./cartfixedSlice";
import deletehistoryReducer from "./deleteHistorySlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
    changeCart: changeCartReducer,
    deleteList: deletehistoryReducer,
  },
});
