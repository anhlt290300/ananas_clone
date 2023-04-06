import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    list:
      localStorage.getItem("wishlist") !== null
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [],
  },
  reducers: {
    addWishlist: (state, action) => {
      let { id, category, size, quantity = 1 } = action.payload;
      console.log(size);
      state.list = [
        ...state.list,
        {
          id: id,
          size: size,
          quantity: quantity,
          category: category,
        },
      ];
      localStorage.setItem("wishlist", JSON.stringify(state.list));
    },
    updateSizeWishlist: (state, action) => {
      let { id, size } = action.payload;
      state.list = state.list.map((el) => {
        if (el.id !== id) return el;
        else {
          el.size = size;
          return el;
        }
      });
      localStorage.setItem("wishlist", JSON.stringify(state.list));
    },
    updateQuantityWishlist: (state, action) => {
      let { id, quantity } = action.payload;
      state.list = state.list.map((el) => {
        if (el.id !== id) return el;
        else {
          el.quantity = quantity;
          return el;
        }
      });
      localStorage.setItem("wishlist", JSON.stringify(state.list));
    },
    deleteWishlist: (state, action) => {
      let { id } = action.payload;
      state.list = state.list.filter((el) => el.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(state.list));
    },
  },
});

export const {
  addWishlist,
  deleteWishlist,
  updateQuantityWishlist,
  updateSizeWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
