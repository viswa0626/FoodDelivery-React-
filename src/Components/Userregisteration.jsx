import React from 'react'

const Userregisteration = () => {
  return (
    <div>
        <h1>REGISTER</h1>
        <p>Please fill this form to Create an Account</p>
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

                <label>RestaurantName</label>
                <input type="text" placeholder="Entername" name="uname" required></input>
            </div>
            <div>
                <label>RestaurantAddress</label>
                <input type="text" placeholder='Enter Address' name="address" required></input>


            </div>
            <div>
                <button>SignUp</button>
            </div>
        </form>
    </div>
  )
}

export default Userregisteration