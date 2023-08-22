import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CommentForm from './CommentForm';
import { updateLikes } from '../reducers/BlogReducer';
import styled from 'styled-components';

function OneBlog({ blogs }) {
  const id = useParams().id;
  const blog = blogs.find((n) => n.id === id);

  const dispatch = useDispatch();

  const handleUpdateLikes = async () => {
    try {
      dispatch(updateLikes(blog.id, blog));
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return null;
  }
  if (!blog.comments) {
    return null;
  }

  return (
    <div key={blog.id}>
      <Title>{blog.title}</Title>
      <div>
        <div key={blog.id}>
          <Text>
            <a href={blog.url}>{blog.url}</a>
          </Text>
          <Text>
            {blog.likes} likes
            <Button onClick={handleUpdateLikes}>Like</Button>
          </Text>
          <Text>Added by {blog.author}</Text>
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

const Button = styled.button`
  background: Mistyrose;
  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid salmon;
  border-radius: 3px;
`;

const Text = styled.div`
  font-size: 1.1em;
  margin: 1em;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 1em;
`;
