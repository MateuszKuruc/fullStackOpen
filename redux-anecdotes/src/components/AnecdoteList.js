import { useSelector, useDispatch } from "react-redux";
import { getVote } from "../reducers/anecdoteReducer";
import {
  createNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === "") {
      const anecdotesToDisplay = [...state.anecdotes];
      return anecdotesToDisplay;
    }
    const anecdotesToDisplay = [...state.anecdotes].filter((a) =>
      a.content.includes(state.filter)
    );
    return anecdotesToDisplay;
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(getVote(id));
    const voted = anecdotes.find((a) => a.id === id);
    dispatch(createNotification(`You voted for '${voted.content}'`));
    setTimeout(() => {
      dispatch(removeNotification(""));
    }, 5000);
  };

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
