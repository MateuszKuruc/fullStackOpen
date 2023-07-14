import ShowMore from "./ShowMore";

const Filter = ({ filteredCountries }) => {
  if (filteredCountries.length === 250) return;
  if (filteredCountries.length > 10) {
    return <p>Need more details to filter</p>;
  }

  if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return filteredCountries.map((country) => (
      <li key={country.name.common}>
        {country.name.common}
        <ShowMore country={country} />
      </li>
    ));
  }
  if (filteredCountries.length === 1) {
    return (
      <li key={filteredCountries[0]}>{filteredCountries[0].name.common}</li>
    );
  }
};

export default Filter;
