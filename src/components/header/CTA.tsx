import LinkButton from '../shared/LinkButton';
import CV from '../../assets/cv_eng.pdf';

const CTA = () => {
  return (
    <div className='mt-[37px] flex gap-5 justify-center'>
      <a className='bg-border-primary' href={CV} download>
        <button className='bg-liBg dark:bg-transparent dark:hover:bg-bgAlt dark:hover:text-white 
                      dark:hover:border-transparent dark:border-primary dark:text-primaryAlt dark:bg-none
                      border-solid border-2 border-liSec
                      text-liSec hover:bg-liSec hover:text-liBg
                      transition ease-linear duration-300
                      md:py-3 py-4 px-5 rounded-lg cursor-pointer text-center text-sm whitespace-nowrap md:text-lg md:whitespace-normal'
          title='Download CV'>
          Download CV
        </button>
      </a>
      <LinkButton
        link={"#contact"}
        title='Contact me'
      >
        Let's talk</LinkButton>
    </div>
  )
}

export default CTA