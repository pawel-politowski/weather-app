import React, { useState, useEffect} from 'react';

import WeatherCard from './WeatherCard';

function WeatherEngine({location}) {
  
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });   
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeather = async q => {
      setLoading(true);
    try {
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
    }
    catch(error){
        setError(true)
    }
      setLoading(false);      
  };

 
  const handleSearch = (event) => {
    event.preventDefault();
    getWeather(query)      
 };

  useEffect(() => {
    getWeather(location)
  }, [location])

  return (
    <React.Fragment> 
        { error ? <div style={{ color:"black"}}>Wpisz poprawną nazwę miasta lub spróbuj później!</div> : loading ? <div style={{ color:"black"}}>Trwa ładowanie danych</div> : 
        <div>
        <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country}/>      
        <form>
            <input value={query} onChange={(event) => setQuery(event.target.value)}/>
            <button onClick={event => handleSearch(event)}>Search</button>
        </form>
        </div>
        }
    </React.Fragment>
      
  );
}

export default WeatherEngine;