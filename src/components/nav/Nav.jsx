import React, { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { darkModeState, sectionVisibleState } from '../../atoms/atoms';

const Nav = () => {
   const [activeNav, setActiveNav] = useState();
   const [navVisible, setNavVisible] = useState(false);
   const setIsDark = useSetRecoilState(darkModeState);
   const sectionsVisible = useRecoilValue(sectionVisibleState);

   const setDarkMode = () => {
      if (localStorage.getItem('color-theme')) {
         if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setIsDark(true);
         } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setIsDark(false);
         }

         // if NOT set via local storage previously
      } else {
         if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setIsDark(false);
         } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setIsDark(true);
         }
      }
   }

   useEffect(() => {
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
         document.documentElement.classList.add('dark');
         setIsDark(true);
      } else {
         document.documentElement.classList.remove('dark');
         setIsDark(false);
      }
   }, [setIsDark])

   useEffect(() => {
      const url = new URL(window.location);
      if (sectionsVisible.header) {
         url.hash = '#';
         setActiveNav('#');
      }
      if (sectionsVisible.about) {
         url.hash = '#about';
         setActiveNav('#about');
      }
      if (sectionsVisible.experience) {
         url.hash = '#experience';
         setActiveNav('#experience');
      }
      if (sectionsVisible.portfolio) {
         url.hash = 'portfolio';
         setActiveNav('#portfolio');
      }
      if (sectionsVisible.contact) {
         url.hash = 'contact';
         setActiveNav('#contact');
      }
      window.history.pushState({}, '', url);
   }, [sectionsVisible])


   const navClass = "text-liBg hover:text-liSec hover:bg-liPrimary hover:bg-opacity-80 " +
      "dark:hover:bg-opacity-60 dark:hover:bg-primaryAlt dark:hover:text-black dark:text-primaryAlt " +
      "bg-transparent p-[0.9rem] rounded-[50%] flex text-lg " +
      "transition ease-linear duration-300 "

   const active = 'bg-liPrimary text-gray-700 dark:bg-primaryAlt dark:text-black';

   return (
      <div className={'fixed h-5/6 bg-red flex flex-col left-1 lg:left-12 justify-center items-center gap-1 lg:gap-5 -translate-y-1/2 top-1/2 lg:top-1/2 print:hidden ' +
      (navVisible ? "pointer-events-auto" : "pointer-events-none lg:pointer-events-auto")} >
         <nav className={"bg-liSec dark:bg-black w-max py-3 px-4 flex flex-col gap-5 lg:gap-3 " +
            "rounded-[3rem] backdrop-blur-lg " + (navVisible ? "visible" : "invisible lg:visible")}>
            <a className={activeNav === '#' ? navClass + active : navClass}
               href='/#'
               title='Header'
               aria-label='Go to Home section'
               onClick={() => setActiveNav('#')}><AiOutlineHome /></a>

            <a className={activeNav === '#about' ? navClass + active : navClass}
               href='#about'
               title='About me'
               aria-label='Go to About section'
               onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>

            <a className={activeNav === '#experience' ? navClass + active : navClass}
               href='#experience'
               title='Experience'
               aria-label='Go to Experience section'
               onClick={() => setActiveNav('#experience')}><BiBook /></a>

            <a className={activeNav === '#portfolio' ? navClass + active : navClass}
               href='#portfolio'
               title='Portfolio'
               aria-label='Go to Portfolio section'
               onClick={() => setActiveNav('#portfolio')}><BsBriefcase /></a>

            <a className={activeNav === '#contact' ? navClass + active : navClass}
               href='#contact'
               title='Contact me'
               aria-label='Go to Contact section'
               onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
         </nav>

         <div className={'bg-liSec dark:bg-black w-max py-2 px-2 rounded-[3rem] backdrop-blur-lg ' + (navVisible ? "visible" : "invisible lg:visible pointer-events-none lg:pointer-events-auto")}>
            <label
               title='Dark/Light mode'
               className="swap swap-rotate 
                  text-liBg hover:bg-liPrimary hover:text-liSec dark:hover:bg-primaryAlt dark:text-primaryAlt dark:hover:text-black 
                  transition ease-linear duration-300
                  bg-transparent p-[0.9rem] rounded-[50%] text-lg">
               <input type="checkbox" aria-label='Dark mode switch' onClick={setDarkMode} />
               <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
               <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
            </label>
         </div>

         <div className='lg:hidden bg-liSec dark:bg-black w-max py-2 px-2 rounded-[3rem] backdrop-blur-lg pointer-events-auto'>
            <label
               title='Open/close menu'
               className="swap swap-rotate 
                  text-liBg hover:bg-liPrimary hover:text-liSec dark:hover:bg-primaryAlt dark:text-primaryAlt dark:hover:text-black 
                  transition ease-linear duration-300
                  bg-transparent p-[0.9rem] rounded-[50%] text-lg">
               <input type="checkbox" aria-label='Menu switch' onChange={(e) => { setNavVisible(e.target.checked) }} />

               <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

               <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
         </div>
      </div>
   )
}

export default Nav