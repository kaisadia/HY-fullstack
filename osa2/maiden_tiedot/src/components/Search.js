import React from 'react';

function Search({search, setSearch}) {

const changeHandler = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
}

    return (
        <div>
            <p>Find countries</p>
            <input value={search} onChange={changeHandler} name="search"></input>
        </div>
    );
}

export default Search;