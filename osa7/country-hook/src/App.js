import React, { useState } from "react";
import Country from "./components/Country";
import Search from "./components/Search";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search setSearch={setSearch} />
      <Country search={search} />
    </div>
  );
};

export default App;
