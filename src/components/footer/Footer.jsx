import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className='bg-primaryAlt mt-28 py-12 px-0 text-center text-sm'>
      <a href='/#' className='text-bg text-4xl font-medium mb-8 inline-block'>Ludvig Lindahl</a>

      <ul className='flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 mt-0 mx-auto mb-6 md:mb-12'>
        <li><a href='/#' className='text-bg hover:underline'>Home</a></li>
        <li><a href='#about' className='text-bg hover:underline'>About</a></li>
        <li><a href='#experience' className='text-bg hover:underline'>Experience</a></li>
        <li><a href='#services' className='text-bg hover:underline'>Services</a></li>
        <li><a href='#portfolio' className='text-bg hover:underline'>Portfolio</a></li>
        <li><a href='#testimonials' className='text-bg hover:underline'>Testamonials</a></li>
        <li><a href='#contact' className='text-bg hover:underline'>Contact</a></li>
      </ul>

      <div className='flex justify-center gap-4 mb-4'>
        <a href='https:facebook.com' className='bg-bg text-white hover:text-bg hover:border-bg hover:bg-transparent p-3 rounded-xl flex 
          border-solid border-[1px] border-transparent'><FaFacebook /></a>
        <a href='https:instagram.com' className='bg-bg text-white hover:text-bg hover:border-bg hover:bg-transparent p-3 rounded-xl flex 
          border-solid border-[1px] border-transparent'><FaInstagram /></a>
        <a href='https:twitter.com' className='bg-bg text-white hover:text-bg hover:border-bg hover:bg-transparent p-3 rounded-xl flex 
          border-solid border-[1px] border-transparent'><FaTwitter /></a>
      </div>

      <div className='mb-16 text-bg'>
        <small>&copy; Ludvig Lindahl. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer