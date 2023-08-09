import { useState, useEffect } from "react";
import axios from "axios";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export const useCountry = (search) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountries(data);
    };
    fetchData();
  }, [search]);

  return countries;
};
