import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    createNotification(state, action) {
      const content = action.payload;
      return content;
    },
    removeNotification(state, action) {
      const content = action.payload;
      return content;
    },
  },
});

export const { createNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
