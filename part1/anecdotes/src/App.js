import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  console.log("votes general", votes);

  const handleVote = () => {
    const copyVotes = [...votes];
    console.log("copy", copyVotes);
    copyVotes[selected] += 1;
    setVotes(copyVotes);
    console.log("copy later", copyVotes);
  };

  const handleChange = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
    console.log("clicked", randomNumber);
  };

  const highestVoted = () => {
    const highestScore = Math.max(...votes);
    console.log(highestScore);
    const highestScoreIndex = votes.indexOf(highestScore);
    console.log(highestScoreIndex);
    return highestScoreIndex;
  };
  // highestVoted();

  return (
    <div>
      <Anecdote item={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleChange} text="next anecdote" />
      <MostVoted
        item={anecdotes[highestVoted()]}
        votes={votes[highestVoted()]}
      />
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Anecdote = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.item}</p>
      <p>{props.votes}</p>
    </div>
  );
};

const MostVoted = (props) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.item}</p>
      <p>{props.votes}</p>
    </div>
  );
};

export default App;
