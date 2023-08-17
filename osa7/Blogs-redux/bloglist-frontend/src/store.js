import { configureStore } from '@reduxjs/toolkit';
import NotificationReducer from './reducers/NotificationReducer';
import BlogReducer from './reducers/BlogReducer';
import UserReducer from './reducers/UserReducer';
import LoginReducer from './reducers/LoginReducer';

const store = configureStore({
  reducer: {
    notification: NotificationReducer,
    blogs: BlogReducer,
    users: UserReducer,
    login: LoginReducer,
  },
});

export default store;
