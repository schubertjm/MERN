import React from 'react';

const Films = (props) => {

    const {APIDetail} = props;

    return (
        <div>
            <h3>Title: {APIDetail.title}</h3>
            <p>Director: {APIDetail.director}</p>
        </div>
    )
}

export default Films;