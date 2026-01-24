import SingleCountry from './SingleCountry'

const CountryList = ({ country, countries }) => {

  const listOfNames = countries.filter(c =>c.name.common.toLowerCase().includes(country.toLowerCase()))

  if(country.length === 0){
    return <p></p>
  } else if(listOfNames.length > 10){
    return <p>Too many matches, specify another filter</p>
  } else if(listOfNames.length < 10 && listOfNames.length > 1){
    return(
      <div>
        {listOfNames.map(c => 
          <p key={c.name.common}>{c.name.common}</p>
        )}
      </div>
    )
  } else {
    return <SingleCountry single={listOfNames}/>
  }
}

export default CountryList