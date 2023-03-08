import { Ref } from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
const profileImage_xs = require('../../assets/profile_image/profileImage-xs.webp');
const profileImage_sm = require('../../assets/profile_image/profileImage-sm.webp');
const profileImage = require('../../assets/profile_image/profileImage.webp');

interface HeaderProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Header = ({ visibilityRef, snap } : HeaderProps) => {

  return (
    <header ref={visibilityRef} className={snap + ' h-fit md:h-[68vh] lg:h-screen w-3/4 m-auto pt-16 overflow-hidden print:h-screen'}>
      <div className='h-full w-11/12 md:w-3/4 m-auto text-center relative text-liSec dark:text-white'>

        <div className='p-1 flex flex-col bg-liBg dark:bg-transparent w-fit m-auto'>
          <h1 className='mb-3 text-center text-liLight dark:text-light font-medium text-3xl'>Hello I'm Ludvig Lindahl</h1>
          <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-2xl'>Fullstack Developer</h2>
        </div>

        <CTA />
        <a
          href='#contact'
          title='Scroll down'
          className='hidden lg:block text-liSec hover:text-liLight dark:text-primaryAlt dark:hover:text-white 
                                      p-1 bg-liBg dark:bg-transparent text-sm
                                      absolute -right-9 bottom-20 rotate-90 font-light'>Scroll Down</a>
        <div className="hidden lg:flex flex-col items-center gap-3 absolute left-0 bottom-12 bg-liBg p-1 dark:bg-transparent
                    after:content-[''] after:w-[1px] after:h-8 after:bg-liSec dark:after:bg-primaryAlt">
          <HeaderSocial 
            label='Linkedin' 
            url='https://www.linkedin.com/in/ludvig-lindahl/' 
            icon={<BsLinkedin/>} 
          />
          <HeaderSocial 
            label='Github' 
            url='https://github.com/luigi989/' 
          icon={<BsGithub/>} />
          <HeaderSocial 
            label='Facebook' 
            url='https://www.facebook.com/ludvig.lindahl.1' 
            icon={<BsFacebook/>} 
          />
        </div>

        <div className='bg-gradient-to-b from-liSec dark:from-primaryAlt md:w-[22rem] md:h-[30rem] mt-16 
                        rounded-tl-[12rem] rounded-tr-[12rem] 
                        mx-auto overflow-hidden px-1 pb-6 pt-20'>
          <img className='block object-cover' alt='me'
            src={profileImage_xs}
            srcSet={`${profileImage} 4x, ${profileImage_sm} 3x, ${profileImage_sm} 2x, ${profileImage_sm} 1x, `}
          />
        </div>

      </div>
    </header>
  )
}

export default Header