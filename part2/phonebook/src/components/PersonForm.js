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
        <button className="button" type={props.type} onClick={props.handleNewPerson}>
          <h4 style={{color: "#374151"}}>Submit</h4>
        </button>
      </div>
    </div>
  );
};

export default PersonForm;
