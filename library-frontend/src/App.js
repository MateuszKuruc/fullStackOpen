import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";
import { useApolloClient } from "@apollo/client";

const App = () => {
  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(null);
  const client = useApolloClient();

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

  return (
    <>
      <button onClick={() => setPage("authors")}>authors</button>
      <button onClick={() => setPage("books")}>books</button>
      <button onClick={() => setPage("add")}>add book</button>
      <Authors show={page === "authors"} />
      <Books show={page === "books"} />
      <NewBook show={page === "add"} />
      <button onClick={logout}>logout</button>
    </>
  );
};

export default App;
