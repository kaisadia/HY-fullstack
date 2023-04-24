import React from 'react';

function Persons({persons, search}) {

const personsToShow = persons.filter(person => {
    if(search === ''){
        return person
    } else if (person.name.toLowerCase().includes(search.toLowerCase())){
        return person}})
      
    return (
        <div>
            {personsToShow.map(person => 
      <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    );
}

export default Persons;