import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="/logo.png" alt="" />
        </div>

        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </div>
  )
}

export default Navbar