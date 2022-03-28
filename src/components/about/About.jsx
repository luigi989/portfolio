import React from 'react'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about' className='mt-32 h-screen p-4'>      
      <h5 className='text-light font-medium'>Get to know</h5>
      <h2 className='text-primaryAlt font-medium text-3xl mb-16 lg:mb-32'>About Me</h2>

      <div className='w-3/4 m-auto grid grid-cols-1 lg:grid-cols-2 gap-[10%] lg:gap-[15%] place-items-center'>
        <div className='w-3/4 aspect-square rounded-[2rem] bg-gradient-to-tr from-transparent via-primaryAlt to-transparent
                        grid place-items-center'>
          <div className='rounded-[2rem] overflow-hidden rotate-12 hover:rotate-0 transition ease-linear duration-300'>
            <img src={ME} alt={'About me'} className='block w-full object-cover' />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6'>
            <article className='bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-8 text-center
                                hover:bg-transparent hover:border-primary hover:cursor-default transition ease-linear duration-300'>
              <FaAward className='m-auto text-primaryAlt text-2xl mb-4' />
              <h5 className='text-base'>Experience</h5>
              <small className='text-xs text-light'>3+ Years Working</small> 
            </article>

            <article className='bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-8 text-center
                                hover:bg-transparent hover:border-primary hover:cursor-default transition ease-linear duration-300'>
              <FiUsers className='m-auto text-primaryAlt text-2xl mb-4' />
              <h5 className='text-base'>Clients</h5>
              <small className='text-xs text-light'>200+ Worldwide</small> 
            </article>

            <article className='bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-8 text-center
                                hover:bg-transparent hover:border-primary hover:cursor-default transition ease-linear duration-300'>
              <VscFolderLibrary className='m-auto text-primaryAlt text-2xl mb-4' />
              <h5 className='text-base'>Projects</h5>
              <small className='text-xs text-light'>80+ Completed</small> 
            </article>
          </div>

          <p className='mt-4 lg:mt-8 mx-0 mb-5 lg:mb-10 text-light '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur sequi repellat, in dolorum 
            cum obcaecati. Odio minus corrupti delectus obcaecati nihil temporibus quasi magnam
              nesciunt! Soluta quisquam alias sunt dolor.
          </p>

          <a href='#contact' className='text-bg bg-primaryAlt transition ease-linear duration-300 
                                        w-max inline-block py-3 px-5 cursor-pointer rounded-md border-solid border-2 border-primaryAlt 
                                        hover:border-transparent hover:bg-white'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}

export default About