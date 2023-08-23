import { useMutation } from "@apollo/client";
import { EDIT_AUTHOR } from "../queries";
import { useState } from "react";

const Authors = ({ show, authors }) => {
  const [name, setName] = useState(null);
  const [born, setBorn] = useState(null);

  const [editAuthor] = useMutation(EDIT_AUTHOR);

  if (!show) {
    return null;
  }

  const submit = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Set birthyear</h2>
        <form onSubmit={submit}>
          <div>
            name
            <input placeholder="enter name"></input>
          </div>
          <div>
            born
            <input placeholder="enter year"></input>
          </div>
          <button type="submit">update author</button>
        </form>
      </div>
    </div>
  );
};

export default Authors;
