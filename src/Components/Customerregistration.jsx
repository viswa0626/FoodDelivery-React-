import React from 'react'

const Customerregistration = () => {
  return (
    <div className='register'>
      <h1>UserRegistration</h1>
      <form>
        <div>
          <label>FirstName</label>
          <input type="text" placeholder='Enter FirstName' name='uname' required></input>
        </div>
        <div>

          <label>LastName</label>
          <input type="text" placeholder='Enter LastName' name="uname" required></input>
        </div>
        <div>

          <label>EmailId</label>
          <input type='email' placeholder="Enter EmailId" name="email" required></input>
        </div>
        <div>

          <label>Phonenumber</label>
          <input type="phonenumber" placeholder='Enter Phno' name="phno"></input>
        </div>
        <div>
          <b><button>SignUp</button></b>
        </div>
      </form>

    </div >
  )
}

export default Customerregistration