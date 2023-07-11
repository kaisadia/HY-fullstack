import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

function AnecdoteList() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  );

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => {
                  dispatch(voteAnecdote(anecdote));
                  dispatch(setNotification(`You voted: "${anecdote.content}"`));
                  setTimeout(() => {
                    dispatch(setNotification(null));
                  }, 2000);
                }}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default AnecdoteList;
