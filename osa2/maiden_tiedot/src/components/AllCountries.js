import React from 'react';
import OneCountry from './OneCountry';
import TenCountries from './TenCountries';


function Countries({countries, setSearch, search}) {

const filteredCountries = countries.filter(country => 
  country.name.common.toLowerCase().includes(search.toLowerCase()))

  if(!search){
    return null }
    else if (filteredCountries.length >10) {
        return <p>Too many matches, specify another filter</p>
    } else if (filteredCountries.length === 1) {
        return <OneCountry filteredCountries={filteredCountries}/>
    } else {
        return <TenCountries filteredCountries={filteredCountries} setSearch={setSearch} />
    
 }

}

export default Countries;