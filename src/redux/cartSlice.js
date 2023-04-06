import { createSlice } from "@reduxjs/toolkit";

const setup = () => {
  let cart =
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

  const listdelete = JSON.parse(localStorage.getItem("listdelete"));

  listdelete.forEach((element) => {
    cart = cart.filter(
      (el) =>
        el.id !== element.id ||
        (el.id === element.id && el.size !== element.size)
    );
  });

  localStorage.setItem("listdelete", JSON.stringify([]));
  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};

const initialState = { cart: setup() };

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
      let { id, currentsize, newsize } = action.payload;

      let count = state.cart.filter((el) => el.id === id);

      if (count.length < 2) {
        //console.log("vao1");
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
        let result = state.cart.filter(
          (el) => el.id !== id || (el.id === id && el.size !== currentsize)
        );

        state.cart = [...result];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    deleteItem: (state, action) => {
      //console.log("vao");
      let { id, size } = action.payload;
      let result = state.cart.filter(
        (el) => el.id !== id || (el.id === id && el.size !== size)
      );
      state.cart = [...result];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addItem, updateQuantityItem, updateSizeItem, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
