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
import { loginUser } from './reducers/UserReducer';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    dispatch(initializeBlogs());
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
      {!user && <LoginForm user={user} blogs={blogs} />}
      {user && (
        <div>
          <Logout user={user} />
          <Togglable
            user={user}
            ref={blogFormRef}
            button1="Create"
            button2="Cancel"
          >
            <BlogForm
              setBlogs={setBlogs}
              user={user}
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
            <BlogList user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
