import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login';
import blogService from '../services/blogs';
import { notification } from './NotificationReducer';

const loginSlice = createSlice({
  name: 'login',
  initialState: null,
  reducers: {
    loginUser(state, action) {
      return action.payload;
    },
  },
});

export const { loginUser } = loginSlice.actions;
export default loginSlice.reducer;

export const setLoggedinUser = (credentials) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(credentials);
      dispatch(loginUser(user));
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)); //käyttäjätiedot local storageen muistiin
      blogService.setToken(user.token); //token käyttäjälle
    } catch (exception) {
      dispatch(notification('Wrong credentials'));
    }
  };
};
