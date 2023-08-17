import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import OneUser from './OneUser';

function UsersList() {
  const users = useSelector((state) => state.users);

  if (!users) {
    return null;
  }

  return (
    <div>
      {users.map((user) => (
        <OneUser key={user.id} user={user} users={users} />
      ))}
    </div>
  );
}

export default UsersList;
