import React from 'react';
import people from '../services/people';


function AddPersonForm({newName, setNewName, newNumber, setNewNumber, persons, 
  setPersons, setNotification, setErrNotification}) {

    const addPerson = (event) => {
        event.preventDefault()
        
        const personObject = {
          name: newName,
          number: newNumber
        }
      
      persons.some(person => person.name.toLowerCase() === personObject.name.toLowerCase()) ? 
      alert(`${personObject.name} is already added to phonebook`) || setNewName('') || setNewNumber('')
      :  people
      .create(personObject)
        .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('') 
        setNewNumber('')
        setNotification(`${personObject.name} added to phonebook`)
        setTimeout(() => {
          setNotification(null)
        }, 2000)
      })
      .catch(error => {
        console.log(error.request.response);
        setNewName('') 
        setNewNumber('')
        setErrNotification(error.request.response)
        setTimeout(() => {
          setErrNotification(null)
        }, 2000)
      })
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