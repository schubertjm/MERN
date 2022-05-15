import React from 'react';

const People = (props) => {

    const {APIDetail} = props;

    return (
        <div>
            <h3>Name: {APIDetail.name}</h3>
            <p>height: {APIDetail.height}</p>
            <p>Mass: {APIDetail.mass}</p>
            <p>Hair Color: {APIDetail.hair_color}</p>
        </div>
    )
}

export default People;