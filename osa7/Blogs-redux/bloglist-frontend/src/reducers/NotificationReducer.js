import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    removeNotification() {
      return null;
    },
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;

export const notification = (message, type) => {
  return async (dispatch) => {
    dispatch(setNotification(message, type));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 2500);
  };
};
