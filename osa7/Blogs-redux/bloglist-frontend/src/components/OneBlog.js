import React from 'react';
import './oneUser.css';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';

function OneBlog({ blogs }) {
  const id = useParams().id;
  const blog = blogs.find((n) => n.id === id);

  if (!blog) {
    return null;
  }
  if (!blog.comments) {
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
          <h3>Comments</h3>
          <div>
            {blog.comments.length === 0 ? (
              <p>No comments yet</p>
            ) : (
              <ul>
                {blog.comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            )}
          </div>
          <CommentForm blog={blog} />
        </div>
      </div>
    </div>
  );
}
export default OneBlog;
