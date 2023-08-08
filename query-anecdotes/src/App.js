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
      case "VOTE":
        return "you voted for ... anecdote";
      case "CREATE":
        return "new anecdote added!";
      default:
        return state;
    }
  };

  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    "test message 123"
  );

  const queryClient = useQueryClient();

  const result = useQuery("anecdotes", getAnecdotes);

  const voteAnecdoteMutation = useMutation(updateVotes, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });

  const handleVote = (anecdote) => {
    voteAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
    // const type = 'VOTE'
    notificationDispatch({ type: 'VOTE' })
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
        <AnecdoteForm type='CREATE' />

        {anecdotes.map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)} type="vote">
                vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default App;
