import React from 'react'
import CV from '../../assets/cv_eng.pdf';
import Button from '../shared/Button';

const CTA = () => {
  return (
    <div className='mt-[37px] flex gap-5 justify-center'>
      <button className='bg-liBg dark:bg-transparent dark:hover:bg-bgAlt dark:hover:text-white 
                      dark:hover:border-transparent dark:border-primary dark:text-primaryAlt dark:bg-none
                      border-solid border-2
                      border-transparent text-liSec border-liSec hover:bg-liSec hover:text-liBg
                      transition ease-linear duration-300
                      py-3 px-5 rounded-lg cursor-pointer text-center text-sm whitespace-nowrap md:text-lg md:whitespace-normal'
        title='Download CV'>
        <a href={CV} download>Download CV</a>
      </button>
      <Button 
        link={"#contact"}
        title='Contact me'
      >
          Let's talk</Button>
    </div>
  )
}

export default CTA