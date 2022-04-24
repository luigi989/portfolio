import React from 'react'
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';

const Nav = () => {
   const [activeNav, setActiveNav] = useState('#');

   const navClass = "text-primaryAlt hover:bg-black hover:bg-opacity-40" +
      "bg-transparent p-[0.9rem] rounded-[50%] flex text-light text-lg " +
      "transition ease-linear duration-300"
   const active = " bg-primaryAlt text-white";

   return (
      <nav className="bg-black bg-opacity-50 w-max py-3 px-4 fixed left-12 -translate-y-1/2 top-1/2
                    flex flex-col gap-3 rounded-[3rem] backdrop-blur-lg">

         <a className={activeNav === '#' ? navClass + active : navClass}
            href='/#'
            onClick={() => setActiveNav('#')}><AiOutlineHome /></a>

         <a className={activeNav === '#about' ? navClass + active : navClass}
            href='#about'
            onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>

         <a className={activeNav === '#experience' ? navClass + active : navClass}
            href='#experience'
            onClick={() => setActiveNav('#experience')}><BiBook /></a>

         <a className={activeNav === '#portfolio' ? navClass + active : navClass}
            href='#portfolio'
            onClick={() => setActiveNav('#portfolio')}><BsBriefcase /></a>

         <a className={activeNav === '#contact' ? navClass + active : navClass}
            href='#contact'
            onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
      </nav>
   )
}

export default Nav