import React, { useState, useEffect} from 'react';

import WeatherCard from './WeatherCard';

function WeatherEngine() {
  const location = "Gdynia"

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });   

  const getWeather = async q => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=ebd06e595f8759f59e0433a50bf0ced1`
    );
    const resJSON = await response.json();
    setWeather({
      temp: resJSON.main.temp,
      city: resJSON.name,
      condition: resJSON.weather[0].main,
      country: resJSON.sys.country
      }); 
  };

 
  const handleSearch = (event) => {
    event.preventDefault();
    getWeather(query)      
 };

  useEffect(() => {
    getWeather(location)
  }, [location])

  return (
    <div className="App">
      <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country}/>      
      <form>
        <input value={query} onChange={(event) => setQuery(event.target.value)}/>
        <button onClick={event => handleSearch(event)}>Search</button>
      </form>
    </div>
  );
}

export default WeatherEngine;