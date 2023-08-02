import Notes from "./components/Notes";
import NewNote from "./components/NewNote";

const App = () => {
  return (
    <div>
      <h2>create note</h2>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
