import React from 'react'
import { Element} from 'react-scroll'
import {LinkedIn,GitHub,Email, Router} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import "./Contact.css";

const Contact = () => {
  return (
    
        <Element className="contact" id="contact">
    <h1>Contact</h1>
    <div className="contact__container">
    <p>
        EMAIL : <span>akaran3007@gmail.com</span>
        </p>

        <p>
        GITHUB : <span>AKaran3007</span>
        </p>
        <div className="contact__icons">
         <a href="https://www.linkedin.com/in/a-karan-b53602195/" target="_blank"> 
         <IconButton>
          <LinkedIn></LinkedIn>
         </IconButton>
         </a>

         <a href="https://github.com/AKaran3007/" target="_blank"> 
         <IconButton>
          <GitHub></GitHub>
         </IconButton>
         </a>

         <a href="akaran3007@gmail.com/" target="_blank"> 
         <IconButton>
          <Email></Email>
         </IconButton>
         </a>
        </div>
    </div>
    </Element>
    
  )
}

export default Contact