import Mobilenav from "./Mobilenav";
// import openIcon from "../img/Frame 6.svg";
// import closeIcon from "../img/Frame 7.svg";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";



const HamburgerMenu = () => {
    
    const [open, setOpen] = useState(false);

    const toggleButtom = () => {
      setOpen(!open)
    }


  return (
    <>
      { open ?
      <GrClose
        className="mobile-buttom" 
        onClick={toggleButtom}
        />
        :
      <GiHamburgerMenu
        className="mobile-buttom"
        onClick={toggleButtom}
        />
      }
      {open && <Mobilenav />}
    </>
  );
}

export default HamburgerMenu
