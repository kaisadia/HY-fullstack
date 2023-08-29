import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { ALL_AUTHORS, ALL_BOOKS } from "./queries";
import { useQuery } from "@apollo/client";
import Notify from "./components/Notify";
import SetBirthyear from "./components/SetBirthyear";

const App = () => {
  const [page, setPage] = useState("authors");
  const [message, setMessage] = useState(null);

  const authorResult = useQuery(ALL_AUTHORS);
  const booksResult = useQuery(ALL_BOOKS);

  if (authorResult.loading || booksResult.loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>
      <Notify message={message} />

      <Authors
        show={page === "authors"}
        authors={authorResult.data.allAuthors}
        setMessage={setMessage}
      />

      <Books show={page === "books"} books={booksResult.data.allBooks} />

      <NewBook show={page === "add"} />
    </div>
  );
};

export default App;
