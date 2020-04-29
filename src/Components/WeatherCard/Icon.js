import React from 'react';
import { CardIcon } from './WeatherCard.style';

const Icon = ({icon}) => {
    return (
        <CardIcon src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon"/>
      );
}
 
export default Icon;
    