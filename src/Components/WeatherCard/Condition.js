import React from 'react';
import { CardTemp, CardCondition } from './WeatherCard.style'

const Condition = (props) => {
    return (
        <React.Fragment>
            <CardTemp>20℃</CardTemp>
            <CardCondition>Clouds</CardCondition>
        </React.Fragment>
    )
}
 
export default Condition;