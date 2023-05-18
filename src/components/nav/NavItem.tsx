import { useRecoilValue } from "recoil"
import { actioveSection } from "../../atoms/atoms"

interface NavItemProps {
    href: string
    title: string
    ariaLabel: string
    icon: React.ReactNode
}

const NavItem = ({ href, title, ariaLabel, icon }: NavItemProps) => {
    const activeSection = useRecoilValue(actioveSection);
    
    return (
        <a className={'hover:text-liSec hover:bg-liPrimary hover:bg-opacity-80 ' +
            'dark:hover:bg-opacity-60 dark:hover:bg-primaryAlt dark:hover:text-black ' +
            'p-[0.9rem] rounded-[50%] flex text-lg ' +
            'transition ease-linear duration-300 ' +
            (activeSection == title ? 'bg-liPrimary text-gray-700 dark:bg-primaryAlt dark:text-black' 
            : 'text-liBg dark:text-primaryAlt')}
            href={href}
            title={title}
            aria-label={ariaLabel}
        >
            {icon}
        </a>
    )
}

export default NavItem;