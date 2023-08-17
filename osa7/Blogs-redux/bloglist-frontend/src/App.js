import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import blogService from './services/blogs';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification';
import BlogForm from './components/BlogForm';
import Togglable from './components/Togglable';
import Logout from './components/Logout';
import { initializeBlogs } from './reducers/BlogReducer';

import BlogList from './components/BlogList';
import { useSelector } from 'react-redux';
import { loginUser } from './reducers/LoginReducer';
import { initializeUsers } from './reducers/UserReducer';
import UsersList from './components/UsersList';
import './components/oneUser.css';

const App = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, [dispatch]); //hakee aina kun blogeissa on tapahtunut muutos. Jos tyhjä, vain kerran

  useEffect(() => {
    //tarkistaa esim. sivua uudelleen ladatessa localstoragesta onko käyttäjä jo kirjautunut
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(loginUser(user));
      blogService.setToken(user.token);
    }
  }, []);

  const blogFormRef = useRef();

  return (
    <div>
      <h2>Blogs</h2>
      <Notification />
      {!login && <LoginForm />}

      {login && (
        <div>
          <Logout login={login} />

          <div className="row">
            <div className="column">
              <h2>Users</h2>
            </div>
            <div className="column">
              <p>Blogs created</p>
            </div>
          </div>
          <UsersList />

          <Togglable
            login={login}
            ref={blogFormRef}
            button1="Create"
            button2="Cancel"
          >
            <BlogForm
              blogFormRef={blogFormRef}
              title={title}
              url={url}
              author={author}
              setTitle={setTitle}
              setUrl={setUrl}
              setAuthor={setAuthor}
            />
          </Togglable>
          <div>
            <BlogList login={login} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
