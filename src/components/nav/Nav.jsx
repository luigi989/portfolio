import React from 'react'
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const navClass = "text-primaryAlt hover:bg-black hover:bg-opacity-40 active:bg-bg active:text-white " +
                    "bg-transparent p-[0.9rem] rounded-[50%] flex text-light text-lg " +
                    "transition ease-linear duration-300"
  const active = " bg-bg text-white";
  // activeNav === '#' ? "bg-bg text-white " : ""
  return (
    <nav className="bg-black bg-opacity-30 w-max py-3 px-7 fixed left-1/2 -translate-x-1/2 bottom-8
                    flex gap-3 rounded-[3rem] backdrop-blur-lg">

      <a className={activeNav === '#' ? navClass + active: navClass} 
         href='#'
         onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
                    
      <a className={activeNav === '#about' ? navClass + active : navClass} 
         href='#about'
         onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>

      <a className={activeNav === '#experience' ? navClass + active : navClass} 
         href='#experience'
         onClick={() => setActiveNav('#experience')}><BiBook /></a>

      <a className={activeNav === '#services' ? navClass + active : navClass} 
         href='#services'
         onClick={() => setActiveNav('#services')}><RiServiceLine /></a>
                    
      <a className={activeNav === '#contact' ? navClass + active : navClass} 
         href='#contact'
         onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav