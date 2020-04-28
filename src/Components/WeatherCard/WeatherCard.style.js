import styled from 'styled-components';

export const Card = styled.div`    
    margin: 0 auto;
    background: ${props => props.bg};
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
`; 

export const CardLocation = styled.div`
    text-align: center;
`

export const CardCity = styled.h1`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.6em;
`
export const CardCountry = styled.h3`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.1em;
`

export const CardIcon = styled.img`
    width: 40%;
`

export const CardTemp = styled.h1`
    font-family: 'Fira Sans', sans-serif;
    font-size: 2em;
    font-weight: 200;
`

export const CardCondition = styled.h3`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.2em;
`

