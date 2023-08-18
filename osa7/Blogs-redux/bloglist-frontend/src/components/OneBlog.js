import React from 'react';
import './oneUser.css';
import { useParams } from 'react-router-dom';

function OneBlog({ blogs }) {
  const id = useParams().id;
  const blog = blogs.find((n) => n.id === id);

  if (!blog) {
    return null;
  }

  return (
    <div key={blog.id}>
      <h2>{blog.title}</h2>
      <div>
        <div key={blog.id}>
          <a href={blog.url}>{blog.url}</a>
          <div>{blog.likes} likes</div>
          <div>Added by {blog.author}</div>
        </div>
      </div>
    </div>
  );
}
export default OneBlog;
