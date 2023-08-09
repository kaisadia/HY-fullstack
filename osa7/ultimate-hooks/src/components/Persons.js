import { useField, useResource } from "../hooks";

const Persons = () => {
  const name = useField("text");
  const number = useField("text");

  const [persons, personService] = useResource("http://localhost:3005/persons");

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    personService.create({ name: name.value, number: number.value });
    name.onSubmit();
    number.onSubmit();
  };

  return (
    <div>
      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br />
        number <input {...number} />
        <button>create</button>
      </form>
      {persons.map((n) => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
