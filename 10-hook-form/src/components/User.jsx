import React, { useState } from 'react';

const User = ()=>{

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <h1>User</h1>
            <form>
                <div className = "form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} name="firstName" id="firstName" className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={(e)=>{setLastName(e.target.value)}} name="lastName" id="lastName" className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" onChange={(e)=>{setConfirmPassword(e.target.value)}} name="confirmPassword" id="confirmPassword" className="form-control" />
                </div>
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