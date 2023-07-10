const Course = ({ course }) => {
  const total = course.parts
    .map((part) => part.exercises)
    .reduce((total, exercises) => total + exercises, 0);
  console.log(total);

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <h2>total of {total}</h2>
    </div>
  );
};

export default Course;
