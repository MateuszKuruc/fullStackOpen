const Persons = (props) => {
  return (
    <div>
      {props.display.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} {person.number}{" "}
            <button onClick={() => props.deleteData(person)}>delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Persons;
