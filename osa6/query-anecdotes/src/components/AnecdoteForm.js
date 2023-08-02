import { createAnecdote } from "../requests";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";
import NotificationContext from "../NotificationContext";

const AnecdoteForm = () => {
  const [notification, notificationDispatch] = useContext(NotificationContext);
  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes"); //invalidoi edellisen listan, jotta uusi anekdootti näkyy
    },
    onError: () => {
      notificationDispatch({ type: "ERROR" });
      setTimeout(() => {
        notificationDispatch({ type: "TIMEOUT" });
      }, 2000);
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log("new anecdote added");
    newAnecdoteMutation.mutate({ content, votes: 0 });
    notificationDispatch({ type: "ADD" });
    setTimeout(() => {
      notificationDispatch({ type: "TIMEOUT" });
    }, 2000);
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
