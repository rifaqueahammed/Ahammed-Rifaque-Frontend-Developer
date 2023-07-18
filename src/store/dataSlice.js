import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
