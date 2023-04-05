import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isload: false,
  },
  reducers: {
    ToggleLoad: (state, action) => {
      state.isload = !state.isload;
    },
  },
});

export const { ToggleLoad } = loadingSlice.actions;
export default loadingSlice.reducer;
