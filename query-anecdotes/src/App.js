import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { updateVotes } from "./requests";
import { useReducer } from "react";
import { getAnecdotes } from "./requests";
import NotificationContext from "./NotificationContext";

const App = () => {
  const notificationReducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return action.payload;
      case "HIDE":
        return "";
      default:
        return state;
    }
  };

  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ""
  );

  const queryClient = useQueryClient();

  const result = useQuery("anecdotes", getAnecdotes);
  console.log(result.data);

  const voteAnecdoteMutation = useMutation(updateVotes, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });

  const handleVote = (anecdote) => {
    console.log(anecdote);
    voteAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
    notificationDispatch({
      type: "SHOW",
      payload: `Vote added for '${anecdote.content}'!`,
    });
    setTimeout(() => {
      notificationDispatch({ type: "HIDE" });
    }, 5000);
  };

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>;
  }

  const anecdotes = result.data;

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      <div>
        <h3>Anecdote app</h3>

        <Notification notification={notification} />
        <AnecdoteForm />

        {anecdotes.map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default App;
