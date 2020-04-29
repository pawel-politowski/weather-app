import React, { useState, useEffect} from 'react';

import WeatherCard from './Components/WeatherCard/WeatherCard';
import './App.css';


function App() {
  const [query, setQuery] = useState("Gdynia");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });   
  
  const data = async q => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=ebd06e595f8759f59e0433a50bf0ced1`
    );
    const resJSON = await response.json();
    return resJSON
  };

 
  const handleSearch = (event) => {
    event.preventDefault();
    data(query).then(res => {setWeather({
      temp: res.main.temp,
      city: res.name,
      condition: res.weather[0].main,
      country: res.sys.country
      });
    });
  };

  useEffect(() => {
    data(query).then(res => {setWeather({
      temp: res.main.temp,
      city: res.name,
      condition: res.weather[0].main,
      country: res.sys.country
      });
    });
  }, [])

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

export default App;
