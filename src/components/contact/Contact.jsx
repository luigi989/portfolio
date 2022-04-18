import React from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FiMail } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';

import ContactItem from './ContactItem';

const Contact = ({ snap }) => {
  const form = useRef();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7rev2zh', 'template_6486erl', form.current, '8B07cv2sLjPq7_d-B');
    e.target.reset();
  };

  return (
    <section id='contact' className={ snap + ' mt-32 h-fit lg:h-screen pt-4 lg:pt-8'}>
      <h5 className='text-center text-light font-medium'>Get in touch</h5>
      <h2 className='text-center text-primaryAlt font-medium text-3xl lg:mb-16'>Contact me</h2>

      <div className='w-3/4 lg:w-2/4 m-auto flex flex-col md:flex-row gap-16 lg:gap-32'>
        <div className='flex flex-col gap-6'>
          <ContactItem header='Email' contact='ludde.lindahl@gmail.com' href='mailto:ludde.lindahl@gmail.com'>
            <FiMail className='m-auto text-2xl mb-4' />
          </ContactItem>
          <ContactItem header='Messenger' contact='Ludvig Lindahl' href='https://m.me/ludvig.lindahl.1'>
            <RiMessengerLine className='m-auto text-2xl mb-4' />
          </ContactItem>
          <ContactItem header='WhatsApp' contact='+46705789618' href='https://wa.me/46705789618'>
            <FaWhatsapp className='m-auto text-2xl mb-4' />
          </ContactItem>
        </div>

        <form noValidate ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full'>
          <input type='text' name='name' placeholder='Your Full Name' {...register("name", {required: true, maxLength: 10})}
            className='bg-transparent border-solid border-[1px] border-primary p-5 rounded-xl w-full focus:bg-bgAlt duration-300' />
            {errors.name && <span className='inline bg-red-200'></span>}  
          
          <input type='email' name='email' placeholder='Your Email' {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
            className='bg-transparent border-solid border-[1px] border-primary p-5 rounded-xl w-full focus:bg-bgAlt duration-300' />
            {errors.email && "Email is required"}  
          
          <textarea name='message' rows='7' placeholder='Your Message' {...register("message", {required: true, minLength: 1, maxLength: 12})}
            className='bg-transparent border-solid border-[1px] border-primary p-5 rounded-xl resize-none w-full focus:bg-bgAlt duration-300' />
            {errors.messsage && <span>Message is required</span>} 
          
          <button type='submit' className='self-end text-bg bg-primaryAlt transition ease-linear duration-300
                                        w-max inline-block py-3 px-5 cursor-pointer rounded-md border-solid border-2
                                        hover:text-primary hover:bg-bgAlt focus:text-primary focus:bg-bgAlt'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact