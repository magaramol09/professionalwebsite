import React from 'react'
import logo from "./images/logo.png"

export default function Navbar() {
  return (
    <div>
      
        <header className='header'>
            <img src={logo} className="logo" alt=""/>
            <nav className='navbar'>
                <ul className='navbar-lists'>
                    <li><a href="/" className='navbar-link home-link'>home</a></li>
                    <li><a href="/" className='navbar-link about-link'>About</a></li>
                    <li><a href="/" className='navbar-link services-link'>Services</a></li>
                    <li><a href="/" className='navbar-link portfolio-link'>Portfolio</a></li>
                    <li><a href="/" className='navbar-link contact-link'>Contact</a></li>
                </ul>
            </nav>
        </header>

    </div>
  )
}
