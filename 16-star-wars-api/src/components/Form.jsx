import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Form = () => {

    let [type, setType] = useState(0);
    let [id, setID] = useState(0);

    const history = useHistory();

    const searchAPI = (e)=>{
        e.preventDefault()
        history.push(`/${type}/${id}`)
    }

    return(
        <>
            <form className="flex" onSubmit={ searchAPI }>
            <div className="form-object">
                <label htmlFor="searchFor">Search for:</label>
                <select onChange={(e)=>{setType(e.target.value)}} defaultValue={'default'} name="type" id="type">
                    <option disabled value="default">Please select a Category</option>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="films">films</option>
                    <option value="vehicles">vehicles</option>
                    <option value="starships">starships</option>
                    <option value="species">species</option>
                </select>
            </div>
            <div className="form-object">
                <label htmlFor="id">ID:</label>
                <input type="text" onChange={(e)=>{setID(e.target.value)}} name="id" id="id" />
            </div>
            <input type="submit" value="Search"/>
            </form>
        </>
    )
}

export default Form;