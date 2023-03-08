import React from 'react';

interface ExperienceContainerProps {
    children: React.ReactNode;
}

const ExperienceContainer = ({ children }: ExperienceContainerProps) => {
    return (
        <div className={'bg-liSec dark:bg-bgAlt py-5 px-5 lg:pt-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent ' + 
        'transition ease-linear duration-300 ' + (React.Children.count(children) > 1 ? "flex flex-col gap-10" : "")}>
            {children}
        </div>
    )
}

export default ExperienceContainer;