import React from 'react';
import { Link } from 'react-router-dom';
import './oneUser.css';

function UsersList({ users }) {
  if (!users) {
    return null;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="row">
          <Link to={`/users/${user.id}`}>
            <div>{user.name}</div>
          </Link>
          <div className="column">{user.blogs.length}</div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
