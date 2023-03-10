import { Ref } from 'react';
import { BsAward, BsCodeSlash } from 'react-icons/bs';
import { VscFolderLibrary } from 'react-icons/vsc';
import Button from '../shared/LinkButton';
import SectionHeader from '../shared/SectionHeader';
import AboutItem from './AboutItem';
import profileImage2 from '../../assets/profile_image2/profileImage2.webp';
import profileImage2_sm from '../../assets/profile_image2/profileImage2-sm.webp';
import profileImage2_xl from '../../assets/profile_image2/profileImage2-xl.webp';
import profileImage2_xxl from '../../assets/profile_image2/profileImage2-xxl.webp';

interface AboutProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

function About({ visibilityRef, snap }: AboutProps) {
  return (
    <section ref={visibilityRef} id='about' className={ snap + ' mt-28 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        header='About me' 
        subHeader='Get to know'
      />

      <div className='w-11/12 md:w-3/4 m-auto grid grid-cols-1 lg:grid-cols-2 gap-[10%] lg:gap-[15%] place-items-center'>
        <div className='w-3/4 md:w-1/2 lg:w-3/4 aspect-square rounded-[2rem] bg-gradient-to-tr from-transparent via-liSec dark:via-primaryAlt to-transparent
                        grid place-items-center print:w-1/3'>
          <div className='rounded-[2rem] overflow-hidden rotate-12 hover:rotate-0 transition ease-linear duration-300'>
            <img className='block w-full object-cover' alt={'About me'}
              src={profileImage2_sm}
              srcSet={`${profileImage2_xxl} 4x, ${profileImage2_xl} 3x, ${profileImage2_xl} 2x, ${profileImage2} 1x, `}
            />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 print:grid-cols-3'>
            <AboutItem
              header='Computer Science' 
              text='4+ Years studying'
              icon={<BsAward />}
            />
        
            <AboutItem 
              header='Coding' 
              text='7+ years experince'
              icon={<BsCodeSlash />} 
            />

            <AboutItem 
              header='Projects' 
              text='10+ Completed'               
              icon={<VscFolderLibrary />} 
            />
          </div>

          <p className='p-2 mt-4 lg:mt-6 mx-0 mb-5 lg:mb-10 text-liSec bg-liBg dark:text-light dark:bg-transparent'>
            Currently studying towards a Master in Computer Science. In my free time I like to climb, play squash or go out for a run. 
            Building puzzles is also a hobby of mine, but I sadly don't have enough time for that currently. 
            I also have multiple code projects that I try to finish (sometime I will finish them all...). 
            At the moment I am working on converting an old website about the periodic system to React. 
            Also planning to add more advanced functions like filtering elements by category and more.
          </p>

          <Button 
            link={"#contact"}
            title='Contact me'
          >
            Let's talk
          </Button>
        </div>
      </div>

    </section>
  )
}

export default About