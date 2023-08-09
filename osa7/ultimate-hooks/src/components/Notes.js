import { useField, useResource } from "../hooks";

const Notes = () => {
  const content = useField("text");
  const [notes, noteService] = useResource("http://localhost:3005/notes");

  const handleNoteSubmit = (event) => {
    event.preventDefault();
    noteService.create({ content: content.value });
    content.onSubmit();
  };

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>
      {notes.map((n) => (
        <p key={n.id}>{n.content}</p>
      ))}
    </div>
  );
};

export default Notes;
