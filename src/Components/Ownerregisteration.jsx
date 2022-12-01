import React from 'react'
import './Ownerregisteration.css';
import { Route, Link } from "react-router-dom";

const Userregisteration = () => {
    return (
        <div className='head'>
            <div className='register'>


                <div className='name'><h1>REGISTER</h1></div>
                <p>Please fill this form to Create an Account</p>
                <form className='form'>
                    <div
                        className='left'>
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

                        <div className='text-field' >

                            <label className='label'>Phonenumber</label>
                            <input className='input-text' type="phonenumber" placeholder='Enter Phno' name="phno"></input>
                        </div>


                        <div className='text-field'>

                            <label className='label'>RestaurantName</label>
                            <input className='input-text' type="text" placeholder="Entername" name="uname" required></input>
                        </div>


                    </div>
                    <div className='size'></div>
                    <div
                        className='right'>
                        <div>

                            <div className='text-field'>
                                <label className='label'>Enter place</label>
                                <input className='input-text' type="text" placeholder='Enter FirstName' name='uname' required></input>
                            </div>
                            <div className='text-field'>

                                <label className='label'>Enter state</label>
                                <input className='input-text' type="text" placeholder='Enter LastName' name="uname" required></input>
                            </div>
                            <div className='text-field'>

                                <label className='label'>
                                    Enter city
                                </label>
                                <input className='input-text' type='email' placeholder="Enter EmailId" name="email" required></input>
                            </div>

                            <div className='text-field' >

                                <label className='label'>Enter country</label>
                                <input className='input-text' type="phonenumber" placeholder='Enter Phno' name="phno"></input>
                            </div>


                            <div className='text-field'>

                                <label className='label'>Enter pincode</label>
                                <input className='input-text' type="text" placeholder="Entername" name="uname" required></input>
                            </div>

                            {/* <label>RestaurantAddress</label>
                            <input type="text" placeholder='Enter PlaceName' name="address" required></input>
                            <input type="text" placeholder='Enter City' name="uname" required></input>
                            <input type="text" placeholder='Enter State' name="uname" required></input>
                            <input type="text" placeholder='Enter Country' name="uname" required></input>
                            <input type="text" placeholder='Enter PinCode' name="uname" required></input> */}

                        </div>


                    </div>



                  
                </form>
                <div className='size-h'></div>
                <div>
                        <button className='button'>
                            <Link to='/'>SignUp</Link>
                        </button>
                    </div>
                    <div className='size-h'></div>

            </div>

        </div>
    )
}

export default Userregisteration