import React, { useState } from 'react';

const User = (props)=>{

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstName, lastName, email };
    //     console.log("New User is ", newUser);
    //     setHasBeenSubmitted(true);
    // }

    // let checkPassword = password.target.value;
    // let checkConfirmPassword = confirmPassword.target.value;
    // const validatePassword = (e) => {
    //     let checkPassword = password.target.value;
    //     let checkConfirmPassword = confirmPassword.target.value;
        
    //     //return checkPassword > 0 ? true: false;
    //     //return checkPassword != checkConfirmPassword ? true: false;
    // }

    return (
        <>
            <h1>User</h1>
            <form on Submit={ (e) => e.preventDefault()}>
                <div className = "form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} name="firstName" id="firstName" className="form-control" />
                    {
                        firstName.length<3 && firstName.length>0? <p style={{color:'red'}}>First Name needs to be at least 3 characters</p>: ''
                    }
                </div>
                <div className = "form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={(e)=>{setLastName(e.target.value)}} name="lastName" id="lastName" className="form-control" />
                    {
                        lastName.length<3 && lastName.length>0? <p style={{color:'red'}}>Last Name needs to be at least 3 characters</p>: ''
                    }
                </div>
                <div className = "form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" className="form-control" />
                    {
                        email.length<3 && email.length>0? <p style={{color:'red'}}>Email needs to be at least 3 characters</p>: ''
                    }
                </div>
                <div className = "form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" className="form-control" />
                    {
                        password.length>0 && password.length<1? <p style={{color:'red'}}>Password must have a value</p>: ''
                    }
                </div>
                <div className = "form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" onChange={(e)=>{setConfirmPassword(e.target.value)}} name="confirmPassword" id="confirmPassword" className="form-control" />
                </div>
                    {
                        confirmPassword.length>0 && confirmPassword.length<1? <p style={{color:'red'}}>Confirm Password must have a value</p>: ''
                    }
                <input type="submit" value="Add User"/>
            </form>
            <hr />
            <h2>Your User Info</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </>
        );
    }

export default User;