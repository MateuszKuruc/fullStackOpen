import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <div key={part.id}>
          <Part name={part.name} exercises={part.exercises} />
        </div>
      ))}
    </div>
  );
};

export default Content;
