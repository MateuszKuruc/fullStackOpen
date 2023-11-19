import { FaArrowDown } from "react-icons/fa";

const Filter = (props) => {
  return (
    <div className="filterContainer">
      <div style={{ display: "flex", gap: "1rem" }}>
        <h3>Search for contact</h3>
        <FaArrowDown size={30} />
      </div>
      <input className="filter" onChange={props.handleInput} />
    </div>
  );
};

export default Filter;
