const Persons = (props) => {
  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h3 style={{ fontSize: "36px" }}>Contact list</h3>
      </div>
      {props.display.map((person) => (
        <div key={person.id}>
          <div className="contactDetails">
            <span className="contactText">{person.name}</span>

            <span className="contactText">{person.number}</span>
            <button className="deleteButton" onClick={() => props.deleteData(person)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Persons;
