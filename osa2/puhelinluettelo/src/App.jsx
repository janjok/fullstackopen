import { useState, useEffect } from 'react'
import personServices from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterName, setFilterName] = useState("")

  useEffect(() => {
    personServices
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if(persons.some(p => p.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      personServices
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName("")
          setNewNumber("")
        })
    }
  }

  const deletePerson = (name, id) => {
    if(confirm(`Delete ${name}?`)) {
      personServices
        .destroyPerson(id)
      setPersons(persons.filter((p) => p.id !== id))
    }
  }

  const handleNameAdd = (event) => setNewName(event.target.value)
  const handleNumberAdd = (event) => setNewNumber(event.target.value)
  const handleFilterName = (event) => setFilterName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterName} onChange={handleFilterName}/>
      <h3>add a new</h3>
      <PersonForm onSubmit={addName}
      name={newName} onName={handleNameAdd}
      number={newNumber} onNumber={handleNumberAdd}/>
      <h3>Numbers</h3>
      <Persons personObj={persons} filter={filterName}
      onClick={deletePerson}/>
    </div>
  )

}

export default App