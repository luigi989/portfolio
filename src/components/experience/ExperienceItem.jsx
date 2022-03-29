import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs';

const ExperienceItem = (props) => {
  return (
    <article className='flex gap-4 experience_details'>
    <BsPatchCheckFill className='mt-[6px] text-primaryAlt' />
    <div>
      <h4>{props.lang}</h4>
      <small className='text-light'>{props.grade}</small>
    </div>
  </article>
  )
}

export default ExperienceItem;