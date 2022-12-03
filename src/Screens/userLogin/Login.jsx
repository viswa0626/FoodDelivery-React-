import React, { useState } from 'react'
import Userhome from '../userHome/Userhome'
import { Route, Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import "./Login.css"


const Login = () => {

    return (
        <div className='background'>

            <div className='Login'>


                <div className='loginform'><h1>LogIn</h1>
                    <form >
                        <div className='text-field'>
                            <label className='label'>UserName</label>
                            <input className='input-text' type="text" placeholder="  Enter Username" name="uname" required></input>
                        </div>
                        <div className='text-field'>

                            <label className='label'>Password</label>
                            <input className='input-text' type="text" placeholder="  Enter Password" name="psw" required></input>

                        </div>
                        <div className='sized-box'></div>
                        <button className='button'>
                            {/* <Link to='/home'>Submit</Link> */}
                            <Link to='/admin'>Submit</Link>
                        </button>

                    </form>
                    <div>
                        <span>Don't have an account please <b>SignUp</b> as<b><button className='Owner'>
                            <Link to='/registry'>Restaurant Owner</Link></button></b> or <b><button><Link to='/regis'>User</Link></button></b></span>
                    </div>
                </div>
                <div className='image'></div>




            </div>


        </div>
    )
}

export default Login