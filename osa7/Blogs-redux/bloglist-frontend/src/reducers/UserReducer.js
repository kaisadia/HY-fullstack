import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login';
import blogService from '../services/blogs';
import { notification } from './NotificationReducer';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    loginUser(state, action) {
      return action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;

export const setLoggedinUser = (credentials) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(credentials);
      dispatch(loginUser(user));
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)); //käyttäjätiedot local storageen muistiin
      blogService.setToken(user.token); //token käyttäjälle
    } catch (exception) {
      dispatch(notification({ message: 'Wrong credentials', type: 'error' }));
    }
  };
};
