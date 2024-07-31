import { useState, useEffect } from 'react'
import Search from './components/Search'
import Results from './components/Results'
import countries from './services/countries'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [results, setResults] = useState([])

  const handleInputChange = (event) => setInputValue(event.target.value)

  useEffect(() => {
    countries
      .getAll()
      .then(res => {
        setResults(res)
      })
  }, [])

  return (
    <div>
      <Search value={inputValue} onChange={handleInputChange}/>
      <Results data={results} countries={inputValue}/>
    </div>
  )
}

export default App
