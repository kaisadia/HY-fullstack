import React from 'react';
import Togglable from './Togglable';
import { useDispatch } from 'react-redux';
import { notification } from '../reducers/NotificationReducer';
import { updateLikes, removeBlog } from '../reducers/BlogReducer';

function BlogPost({ blog }) {
  const dispatch = useDispatch();

  const handleUpdateLikes = async () => {
    try {
      dispatch(updateLikes(blog.id, blog));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = () => {
    if (window.confirm(`Do you really want to delete "${blog.title}"?`))
      try {
        console.log(`deleted post with id ${blog.id}`);
        dispatch(removeBlog(blog.id));
        dispatch(notification(`Deleted ${blog.title}`));
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <div key={blog.id} className="blogs">
      <p>{blog.title}</p>
      <Togglable button1="Show" button2="Hide">
        <p>URL: {blog.url}</p>
        <p>
          Likes: {blog.likes} <button onClick={handleUpdateLikes}>Like</button>
        </p>
        <p>Author: {blog.author}</p>
        <button onClick={deleteHandler}>Remove</button>
      </Togglable>
    </div>
  );
}
export default BlogPost;
