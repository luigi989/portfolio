import { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail, BiMoon } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useSetRecoilState } from 'recoil';
import { darkModeState } from '../../atoms/atoms';
import NavItem from './NavItem';
import SwapButton from './SwapButton';

const Nav = () => {
   const [navVisible, setNavVisible] = useState(false);
   const setIsDark = useSetRecoilState(darkModeState);

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
      
   return (
      <div className={'fixed bg-red flex flex-col left-1 lg:left-12 justify-center items-center gap-1 lg:gap-5 lg:-translate-y-1/2 bottom-3 lg:top-1/2 print:hidden ' +
         (navVisible ? "pointer-events-auto" : "pointer-events-none lg:pointer-events-auto")} >
         <nav className={"bg-liSec dark:bg-black w-max py-3 px-4 flex flex-col gap-5 lg:gap-3 " +
            "rounded-[3rem] backdrop-blur-lg " + (navVisible ? "visible" : "invisible lg:visible")}>
            <NavItem
               href='#'
               title='Header'
               ariaLabel='Go to Home section'
               icon={<AiOutlineHome />} />

            <NavItem
               href='#about'
               title='About me'
               ariaLabel='Go to About section'
               icon={<AiOutlineUser />} />

            <NavItem
               href='#experience'
               title='Experience'
               ariaLabel='Go to Experience section'
               icon={<BiBook />} />

            <NavItem
               href='#portfolio'
               title='Portfolio'
               ariaLabel='Go to Portfolio section'
               icon={<BsBriefcase />} />

            <NavItem
               href='#contact'
               title='Contact me'
               ariaLabel='Go to Contact section'
               icon={<BiMessageSquareDetail />} />
         </nav>

         <SwapButton
            className={(navVisible ? "visible" : "invisible lg:visible")}
            title='Dark/Light mode'
            ariaLabel='Dark mode switch'
            onClick={setDarkMode}
            icon1={<BiMoon className="swap-on fill-current w-6 h-6" />}
            icon2={<ImSun className="swap-off fill-current w-6 h-6" />}
         />

         <SwapButton
            title='Open/close menu'
            ariaLabel='Menu switch'
            mobile
            onClickP={(e) => { setNavVisible((e.target as HTMLInputElement).checked) }}
            icon1={<FiMenu className="swap-off fill-current w-6 h-6" />}
            icon2={<IoMdClose className="swap-on fill-current w-6 h-6" />}
         />
      </div>
   )
}

export default Nav