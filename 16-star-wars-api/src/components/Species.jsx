import React from 'react';

const Species = (props) => {

    const {APIDetail} = props;

    return (
        <div>
            <h3>Name: {APIDetail.name}</h3>
            <p>Language: {APIDetail.language}</p>
            <p>Skin Color: {APIDetail.skin_colors}</p>
            <p>Classification: {APIDetail.classification}</p>
        </div>
    )
}

export default Species;