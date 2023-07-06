import { combineReducers } from "redux";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);
const initialFilter = "";

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.payload.id;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case "FILTER":
      const content = action.payload.content;
      return content;
    default:
      return state;
  }
};

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
});

export const vote = (id) => {
  return {
    type: "VOTE",
    payload: { id },
  };
};

export const addAnecdote = (content) => {
  return {
    type: "ADD",
    payload: {
      content,
      id: getId(),
      votes: 0,
    },
  };
};

export const filter = (content) => {
  return {
    type: "FILTER",
    payload: { content },
  };
};

export default reducer;
