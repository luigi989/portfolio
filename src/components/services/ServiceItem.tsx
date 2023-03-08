import React from 'react'
import { BiCheck } from 'react-icons/bi'; 

interface ServiceItemProps {
    text: string;
}

const ServiceItem = ({ text } : ServiceItemProps) => {
    return (
        <li className='flex gap-4 ml-8 lg:mr-8'>
            <BiCheck className='mt-[2px] text-primaryAlt text-2xl service_list-icon' />
            <p>{text}.</p>
        </li>
    )
}

export default ServiceItem