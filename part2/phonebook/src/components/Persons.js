const Persons = (props) => {
  return (
    <div>
      {props.display.map((person) => (
        <div key={person.id}>
          <p>{person.name} {person.number}</p>
        </div>
      ))}
    </div>
  );
};

export default Persons;
