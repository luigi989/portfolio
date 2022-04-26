import React from 'react'
import CV from '../../assets/cv_eng.pdf';
import Button from '../shared/Button';

const CTA = () => {
  return (
    <div className='mt-10 flex gap-5 justify-center'>
        <a className='dark:hover:bg-bgAlt dark:hover:text-white dark:hover:border-transparent dark:border-primary dark:text-primaryAlt dark:bg-none
                      border-solid border-2
                      border-transparent text-liSec border-liSec hover:bg-liSec hover:text-liBg
                      transition ease-linear duration-300
                      w-max inline-block py-3 px-5 rounded-lg cursor-pointer text-center'
           href={CV} download>Download CV</a>
        <Button link={"#contact"}>Let's talk</Button>
    </div>
  )
}

export default CTA