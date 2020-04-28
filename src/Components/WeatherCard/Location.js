import React from 'react';
import { CardLocation } from './WeatherCard.style'

const Location = (props) => {
    return (
        <CardLocation>
            <h1 className="city">Sydney</h1>
            <h3 className="country">AU</h3>
        </CardLocation>
      );
}
 
export default Location;
