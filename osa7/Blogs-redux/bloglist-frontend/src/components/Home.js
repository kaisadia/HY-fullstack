import Notification from './/Notification';
import Logout from './Logout';
import LoginForm from './LoginForm';
import './oneUser.css';
import UsersList from './UsersList';
import BlogForm from './BlogForm';
import Togglable from './Togglable';
import { useRef } from 'react';

const Home = ({ users, login }) => {
  const blogFormRef = useRef();

  return (
    <div>
      <h2>Blogs</h2>
      <Notification />
      {!login && <LoginForm />}
      {login && (
        <div>
          <Logout login={login} />
          <Togglable ref={blogFormRef} button1="Create" button2="Cancel">
            <BlogForm blogFormRef={blogFormRef} />
          </Togglable>
          <div className="row">
            <div className="column">
              <h2>Users</h2>
            </div>
            <div className="column">
              <p>Blogs created</p>
              <UsersList users={users} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
