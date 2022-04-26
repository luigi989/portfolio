import React from 'react'
import ExperienceItem from './ExperienceItem';

const Experience = ({ snap }) => {
  const Intermediate = 'Intermediate';
  const experienced = 'Experienced';

  return (
    <section id='experience' className={ snap + ' mt-32 h-fit lg:h-screen pt-4 lg:pt-8'}>
      <div className='flex flex-col bg-liBg dark:bg-transparent w-fit mb-16 lg:mb-32 m-auto'>
      <h5 className='text-center text-liLight dark:text-light font-medium'>What Skills I have</h5>
      <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-3xl'>My Experience</h2>
      </div>

      <div className='w-11/12 lg:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
        <div className='group bg-liSec dark:bg-bgAlt py-5 px-5 lg:py-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        hover:border-liSec hover:bg-liBg dark:hover:border-primary dark:hover:bg-transparent cursor-default 
                        transition ease-linear duration-300'>
          <h3 className='text-center mb-8 text-liBg group-hover:text-liSec dark:text-primaryAlt dark:group-hover:text-primaryAlt'>Frontend Experience</h3>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='React' grade={experienced} />
            <ExperienceItem lang='JavaScript' grade={Intermediate} />
            <ExperienceItem lang='HTML' grade={experienced} />
            <ExperienceItem lang='CSS' grade={experienced} />
            <ExperienceItem lang='Tailwind' grade={experienced} />
            <ExperienceItem lang='Bootstrap' grade={Intermediate} />
          </div>
        </div>

        <div className='group bg-liSec dark:bg-bgAlt py-5 px-5 lg:py-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        hover:border-liSec hover:bg-liBg dark:hover:border-primary dark:hover:bg-transparent cursor-default 
                        transition ease-linear duration-300'>
          <h3 className='text-center mb-8 text-liBg group-hover:text-liSec dark:text-primaryAlt dark:group-hover:text-primaryAlt'>Backend Experience</h3>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='Java' grade={experienced} />
            <ExperienceItem lang='C#' grade={Intermediate} />
            <ExperienceItem lang='MySQL' grade={Intermediate} />
            <ExperienceItem lang='PostgreSQL' grade={Intermediate} />
          </div>
          <h3 className='text-center mb-8 text-liBg group-hover:text-liSec dark:text-primaryAlt dark:group-hover:text-primaryAlt pt-10'>Other Experience</h3>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='Git' grade={experienced} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience