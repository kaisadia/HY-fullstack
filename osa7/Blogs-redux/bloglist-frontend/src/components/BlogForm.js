import React from 'react';
import { useDispatch } from 'react-redux';
import { notification } from '../reducers/NotificationReducer';
import { createBlogpost } from '../reducers/BlogReducer';
import { useState } from 'react';

const BlogForm = ({ blogFormRef }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const addBlog = async (event) => {
    event.preventDefault();
    const blogObject = {
      title: title,
      author: author,
      url: url,
    };
    dispatch(notification(`Added ${blogObject.title}`));

    try {
      dispatch(createBlogpost(blogObject));
      setTitle('');
      setAuthor('');
      setUrl('');
      blogFormRef.current.toggleVisibility();
    } catch (error) {
      dispatch(notification('Oops, something went wrong'));
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={addBlog}>
        <div>
          {' '}
          Blog title
          <input
            id="title"
            type="text"
            value={title}
            name="title"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          {' '}
          Author
          <input
            id="author"
            type="text"
            value={author}
            name="author"
            placeholder="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <div>
          {' '}
          Url
          <input
            id="url"
            type="text"
            value={url}
            name="url"
            placeholder="url"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
        <button id="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
