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

export default Phonebook