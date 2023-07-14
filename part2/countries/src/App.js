import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import DisplayDetails from "./components/DisplayDetails";

console.log(process.env.REACT_APP_API_KEY);

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchFilter(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div>
      <input onChange={handleSearch} />

      <div>
        <ul>
          <Filter filteredCountries={filteredCountries} />
        </ul>
        <div>
          <DisplayDetails filteredCountries={filteredCountries} />
        </div>
      </div>
    </div>
  );
};

export default App;
