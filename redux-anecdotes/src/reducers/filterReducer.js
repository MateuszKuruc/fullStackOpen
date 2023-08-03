import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "ALL",
  reducers: {
    filterChange(state, action) {
      const searchWord = action.payload;
      return searchWord;
    },
  },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
