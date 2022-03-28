import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience' className='mt-32 h-screen'>
      <h5 className='text-light font-medium'>What Skills I have</h5>
      <h2 className='text-primaryAlt font-medium text-3xl mb-16 lg:mb-32'></h2>

      <div className='w-3/4 m-auto grid grid-cols-2 gap-8 experience_container'>
        <div className='bg-bgAlt py-10 px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        hover:bg-transparent hover:border-primary cursor-default 
                        transition ease-linear duration-300 experience_frontend'>
          <h3 className='text-center mb-8 text-primaryAlt'>Frontend Experience</h3>
          <div className='grid grid-cols-2 gap-8 experience_content'>
            <article className='flex gap-4 experience_details'>
            <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='flex gap-4 experience_details'>
            <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='flex gap-4 experience_details'>
            <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>JvaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='flex gap-4 experience_details'>
            <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='flex gap-4 experience_details'>
            <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='flex gap-4 experience_details'>
            <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='bg-bgAlt py-10 px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        hover:bg-transparent hover:border-primary cursor-default 
                        transition ease-linear duration-300 experience_backend'>
          <h3 className='text-center mb-8 text-primaryAlt'>Backend Experience</h3>
          <div className='grid grid-cols-2 gap-8 experience_content'>
            <article className='flex gap-4 experience_details'>
              <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='flex gap-4 experience_details'>
              <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='flex gap-4 experience_details'>
              <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='flex gap-4 experience_details'>
              <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='flex gap-4 experience_details'>
              <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience