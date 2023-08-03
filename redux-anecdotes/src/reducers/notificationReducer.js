import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "just a test notification!",
  reducers: {
    createNotification(state, action) {
      const content = action.payload;
      return content;
    },
  },
});

export const { createNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
