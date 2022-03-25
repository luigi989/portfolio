import React from 'react'
import CTA from './CTA';

const Header = () => {
  return (
    <header className='w-3/4 m-auto'>
      <h5 className='font-medium font-4xl'>Hello I'm</h5>
      <h1 className='font-medium'>Ludvig Lindahl</h1>
      <h5 className='font-medium font-4xl'>Fullstack Developer</h5>
      <CTA />
    </header>
  )
}

export default Header