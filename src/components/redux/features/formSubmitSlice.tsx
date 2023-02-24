import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    retriveData: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default formSlice.reducer;
export const { retriveData } = formSlice.actions;
