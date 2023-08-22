import React from 'react';
import styled from 'styled-components';

function Logout({ login }) {
  const clickHandler = () => {
    window.localStorage.clear();
  };

  return (
    <Div>
      <div>
        Welcome {login.name}
        <Button onClick={clickHandler}>Logout</Button>
      </div>
    </Div>
  );
}

export default Logout;

const Button = styled.button`
  background: Mistyrose;
  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Salmon;
  border-radius: 3px;
`;

const Div = styled.div`
  background: Mistyrose;
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
`;
