import React from 'react';
import { CardTemp, CardCondition } from './WeatherCard.style'

const Condition = ({temp, condition}) => {
    return (
        <React.Fragment>
            <CardTemp>{temp}℃</CardTemp>
            <CardCondition>{condition}</CardCondition>
        </React.Fragment>
    )
}
 
export default Condition;