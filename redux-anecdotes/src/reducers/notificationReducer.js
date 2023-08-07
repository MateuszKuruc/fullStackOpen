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

export const { createNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;

export const setNotification = (content, time) => {
  return async (dispatch) => {
    dispatch(createNotification(content));
    setTimeout(() => {
      dispatch(removeNotification(""));
    }, time * 1000);
  };
};
