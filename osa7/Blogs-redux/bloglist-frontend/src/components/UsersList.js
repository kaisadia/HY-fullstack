import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function UsersList({ users }) {
  if (!users) {
    return null;
  }

  return (
    <div>
      {users.map((user) => (
        <Row key={user.id}>
          <Link to={`/users/${user.id}`}>
            <div>{user.name}</div>
          </Link>
          <Column>{user.blogs.length}</Column>
        </Row>
      ))}
    </div>
  );
}

export default UsersList;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em;
`;

const Column = styled.div`
  width: 50%;
  font-weight: bold;
`;
