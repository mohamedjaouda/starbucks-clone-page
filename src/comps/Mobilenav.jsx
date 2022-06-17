import React from 'react'
import marker from "../img/marker.svg";


const NavLinks = () => {
  return (
    <div className='mobile-menu'>
      <ul>
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

      <ul className="">
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
    </div>
  );
}

export default NavLinks