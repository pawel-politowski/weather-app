import React from 'react';

import './App.css';
import WeatherEngine from './Components/WeatherCard/WeatherEngine';


function App() {
 

  return (
    <div className="App">
      <WeatherEngine location="Gdynia"/>
      <WeatherEngine location="Rzym"/>
      <WeatherEngine location="Londyn"/>
    </div>
  );
}

export default App;
