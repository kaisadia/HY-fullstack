import React from 'react';
import { Link } from 'react-router-dom';

function UsersList({ users }) {
  if (!users) {
    return null;
  }

  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <div>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default UsersList;
