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

  console.log("page:", page, "token:", token);

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
        <Books show={page === "books"} />
        <NewBook show={page === "add"} />
      </>
    );
  }
};

export default App;
