import { useState } from "react";

const ShowMore = ({ country }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    showMore === true ? setShowMore(false) : setShowMore(true);
  };

  if (showMore === true) {
    return (
      <div>
        <button onClick={handleShowMore} key={country.name}>
          {showMore === true ? "hide" : "show"}
        </button>
        <h1>Country: {country.name.common}</h1>
        <h3>Capital: {country.capital}</h3>
        <h3>Flag: {country.flag}</h3>
        <h3>Continent: {country.continents}</h3>
        <h3>Population: {country.population}</h3>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleShowMore} key={country.name}>
        show
      </button>
    </div>
  );
};

export default ShowMore;
