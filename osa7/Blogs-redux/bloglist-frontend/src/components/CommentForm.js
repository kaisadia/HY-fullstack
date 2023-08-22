import React from 'react';
import { useField } from '../hooks/index';
import { useDispatch } from 'react-redux';
import { notification } from '../reducers/NotificationReducer';
import { updateComments } from '../reducers/BlogReducer';

const CommentForm = ({ blog }) => {
  const comment = useField('text');
  const dispatch = useDispatch();

  const handleComment = (event) => {
    try {
      event.preventDefault();
      dispatch(updateComments(blog.id, comment.value));
      dispatch(notification(`Added ${comment.value}`));
      comment.onSubmit();
    } catch (error) {
      dispatch(notification('Oops, something went wrong'));
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleComment}>
        New Comment
        <div>
          <input {...comment} />
        </div>
        <button id="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
