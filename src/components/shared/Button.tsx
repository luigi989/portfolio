import React from "react"

interface ButtonProps {
    link?: string;
    title: string;
    children: React.ReactNode;
}

export default function Button({ link, children, title }: ButtonProps) {
    return (
        <a
            href={link}
            title={title}
            type={link ? "button" : "submit"}
            className={link ? `self-end transition ease-linear duration-300 w-max inline-block py-3 px-5 
                cursor-pointer rounded-lg
            border-solid border-2 dark:border-primary border-liSec
            text-liBg bg-liSec
            hover:text-liSec hover:bg-liBg
            dark:text-bg dark:bg-primaryAlt
            dark:hover:text-primary dark:hover:bg-bgAlt dark:focus:text-primary dark:focus':bg-bgAlt`
                :
                `self-end transition ease-linear duration-300
        w-max inline-block py-3 px-5 cursor-pointer rounded-md border-solid border-2
        text-liBg bg-transparent border-liBg hover:bg-liBg hover:text-liSec
        dark:text-bg dark:bg-primaryAlt dark:border-primary
        dark:hover:text-primary dark:hover:bg-bgAlt dark:focus:text-primary dark:focus:bg-bgAlt`}
        >
            {children}
        </a >
    )
}