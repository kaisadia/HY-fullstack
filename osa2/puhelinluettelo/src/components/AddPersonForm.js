import React from 'react';

function AddPersonForm({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) {

    const addPerson = (event) => {
        event.preventDefault()
        
        const personObject = {
          name: newName,
          number: newNumber
        }
      
      persons.some(person => person.name.toLowerCase() === personObject.name.toLowerCase()) ? 
      alert(`${personObject.name} is already added to phonebook`) 
      : setPersons(persons.concat(personObject));
      setNewName('') 
      setNewNumber('')
      }

      const handleNameAdd = (event) => {
        setNewName(event.target.value)
       }
      
       const handleNumberAdd = (event) => {
        setNewNumber(event.target.value)
       }

    return (
        <div>
            <form onSubmit={addPerson}>
            name: <input value={newName} onChange={handleNameAdd} name="name"/>
            number: <input value={newNumber} onChange={handleNumberAdd} name="number"/>
            <button type="submit">add</button>
            </form>
        </div>
    );
}

export default AddPersonForm;