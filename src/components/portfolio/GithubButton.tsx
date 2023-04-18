interface GithubButtonProps {
    link: string;
}

const GithubButton = ({ link }: GithubButtonProps) => {
    return (
        <a target="_blank" rel="noreferrer" href={link}>
            <button
                className='hover:bg-liPrimary hover:text-liSec
                        dark:hover:bg-primary dark:hover:text-bgAlt 
                        transition ease-linear duration-300
                        w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px]
                        border-liPrimary dark:border-primaryAlt text-liPrimary dark:text-primaryAlt print:text-xs'>
                Github
            </button>
        </a>
    )
}

export default GithubButton;