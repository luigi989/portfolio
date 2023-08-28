import { Ref } from 'react';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import profileImage_xs from '/profile_image/profileImage-xs.webp';
import profileImage_sm from '/profile_image/profileImage-sm.webp';
import profileImage from '/profile_image/profileImage.webp';
import { socials } from '../../data/data';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Header = ({ visibilityRef, snap }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header ref={visibilityRef} className={snap + ' h-fit md:h-[68vh] lg:h-screen w-3/4 m-auto pt-16 overflow-hidden print:h-screen'}>
      <div className='h-full w-11/12 md:w-3/4 m-auto text-center relative text-liSec dark:text-white'>

        <div className='p-1 flex flex-col bg-liBg dark:bg-transparent w-fit m-auto'>
          <h1 className='mb-3 text-center text-liLight dark:text-light font-medium text-3xl'>{ t('header.title')}</h1>
          <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-2xl'>{ t('header.subtitle')}</h2>
        </div>

        <CTA />
        <a
          href='#contact'
          title='Scroll down'
          className='hidden lg:block text-liSec hover:text-liLight dark:text-primaryAlt dark:hover:text-white 
            p-1 bg-liBg dark:bg-transparent text-sm absolute -right-9 bottom-20 rotate-90 font-light'>
            { t('header.scrollDown')}
        </a>

        <div className="hidden lg:flex flex-col items-center gap-3 absolute left-0 bottom-12 bg-liBg p-1 dark:bg-transparent
                    after:content-[''] after:w-[1px] after:h-8 after:bg-liSec dark:after:bg-primaryAlt">
          {socials.map((social) =>
            <HeaderSocial
              key={social.title}
              label={t(social.title)}
              url={social.link}
              icon={social.icon}
            />
          )}
        </div>
        <div className='bg-gradient-to-b from-liSec dark:from-primaryAlt lg:w-2/6 w-3/4 h-4/6 mt-16 
                        rounded-tl-[12rem] rounded-tr-[12rem] flex justify-center
                        mx-auto overflow-hidden px-1 pt-20'>
          <img className='block object-cover w-full h-full' alt='Profile image'
            src={profileImage_xs}
            srcSet={`${profileImage} 4x, ${profileImage_sm} 3x, ${profileImage_sm} 2x, ${profileImage_sm} 1x, `}
          />
        </div>

      </div>
    </header>
  )
}

export default Header