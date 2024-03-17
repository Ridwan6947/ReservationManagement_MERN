import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        event.preventDefault(); // Prevent default form submission behavior
        axios.post("http://localhost:4000/api/v1/register", { fullname, email, password, username })
            .then(result => {
                console.log(result);
                toast.success("User registered successfully");
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong, try again");
            });
    };

    return (
        <div className='containeR'>
            <form action="onSubmit"className='loginUI'>
                <h1>Sign up</h1>
                <p>Register to experience the best food</p>
                <input type="text" placeholder="Fullname" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                <input type="email" placeholder='Email' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" name="username" placeholder='Username' id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button type='submit' onClick={handleSubmit} className='btn'>Sign up</button>
                <a href="/">Sign in</a>
            </form>
        </div>
    );
};

export default Register;
