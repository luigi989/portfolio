import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs';

const ExperienceItem = (props) => {
  return (
    <article className='flex gap-4 experience_details'>
      <BsPatchCheckFill className='mt-[6px] text-liBg group-hover:text-liSec dark:text-primaryAlt dark:group-hover:text-primaryAlt' />
      <div>
        <h4 className='group-hover:text-liSec text-liLight dark:group-hover:text-black dark:text-black'>{props.lang}</h4>
        <small className='group-hover:text-liLight text-liBg dark:group-hover:text-light dark:text-light'>{props.grade}</small>
      </div>
    </article>
  )
}

export default ExperienceItem;