import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ snap }) => {
  return (
    <footer id='footer' 
      className={ snap + ' bg-liSec dark:bg-primaryAlt mt-28 py-12 px-0 text-center text-sm text-liBg dark:text-bg'}>
      <a href='/#' className='text-4xl font-medium mb-8 inline-block'>Ludvig Lindahl</a>

      <ul className='flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 mt-0 mx-auto mb-6 md:mb-12'>
        <li><a href='/#' className='hover:underline'>Home</a></li>
        <li><a href='#about' className='hover:underline'>About</a></li>
        <li><a href='#experience' className='hover:underline'>Experience</a></li>
        <li><a href='#portfolio' className='hover:underline'>Portfolio</a></li>
        <li><a href='#testimonials' className='hover:underline'>Testamonials</a></li>
        <li><a href='#contact' className='hover:underline'>Contact</a></li>
      </ul>

      <div className='flex justify-center gap-4 mb-4'>
        <a href='https://www.linkedin.com/in/ludvig-lindahl/' target='_blank' rel='noreferrer'
          className='bg-transparent dark:bg-bg dark:text-white p-3 rounded-xl flex border-2 border-solid border-liBg dark:border-transparent
          hover:bg-liBg hover:text-liSec transition ease-linear duration-200
          dark:hover:bg-transparent dark:hover:text-bg dark:hover:border-bg'>
            <FaLinkedin /></a>
        <a href='https://github.com/luigi989' target='_blank' rel='noreferrer'
          className='bg-transparent dark:bg-bg dark:text-white p-3 rounded-xl flex border-2 border-solid border-liBg dark:border-transparent
          hover:bg-liBg hover:text-liSec transition ease-linear duration-200
          dark:hover:bg-transparent dark:hover:text-bg dark:hover:border-bg'>
            <FaGithub /></a>
        <a href='https://www.facebook.com/ludvig.lindahl.1' target='_blank' rel='noreferrer'
          className='bg-transparent dark:bg-bg dark:text-white p-3 rounded-xl flex border-2 border-solid border-liBg dark:border-transparent
          hover:bg-liBg hover:text-liSec transition ease-linear duration-200
          dark:hover:bg-transparent dark:hover:text-bg dark:hover:border-bg'>
            <FaFacebook /></a>
      </div>

      <div className='mb-16'>
        <small>&copy; Ludvig Lindahl. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer