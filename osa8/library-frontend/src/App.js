import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import Notify from "./components/Notify";
import LoginForm from "./components/LoginForm";
import { useApolloClient } from "@apollo/client";

const App = () => {
  const [token, setToken] = useState(null);
  const [page, setPage] = useState("authors");
  const [message, setMessage] = useState(null);

  const client = useApolloClient();

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore(); //nollaa välimuistin
  };

  if (!token) {
    return (
      <div>
        <Notify message={message} />
        <h2>Login</h2>
        <LoginForm setToken={setToken} setMessage={setMessage} />
      </div>
    );
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>
      <Notify message={message} />
      <button onClick={logout}>logout</button>
      <Books show={page === "books"} />
      <Authors show={page === "authors"} setMessage={setMessage} />
      <NewBook show={page === "add"} />
    </div>
  );
};

export default App;
