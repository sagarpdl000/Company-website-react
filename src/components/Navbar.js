import React from 'react'
import logo from '../assets/codehitlogo.png'
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
       
        <img src={logo} />
       
    
       <div className='rightside'>
        <Link to="/">Home</Link>
        <Link to="/Services">Our Services</Link>
        <Link to="/About">About us</Link>
        <Link to="/Contact">Contact us</Link>
       </div>
    



    </div>
  );
}

export default Navbar




{/* <div className="rightSide"></div>

</div> */}