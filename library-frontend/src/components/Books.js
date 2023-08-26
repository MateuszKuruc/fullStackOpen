import { useQuery } from "@apollo/client";
import { ALL_BOOKS } from "../queries";
import { useState } from "react";

const Books = ({ show }) => {
  const { loading, data } = useQuery(ALL_BOOKS);
  const [filteredBooks, setFilteredBooks] = useState(null);

  if (!show) {
    return null;
  }

  if (loading) {
    return <div>loading</div>;
  }

  const books = data.allBooks;
  console.log("books:", books);
  console.log("filtered books:", filteredBooks);

  const filterBooksByGenre = (genre) => {
    if (!genre) {
      return setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) => book.genres.includes(genre));
      console.log("filtered", filtered);
      setFilteredBooks(filtered);
    }
  };

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>published</th>
          </tr>
          {(!filteredBooks ? books : filteredBooks).map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
              <td>{a.genres.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Filters</h2>
        <button onClick={() => filterBooksByGenre()}>All books</button>
        <button onClick={() => filterBooksByGenre("Fantasy")}>Fantasy</button>
        <button onClick={() => filterBooksByGenre("Science-fiction")}>
          Science-fiction
        </button>
        <button onClick={() => filterBooksByGenre("History")}>History</button>
        <button onClick={() => filterBooksByGenre("Technology")}>
          Technology
        </button>
      </div>
    </div>
  );
};

export default Books;
