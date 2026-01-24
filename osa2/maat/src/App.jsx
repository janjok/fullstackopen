import { useEffect, useState } from 'react'
import axios from 'axios'
import CountryList from './Components/CountryList'

const App = () => {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])

  const handleInputChange = (event) => setCountry(event.target.value)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      find countries <input value={country} onChange={handleInputChange}/>
      <CountryList country={country} countries={countries} />
    </div>
  )
}

export default App
