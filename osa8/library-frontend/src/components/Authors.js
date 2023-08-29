import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";

const Authors = ({ show, authors }) => {
  const [born, setBorn] = useState("");
  const [name, setName] = useState("");

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    onError: (error) => {
      const errors = error.graphQLErrors[0].extensions.error.errors;
      const messages = Object.values(errors)
        .map((e) => e.message)
        .join("\n");
      console.log(messages);
    },
  });

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
      <h2>Set birthyear</h2>
      <form onSubmit={setBirthyear}>
        <div>
          {" "}
          Author
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
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
};

export default Authors;
