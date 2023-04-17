import { useRecoilValue } from 'recoil';
import { chosenProjectInfo } from '../../atoms/atoms';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import image from '../../assets/periodic/periodic-sm.webp';
import GithubButton from './GithubButton';
import DemoButton from './DemoButton';

interface ProjectContainerProps {
    header: string;
    onClick: () => void
}

const ProjectContainer = ({ header, onClick }: ProjectContainerProps) => {
    const projectInfo = useRecoilValue(chosenProjectInfo);
    console.log(projectInfo);
    return (
        <div className="w-11/12 md:w-3/4 h-fit m-auto p-5 rounded-2xl flex flex-col
        bg-liSec dark:bg-bgAlt text-liBg items-center space-y-6">
            <h1 className='text-2xl text-primaryAlt'>{projectInfo.title}</h1>
            <div className='flex space-x-4 justify-between'>
                <div className='w-1/2 flex flex-col justify-between'>
                    <p>{projectInfo.description}</p>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='text-xl text-primaryAlt'>Built with:</h2>
                        <ul>
                            {projectInfo.tags.map((tag) => 
                                <li key={tag}>{tag}</li>
                            )}
                        </ul>
                    </div>
                    <div className='flex p-2 space-x-2'>
                        {projectInfo.github_link &&<GithubButton link={projectInfo.github_link} />}
                        {projectInfo.live_demo && <DemoButton link={projectInfo.live_demo} />}
                    </div>
                </div>
                <img className='w-1/2 rounded-2xl' src={projectInfo.imgPath} alt='Project image' />
            </div>
            <button onClick={onClick} className='py-1 px-3 border-solid border-2 border-red-500 hover:text-black hover:bg-red-500 text-white rounded-md'>Back</button>
        </div>
    )
}

export default ProjectContainer