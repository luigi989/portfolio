import IconButton from './IconButton';
import { sections, socials } from '../../data/data';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  snap: string;
}

const Footer = ({ snap }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <footer id='footer'
      className={snap + ' bg-liSec dark:bg-primaryAlt py-8 lg:py-12 px-0 text-center text-sm text-liBg dark:text-bg'}>
      <p className='text-4xl font-medium mb-8'>{t('name')}</p>

      <ul className='flex flex-col print:flex-row md:flex-row flex-wrap justify-center gap-6 md:gap-8 mt-0 mx-auto mb-6 md:mb-8'>
        {sections.map((section) =>
          <li key={section.title}>
            <a href={section.link}
              title={t('footer.goto') + t(section.title)}
              aria-label={t('footer.goto') + t(section.title)}
              className='hover:underline'>{t(section.title)}
            </a>
          </li>
        )}
      </ul>

      <div className='flex justify-center gap-4 mb-4'>
        {socials.map((social) => 
          <IconButton
            key={social.title}
            link={social.link}
            ariaLabel={t(social.title)}
            title={t(social.title)}
            icon={social.icon}
          />
        )}
      </div>

      <div className='mb-0 lg:mb-4'>
        <small>&copy; {t('footer.copyright')}</small>
      </div>
    </footer>
  )
}

export default Footer