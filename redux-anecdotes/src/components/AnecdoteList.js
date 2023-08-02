import { useSelector, useDispatch } from "react-redux";
import { getVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === "ALL" || state.filter === "") {
      return state.anecdotes;
    }
    return state.anecdotes.filter((a) => a.content.includes(state.filter));
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(getVote(id));
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
