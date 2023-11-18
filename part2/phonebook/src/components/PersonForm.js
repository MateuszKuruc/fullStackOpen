const PersonForm = (props) => {
  return (
    <div className="form">
      <h2>New contact</h2>
      <div className="formFields">
        <h4>Name</h4>
        <input
          className="inputField"
          value={props.name}
          onChange={props.handleNewName}
        />
      </div>
      <div className="formFields">
        <h4>Number</h4>
        <input
          className="inputField"
          value={props.number}
          onChange={props.handleNewNumber}
        />
      </div>
      <div>
        <button type={props.type} onClick={props.handleNewPerson}>
          add
        </button>
      </div>
    </div>
  );
};

export default PersonForm;
