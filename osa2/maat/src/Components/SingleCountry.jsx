const SingleCountry = ({ single }) => {
  return (
    <div>
      <h1>{single[0].name.common}</h1>
      <p>Capital {single[0].capital}</p>
      <p>Area {single[0].area}</p>
      <h2>Languages</h2>
      <ul>
      {Object.values(single[0].languages).map(lang => 
        <li key={lang}>{lang}</li>
      )}
      </ul>
      <img src={single[0].flags.svg} width={250} height={250}/>
    </div>
  )
}

export default SingleCountry