const DisplayDetails = ({ filteredCountries }) => {

 if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    
    return (
        <div>
        <h1>Country: {country.name.common}</h1>
        <h3>Capital: {country.capital}</h3>
        <h3>Flag: {country.flag}</h3>
        <h3>Continent: {country.continents}</h3>
        <h3>Population: {country.population}</h3>
        </div>
    )
 }
}

export default DisplayDetails;