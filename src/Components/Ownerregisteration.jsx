import React from 'react'
import './Ownerregisteration.css'

const Userregisteration = () => {
    return (
        <div className='head'>
            <div className='name'><h1>REGISTER</h1></div>
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

                    <label>EmailId</label>
                    <input type='email' placeholder="Enter EmailId" name="email" required></input>
                </div>

                <div>

                    <label>RestaurantName</label>
                    <input type="text" placeholder="Entername" name="uname" required></input>
                </div>
                <div>
                    <label>RestaurantAddress</label>
                    <input type="text" placeholder='Enter PlaceName' name="address" required></input>
                    <input type="text" placeholder='Enter City' name="uname" required></input>
                    <input type="text" placeholder='Enter State' name="uname" required></input>
                    <input type="text" placeholder='Enter Country' name="uname" required></input>
                    <input type="text" placeholder='Enter PinCode' name="uname" required></input>

                </div>

                <div>
                    <button>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default Userregisteration