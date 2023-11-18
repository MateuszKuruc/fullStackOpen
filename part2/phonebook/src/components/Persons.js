const Persons = (props) => {
  return (
    <div className="contactContainer">
      <h3
       className="contactHeader"
      >
        Contact list
      </h3>
      {props.display.map((person) => (
        <div key={person.id}>
          <div className="contactDetails">
            <p>{person.name}</p>
            <p>{person.number} </p>
            <button onClick={() => props.deleteData(person)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Persons;
