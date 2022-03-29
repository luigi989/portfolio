import React from 'react'
import ServiceItem from './ServiceItem';
import ServiceList from './ServiceList';

const Services = () => {
  return (
    <section id='services' className='mt-32h-fit lg:h-screen pt-4 lg:pt-8'>
      <h5 className='text-light font-medium'>What I Offer</h5>
      <h2 className='text-primaryAlt font-medium text-3xl lg:mb-32'>Services</h2>

      <div className='w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 services_container'>
        <ServiceList title='UI/UX Design'>
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
        </ServiceList>

        <ServiceList title='Web Development'>
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
        </ServiceList>

        <ServiceList title='Content Creation'>
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
          <ServiceItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit' />
        </ServiceList>
      </div>
    </section>
  )
}

export default Services