import React from 'react'
import ExperienceItem from './ExperienceItem';

const Experience = ({ snap }) => {
  const Intermediate = 'Intermediate';
  const experienced = 'Experienced';

  return (
    <section id='experience' className={ snap + ' mt-32 h-fit lg:h-screen pt-4 lg:pt-8'}>
      <h5 className='text-center text-light font-medium'>What Skills I have</h5>
      <h2 className='text-center text-primaryAlt font-medium text-3xl mb-10 lg:mb-32'>My Experience</h2>

      <div className='w-11/12 lg:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
        <div className='bg-bgAlt py-5 px-5 lg:py-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        hover:bg-transparent hover:border-primary cursor-default 
                        transition ease-linear duration-300'>
          <h3 className='text-center mb-8 text-primaryAlt'>Frontend Experience</h3>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='React' grade={experienced} />
            <ExperienceItem lang='JavaScript' grade={Intermediate} />
            <ExperienceItem lang='HTML' grade={experienced} />
            <ExperienceItem lang='CSS' grade={experienced} />
            <ExperienceItem lang='Tailwind' grade={experienced} />
            <ExperienceItem lang='Bootstrap' grade={Intermediate} />
          </div>
        </div>

        <div className='bg-bgAlt py-5 px-5 lg:py-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        hover:bg-transparent hover:border-primary cursor-default 
                        transition ease-linear duration-300'>
          <h3 className='text-center mb-8 text-primaryAlt'>Backend Experience</h3>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='Java' grade={experienced} />
            <ExperienceItem lang='C#' grade={Intermediate} />
            <ExperienceItem lang='MySQL' grade={Intermediate} />
            <ExperienceItem lang='PostgreSQL' grade={Intermediate} />
          </div>
          <h3 className='text-center mb-8 text-primaryAlt pt-10'>Other Experience</h3>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='Git' grade={experienced} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience