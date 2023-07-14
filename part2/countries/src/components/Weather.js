import axios from "axios";
import { useState, useEffect } from "react";

const Weather = ({ capitalCity }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${capitalCity}`
      )
      .then((response) => setWeather(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (weather) {
    return (
      <div>
        <h4>Temperature: {weather.current.temp_c}°C</h4>
        <h4>Condition: {weather.current.condition.text}</h4>
        <h4>Wind: {weather.current.wind_kph} km/h</h4>
      </div>
    );
  }
};

export default Weather;
