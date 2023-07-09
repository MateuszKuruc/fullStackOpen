import Note from "./components/Note";

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
        {notes.map((note) => (
          <Note key={note.id} note={note} />
          // <li key={note.id}>
          //   {note.content}
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
