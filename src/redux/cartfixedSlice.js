import { createSlice } from "@reduxjs/toolkit";

export const cartFixedSlice = createSlice({
  name: "changeCart",
  initialState: {
    change: false,
  },
  reducers: {
    isChange: (state, action) => {
      state.change = !state.change;
    },
  },
});

export const { isChange } = cartFixedSlice.actions;
export default cartFixedSlice.reducer;
