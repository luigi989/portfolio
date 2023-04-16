import { useRecoilValue } from 'recoil';
import { chosenProjectState } from '../../atoms/atoms';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

interface ProjectContainerProps {
    header: string;
    onClick: () => void
}

const ProjectContainer = ({ header, onClick }: ProjectContainerProps) => {
    const projectChosen = useRecoilValue(chosenProjectState);
    const [markdown, setMarkdown] = useState();

    return (
        <div className="w-11/12 md:w-3/4 h-3/4 m-auto p-5 rounded-2xl flex flex-col
        bg-liSec dark:bg-bgAlt text-liBg">
            {projectChosen}
            <button onClick={onClick}>Back</button>
        </div>
    )
}

export default ProjectContainer