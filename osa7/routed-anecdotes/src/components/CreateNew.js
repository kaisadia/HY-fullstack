import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";

const CreateNew = ({ addNew, setNotification }) => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("text");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    navigate("/");
    setNotification(`Added ${content.value}`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const handleReset = () => {
    content.onReset();
    author.onReset();
    info.onReset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
          <br />
        </div>
        <div>
          author
          <input {...author} />
          <br />
        </div>
        <div>
          url for more info
          <input {...info} />
          <br />
        </div>
        <button>create</button>
      </form>
      <button onClick={handleReset}>reset</button>
      <div>
        {content.value} {author.value} {info.value}
      </div>
    </div>
  );
};

export default CreateNew;
