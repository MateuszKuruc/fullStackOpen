const App = () => {
    const course = {
      name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ]
  }
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total total={course.parts.map(part => part.exercises)} />
      </div>
    );
  };
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercise}
      </p>
    );
  };
  
  const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
      </div>
    );
  };
  
  const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises {props.total[0] + props.total[1] + props.total[2]}
        </p>
      </div>
    );
  };
  
  export default App;
  