import React from "react";
import { useField } from "../hooks";

const Search = ({ setSearch }) => {
  const nameInput = useField("text");

  const fetchCountry = (e) => {
    e.preventDefault();
    setSearch(nameInput.value);
  };

  //{...nameInput} tai type={nameInput.type} value={nameInput.value} onChange={nameInput.onChange}

  return (
    <div>
      <form onChange={fetchCountry}>
        <input {...nameInput} />
        <button>find</button>
      </form>
    </div>
  );
};

export default Search;
