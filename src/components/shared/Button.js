import React from 'react'

export default function Button({ submit, link, children }) {
    if (submit) return (
        <button type='submit'
            className='self-end text-bg bg-primaryAlt transition ease-linear duration-300
            w-max inline-block py-3 px-5 cursor-pointer rounded-md border-solid border-2
            hover:text-primary hover:bg-bgAlt focus:text-primary focus:bg-bgAlt'>
            Send
        </button>)

    if (link) return (
        <a href={link}>
            <button
                className='self-end text-bg bg-primaryAlt transition ease-linear duration-300
                w-max inline-block py-3 px-5 cursor-pointer rounded-lg border-solid border-2
                hover:text-primary hover:bg-bgAlt focus:text-primary focus:bg-bgAlt'>
                {children}
            </button>
        </a>)
}