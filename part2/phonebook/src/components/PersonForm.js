const PersonForm = (props) => {
  return (
    <div>
      <div>
        <input value={props.name} onChange={props.handleNewName} />
      </div>
      <div>
        <input value={props.number} onChange={props.handleNewNumber} />
      </div>
      <div>
        <button type={props.type} onClick={props.handleNewPerson}>add</button>
      </div>
    </div>
  );
};

export default PersonForm;