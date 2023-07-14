import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import DisplayDetails from "./components/DisplayDetails";

const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      setCountries(response.data)
      console.log(response.data);
    })
    
  }, [])



  const handleSearch = (event) => {
    setSearchFilter(event.target.value)
  }

  // const handleDisplay = (event) => {
  //   event.preventDefault();
  //   setSearchFilter(event.target.value)
  // }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchFilter.toLowerCase()));

 

  return (
    <div>
      <input onChange={handleSearch} />
      {/* <button type='submit'>Search</button> */}
      <div>
        
       <ul>
        <Filter filteredCountries={filteredCountries} />
        {/* {filteredCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)} */}
        </ul>
        <div>
          <DisplayDetails filteredCountries={filteredCountries} />
        </div>
      </div>
    </div>
  )
}

export default App;
