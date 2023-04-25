import React from 'react'
import {Link} from "react-scroll"
import "./header.css"

const Header = () => {
  return (
    <div className="header">
    <div classsname="header__left">
    <h1>Develop<span>er</span></h1>
    </div>
    <div className="header__right">
    <Link to="about" smooth={true} duration={500}>
    <h4>
    About me
    </h4>
    </Link>
    <Link to="skills" smooth={true} duration={500}>
    <h4>
     skills
    </h4>
    </Link>
    <Link to="projects" smooth={true} duration={500}>
    <h4>
    projects
    </h4>
    </Link>
    <Link to="exp" smooth={true} duration={500}>
    <h4>
    Experience
    </h4>
    </Link>
    <Link to="contact" smooth={true} duration={500}>
    <h4>
    contact
    </h4>
    </Link>
    <h4 className="header__rightButton">Join with me</h4>
    </div>
    </div>
  )
}

export default Header
