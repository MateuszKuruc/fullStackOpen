import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import VisibilityFilter from "./components/VisibilityFilter";

const App = () => {
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h2>create note</h2>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
