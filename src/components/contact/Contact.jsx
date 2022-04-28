import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';
import Button from '../shared/Button';
import ContactItem from './ContactItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './Error';

const Contact = ({ snap }) => {
  const notify = () => toast.success('Mail send successfully!')
  const form = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
  });
  const [rangeValue, setRangeValue] = useState(3);

  const sendEmail = (e) => {
    emailjs.sendForm('service_7rev2zh', 'template_6486erl', form.current, '8B07cv2sLjPq7_d-B');
    notify();
    form.current.reset();
  };

  return (
    <section id='contact' className={snap + ' mt-32 h-fit lg:h-screen pt-4 lg:pt-8'}>
      <div className='p-1 flex flex-col bg-liBg dark:bg-transparent w-fit m-auto lg:mb-16'>
        <h5 className='text-center text-liLight dark:text-light font-medium'>Get in touch</h5>
        <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-3xl'>Contact me</h2>
      </div>

      <div className='w-3/4 lg:w-3/5 m-auto flex flex-col md:flex-row gap-16 lg:gap-20'>
        <div className='flex flex-col gap-6 bg-liBg dark:bg-transparent'>
          <ContactItem header='Email' contact='ludde.lindahl@gmail.com' href='mailto:ludde.lindahl@gmail.com'>
            <FiMail className='text-liBg group-hover:text-liSec dark:text-primary dark:group-hover:text-primary m-auto text-2xl mb-4' />
          </ContactItem>
          <ContactItem header='Messenger' contact='Ludvig Lindahl' href='https://m.me/ludvig.lindahl.1'>
            <RiMessengerLine className='text-liBg group-hover:text-liSec dark:text-primary dark:group-hover:text-primary m-auto text-2xl mb-4' />
          </ContactItem>
          <ContactItem header='WhatsApp' contact='+46705789618' href='https://wa.me/46705789618'>
            <FaWhatsapp className='text-liBg group-hover:text-liSec dark:text-primary dark:group-hover:text-primary m-auto text-2xl mb-4' />
          </ContactItem>
        </div>

        <form noValidate autoComplete='off' ref={form} 
          onSubmit={handleSubmit(sendEmail)} 
          className='flex flex-col gap-2 items-start w-full p-6 bg-liSec dark:bg-transparent rounded-2xl 
                    transition ease-linear duration-300 text-liSec dark:text-white'>
          <div className='form-control w-full'>
            <input
              {...register("name", { required: true })}
              type='text'
              name='name'
              placeholder='Your full name'
              aria-invalid={errors.name ? 'true' : 'false'}
              className={errors.name ? 'input input-error bg-liBg dark:bg-bgAlt' : 'input !outline-primaryAlt bg-liBg dark:bg-bgAlt'}
            />
            <div className='flex'>
              {errors.name?.type === 'required' &&
                <Error>Please enter a name</Error>}
              <span className='mt-1 label-text-alt text-xs'>&nbsp;</span>
            </div>
          </div>

          <div className='form-control w-full'>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type='email'
              name='email'
              placeholder='Your email'
              className={errors.email ? 'input input-error bg-liBg dark:bg-bgAlt' : 'input !outline-primaryAlt bg-liBg dark:bg-bgAlt'}
            />
            <div className='flex'>
              {errors.email?.type === 'required' &&
                <Error>Please enter a email</Error>}
              {errors.email?.type === 'pattern' &&
                <Error>Please enter a valid email</Error>}
              <span className='mt-1 label-test-alt text-xs'>&nbsp;</span>

            </div>
          </div>

          <div className='form-control w-full'>
            <textarea
              {...register("message", { required: true })}
              name='message'
              placeholder='Your message'
              rows='7'
              className={errors.message ? 'textarea textarea-error resize-none bg-liBg dark:bg-bgAlt' : 
                'textarea resize-none !outline-primaryAlt bg-liBg dark:bg-bgAlt'}
            ></textarea>
            <div className='flex'>
              {errors.message?.type === 'required' &&
                <Error>Please enter a message</Error>}
              <span className='mt-1 label-test-alt text-xs'>&nbsp;</span>
            </div>
          </div>

          <div className='flex justify-between w-full items-center text-liBg dark:text-white'>
            <div className='flex flex-col basis-1/3'>
              <h3 className='mb-1 text-center'>Rate the website</h3>
              <input type="range"
                name='rating'
                min="1" max="5"
                value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
                className="range range-accent"
                step="1" />
              <div className="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
            <Button submit={"submit"}>Send</Button>
          </div>
          <ToastContainer theme='dark' toastStyle={{ backgroundColor: '#1d2021', }} />
        </form>
      </div>
    </section>
  )
}

export default Contact