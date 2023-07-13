import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateVotes } from "../reducers/anecdoteReducer";
import { notification } from "../reducers/notificationReducer";

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
                  dispatch(updateVotes(anecdote));
                  dispatch(notification(`You voted: "${anecdote.content}"`, 3));
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
