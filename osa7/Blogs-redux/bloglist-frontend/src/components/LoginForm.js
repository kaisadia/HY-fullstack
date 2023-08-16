import React from 'react';
import { useState } from 'react';
import { setLoggedinUser } from '../reducers/UserReducer';

import { useDispatch } from 'react-redux';

function LoginForm({ setError }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const credentials = {
      username: username,
      password: password,
    };
    dispatch(setLoggedinUser(credentials)); //kirjaudutaan käyttäjänimellä ja salasanalla
    setUsername('');
    setPassword('');
    setError(null);
  };

  return (
    <div>
      <h3>Please login</h3>
      <form onSubmit={handleLogin}>
        <div>
          {' '}
          Username
          <input
            id="username"
            type="text"
            value={username}
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          {' '}
          Password
          <input
            id="password"
            type="text"
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <button id="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
