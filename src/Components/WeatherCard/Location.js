import React from 'react';
import { CardLocation, CardCity, CardCountry } from './WeatherCard.style'

const Location = ({city, country}) => {
    return (
        <CardLocation>
            <CardCity>{city}</CardCity>
            <CardCountry>{country}</CardCountry>
        </CardLocation>
      );
}
 
export default Location;
