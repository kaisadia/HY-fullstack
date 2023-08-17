import React from 'react';
import './oneUser.css';

function OneUser({ user }) {
  return (
    <div className="row" key={user.id}>
      <div className="column">{user.name}</div>
      <div className="column">{user.blogs.length}</div>
    </div>
  );
}
export default OneUser;
