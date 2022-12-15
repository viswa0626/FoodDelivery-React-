import React, { useState } from 'react'
import Userhome from '../userHome/Userhome'
import { Route, Link, useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import axios from 'axios';
import "../userLogin/Login.css"


const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function navigateToAdmin() {
        navigate("/admin")
    }

    function onChangeEmail(a) {
        setEmail(a);
    }
    function onChangePassword(a) {
        setPassword(a)
    }

    async function submitForm(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        setEmail("");
        setPassword("");
        try {


            var response =
                await axios.put(`https://localhost:44364/api/Users/${email.toString().trim()}`, {
                    email: email.toString().trim(),
                    password: password.toString().trim(),
                })
            console.log(response);
            console.log(response.status);
            if (response.status === 200) {

                setEmail("");
                setPassword("");
                // navigateToAdmin();
                navigate("/admin");

            }
            else if (response.status === 204) {
                alert('Password Incorrect')
                // console.log("Password Incorrect");

            }
            else {
                // console.log("Something went wrong! Please try again")
                alert('Something went wrong! Please try again')
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='background'>

            <div className='Login'>


                <div className='loginform'><h1>Admin LogIn</h1>
                    <form onSubmit={submitForm}>
                        <div className='text-field'>
                            <label className='label'>Email</label>
                            <input onChange={(a) => onChangeEmail(a.target.value)} value={email} className='input-text' type="email" placeholder="  Enter Email" name="uname" required></input>
                        </div>
                        <div className='text-field'>
                            <label className='label'>Password</label>
                            <input onChange={(a) => onChangePassword(a.target.value)} value={password} className='input-text' type="password" placeholder="  Enter Password" name="psw" required></input>

                        </div>
                        <div className='sized-box'></div>
                        <button className='button'>
                            {/* <Link to='/home'>Submit</Link> */}
                            {/* <Link to='/admin'> */}
                            Submit
                            {/* </Link> */}
                        </button>

                    </form>
                    {/* <div>
                        <span>Don't have an account please <b>SignUp</b> as<b><button className='Owner'>
                            <Link to='/registry'>Restaurant Owner</Link></button></b> or <b><button><Link to='/userregis'>User</Link></button></b>Login as Admin  <b><button><Link to='/adminlogin'>Admin</Link></button></b>  </span>
                    </div> */}
                </div>
                <div className='image'></div>




            </div>


        </div>
    )
}

export default AdminLogin;