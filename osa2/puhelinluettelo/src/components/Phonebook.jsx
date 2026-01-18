const Phonebook = ({ persons, filter, remove}) => {
  const personsFiltered = persons.filter((per) => 
    per.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {personsFiltered.map
      (per => <p key={per.name}>{per.name} {per.number}
      <button onClick={() => remove(per.id, per.name)}>delete</button></p>)}
    </div>
  )
}

export default Phonebook