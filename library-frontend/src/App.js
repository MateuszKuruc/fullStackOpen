import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";
import {
  useApolloClient,
  useQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";
import { BOOK_ADDED } from "./queries";

const App = () => {
  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(
    localStorage.getItem("library-user-token")
  );
  const client = useApolloClient();

  useSubscription(BOOK_ADDED, {
    onData: ({ data }) => {
      console.log(data);
      window.alert(`New book added`);
    },
  });

  const logout = () => {
    localStorage.clear();
    setToken(null);
    client.resetStore();
  };

  if (!token) {
    return (
      <>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("login")}>login</button>
        <Authors show={page === "authors"} />
        <Books show={page === "books"} />
        <LoginForm setToken={setToken} show={page === "login"} />
      </>
    );
  }

  if (token) {
    return (
      <>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
        <button onClick={logout}>logout</button>
        <Authors show={page === "authors"} />
        <Books userToken={token} show={page === "books"} />
        <NewBook show={page === "add"} />
      </>
    );
  }
};

export default App;
