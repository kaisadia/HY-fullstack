import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ login, blogs }) {
  return (
    <div>
      {blogs
        .filter((blog) => blog.user.username === login.username)
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div>{blog.title}</div>
          </Link>
        ))}
    </div>
  );
}

export default BlogList;
