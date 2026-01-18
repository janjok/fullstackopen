import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Phonebook from './components/Phonebook'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <Personform newName={newName} setNewName={setNewName}
      newNumber={newNumber} setNewNumber={setNewNumber}
      persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Phonebook persons={persons} filter={filter}/>
    </div>
    
  )

}

export default App