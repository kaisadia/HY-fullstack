import React from 'react';
import axios from 'axios';

function Persons({persons, search, setPersons}) {

const personsToShow = persons.filter(person => {
    if(search === ''){
        return person
    } else if (person.name.toLowerCase().includes(search.toLowerCase())){
        return person}})


    const deleteHandler = (id) => {
    const updatedPersons = persons.filter(person => person.id !== id)
    const confirm = window.confirm(`Are you sure you want to delete ${persons.find(x => x.id === id).name}?`) 
    if(confirm === true) {
        axios.delete(`http://localhost:3001/api/persons/${id}`) 
        .then(() => console.log(`deleted ${id}`))
        .then(setPersons(updatedPersons))
    } else {
        return persons
    }
}

            
      
    return (
        <div>
            {personsToShow.map(person => 
      <p key={person.name}>{person.name} {person.number} 
      <button onClick={() => deleteHandler(person.id)}>Delete</button>
    </p>)}
        </div>
    );
}

export default Persons;