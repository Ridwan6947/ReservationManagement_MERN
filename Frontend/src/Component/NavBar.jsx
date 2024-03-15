import React, { useState } from 'react'
import {Link} from "react-scroll";
import {GiHamburgerMenu} from "react-icons/gi"
import {data} from '../Pages/restApi.json';

const NavBar = () => {

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
            <button className="menuBtn">Our Menu</button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu/>
        </div>
    </nav>
    </>
  )
}

export default NavBar