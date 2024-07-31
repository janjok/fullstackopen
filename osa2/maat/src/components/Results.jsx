const Results = (props) => {

    const cl = props.data.filter((d) => d.name.common.toLowerCase()
        .includes(props.countries.toLowerCase()))

    const onClickHandler = (country) => {
        props.onClick(country)
    }

    if(cl.length == 1){

        return (
            <div>
                <h1>{cl[0].name.common}</h1>
                <p>capital {cl[0].capital}</p>
                <p>area {cl[0].area}</p>
                <br />
                <h3>languages: </h3>
                <ul>
                    {Object.values(cl[0].languages).map(
                        c => <li key={c}>{c}</li>
                    )}
                </ul>
                <img src={cl[0].flags.png} alt="" />
            </div>
        )
    }

    if(cl.length > 10) return <p>Too many matches</p>

    return (
        <div>
            <ul>
                {cl.map(c => 
                <li key={c.name.common}>{c.name.common}
                <button onClick={() => onClickHandler(c.name.common)}>show</button></li>)}
            </ul>
        </div>
    )
}

export default Results