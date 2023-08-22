import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import blogService from './services/blogs';
import { initializeBlogs } from './reducers/BlogReducer';
import { loginUser } from './reducers/LoginReducer';
import { initializeUsers } from './reducers/UserReducer';
import UsersList from './components/UsersList';
import { Routes, Route, Link } from 'react-router-dom';
import OneUser from './components/OneUser';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import OneBlog from './components/OneBlog';
import styled from 'styled-components';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const blogs = useSelector((state) => state.blogs);
  const login = useSelector((state) => state.login);

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

  const padding = {
    padding: 5,
  };

  return (
    <div>
      <Navigation>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
      </Navigation>

      <Routes>
        <Route path="/" element={<Home users={users} login={login} />} />
        <Route path="/users/:id" element={<OneUser users={users} />} />
        <Route path="/users" element={<UsersList users={users} />} />
        <Route path="/blogs/:id" element={<OneBlog blogs={blogs} />} />
      </Routes>
    </div>
  );
};

export default App;

const Navigation = styled.div`
  background: Lightblue;
  padding: 1em;
`;
