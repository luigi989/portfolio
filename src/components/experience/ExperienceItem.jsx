import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs';

const ExperienceItem = (props) => {
  return (
    <article className='flex gap-4 experience_details'>
      <BsPatchCheckFill className='mt-[6px] text-liBg group-hover:text-liSec dark:text-primaryAlt dark:group-hover:text-primaryAlt' />
      <div>
        <h1 className='text-liLight dark:text-white'>{props.lang}</h1>
        <small className='text-liBg dark:text-light'>{props.grade}</small>
      </div>
    </article>
  )
}

export default ExperienceItem;