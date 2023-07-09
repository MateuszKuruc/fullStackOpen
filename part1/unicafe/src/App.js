import { useState } from "react";

const App = () => {
  const title = "give feedback";
  const statistics = "statistics";

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const calcAverage = () => {
    if (total === 0) return
    return Number((good * 1 + neutral * 0 + bad * -1) / total);
  };

  const calcPositive = () => {
    if (total === 0) return
    return (Number((good / total) * 100));
  }

  const handleGoodFeedback = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  if (total !== 0) {
    return (
      <div>
        <Title title={title} />
      <Button handleClick={handleGoodFeedback} text="good" />
      <Button handleClick={handleNeutralFeedback} text="neutral" />
      <Button handleClick={handleBadFeedback} text="bad" />
      <Title title={statistics} />
      <Stats value={good} text="good" />
      <Stats value={neutral} text="neutral" />
      <Stats value={bad} text="bad" />
      <Stats total={total} text="total" />
      <Stats value={calcAverage()} text="average" />
      <Stats value={calcPositive()} text='positive' percent='%' />
      </div>
    )
  }
  return (
    <div>
      <Title title={title} />
      <Button handleClick={handleGoodFeedback} text="good" />
      <Button handleClick={handleNeutralFeedback} text="neutral" />
      <Button handleClick={handleBadFeedback} text="bad" />
      <Title title={statistics} />
      <Stats text='No feedback given' />
    </div>
  );
};

const Title = (props) => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Stats = (props) => {

  return (
    <div>
    <h1>{props.header}</h1>
    <p>
      {props.text} {props.value} {props.total} {props.percent}
    </p>
    </div>
  );
 
};




export default App;
