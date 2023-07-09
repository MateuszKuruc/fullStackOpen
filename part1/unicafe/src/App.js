import { useState } from "react";

const App = () => {
  const title = "give feedback";
  const statistics = "statistics";

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const calcAverage = () => {
    if (total === 0) return;
    return Number((good * 1 + neutral * 0 + bad * -1) / total);
  };

  const calcPositive = () => {
    if (total === 0) return;
    return Number((good / total) * 100);
  };

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

  return (
    <div>
      <Title title={title} />
      <Button handleClick={handleGoodFeedback} text="good" />
      <Button handleClick={handleNeutralFeedback} text="neutral" />
      <Button handleClick={handleBadFeedback} text="bad" />
      <Title title={statistics} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={calcAverage()}
        positive={calcPositive()}
      />
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

const Statistics = (props) => {
  if (props.total === 0) {
    return 'No feedback given'
  }
  return (
    <table>
      <tbody>
    <StatisticLine text='good' value={props.good} />
    <StatisticLine text='neutral' value={props.neutral} />
    <StatisticLine text='bad' value={props.bad} />
    <StatisticLine text='average' value={props.average} />
    <StatisticLine text='positive' value={props.positive} percent={'%'}/>
    </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
   <tr>
    <td>{props.text}</td>
    <td>{props.value} {props.percent}</td>
   </tr>
  )
}

export default App;
