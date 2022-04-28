import React from 'react';

const ContactItem = (props) => {
  return (
    <article className='bg-liSec dark:bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-6 text-center
            transition ease-linear duration-300 flex flex-col'>
        {props.children}
        <h5 className='text-base text-liBg dark:text-white'>{props.header}</h5>
        <small className='mb-4 text-xs text-liBg dark:text-light'>{props.contact}</small> 
        <a href={props.href} target='_blank' rel='noreferrer' 
          className='text-sm text-liLight hover:text-liBg dark:text-primary dark:hover:text-light'>Send a Message</a>
    </article>
  )
}

export default ContactItem;