import React from 'react';

function OneCountry({filteredCountries}) {
    return ( 
        <div>
            {filteredCountries.map(countries => <div key={countries.ccn3}>
                <h2>{countries.name.common}</h2>
                <p>Capital: {countries.capital}</p>
                <p>Area: {countries.area}</p>
                <h3>Languages:</h3>
                <ul/>
                {Object.values(countries.languages).map(lang => <li key={lang[0]}>{lang}</li>)}
                <ul/>
                <img src={countries.flags.png} alt={countries.name.common} />
            </div>)}
        </div>
    );
}

export default OneCountry;