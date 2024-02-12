import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg  ">
  <div className="container ">
    <a className="navbar-brand fw-bold text-white " to="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink className="nav-link active text-white bg" aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-white mybg" aria-current="page" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-white mybg" aria-current="page" to="contacts">Contacts</NavLink>
        </li>
        
       
        
      </ul>
      
    </div>
  </div>
</nav>
  
  
  
  
  </>
}
