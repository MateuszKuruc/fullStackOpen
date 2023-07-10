const Total = ({ parts }) => {
  const total = parts
    .map((part) => part.exercises)
    .reduce((total, exercise) => total + exercise, 0);

  return <h3>Total exercises: {total}</h3>;
};

export default Total;
