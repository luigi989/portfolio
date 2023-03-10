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
            className={`self-end transition ease-linear duration-300 w-max inline-block py-3 px-5 
                cursor-pointer rounded-lg
            border-solid border-2 dark:border-primary border-liSec
            text-liBg bg-liSec
            hover:text-liSec hover:bg-liBg
            dark:text-bg dark:bg-primaryAlt
            dark:hover:text-primary dark:hover:bg-bgAlt dark:focus:text-primary dark:focus':bg-bgAlt`}
        >
            {children}
        </a >
    )
}