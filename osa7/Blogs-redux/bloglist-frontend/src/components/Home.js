import Notification from './/Notification';
import Logout from './Logout';
import LoginForm from './LoginForm';
import UsersList from './UsersList';
import BlogForm from './BlogForm';
import Togglable from './Togglable';
import { useRef } from 'react';
import styled from 'styled-components';

const Home = ({ users, login }) => {
  const blogFormRef = useRef();

  return (
    <div>
      <Title>Blogs</Title>
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
              <Subtitle>Users</Subtitle>
            </div>
            <div className="column">
              <Text>Blogs created</Text>
            </div>
          </div>
          <UsersList users={users} />
        </div>
      )}
    </div>
  );
};

export default Home;

const Title = styled.h2`
  font-size: 2em;
  margin: 1em;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin: 1em;
`;

const Text = styled.p`
  font-size: 1.2em;
`;
