import React from 'react';
import { CardLocation, CardCity, CardCountry } from './WeatherCard.style'

const Location = (props) => {
    return (
        <CardLocation>
            <CardCity>Sydney</CardCity>
            <CardCountry>AU</CardCountry>
        </CardLocation>
      );
}
 
export default Location;
