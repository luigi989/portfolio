import React from 'react';

const ContactItem = (props) => {
  return (
    <article className='group bg-liSec dark:bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-6 text-center
            hover:cursor-default transition ease-linear duration-300 flex flex-col
            hover:bg-liBg hover:border-liSec hover:text-liSec
            dark:hover:bg-transparent dark:hover:border-primary dark:hover:text-white'>
        {props.children}
        <h5 className='text-base text-liBg group-hover:text-liSec dark:text-white dark:group-hover:text-white'>{props.header}</h5>
        <small className='mb-4 text-xs text-liBg group-hover:text-liSec dark:text-light dark:group-hover:text-light'>{props.contact}</small> 
        <a href={props.href} target='_blank' rel='noreferrer' 
          className='text-sm text-liLight hover:text-liSec dark:text-primary dark:hover:text-light'>Send a Message</a>
    </article>
  )
}

export default ContactItem;