import React from 'react';
import { useParams } from "react-router";

const Values = () => {

    const { value, fontColor, backColor } = useParams();

    return(
        <>
            <div>
            {
                isNaN(value)?
                <p style= {{color: fontColor, backgroundColor: backColor}}>The word is: {value}</p>:
                <p style= {{color: fontColor, backgroundColor: backColor}}>The number is: {value}</p>
            }
            </div>
        </>
    )
}

export default Values;