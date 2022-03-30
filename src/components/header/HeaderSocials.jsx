import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-3 absolute left-0 bottom-12
                    after:content-[''] after:w-[1px] after:h-8 after:bg-primaryAlt">
        <a className='inline-block text-primaryAlt hover:text-white transition ease-linear duration-300' 
            href='https://www.linkedin.com/in/ludvig-lindahl/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a className='inline-block text-primaryAlt hover:text-white transition ease-linear duration-300'
            href='https://github.com/luigi989' target='_blank' rel='noreferrer'><BsGithub /></a>
        <a className='inline-block text-primaryAlt hover:text-white transition ease-linear duration-300'
        // Here my portfolio dashboard shoule be???
            href='https://dribble.com' target='_blank' rel='noreferrer'><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials;