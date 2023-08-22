import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function OneUser({ users }) {
  if (!users) {
    return null;
  }

  const id = useParams().id;
  const oneUser = users.find((n) => n.id === id);

  if (!oneUser) {
    return null;
  }

  return (
    <div key={oneUser.id}>
      <Title>Blogs by {oneUser.name}</Title>
      <div>
        {oneUser.blogs.length === 0 ? (
          <p>{`${oneUser.name} hasn't posted anything yet`}</p>
        ) : (
          <ul>
            {oneUser.blogs
              .sort((a, b) => b.likes - a.likes)
              .map((blog) => (
                <Link to={`/blogs/${blog.id}`} key={blog.id}>
                  <Text>{blog.title}</Text>
                </Link>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default OneUser;

const Title = styled.h2`
  font-size: 2em;
  margin: 1em;
`;

const Text = styled.div`
  font-size: 1.1em;
  padding: 0.3em;
`;
