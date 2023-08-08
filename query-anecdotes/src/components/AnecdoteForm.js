import { useMutation, useQueryClient } from "react-query";
import { createAnecdote } from "../requests";
import { useContext } from "react";
import NotificationContext from "../NotificationContext";

const AnecdoteForm = () => {
  const [notification, notificationDispatch] = useContext(NotificationContext);

  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      queryClient.invalidateQueries("anecdotes");
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;

    event.target.anecdote.value = "";

    if (content.length >= 5) {
      newAnecdoteMutation.mutate({ content, votes: 0 });
      notificationDispatch({
        type: "SHOW",
        payload: `New anecdote '${content}' was added!`,
      });
      setTimeout(() => {
        notificationDispatch({ type: "HIDE" });
      }, 5000);
    } else {
      notificationDispatch({
        type: "SHOW",
        payload: "Too short anecdote, must have length 5 or more!",
      });
      setTimeout(() => {
        notificationDispatch({ type: 'HIDE' })
      }, 5000);
    }
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
