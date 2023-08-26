import { useQuery } from "@apollo/client";
import { ALL_BOOKS, ME } from "../queries";
import { useEffect, useState } from "react";

const Books = ({ show, userToken }) => {
  const { loading: booksLoading, data: booksData } = useQuery(ALL_BOOKS);
  const {
    loading: userLoading,
    data: userData,
    refetch: refetchUser,
  } = useQuery(ME);
  const [filteredBooks, setFilteredBooks] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userToken && userData) {
      setUser(userData.me);
      console.log("token & data", userToken, userData.me);
    }
  }, [userData, userToken]);

  useEffect(() => {
    if (!userToken) {
      setUser(null);
    }
  }, [userToken]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refetchUser();
  //   }, 5000);
  //   return () => clearInterval(interval)
  // }, [refetchUser]);

  useEffect(() => {
    let interval = null;

    if (!user) {
      interval = setInterval(() => {
        refetchUser();
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [userData, refetchUser, user]);

  if (!show) {
    return null;
  }

  if (booksLoading || userLoading) {
    return <div>loading</div>;
  }

  const books = booksData.allBooks;
  console.log("user", user);

  const filterBooksByGenre = (genre) => {
    if (!genre) {
      return setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) => book.genres.includes(genre));
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
      {userToken && user && user.favoriteGenre ? (
        <div>
          <h2>Recommendations</h2>
          Books in your favourite genre: {user.favoriteGenre}
        </div>
      ) : null}

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
