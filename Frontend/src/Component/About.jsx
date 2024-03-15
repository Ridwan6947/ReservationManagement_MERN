import React from 'react'
import {Link} from 'react-scroll'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About Us</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate sint cumque illo nisi eveniet inventore quae incidunt! Illum voluptatem, doloribus impedit iusto magnam ipsum, quod ullam neque quae iste natus distinctio id consectetur pariatur asperiores corporis, sequi possimus praesentium quaerat. Mollitia recusandae ipsa fugit dolorem natus qui obcaecati perspiciatis?
                </p>
                <Link to ={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About