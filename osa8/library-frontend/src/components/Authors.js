import SetBirthyear from "./SetBirthyear";
import { useQuery } from "@apollo/client";
import { ALL_AUTHORS } from "../queries";

const Authors = ({ setMessage, show }) => {
  const authors = useQuery(ALL_AUTHORS);

  if (authors.loading) {
    return <div>loading...</div>;
  }

  if (!authors) {
    return null;
  }

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
          {authors.data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SetBirthyear authors={authors} setMessage={setMessage} show={show} />
    </div>
  );
};

export default Authors;
