import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import{Facebook,Instagram,LinkedIn} from "@mui/icons-material"
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
    <h1>Contact</h1>
    <div className="contact__container">
    <p>
    Email:<span>dsdharaneesh494@gmail.com</span>
    </p>
    <p>
    Github username : <span>@dsdharaneesh494</span>
    </p>
    <div className="contact__icons">
    <a href="https://www.linkedin.com/in/dharaneesh-k-71b698258">
    <IconButton>
    <LinkedIn /> 
    </IconButton>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100027549799075&mibextid=ZbWKwL">
    <IconButton>
    <Facebook /> 
    </IconButton>
    </a>
    <a href="https://instagram.com/dharanxxsh._18?igshid=YmMyMTA2M2Y=">
    <IconButton>
    <Instagram /> 
    </IconButton>
    </a>
    </div>
    </div>
    </Element>
  )
}

export default Contact
