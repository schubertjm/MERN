import React from 'react';

const Planets = (props) => {

    const {APIDetail} = props;

    return (
        <div>
            <h3>Name: {APIDetail.name}</h3>
            <p>Climate: {APIDetail.climate}</p>
            <p>Terrain: {APIDetail.terrain}</p>
            <p>Population: {APIDetail.population}</p>
        </div>
    )
}

export default Planets;