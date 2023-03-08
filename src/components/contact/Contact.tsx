import emailjs from '@emailjs/browser';
import { useRef, useState, Ref } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { BsMessenger, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../shared/Button';
import ContactItem from './ContactItem';
import Error from './Error';
import SectionHeader from '../shared/SectionHeader';

interface ContactProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Contact = ({ visibilityRef, snap }: ContactProps) => {
  const notify = () => toast.success('Mail send successfully!')
  const form = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
  });
  const [rangeValue, setRangeValue] = useState(3);
  
  const sendEmail = () => {
    const currentForm = form.current;
    if(currentForm == null) return;

    emailjs.sendForm('service_7rev2zh', 'template_6486erl', currentForm, '8B07cv2sLjPq7_d-B');
    notify();
    currentForm.reset();
  };

  return (
    <section ref={visibilityRef} id='contact' className={snap + ' mb-10 lg:mb-0 mt-16 lg:mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        header='Contact me'
        subHeader='Get in touch'
      />

      <div className='w-11/12 lg:w-3/5 m-auto flex flex-col md:flex-row gap-10 lg:gap-20'>
        <div className='flex flex-col gap-6 bg-liBg dark:bg-transparent print:flex-row print:justify-around'>
          <ContactItem header='Email' contact='ludde.lindahl@gmail.com' link='mailto:ludde.lindahl@gmail.com'>
            <FiMail className='text-liBg group-hover:text-liSec dark:text-primary dark:group-hover:text-primary m-auto text-2xl mb-4' />
          </ContactItem>
          <ContactItem header='Messenger' contact='Ludvig Lindahl' link='https://m.me/ludvig.lindahl.1'>
            <BsMessenger className='text-liBg group-hover:text-liSec dark:text-primary dark:group-hover:text-primary m-auto text-2xl mb-4' />
          </ContactItem>
          <ContactItem header='WhatsApp' contact='+46705789618' link='https://wa.me/46705789618'>
            <BsWhatsapp className='text-liBg group-hover:text-liSec dark:text-primary dark:group-hover:text-primary m-auto text-2xl mb-4' />
          </ContactItem>
        </div>

        <form noValidate autoComplete='off' ref={form} 
          onSubmit={handleSubmit(sendEmail)} 
          className='flex flex-col gap-2 items-start w-full md:p-6 bg-liSec dark:bg-transparent rounded-2xl 
                    transition ease-linear duration-300 text-liSec dark:text-white print:p-2 p-3'>
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
              rows={7}
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
            <div className='flex flex-col basis-1/2 md:basis-1/3'>
              <label className='mb-0 p-0'>
                Rate the website
                <input type="range"
                  name='rating'
                  min="1" max="5"
                  value={rangeValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRangeValue(parseInt(e.target.value))}
                  className="range range-accent"
                  step="1" />
              </label>
              <div className="w-full flex justify-between text-base px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
            <Button title='Send message'>Send</Button>
          </div>
          <ToastContainer theme='dark' toastStyle={{ backgroundColor: '#1d2021', }} />
        </form>
      </div>
    </section>
  )
}

export default Contact