import React from 'react';

const Starships = (props) => {

    const {APIDetail} = props;

    return (
        <div>
            <h3>Name: {APIDetail.name}</h3>
            <p>Model: {APIDetail.model}</p>
            <p>Manufacturer: {APIDetail.manufacturer}</p>
            <p>Class: {APIDetail.starship_class}</p>
        </div>
    )
}

export default Starships;