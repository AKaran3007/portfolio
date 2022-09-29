import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css";

const Topcontent = () => {
  return (
    <div className="topcontent">
        <div className="topcontent__container">
        <p>Hello Everyone Who visiting My Profile I'm</p>
            <h1 className="topcontent__name"> Karan Anandan</h1>
            <p>An aspiring Developer with a degree in <span className='color'>Electronics and Communication Engineering.</span></p>
            <p>I have just completed <span className='color'>MERN Stack</span> at<span className='color'> GUVI</span> of IIT-M,Chennai</p>
            <p>A professional Web and App Developer</p>
            <p>I can build scalable Softwares and solve <br/>competitive programming problems.</p>
            <a href="www.google.com">
                <button className="topcontent__downloadButton">Download CV</button>
            </a>

            <Link to="projects" smooth={true} duration={500}>
                <button className="topcontent__workButton">My Work</button>
            </Link>

        </div>

    </div>
  )
}

export default Topcontent