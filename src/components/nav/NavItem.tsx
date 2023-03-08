interface NavItemProps {
    href: string
    title: string
    ariaLabel: string
    icon: React.ReactNode
}

const NavItem = ({ href, title, ariaLabel, icon }: NavItemProps) => {
    return (
        <a className={'text-liBg hover:text-liSec hover:bg-liPrimary hover:bg-opacity-80 ' +
            'dark:hover:bg-opacity-60 dark:hover:bg-primaryAlt dark:hover:text-black dark:text-primaryAlt ' +
            'bg-transparent p-[0.9rem] rounded-[50%] flex text-lg ' +
            'transition ease-linear duration-300 ' +
            (window.location.href.endsWith(href) ? 'bg-liPrimary text-gray-700 dark:bg-primaryAlt dark:text-black' : '')}
            href={href}
            title={title}
            aria-label={ariaLabel}
        >
            {icon}
        </a>
    )
}

export default NavItem;