import React from 'react'

const PortfolioCard = (props) => {
    return (
        <article className='p-5 bg-bgAlt rounded-2xl flex flex-col'>
            <div className='rounded-2xl'>
                <img src={props.path} alt='portfolio 1' className='rounded-2xl' />
            </div>

            <h4 className='grow my-5'>{props.header}</h4>
            <div className='flex gap-3 '>
                <a className='hover:bg-primary hover:text-bg hover:border-transparent
                transition ease-linear duration-300
                w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px]
                border-primaryAlt text-primaryAlt'
                    href={props.link ? props.link : 'https://github.com/luigi989'} target='_blank' rel='noreferrer'>Github</a>
                <a className='hover:text-light hover:bg-bgAlt transition ease-linear duration-300
                w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px] 
                border-primary bg-primaryAlt text-bg'
                    href="#contact">Live Demo</a>
            </div>
        </article>
    )
}

export default PortfolioCard