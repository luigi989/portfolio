import React from 'react'
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';
import AvatarCard from './AvatarCard';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';


const Testimonials = () => {
  const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, doloremque.' + 
    'Officiis iste laudantium nemo, porro, rem recusandae maxime nobis laboriosam ' +
    'beatae in a eligendi suscipit odio perspiciatis similique, molestias sapiente.';

  return (
    <section id='testimonials' className='mt-32 h-fit lg:h-screen pt-4 lg:pt-8'>
      <h5 className='text-light font-medium'>Review from clients</h5>
      <h2 className='text-primaryAlt font-medium text-3xl lg:mb-16'>Testimonials</h2>  

      <Swiper className='w-4/5 lg:w-2/5 m-auto'
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide><AvatarCard name='Ernst Achiever' text={text} path={Avatar1} /></SwiperSlide>
        <SwiperSlide><AvatarCard name='Ernst Achiever' text={text} path={Avatar2} /></SwiperSlide>
        <SwiperSlide><AvatarCard name='Ernst Achiever' text={text} path={Avatar3} /></SwiperSlide>
        <SwiperSlide><AvatarCard name='Ernst Achiever' text={text} path={Avatar4} /></SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials