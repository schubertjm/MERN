import React from 'react';
import { useParams } from "react-router";

const Values = () => {

    const { value, fontColor, backColor } = useParams();

    return(
        <>
            <div>
            {
                isNaN(value)?
                <h2 backgroundColor= {backColor} color= {fontColor}>The word is: {value}</h2>:
                <h2>The number is: {value}</h2>
            }
            </div>
        </>
    )
}

export default Values;