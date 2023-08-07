import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(content));

    dispatch(setNotification('New anecdote added!', 5))
  };

  return (
    <form onSubmit={addAnecdote}>
      <h2>create new</h2>

      <input name="anecdote" />

      <button type="submit">create</button>
    </form>
  );
};

export default NewAnecdote;
