import React,{useState} from 'react'
// import { useState, useNavigate } from 'react';
import { useNavigate } from "react-router-dom";
import './Customerregistration.css';
import axios from 'axios';

const Customerregistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate('/');
  };
  async function onSubmitForm(event) {
    event.preventDefault();
    await axios.post("https://localhost:44364/api/Users", {
      userId: 0,
      firstName: firstName.toString().trim(),
      lastName: lastName.toString().trim(),
      mobile: phoneNumber.toString().trim(),
      email: email.toString().trim(),
      address: address.toString().trim(),
      pincode: pincode.toString().trim(),
      password: password.toString().trim(),

    })
      // await fetch('https://localhost:44364/api/Owner', {
      //     method: 'GET'
      // })
      .then((a) => {
        console.log(a);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setAddress("");
        setPincode("");
      }).then(() => { navigate('/') }).catch((e) => {
        console.log(e)
      })

  }




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
  function onChangeAddress(a) {
    setAddress(a)
  }
  function onChangePincode(a) {
    setPincode(a)
  }

  // function onSubmitForm(event) {
  //   event.preventDefault();
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(email);
  //   console.log(phoneNumber);
  //   console.log(password);
  //   console.log(address)
  //   console.log(pincode)

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
          <div className='text-field'>
            <label className='label'>Address</label>
            <input className='input-text' onChange={(a) => onChangeAddress(a.target.value)} value={address} type="address" placeholder='Enter Address' name="pass"></input>
          </div>
          <div className='text-field'>
            <label className='label'>Pincode</label>
            <input className='input-text' onChange={(a) => onChangePincode(a.target.value)} value={pincode} type="address" placeholder='Enter Pincode' name="pass"></input>
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