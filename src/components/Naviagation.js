import React from 'react'
import {Link} from "react-scroll"

const Naviagation = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className= "container">

  
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon navbar-light bg-light "></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about me</Link>
      </li>
      <li className="nav-item">
      <Link smooth={true} to="Portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>      </li>
      
      <li className="nav-item">
      <Link smooth={true} to="Resume" offset={-110} className="nav-link" >Resume</Link>      </li>
      <li className="nav-item">
      <Link smooth={true} to="Contact" offset={-110} className="nav-link" >Contact</Link>      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
  )
}

export default Naviagation