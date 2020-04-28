import React from 'react';

import WeatherCard from './Components/WeatherCard/WeatherCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <WeatherCard temp={16}/>
      <WeatherCard temp={-5}/>
      <WeatherCard temp={-20}/>
    </div>
  );
}

export default App;
