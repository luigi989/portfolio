import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ProfilePic from '../../assets/profilbild2.jpg';
import Button from '../shared/Button';
import AboutItem from './AboutItem';

function About({ visibilityRef, inView, snap }) {
  return (
    <section ref={visibilityRef} id='about' className={ snap + ' mt-28 h-fit lg:h-screen pt-4 lg:pt-8'}>
      <div className='flex flex-col bg-liBg dark:bg-transparent w-fit mb-16 lg:mb-32 m-auto'>
        <h5 className='text-center text-liLight dark:text-light font-medium '>Get to know</h5>
        <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-3xl'>About Me</h2>
      </div>

      <div className='w-3/4 m-auto grid grid-cols-1 lg:grid-cols-2 gap-[10%] lg:gap-[15%] place-items-center'>
        <div className='w-3/4 md:w-1/2 lg:w-3/4 aspect-square rounded-[2rem] bg-gradient-to-tr from-transparent via-liSec dark:via-primaryAlt to-transparent
                        grid place-items-center'>
          <div className='rounded-[2rem] overflow-hidden rotate-12 hover:rotate-0 transition ease-linear duration-300'>
            <img src={ProfilePic} alt={'About me'} className='block w-full object-cover' />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6'>
            <AboutItem header='Computer Science' text='4+ Years studying'>
              <FaAward className='m-auto text-liBg group-hover:text-liSec dark:text-primaryAlt text-2xl mb-4' />
            </AboutItem>
        
            <AboutItem header='Clients' text='200+ Worldwide'>
              <FiUsers className='m-auto text-liBg group-hover:text-liSec dark:text-primaryAlt text-2xl mb-4' />
            </AboutItem>

            <AboutItem header='Projects' text='10+ Completed'>
              <VscFolderLibrary className='m-auto group-hover:text-liSec text-liBg dark:text-primaryAlt text-2xl mb-4' />
            </AboutItem>
          </div>

          <p className='p-2 mt-4 lg:mt-6 mx-0 mb-5 lg:mb-10 text-liSec bg-liBg dark:text-light dark:bg-transparent'>
            Currently studying towards a Master in Computer Science. In my free time I like to climb, play squash or go out for a run. 
            Building puzzles is also a hobby of mine, but I sadly don't have enough time for that currently. 
            I also have multiple code projects that I try to finish (sometime I will finish them all...). 
            At the moment I am working on converting an old website about the periodic system to React. 
            Also planning to add more advanced functions like filtering elements by category and more.
          </p>

          <Button link={"#contact"}>Let's talk</Button>
        </div>
      </div>

    </section>
  )
}

export default About