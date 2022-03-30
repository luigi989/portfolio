import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import ContactItem from './ContactItem';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7rev2zh', 'template_6486erl', form.current, '8B07cv2sLjPq7_d-B');
    e.target.reset();
  };

  return (
    <section id='contact' className='mt-32 h-fit lg:h-screen pt-4 lg:pt-8'>
      <h5 className='text-light font-medium'>Get in touch</h5>
      <h2 className='text-primaryAlt font-medium text-3xl lg:mb-16'>Contact me</h2>  
      
      <div className='w-3/4 lg:w-2/4 m-auto flex flex-col md:flex-row gap-16 lg:gap-32'>
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

        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 w-full'>
          <input type='text' name='name' placeholder='Your Full Name' required
            className='bg-transparent border-solid border-[1px] border-primary p-5 rounded-xl w-full' />
          <input type='email' name='email' placeholder='Your Email' required
            className='bg-transparent border-solid border-[1px] border-primary p-5 rounded-xl w-full' />
          <textarea name='message' rows='7' placeholder='Your Message' required
            className='bg-transparent border-solid border-[1px] border-primary p-5 rounded-xl resize-none w-full'></textarea>
          <button type='submit' className='text-bg bg-primaryAlt transition ease-linear duration-300
                                        w-max inline-block py-3 px-5 cursor-pointer rounded-md border-solid border-2 border-primaryAlt 
                                        hover:border-transparent hover:bg-white'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact