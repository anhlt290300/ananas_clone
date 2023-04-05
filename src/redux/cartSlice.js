import { createSlice } from "@reduxjs/toolkit";


const cart =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const initialState = { cart: cart };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let item = action.payload;

      if (state.cart.some((el) => el.id === item.id && el.size === item.size)) {
        //console.log("vao");
        let result = state.cart.map((el) => {
          if (el.id === item.id && el.size === item.size) {
            el.quantity += item.quantity;
            return el;
          } else return el;
        });
        state.cart = [...result];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        state.cart = [...state.cart, item];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    updateQuantityItem: (state, action) => {
      let { id, size, quantity } = action.payload;
      let result = state.cart.map((el) => {
        if (el.id === id && el.size === size) {
          el.quantity = quantity;
          return el;
        } else return el;
      });
      state.cart = [...result];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateSizeItem: (state, action) => {
      let { id, currentsize, newsize, quantity } = action.payload;

      let count = state.cart.filter((el) => el.id === id);

      if (count.length < 2) {
        console.log("vao1");
        let result = state.cart.filter((el) => {
          if (el.id !== id) return el;
          else {
            el.size = newsize;
            return el;
          }
        });
        state.cart = [...result];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        if (state.cart.filter((el) => el.size === newsize).length > 0) {
          let result = state.cart.filter((el) => {
            if (el.id !== id) return el;
            else if (el.size === currentsize) {
            } else if (el.size === newsize) {
              el.quantity += quantity;
              return el;
            } else {
              return el;
            }
            return -1;
          });
          state.cart = [...result];
          localStorage.setItem("cart", JSON.stringify(state.cart));
        } else {
          let result = state.cart.filter((el) => {
            if (el.id !== id) return el;
            else if (el.size === currentsize) {
              el.size = newsize;
              return el;
            } else {
              return el;
            }
          });
          state.cart = [...result];
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
    deleteItem: (state, action) => {
      //console.log("vao");
      let { id, size } = action.payload;
      let result = [];
      state.cart.forEach((element) => {
        if (element.id !== id && element.size !== size)
          result = [...result, element];
      });
      state.cart = result;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    
  },
});

export const {
  addItem,
  updateQuantityItem,
  updateSizeItem,
  deleteItem,
  
} = cartSlice.actions;
export default cartSlice.reducer;
