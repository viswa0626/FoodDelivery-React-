import React from 'react'
import { useState } from 'react';
import './Customerregistration.css';

const Customerregistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  function onChangeFirstName(a) {
    setFirstName(a)
  }
  function onChangeLastName(a) {
    setLastName(a)
  }
  function onChangeEmail(a) {
    setEmail(a)
  }
  function onChangePhoneNumber(a) {
    setPhoneNumber(a)
  }
  function onChangePassword(a) {
    setPassword(a)
  }

  function onSubmitForm(event) {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
  }
  return (
    <div className='register'>
      <div className='re-card'>
        <div className='us_image'></div>
        <div className='us_signup'>


          <div className='header'><h1>UserRegistration</h1></div>
          <form onSubmit={onSubmitForm} className="usre-form">
            <div className='text-field'>
              <label className='label'>FirstName</label>
              <input className='input-text' onChange={(a) => onChangeFirstName(a.target.value)} value={firstName} type="text" placeholder='Enter FirstName' name='uname' required></input>
            </div>
            <div className='text-field'>
              <label className='label'>LastName</label>
              <input className='input-text' onChange={(a) => onChangeLastName(a.target.value)} value={lastName} type="text" placeholder='Enter LastName' name="uname" required></input>
            </div>
            <div className='text-field'>
              <label className='label'>EmailId</label>
              <input className='input-text' onChange={(a) => onChangeEmail(a.target.value)} value={email} type='email' placeholder="Enter EmailId" name="email" required></input>
            </div>
            <div className='text-field'>
              <label className='label'>Phonenumber</label>
              <input className='input-text' onChange={(a) => onChangePhoneNumber(a.target.value)} value={phoneNumber} type="phonenumber" placeholder='Enter Phno' name="phno"></input>
            </div>
            <div className='text-field'>
              <label className='label'>Password</label>
              <input className='input-text' onChange={(a) => onChangePassword(a.target.value)} value={password} type="password" placeholder='Enter Password' name="pass"></input>
            </div>
            <div>
              <b><button className='button'>SignUp</button></b>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Customerregistration