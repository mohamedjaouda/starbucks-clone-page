import React from 'react'
import marker from "../img/marker.svg";


const NavLinks = () => {
  return (
    <React.Fragment>
      <ul className="navbar-nav-left">
        <li>
          <a href="/">MENU</a>
        </li>
        <li>
          <a href="/">REWARDS</a>
        </li>
        <li>
          <a href="/">GIFT CARDS</a>
        </li>
      </ul>

      <ul className="navbar-nav-right">
        <li>
          <a href="/">
            <img src={marker} alt="" />
            <span>Find a store</span>
          </a>
        </li>
        <li>
          <button className=" btn-cards-darken">Sign in </button>
        </li>
        <li>
          <button className=" btn-dark">join now</button>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NavLinks