import React from 'react';
import { Card } from './WeatherCard.style';
import Location from './Location'

const WeatherCard = (props) => {
    return (
        <Card>            
            <Location />
            <img className="icon" src="" alt="Weather Icon"/>
            <h1 className="temp">20℃</h1>
            <h3 className="condition">Clouds</h3>
        </Card>
    )
}

export default WeatherCard;