import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import { useState , useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Reservation = () => {
    const [fullname , setFullname] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [time , setTime] = useState("");
    const [date , setDate] = useState("");
    const navigate = useNavigate();

    

    const handleReservation = async(e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:4000/api/v1/sendRequest" , {fullname , email , phone , time , date},{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials: true
            });
            toast.success(data.message);
            setFullname("");
            setEmail("");
            setPhone(0);
            setTime("");
            setDate("");
            navigate("/success"); 
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
  return (
    <section className="reservation" id='reservation'>
        <div className="container">
            <div className="banner">
                <img src="/reservation.png" alt="res" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>Make a Reservation</h1>
                    <form>
                       <div>
                            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            
                        </div>
                        <div>
                        <input type="text" placeholder='Enter your fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                            <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
                            
                        </div>
                        <div>
                        <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <input type="text" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>
                        <button type='submit' onClick={handleReservation}>Reserve Now <span><HiOutlineArrowNarrowRight/></span></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reservation