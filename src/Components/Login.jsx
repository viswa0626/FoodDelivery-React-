import React from 'react'
import Userhome from '../Screens/Userhome'
import {Route, Link } from "react-router-dom";
import "./../Components/Login.css"


const Login = () => {
    return (
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
                    <div>
                        <Link to='/home'>Click here</Link>
                    </div>
                </form></div>



        </div>

    )
}

export default Login