import React from 'react';
import './oneUser.css';
import { useParams, Link } from 'react-router-dom';

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
      <h2>Blogs by {oneUser.name}</h2>
      <div>
        {oneUser.blogs.length === 0 ? (
          <p>{`${oneUser.name} hasn't posted anything yet`}</p>
        ) : (
          <ul>
            {oneUser.blogs
              .sort((a, b) => b.likes - a.likes)
              .map((blog) => (
                <Link to={`/blogs/${blog.id}`} key={blog.id}>
                  <div>{blog.title}</div>
                </Link>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default OneUser;
