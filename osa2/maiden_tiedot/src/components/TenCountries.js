import React from 'react';

function TenCountries({filteredCountries, setSearch}) {


    return (
        <div>
        {filteredCountries.map(countries => 
            <ul key ={countries.ccn3}>{countries.name.common} 
            <button onClick={()=>setSearch(countries.name.common)}>Show</button>
            </ul>)}
        </div>
    );
}

export default TenCountries;