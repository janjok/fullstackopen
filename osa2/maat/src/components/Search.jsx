const Search = (props) => {

    return (
        <>
            find countries <input value={props.value} onChange={props.onChange}/>
        </>
    )
}

export default Search