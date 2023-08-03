const Notification = ({ notification }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  return !notification ? (
    <div>{notification}</div>
  ) : (
    <div style={style}>{notification}</div>
  );
};

export default Notification;
