import personService from '../services/persons'

const Personform = ( {newName, setNewName, newNumber, setNewNumber, persons, setPersons} ) => {
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const checkName = per => per.name === newName

    persons.some(checkName)
    ? changeNumber(newName)
    : personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })

    setNewName('')
    setNewNumber('')
  }

  const changeNumber = (name) => {
    const result = (`${name} is already added to phonebook,
      replace the old number with a new one?`)

    if(confirm(result)){
      const oldPerson = persons.find((per) => per.name === name)
      const updateOld = {...oldPerson, number: newNumber}

      personService
        .update(updateOld.id, updateOld)
        .then(response => {
          setPersons(persons.map(p => p.id === updateOld.id ? updateOld : p))
        })
    }
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