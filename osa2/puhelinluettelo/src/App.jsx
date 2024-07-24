import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterName, setFilterName] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
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
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
    axios
      .post("http://localhost:3001/persons", personObject)
      .then(response => {
        console.log(response)
      })
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
      <Persons personObj={persons} filter={filterName}/>
    </div>
  )

}

export default App