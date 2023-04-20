import { Ref, useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { chosenProjectInfo } from '../../atoms/atoms';
import { useSpring, animated } from '@react-spring/web'
import SectionHeader from '../shared/SectionHeader';
import PortfolioCard from './PortfolioCard';
import ProjectContainer from './ProjectContainer';

interface PortfolioProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

interface projectType {
  title: string;
  github_link: string;
  live_demo: string
  tags: string[];
  description: string;
  link: string;
}

const Portfolio = ({ visibilityRef, snap }: PortfolioProps) => {
  const projectChosen:projectType = useRecoilValue(chosenProjectInfo);
  const setChosenProjectInfo = useSetRecoilState(chosenProjectInfo);
  const [projects, setProjects] = useState<projectType[]>([]);

  const initProjects = async () => {
    const response = await fetch("http://localhost:3001/all");
    const json = await response.json();
    setProjects(json);
  }

  const onClick = (filename: string) => {
    projects.map((project: projectType) => {
      if (filename == project.link) {
        setChosenProjectInfo(project);
      }
    });
    
    const section = document.getElementById("portfolio");
    if (section != null) {
      section.scrollIntoView();
    }
  }

  const closeProject = () => {
    setChosenProjectInfo({
      title: '',
      description: '',
      tags: [],
      github_link: '',
      live_demo: '',
      link: '',
    });
  }

  const createImgURL = (file: string, size?: string) => {
    var url = '';
    if (size !== undefined) {
      url = '/' + file + '/' + file + size + '.webp';
    } else {
      url = '/' + file + '/' + file + '.webp';
    }
    return url;
  }

  useEffect(() => {
    initProjects();
    console.log("%cLog message", "color: orange");
  }, [])

  const [props, api] = useSpring(
    () => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 0,
    }),
)

// const handleClick = () => {
//     api.start({
//         from: { x: 0, },
//         to: { x: 100, },
//     })
// }

  return (
    <section ref={visibilityRef} id='portfolio'
      className={snap + ' mt-16 lg:mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}
    >
      <SectionHeader
        className='lg:mb-8'
        header='Portfolio'
        subHeader='My Recent Work'
      />

      {projectChosen.title !== '' &&
        <animated.div  className='flex w-11/12 lg:w-3/4 h-fit m-auto p-5'>
          <ul className='hidden lg:block p-4 bg-liSec dark:bg-bgAlt text-liBg rounded-l-2xl whitespace-nowrap'>
            {projects.map((project) =>
              <li onClick={() => onClick(project.link)}
                className={'py-1 px-2 text-xl cursor-pointer ' +
                  'dark:hover:bg-primary hover:bg-liBg hover:text-black rounded-md '
                  + (projectChosen.title == project.title && 'dark:bg-primary bg-liBg text-black')}>
                {project.title}</li>
            )}
          </ul>
          <ProjectContainer onClick={() => closeProject()} />
        </animated.div>}

      <div className={'w-11/12 md:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 print:grid-cols-3 '
        + (projectChosen.title == '' ? "block" : "hidden")}>
        {projects.map((project) =>
          <PortfolioCard
            header={project.title}
            demoLink={project.live_demo}
            onClick={() => onClick(project.link)}
            path={createImgURL(project.link, '-sm')}
            path1x={createImgURL(project.link, '-xs')}
            path2x={createImgURL(project.link, '-sm')}
            path3x={createImgURL(project.link)}
            path4x={createImgURL(project.link, '-xl')}
          />
        )}
      </div>
    </section>
  )
}

export default Portfolio