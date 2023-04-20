import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import IconButton from './IconButton';
import { sections, socials } from '../../data/data';

interface FooterProps {
  snap: string;
}

const Footer = ({ snap }: FooterProps) => {
  return (
    <footer id='footer'
      className={snap + ' bg-liSec dark:bg-primaryAlt py-8 lg:py-12 px-0 text-center text-sm text-liBg dark:text-bg'}>
      <p className='text-4xl font-medium mb-8 inline-block'>Ludvig Lindahl</p>

      <ul className='flex flex-col print:flex-row md:flex-row flex-wrap justify-center gap-6 md:gap-8 mt-0 mx-auto mb-6 md:mb-8'>
        {sections.map((section) =>
          <li>
            <a href={section.link}
              title={'Go to ' + section.title}
              aria-label={'Go to ' + section.title}
              className='hover:underline'>{section.title}
            </a>
          </li>
        )}
      </ul>

      <div className='flex justify-center gap-4 mb-4'>
        {socials.map((social) => 
          <IconButton
            link={social.link}
            ariaLabel={social.title}
            title={social.title}
            icon={social.icon}
          />
        )}
      </div>

      <div className='mb-0 lg:mb-4'>
        <small>&copy; Ludvig Lindahl. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer