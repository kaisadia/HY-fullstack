import React from 'react';
import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>{props.button1}</Button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        <Button onClick={toggleVisibility}>{props.button2}</Button>
        {props.children}
      </div>
    </div>
  );
});

Togglable.propTypes = {
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
};

Togglable.displayName = 'Togglable';

export default Togglable;

const Button = styled.button`
  background: Lightblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Cornflowerblue;
  border-radius: 3px;
`;
