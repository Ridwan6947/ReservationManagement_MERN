import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4000/api/v1/login" , {email,password})
            .then(result => {
                console.log(result);
                toast.success(result.data.message);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
  return (
    <div className='parent'>
        <div className="child">
        <form action="" className='form' onSubmit={handleSubmit}>
            <h1>Already a user?</h1>
            <div className="input-group">
                <label htmlFor="email"><strong className='labelText'>Email</strong></label>
                <input type="email" name="email" id="Email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-group">
                <label htmlFor="password"><strong className='labelText'>Password</strong></label>
                <input type="password" name="password" id="Password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-container">
                <button type="submit" className='btn'>Login</button>
                <Link to={"/register"} className='btn1'>Create an account</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login