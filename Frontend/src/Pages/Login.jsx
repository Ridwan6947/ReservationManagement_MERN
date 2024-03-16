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
            .catch(err => {
                console.log(err);
                toast.error(err);
            })
    }
  return (
    <div className="containeR">
        <form action="onSubmit"className='loginUI'>
            <h1>Sign In</h1>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a href="#">Forget Your Password?</a>
            <button type='submit' onClick={handleSubmit}>Sign In</button>
        </form>
    </div>
  )
}

export default Login