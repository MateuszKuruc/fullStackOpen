import { useMutation } from "@apollo/client";
import { EDIT_AUTHOR, ALL_AUTHORS } from "../queries";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const Authors = ({ show }) => {
  const { loading, data } = useQuery(ALL_AUTHORS);
  const [editAuthor] = useMutation(EDIT_AUTHOR);

  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

  if (!show) {
    return null;
  }

  if (loading) {
    return <div>loading</div>;
  }
  const authors = data.allAuthors;

  const submit = async (event) => {
    event.preventDefault();
    const setBornTo = parseInt(born);

    editAuthor({ variables: { name, setBornTo } });
    setName("");
    setBorn("");
  };

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th>name</th>
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
          <select onChange={(event) => setName(event.target.value)}>
            {authors.map((a) => (
              <option key={a.id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>

          <div>
            born
            <input
              value={born}
              onChange={({ target }) => setBorn(target.value)}
              placeholder="enter year"
            ></input>
          </div>
          <button type="submit">update author</button>
        </form>
      </div>
    </div>
  );
};

export default Authors;
