import React, { useState } from 'react'
import Userhome from '../Screens/Userhome'
import { Route, Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import "./../Components/Login.css"


const Login = () => {
    
    return (
        <div>
            <div className='Login'>
                <div className='image'></div>


                 <div className='loginform'><h1>LogIn</h1>
                    <form >
                        <div>
                            <label>UserName</label>
                            <input type="text" placeholder="Enter Username" name="uname" required></input>
                        </div>
                        <div>

                            <label>Password</label>
                            <input type="text" placeholder="Enter Password" name="psw" required></input>

                        </div>
                        <button className='button'>
                            <Link to='/home'>Submit</Link>
                        </button>

                    </form>
                    <div>
                        <span>Don't have an account please <b>SignUp</b> as<b><button className='Owner'>
                        <Link to='/registry'>Restaurant Owner</Link></button></b> or <b><button><Link to='/regis'>User</Link></button></b></span>
                    </div>
                </div> 




            </div>


        </div>
    )
}

export default Login