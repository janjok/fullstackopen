import { useState } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendick', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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