import React from 'react';
import logo from '../img/logo.svg'
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/">
              <img src={logo} alt="startbucks" />
            </a>
          </div>
          <NavLinks />
        </div>
      </nav>
    );
}

export default Navbar
