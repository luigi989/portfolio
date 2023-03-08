import { BsPatchCheckFill } from 'react-icons/bs';

interface ExperienceItemProps {
  lang: string;
  grade: string;
}

const ExperienceItem = ({lang, grade}: ExperienceItemProps) => {
  return (
    <article className='flex gap-4'>
      <BsPatchCheckFill className='mt-[6px] text-liBg group-hover:text-liSec dark:text-primaryAlt dark:group-hover:text-primaryAlt' />
      <div>
        <h1 className='text-liLight dark:text-white'>{lang}</h1>
        <small className='text-liBg dark:text-light'>{grade}</small>
      </div>
    </article>
  )
}

export default ExperienceItem;