import React from 'react'

export default function Button({ submit, link, children }) {
    if (submit) return (
        <button type='submit'
            className='self-end text-bg bg-primaryAlt transition ease-linear duration-300
            w-max inline-block py-3 px-5 cursor-pointer rounded-md border-solid border-2 dark:border-primary
            hover:text-primary hover:bg-bgAlt focus:text-primary focus:bg-bgAlt'>
            {children}
        </button>)

    if (link) return (
        <a href={link}>
            <button
                className='self-end transition ease-linear duration-300 w-max inline-block py-3 px-5 
                cursor-pointer rounded-lg 
                border-solid border-2 dark:border-primary border-liSec
                text-liBg bg-liSec 
                hover:text-liSec hover:bg-liBg
                dark:text-bg dark:bg-primaryAlt
                dark:hover:text-primary dark:hover:bg-bgAlt dark:focus:text-primary dark:focus:bg-bgAlt'>
                {children}
            </button>
        </a>)
}