interface IconButtonProps {
    link: string;
    ariaLabel: string;
    title: string
    icon: React.ReactNode;
}

const IconButton = ({ link, ariaLabel, title, icon }: IconButtonProps) => {
    return (
        <a className='bg-transparent dark:bg-bg dark:text-white p-3 rounded-xl flex border-2 border-solid border-liBg dark:border-transparent
        hover:bg-liBg hover:text-liSec transition ease-linear duration-200
        dark:hover:bg-transparent dark:hover:text-bg dark:hover:border-bg' 
        href={link} 
        target='_blank' 
        rel='noreferrer'
        aria-label={ariaLabel}
        title={title}
        >
            {icon} 
        </a>
    )
}
export default IconButton;