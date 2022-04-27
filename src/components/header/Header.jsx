import React from 'react'
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = ({ snap }) => {
  return (
    <header className={snap + ' h-screen md:h-[68vh] lg:h-screen w-3/4 m-auto pt-16 overflow-hidden'}>
      <div className='h-full w-3/4 m-auto text-center relative text-liSec dark:text-white'>

        <div className='p-1 flex flex-col bg-liBg dark:bg-transparent w-fit m-auto'>
          <h5 className='mb-3 text-center text-liLight dark:text-light font-medium text-3xl'>Hello I'm Ludvig Lindahl</h5>
          <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-2xl'>Fullstack Developer</h2>
        </div>

        <CTA />
        <a href='#contact' className='hidden lg:block text-liSec hover:text-liLight dark:text-primaryAlt dark:hover:text-white 
                                      p-1 bg-liBg dark:bg-transparent text-sm
                                      absolute -right-9 bottom-20 rotate-90 font-light'>Scroll Down</a>
        <HeaderSocials />

        <div className='bg-gradient-to-b from-liSec dark:from-primaryAlt w-[22rem] h-[30rem] mt-16 
                        rounded-tl-[12rem] rounded-tr-[12rem] 
                        absolute left-[calc(50%-11rem)] overflow-hidden px-6 pb-6 pt-20'>
          <img className='block object-cover' src={ME} alt='me' />
        </div>

      </div>

    </header>
  )
}

export default Header