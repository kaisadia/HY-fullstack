import { configureStore } from '@reduxjs/toolkit';
import NotificationReducer from './reducers/NotificationReducer';

const store = configureStore({
  reducer: {
    notification: NotificationReducer,
  },
});

export default store;
