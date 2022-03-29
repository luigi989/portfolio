import React from 'react'
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';
import AvatarCard from './AvatarCard';

const Testimonials = () => {
  const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, doloremque.' + 
    'Officiis iste laudantium nemo, porro, rem recusandae maxime nobis laboriosam ' +
    'beatae in a eligendi suscipit odio perspiciatis similique, molestias sapiente.';

  return (
    <section id='testimonials' className='mt-32 h-fit lg:h-screen pt-4 lg:pt-8'>
      <h5 className='text-light font-medium'>Review from clients</h5>
      <h2 className='text-primaryAlt font-medium text-3xl lg:mb-16'>Testimonials</h2>  

      <div className='w-1/4 m-auto testimonials_container'>
        <AvatarCard name='Ernst Achiever' text={text} path={Avatar1} />
        <AvatarCard name='Ernst Achiever' text={text} path={Avatar2} />
        <AvatarCard name='Ernst Achiever' text={text} path={Avatar3} />
        <AvatarCard name='Ernst Achiever' text={text} path={Avatar4} />

      </div>
    </section>
  )
}

export default Testimonials