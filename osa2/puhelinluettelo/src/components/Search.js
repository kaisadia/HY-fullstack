import React from 'react';

function Search(props) {

    const handleSearch = (event) => {
        console.log(event.target.value)
        props.setSearch(event.target.value)}
      
    return (
        <div>
            <input value={props.search} onChange={handleSearch} name="search"/>        
        </div>
    );
}

export default Search;