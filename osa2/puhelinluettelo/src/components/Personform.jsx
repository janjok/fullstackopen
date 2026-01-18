import axios from 'axios'

const Personform = ( {newName, setNewName, newNumber, setNewNumber, persons, setPersons} ) => {
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const checkName = per => per.name === newName
    persons.some(checkName)
    ? alert(`${newName} is already added to phonebook`)
    : axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
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
  )
}

export default Personform