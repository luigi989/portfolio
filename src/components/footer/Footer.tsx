import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import IconButton from './IconButton';

interface FooterProps {
  snap: string;
}

const Footer = ({ snap }: FooterProps) => {
  return (
    <footer id='footer'
      className={snap + ' bg-liSec dark:bg-primaryAlt py-8 lg:py-12 px-0 text-center text-sm text-liBg dark:text-bg'}>
      <p className='text-4xl font-medium mb-8 inline-block'>Ludvig Lindahl</p>

      <ul className='flex flex-col print:flex-row md:flex-row flex-wrap justify-center gap-6 md:gap-8 mt-0 mx-auto mb-6 md:mb-8'>
        <li><a href='/#' className='hover:underline'>Home</a></li>
        <li><a href='#about' className='hover:underline'>About</a></li>
        <li><a href='#experience' className='hover:underline'>Experience</a></li>
        <li><a href='#portfolio' className='hover:underline'>Portfolio</a></li>
        <li><a href='#contact' className='hover:underline'>Contact</a></li>
      </ul>

      <div className='flex justify-center gap-4 mb-4'>
        <IconButton
          link='https://www.linkedin.com/in/ludvig-lindahl/'
          ariaLabel='Linkedin'
          title='Linkedin'
          icon={<BsLinkedin />} />

        <IconButton
          link='https://github.com/luigi989'
          ariaLabel='Github'
          title='Github'
          icon={<BsGithub />} />

        <IconButton
          link='https://www.facebook.com/ludvig.lindahl.1'
          ariaLabel='Facebook'
          title='Facebook'
          icon={<BsFacebook />} />
      </div>

      <div className='mb-0 lg:mb-4'>
        <small>&copy; Ludvig Lindahl. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer