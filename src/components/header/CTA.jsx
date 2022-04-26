import React from 'react'
import CV from '../../assets/cv_eng.pdf';
import Button from '../shared/Button';

const CTA = () => {
  return (
    <div className='mt-10 flex gap-5 justify-center'>
        <a className='hover:bg-bgAlt hover:text-white hover:border-transparent
                      transition ease-linear duration-300
                      w-max inline-block py-3 px-5 rounded-lg cursor-pointer border-solid border-2
                      border-primary text-primaryAlt' 
           href={CV} download>Download CV</a>
        <Button link={"#contact"}>Let's talk</Button>
    </div>
  )
}

export default CTA