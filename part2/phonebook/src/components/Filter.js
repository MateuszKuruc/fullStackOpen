const Filter = (props) => {
  return (
    <div className="filterContainer">
      <h3>Search for contact</h3>
      <input className="filter" onChange={props.handleInput} />
    </div>
  );
};

export default Filter;
