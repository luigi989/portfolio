import React from 'react'
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header className='h-screen md:h-[68vh] lg:h-screen w-3/4 m-auto pt-28 overflow-hidden'>
      <div className='h-full w-3/4 m-auto text-center relative'>
        <h5 className='font-medium font-4xl'>Hello I'm</h5>
        <h1 className='font-medium'>Ludvig Lindahl</h1>
        <h5 className='font-medium font-4xl'>Fullstack Developer</h5>
        <CTA />
        <a href='#contact' className='hidden lg:block text-primaryAlt hover:text-white 
                                      transition ease-linear duration-300 text-sm
                                      absolute -right-9 bottom-20 rotate-90 font-light'>Scroll Down</a>
        <HeaderSocials />

        <div className='bg-gradient-to-b from-primaryAlt w-[22rem] h-[30rem] mt-16 
                        rounded-tl-[12rem] rounded-tr-[12rem] 
                        absolute left-[calc(50%-11rem)] overflow-hidden px-6 pb-6 pt-20'>
          <img className='block object-cover'src={ME} alt='me' />
        </div>

      </div>

    </header>
  )
}

export default Header