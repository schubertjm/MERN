import React, { useState } from 'react';

const PersonCard = (props)=>{
    const {lastName, firstName, hairColor} = props;

    let [age, setAge] = useState(props.age)

    //another way to do it rather than an arrow function in button
    // const increaseAge = () =>{
    //     let newAge = age + 1
    //     setAge(newAge)
    // }
    
    return (
        <>
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ () => setAge(age + 1) }>Birthday Button for {firstName} {lastName}</button>
                {/* <button onClick={increaseAge}>Birthday Button for {firstname} {lastname}</button> */}
            </div>
        </>
        );
    }

export default PersonCard;