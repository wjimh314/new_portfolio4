import React from 'react';
import logo from '../logo.png';
import{ Link } from "react-scroll";
//font awesome import
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{ faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className= "container">

  <a className="navbar-brand " href="#"><img class= "rounded-circle" src={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}git />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
      <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="About Me" offset={-110} className="nav-link" >about me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Languages" offset={-110} className="nav-link" href="#">My Process</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Resume" offset={-110} className="nav-link" >Resume</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" >portfolio</Link>
            </li>
      <li className="nav-item">
        <a href="mailto:wjimh314@gmail.com" className="nav-link" >Contact Me</a>
      </li>
  
      
    </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar