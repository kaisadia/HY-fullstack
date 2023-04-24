import { useState } from 'react'
import Search from './components/Search'
import AddPersonForm from './components/AddPersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

 
  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with 
      <Search search={search} setSearch={setSearch}/>
      <h2>Add a new person</h2>
      <AddPersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} 
      persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
     <Persons persons={persons} search={search}/>
    </div>
  )
}

export default App