interface SectionHeaderProps {
    className?: string;
    header: string;
    subHeader: string;
}

const SectionHeader = ({ className, header, subHeader }: SectionHeaderProps) => {
    return (
        <div className={'flex flex-col bg-liBg dark:bg-transparent w-fit mb-16 lg:mb-32 m-auto ' + 
            (className ? className : "")}
        >
            <h1 className='text-center text-liLight dark:text-light font-medium text-base'>{subHeader}</h1>
            <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-3xl'>{header}</h2>
        </div>
    )
}
export default SectionHeader;