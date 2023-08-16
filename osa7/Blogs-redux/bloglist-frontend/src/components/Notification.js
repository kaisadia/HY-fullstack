import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const style = {
    color: 'green',
    fontsize: 20,
    padding: 10,
    marginbottom: 10,
    display: notification ? 'block' : 'none',
  };

  return <div style={style}>{notification}</div>;
};

export default Notification;
