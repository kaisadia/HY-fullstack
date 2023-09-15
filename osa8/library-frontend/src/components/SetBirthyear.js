import React from "react";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";

function SetBirthyear({ authors, show }) {
  const [born, setBorn] = useState("");
  const [name, setName] = useState("");

  const [editAuthor] = useMutation(EDIT_AUTHOR);

  if (!show) {
    return null;
  }

  const setBirthyear = (event) => {
    event.preventDefault();
    editAuthor({ variables: { name, setBornTo: Number(born) } });
    setBorn("");
    setName("");
  };

  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={setBirthyear}>
        <div>
          {" "}
          Author
          <select value={name} onChange={({ target }) => setName(target.value)}>
            <option value="">Select an author</option>{" "}
            {/* Giving an empty value as the first value  */}
            {authors.map((author) => (
              <option key={author.name} value={author.name}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          {" "}
          Birthyear
          <input
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
          <button>Set birthyear</button>
        </div>
      </form>
    </div>
  );
}

export default SetBirthyear;
