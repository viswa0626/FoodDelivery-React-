import React from 'react'
import './Customerregistration.css';

const Customerregistration = () => {
  return (
    <div className='register'>
      <div className='header'><h1>UserRegistration</h1></div>
      <form>
        <div className='text-field'>
          <label className='label'>FirstName</label>
          <input className='input-text' type="text" placeholder='Enter FirstName' name='uname' required></input>
        </div>
        <div className='text-field'>

          <label className='label'>LastName</label>
          <input className='input-text' type="text" placeholder='Enter LastName' name="uname" required></input>
        </div>
        <div className='text-field'>

          <label className='label'>EmailId</label>
          <input className='input-text' type='email' placeholder="Enter EmailId" name="email" required></input>
        </div>
        <div className='text-field'>

          <label className='label'>Phonenumber</label>
          <input className='input-text' type="phonenumber" placeholder='Enter Phno' name="phno"></input>
        </div>
        <div>
          <b><button className='button'>SignUp</button></b>
        </div>
      </form>

    </div >
  )
}

export default Customerregistration