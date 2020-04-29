import React from 'react';
import { Card } from './WeatherCard.style';
import Location from './Location'
import Icon from './Icon';
import Condition from './Condition';

const WeatherCard = ({temp, condition, city, country}) => {
    let highColor = 0;
    let lowColor = 0;
    let bg = null;
    if (temp > 12) {
        highColor = (1 - (temp - 12)/28) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(to top, rgb(255, ${highColor}, 0), rgb(255, ${lowColor}, 0))`
    } else if (temp <= 12) {
        highColor = (1 - (temp + 20)/32) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(to top, rgb(0, ${highColor}, 255), rgb(0, ${lowColor}, 255))`
    }
    return (
        <Card bg={bg}>            
            <Location city={city} country={country}/>
            <Icon />
            <Condition temp={temp} condition={condition}/>            
        </Card>
    )
}

export default WeatherCard;