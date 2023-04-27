import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import AllCountries from "./components/AllCountries";

function App() {
const [search, setSearch] = useState('')
const [countries, setCountries] = useState([])


const getAll = () => {
  const request = axios.get('https://restcountries.com/v3.1/all')
  return request.then(response => response.data)
}

useEffect(() => {
    getAll()
      .then(countries => {
      setCountries(countries)
    })
}, [])


  return (
    <div >
      <Search search={search} setSearch={setSearch}/>
      <AllCountries countries={countries} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
