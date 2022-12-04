import React, { useState } from 'react'
import './Ownerregisteration.css';
import { Route, Link } from "react-router-dom";

const Userregisteration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [restName, setRestName] = useState("");
    const [password, setPassword] = useState("");
    const [place, setPlace] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");


    function onSubmitForm(event) {
        event.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phoneNumber);
        console.log(password);
        console.log(restName);
        console.log(place);
        console.log(city);
        console.log(state);
        console.log(country);
        console.log(pincode);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setRestName("");
        setPassword("")
        setPlace("");
        setCity("");
        setState("");
        setCountry("");
        setPincode("");
    }
    return (
        <div className='head'>
            <div className='a-register'>
                <div className='name'><h1>REGISTER</h1></div>
                <p>Please fill this form to Create an Account</p>
                <form onSubmit={onSubmitForm} className="b-form">
                    <div className='form'>
                        <div
                            className='left'>
                            <div className='text-field'>
                                <label className='label'>FirstName</label>
                                <input onChange={(a) => setFirstName(a.target.value)} value={firstName} className='input-text' type="text" placeholder='Enter FirstName' name='uname' required></input>
                            </div>
                            <div className='text-field'>
                                <label className='label'>LastName</label>
                                <input onChange={(a) => setLastName(a.target.value)} value={lastName} className='input-text' type="text" placeholder='Enter LastName' name="uname" required></input>
                            </div>
                            <div className='text-field'>
                                <label className='label'>EmailId</label>
                                <input onChange={(a) => setEmail(a.target.value)} value={email} className='input-text' type='email' placeholder="Enter EmailId" name="email" required></input>
                            </div>
                            <div className='text-field' >
                                <label className='label'>Phonenumber</label>
                                <input onChange={(a) => setPhoneNumber(a.target.value)} value={phoneNumber} className='input-text' type="phonenumber" placeholder='Enter Phno' name="phno"></input>
                            </div>
                            <div className='text-field'>
                                <label className='label'>RestaurantName</label>
                                <input onChange={(a) => setRestName(a.target.value)} value={restName} className='input-text' type="text" placeholder="Entername" name="uname" required></input>
                            </div>
                            <div className='text-field'>
                                <label className='label'>Password</label>
                                <input onChange={(a) => setPassword(a.target.value)} value={password} className='input-text' type="password" placeholder='Enter Password' name="pass"></input>
                            </div>
                        </div>
                        <div className='size'></div>
                        <div
                            className='right'>
                            <div>
                                <div className='text-field'>
                                    <label className='label'>Enter place</label>
                                    <input onChange={(a) => setPlace(a.target.value)} value={place} className='input-text' type="text" placeholder='Enter place' name='uname' required></input>
                                </div>
                                <div className='text-field'>
                                    <label className='label'>Enter city</label>
                                    <input onChange={(a) => setCity(a.target.value)} value={city} className='input-text' type="text" placeholder='Enter city' name="uname" required></input>
                                </div>
                                <div className='text-field'>
                                    <label className='label'>Enter state</label>
                                    <input onChange={(a) => setState(a.target.value)} value={state} className='input-text' type='text' placeholder="Enter state" name="uname" required></input>
                                </div>
                                <div className='text-field' >
                                    <label className='label'>Enter country</label>
                                    <input onChange={(a) => setCountry(a.target.value)} value={country} className='input-text' type="text" placeholder='Enter contry' name="uname" required></input>
                                </div>
                                <div className='text-field'>
                                    <label className='label'>Enter pincode</label>
                                    <input onChange={(a) => setPincode(a.target.value)} value={pincode} className='input-text' type="text" placeholder="Enter pincode" name="uname" required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='button'>
                        SignUp
                    </button>
                    <div className='size-h'></div>
                </form>
            </div>
        </div>
    )
}

export default Userregisteration