import { useState } from 'react'

const Phonebook = ({ persons, filter }) => {
  const personsFiltered = persons.filter((per) => 
    per.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {personsFiltered.map(per => <p key={per.name}>{per.name} {per.number}</p>)}
    </div>
  )
}

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

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const checkName = per => per.name === newName
    persons.some(checkName)
    ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(newPerson))

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filter}
      onChange={handleFilterChange}/>
      <form onSubmit={addPerson}>
        <div>
          <h2>add a new</h2>
          name: <input value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Phonebook persons={persons} filter={filter}/>
    </div>
    
  )

}

export default App