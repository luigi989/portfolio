import React from 'react';

const ContactItem = (props) => {
  return (
    <article className='bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-6 text-center
            hover:bg-transparent hover:border-primary hover:cursor-default transition ease-linear duration-300
            flex flex-col'>
        {props.children}
        <h5 className='text-base'>{props.header}</h5>
        <small className='text-xs text-light mb-4'>{props.contact}</small> 
        <a href='mailto:ludde.lindahl@gmail.com' className='text-sm text-primary hover:text-light'>Send a Message</a>
    </article>
  )
}

export default ContactItem;