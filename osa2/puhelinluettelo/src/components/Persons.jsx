const Persons = (props) => {
    const filtered = props.personObj.filter
    ((p) => p.name.toLowerCase().includes(props.filter.toLowerCase()))
    if(props.filter != ""){
        return (
            <div>
                {filtered.map((p) => <p key={p.name}>{p.name} {p.number}</p>)}
            </div>
        )
    }

    return (
        <div>
            {props.personObj.map(p => <p key={p.name}>{p.name} {p.number}</p>)}
        </div>
    )
}

export default Persons