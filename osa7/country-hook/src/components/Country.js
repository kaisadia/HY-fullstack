import { useCountry } from "../hooks/index";

const Country = ({ search }) => {
  const countries = useCountry(search);

  if (!search) {
    return null;
  }

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredCountries.length === 0) {
    return <div>not found...</div>;
  }

  return (
    <div>
      {filteredCountries.map((country) => (
        <div key={country.name.common}>
          <h3>{country.name.common}</h3>
          <div>capital {country.capital}</div>
          <div>population {country.population}</div>
          <img
            src={country.flags.png}
            height="100"
            alt={`flag of ${country.name.common}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Country;
