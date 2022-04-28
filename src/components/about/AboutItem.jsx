import React from 'react'

const AboutItem = (props) => {
  return (
    <article className='bg-liSec dark:bg-bgAlt
    border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-8 text-center
    transition ease-linear duration-300'>
      {props.children}
      <h5 className='text-base text-liLight dark:text-white'>{props.header}</h5>
      <small className='text-xs text-liBg  dark:text-light'>{props.text}</small>
    </article>
  )
}
export default AboutItem;