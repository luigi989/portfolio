import React from 'react'

const PortfolioCard = (props) => {
    return (
        <article className='p-5 bg-liSec dark:bg-bgAlt rounded-2xl flex flex-col'>
            <div className='rounded-2xl'>
                <img src={props.path} alt='portfolio 1' className='rounded-2xl' />
            </div>

            <h1 className='grow my-5 text-liBg dark:text-white'>{props.header}</h1>
            <div className='flex gap-3 '>
                <a target='_blank' rel='noreferrer'
                    href={props.link ? props.link : 'https://github.com/luigi989'}>
                    <button className='hover:bg-liPrimary hover:text-liSec
                    dark:hover:bg-primary dark:hover:text-bgAlt 
                    transition ease-linear duration-300
                    w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px]
                    border-liPrimary dark:border-primaryAlt text-liPrimary dark:text-primaryAlt print:text-xs'>Github</button>
                </a>
                {props.demoLink &&
                    <a target='_blank' rel='noreferrer'
                        href={props.demoLink}>
                        <button className='hover:text-liSec hover:bg-liPrimary dark:hover:text-light dark:hover:bg-bgAlt 
                    transition ease-linear duration-300
                    w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px] 
                    border-liPrimary bg-transparent text-liPrimary dark:border-primary dark:bg-primaryAlt dark:text-bg
                    print:text-xs'>Live Demo</button>
                    </a>}
            </div>
        </article>
    )
}

export default PortfolioCard