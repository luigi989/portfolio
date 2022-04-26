import React from 'react'

const AboutItem = (props) => {
  return (
    <article className='group bg-liSec hover:border-liSec hover:bg-liBg hover:text-liSec
    dark:bg-bgAlt dark:hover:border-primary 
    border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-8 text-center
    dark:hover:bg-transparent hover:cursor-default transition ease-linear duration-300'>
      {props.children}
      <h5 className='text-base text-liLight dark:text-black'>{props.header}</h5>
      <small className='text-xs text-liBg  dark:text-light group-hover:text-liSec'>{props.text}</small>
    </article>
  )
}
export default AboutItem;