import React from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FiMail } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';
import { BiErrorCircle } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

import ContactItem from './ContactItem';

const Contact = ({ snap }) => {
  const form = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
  });

  const sendEmail = (e) => {
    emailjs.sendForm('service_7rev2zh', 'template_6486erl', form.current, '8B07cv2sLjPq7_d-B');
    form.current.reset();
  };

  return (
    <section id='contact' className={snap + ' mt-32 h-fit lg:h-screen pt-4 lg:pt-8'}>
      <h5 className='text-center text-light font-medium'>Get in touch</h5>
      <h2 className='text-center text-primaryAlt font-medium text-3xl lg:mb-16'>Contact me</h2>

      <div className='w-3/4 lg:w-3/5 m-auto flex flex-col md:flex-row gap-16 lg:gap-20'>
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

        <form noValidate autoComplete='off' ref={form} onSubmit={handleSubmit(sendEmail)} className='flex flex-col gap-2 items-start w-full'>
          <div className='form-control w-full'>
            <input
              {...register("name", { required: true })}
              type='text'
              name='name'
              placeholder='Your full name'
              aria-invalid={errors.name ? 'true' : 'false'}
              className={errors.name ? 'input input-error' : 'input !outline-primaryAlt'}
            />
            {errors.name?.type === 'required' ?
              <span className='mt-1 label-text-alt text-error'>Please enter a name</span> :
              <span className='mt-1 label-text-alt text-xs'>&nbsp;</span>
            }
          </div>

          <div className='form-control w-full'>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type='email'
              name='email'
              placeholder='Your email'
              className={errors.email ? 'input input-error' : 'input !outline-primaryAlt'}
            />
            <div className='flex'>
              {errors.email?.type === 'required' && 
                <span role='alert' className='mt-1 label-text-alt text-error'>Please enter a email</span>}
              {errors.email?.type === 'pattern' &&
                <span role='alert' className='mt-1 label-text-alt text-error'>Please enter a valid email</span>}
              <span className='mt-1 label-test-alt text-xs'>&nbsp;</span>

            </div>
          </div>

          <div className='form-control w-full'>
            <textarea rows='7'
              {...register("message", { required: true })}
              name='message'
              placeholder='Your message'
              className={errors.message ? 'textarea textarea-error resize-none' : 'textarea resize-none !outline-primaryAlt'}
            ></textarea>
            {errors.message?.type === 'required' ?
              <span className='mt-1 label-text-alt text-error'>Please enter a message</span> :
              <span className='mt-1 label-test-alt text-xs'>&nbsp;</span>
            }
          </div>
          
          <button type='submit' 
                  className='self-end text-bg bg-primaryAlt transition ease-linear duration-300
                            w-max inline-block py-3 px-5 cursor-pointer rounded-md border-solid border-2
                            hover:text-primary hover:bg-bgAlt focus:text-primary focus:bg-bgAlt'>
                  Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact