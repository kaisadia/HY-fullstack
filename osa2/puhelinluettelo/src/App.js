import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import AddPersonForm from './components/AddPersonForm'
import Persons from './components/Persons'
import people from './services/people'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)


  useEffect(() => {
    people
      .getAll()
        .then(({persons}) => {
        setPersons(persons)
      })
  }, [])

 
  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with 
      <Search search={search} setSearch={setSearch}/>
      <h2>Add a new person</h2>
      <Notification notification={notification} setNotification={setNotification}/>
      <AddPersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} 
      persons={persons} setPersons={setPersons} notification={notification} setNotification={setNotification}/>
      <h2>Numbers</h2>
     <Persons persons={persons} search={search} setPersons={setPersons}/>
    </div>
  )
}

export default App