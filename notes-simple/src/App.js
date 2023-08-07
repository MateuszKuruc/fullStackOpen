import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import VisibilityFilter from "./components/VisibilityFilter";
import { useEffect } from "react";
import noteService from "./services/notes";
import { setNotes } from "./reducers/noteReducer";
import { useDispatch } from "react-redux";
import { initializeNotes } from "./reducers/noteReducer";

// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     noteService.getAll().then((notes) => dispatch(setNotes(notes)));
//   }, [dispatch]);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

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
