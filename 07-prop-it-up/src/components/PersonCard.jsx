import React, { Component } from 'react';

class PersonCard extends React.Component{

    render(){
        let {lastName, firstName, age, hairColor} = this.props;
    
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
        );
    }
}
export default PersonCard;