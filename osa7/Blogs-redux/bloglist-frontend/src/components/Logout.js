import React from 'react';

function Logout({ login }) {
  const clickHandler = () => {
    window.localStorage.clear();
  };

  return (
    <div>
      <p>Welcome {login.name}</p>
      <button onClick={clickHandler}>Logout</button>
    </div>
  );
}

export default Logout;
