import React from 'react'
import { BiCheck } from 'react-icons/bi'; 

const ServiceItem = (props) => {
    return (
        <li className='flex gap-4 ml-8 lg:mr-8'>
            <BiCheck className='mt-[2px] text-primaryAlt text-2xl service_list-icon' />
            <p>{props.text}.</p>
        </li>
    )
}

export default ServiceItem