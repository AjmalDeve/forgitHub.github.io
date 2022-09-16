import React from "react";

import { NavLink } from "react-router-dom";
function Navbar() {
    return (
    <>
    <div className="nav_bar">
        <h3 className='logo'>A <span>!</span> Web</h3>
        <ul className="nav_links">
            <li>
        <NavLink  className='nav' to='/' >Home</NavLink>
            <span className="line"></span>
            </li>
            <li>
        <NavLink className='nav' to='/about' >About</NavLink>
            <span className="line"></span>
            
            </li>
            <li>
        <NavLink className='nav' to='/services' >Services</NavLink>
            <span className="line"></span>
            
            </li>
            
            <li>
        <NavLink className='nav' to='/contact' >Contact</NavLink>
            <span className="line"></span>
            
            </li>
        </ul>
    </div>
    </>
    );
  }
  
  export default Navbar;
  