import emailjs from '@emailjs/browser';
import { useRef, useState, Ref, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { BsMessenger, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../atoms/atoms';
import ContactItem from './ContactItem';
import Error from './Error';
import SectionHeader from '../shared/SectionHeader';
import ErrorContainer from './ErrorContainer';
import TextField from './TextField';

interface ContactProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Contact = ({ visibilityRef, snap }: ContactProps) => {
  const isDarkMode = useRecoilValue(darkModeState);
  const form = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
  });
  const [rangeValue, setRangeValue] = useState(3);

  const sendEmail = () => {
    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      currentForm,
      import.meta.env.VITE_EMAIL_PUB_KEY).then(
        (response) => { toast.success('Mail send successfully!'); },
        (error) => { toast.error('Failed to send mail!'); }
      );

    currentForm.reset();
  };

  return (
    <section ref={visibilityRef} id='contact' className={snap + ' mb-10 lg:mb-0 mt-16 lg:mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        className='lg:mb-16'
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
          <TextField>
            <input
              {...register("name", { required: true })}
              type='text'
              name='name'
              placeholder='Your full name'
              aria-invalid={errors.name ? 'true' : 'false'}
              className={'input bg-liBg dark:bg-bgAlt ' + (errors.name ? 'input-error' : '!outline-primaryAlt')}
            />
            <ErrorContainer>
              {errors.name?.type === 'required' && <Error>Please enter a name</Error>}
            </ErrorContainer>
          </TextField>

          <TextField>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type='email'
              name='email'
              placeholder='Your email'
              className={'input bg-liBg dark:bg-bgAlt ' + (errors.email ? 'input-error' : '!outline-primaryAlt')}
            />
            <ErrorContainer>
              {errors.email?.type === 'required' && <Error>Please enter a email</Error>}
              {errors.email?.type === 'pattern' && <Error>Please enter a valid email</Error>}
            </ErrorContainer>
          </TextField>

          <TextField>
            <textarea
              {...register("message", { required: true })}
              name='message'
              placeholder='Your message'
              rows={7}
              className={'textarea resize-none bg-liBg dark:bg-bgAlt ' +
                (errors.message ? 'textarea-error' : '!outline-primaryAlt')}
            ></textarea>
            <ErrorContainer>
              {errors.message?.type === 'required' && <Error>Please enter a message</Error>}
            </ErrorContainer>
          </TextField>

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
            <button title='Send message' type='submit'
              className={`self-end transition ease-linear duration-300
            w-max inline-block py-3 px-5 cursor-pointer rounded-md border-solid border-2
            text-liBg bg-transparent border-liBg hover:bg-liBg hover:text-liSec
            dark:text-bg dark:bg-primaryAlt dark:border-primary
            dark:hover:text-primary dark:hover:bg-bgAlt dark:focus:text-primary dark:focus:bg-bgAlt`}>Send</button>
          </div>
          <ToastContainer theme={isDarkMode ? 'dark' : 'light'}
            toastStyle={{
              backgroundColor: isDarkMode ? '#1d2021' : '#ffffff',
              color: isDarkMode ? '#ffffff' : '#000000',
            }} />
        </form>
      </div>
    </section>
  )
}

export default Contact