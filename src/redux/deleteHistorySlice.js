import { createSlice } from "@reduxjs/toolkit";



export const deleteHistorySlice = createSlice({
  name: "deleteHistory",
  initialState: {
    list: [],
  },
  reducers: {
    addItemDelete: (state, action) => {
      const { id, size } = action.payload;
      state.list = [
        ...state.list,
        {
          id: id,
          size: size,
        },
      ];
      localStorage.setItem("listdelete", JSON.stringify(state.list));
    },
    removeItemDelete: (state, action) => {
      const { id, size } = action.payload;
      let result = state.list.filter(
        (el) => el.id !== id || (el.id === id && el.size !== size)
      );
      //console.log(result.length);
      state.list = [...result];
      localStorage.setItem("listdelete", JSON.stringify(state.list));
    },
  },
});

export const { addItemDelete, removeItemDelete } = deleteHistorySlice.actions;
export default deleteHistorySlice.reducer;
