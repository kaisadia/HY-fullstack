import { Link, useParams } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  const id = useParams().id;
  const anecdote = anecdotes.find((n) => n.id === Number(id));
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <div>Author: {anecdote.author}</div>
      <div>
        For more info see:
        <Link to={anecdote.info}> {anecdote.info}</Link>
      </div>
      <div>
        <strong>{anecdote.votes} votes</strong>
      </div>
    </div>
  );
};

export default Anecdote;
