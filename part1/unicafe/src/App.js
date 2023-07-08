import { useState } from "react";

const App = () => {
  const title = "give feedback";
  const statistics = "statistics";

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Title title={title} />
      <Button handleClick={handleGoodFeedback} text="good" />
      <Button handleClick={handleNeutralFeedback} text="neutral" />
      <Button handleClick={handleBadFeedback} text="bad" />
      <Statistics stats={statistics} />
      <Total value={good} text='good' />
      <Total value={neutral} text='neutral' />
      <Total value={bad} text='bad' />
    </div>
  );
};

const Title = (props) => (
  <div>
    <h1>{props.title}</h1>
  </div>
);
const Statistics = (props) => (
  <div>
    <h1>{props.stats}</h1>
  </div>
);
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Total = ({ value, text }) => {
  return (
    <p>{text} {value}</p>
  )
}

export default App;
