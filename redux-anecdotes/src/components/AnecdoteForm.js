import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import {
  createNotification,
  removeNotification,
} from "../reducers/notificationReducer";
import noteService from '../services/anecdotes';

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    // dispatch(createAnecdote(content));
    const newAnecdote = await noteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))

    dispatch(createNotification("New anecdote added!"));
    setTimeout(() => {
      dispatch(removeNotification(""));
    }, 5000);
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
