import React, { useState } from 'react'
import {Link} from "react-scroll";
import {GiHamburgerMenu} from "react-icons/gi"
import {data} from '../Pages/restApi.json';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const handleLogout = () =>{
        axios.post("http://localhost:4000/api/v1/logout")
        .then(result =>{
            console.log(result)
            toast.success("Logout successfull");
            navigate("/")   
        })
        .catch(err =>{
            console.log(err)
            toast.error(err.response.data.message);
        })
    }

    const [show , setShow] = useState(false);
  return (
    <>
    <nav>
        <div className="logo">Ridwan</div>
        <div className={show ? "navLinks showmenu":"navLinks"}>
            <div className="links">
                {data[0].navbarLinks.map((element) =>{
                    return(
                        <Link to={element.link} spy={true} smooth={true}  duration={500} key={element.id}>{element.title}
                    </Link> 
                    );
                })}
            </div>
            <button className="menuBtn" onClick={handleLogout}>Logout</button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu/>
        </div>
    </nav>
    </>
  )
}

export default NavBar