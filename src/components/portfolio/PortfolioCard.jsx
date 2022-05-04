import React from 'react'

const PortfolioCard = (props) => {
    return (
        <article className='p-5 bg-liSec dark:bg-bgAlt rounded-2xl flex flex-col'>
            <div className='rounded-2xl'>
                <img src={props.path} alt='portfolio 1' className='rounded-2xl' />
            </div>

            <h1 className='grow my-5 text-liBg dark:text-white'>{props.header}</h1>
            <div className='flex gap-3 '>
                <button className='hover:bg-liLight hover:text-liSec
                    dark:hover:bg-primary dark:hover:text-bgAlt 
                    transition ease-linear duration-300
                    w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px]
                    border-liLight dark:border-primaryAlt text-liLight dark:text-primaryAlt'>
                    <a 
                    href={props.link ? props.link : 'https://github.com/luigi989'} 
                    target='_blank' rel='noreferrer'>Github</a>
                </button>
                <button className='hover:text-liSec hover:bg-liPrimary dark:hover:text-light dark:hover:bg-bgAlt 
                    transition ease-linear duration-300
                    w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px] 
                    border-liPrimary bg-transparent text-liPrimary dark:border-primary dark:bg-primaryAlt dark:text-bg'>
                    <a href="#contact">Live Demo</a>
                </button>
            </div>
        </article>
    )
}

export default PortfolioCard