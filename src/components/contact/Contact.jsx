import React from 'react'
import { FiMail } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import ContactItem from './ContactItem';

const Contact = () => {
  return (
    <section id='contact' className='mt-32 h-fit lg:h-screen pt-4 lg:pt-8'>
      <h5 className='text-light font-medium'>Get in touch</h5>
      <h2 className='text-primaryAlt font-medium text-3xl lg:mb-16'>Contact me</h2>  
      
      <div className='w-2/4 m-auto flex gap-40'>
        <div className='flex flex-col gap-6'>
          <ContactItem header='Email' contact='ludde.lindahl@gmail.com'> 
            <FiMail className='m-auto text-2xl mb-4' />
          </ContactItem>
          <ContactItem header='Messenger' contact='Ludvig Lindahl'>
            <RiMessengerLine className='m-auto text-2xl mb-4' />
          </ContactItem>
          <ContactItem header='WhatsApp' contact='Phone number'>
            <FaWhatsapp className='m-auto text-2xl mb-4' />
          </ContactItem>
        </div>

        <div className='flex flex-col gap-4'>
          <input type='text' value='Your Full Name' 
            className='bg-transparent border-solid border-[1px] border-primary p-5 rounded-xl' />
        </div>
      </div>
    </section>
  )
}

export default Contact