import { Ref } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { chosenProjectInfo } from '../../atoms/atoms';
import SectionHeader from '../shared/SectionHeader';
import PortfolioCard from './PortfolioCard';
import ProjectContainer from './ProjectContainer';

import img_periodic_sm from '../../assets/periodic/periodic-sm.webp';
import img_periodic_xl from '../../assets/periodic/periodic-xl.webp';
import img_periodic_xs from '../../assets/periodic/periodic-xs.webp';
import img_periodic from '../../assets/periodic/periodic.webp';

import img_apps_sm from '../../assets/smallApps/smallApps-sm.webp';
import img_apps_xl from '../../assets/smallApps/smallApps-xl.webp';
import img_apps_xs from '../../assets/smallApps/smallApps-xs.webp';
import img_apps from '../../assets/smallApps/smallApps.webp';

import img_ragnarok_sm from '../../assets/ragnarok/ragnarok-sm.webp';
import img_ragnarok_xl from '../../assets/ragnarok/ragnarok-xl.webp';
import img_ragnarok_xs from '../../assets/ragnarok/ragnarok-xs.webp';
import img_ragnarok from '../../assets/ragnarok/ragnarok.webp';

import img_examples_sm from '../../assets/examples/examples-sm.webp';
import img_examples_xl from '../../assets/examples/examples-xl.webp';
import img_examples_xs from '../../assets/examples/examples-xs.webp';
import img_examples from '../../assets/examples/examples.webp';

import img_mealPlanner_sm from '../../assets/mealPlanner/mealPlanner-sm.webp';
import img_mealPlanner_xl from '../../assets/mealPlanner/mealPlanner-xl.webp';
import img_mealPlanner_xs from '../../assets/mealPlanner/mealPlanner-xs.webp';
import img_mealPlanner from '../../assets/mealPlanner/mealPlanner.webp';

import img_spaceapp_sm from '../../assets/spaceApp/spaceApp-sm.webp';
import img_spaceapp_xl from '../../assets/spaceApp/spaceApp-xl.webp';
import img_spaceapp_xs from '../../assets/spaceApp/spaceApp-xs.webp';
import img_spaceapp from '../../assets/spaceApp/spaceApp.webp';

import img_kurskatalog_sm from '../../assets/kurskatalog/builder-sm.webp';
import img_kurskatalog_xl from '../../assets/kurskatalog/builder-xl.webp';
import img_kurskatalog_xs from '../../assets/kurskatalog/builder-xs.webp';
import img_kurskatalog from '../../assets/kurskatalog/builder.webp';

interface PortfolioProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Portfolio = ({ visibilityRef, snap }: PortfolioProps) => {
  const projectChosen = useRecoilValue(chosenProjectInfo);
  const setChosenProjectInfo = useSetRecoilState(chosenProjectInfo);

  const getMarkdown = async (filename: string, imgPath: string) => {
    // const response = await fetch("http://localhost:3001/" + filename);
    const response = await fetch("http://localhost:3001/all");
    const json = await response.json();

    const data = json.data;
    data["imgPath"] = imgPath;
    setChosenProjectInfo(data);
  }

  const onClick = (filename: string, imgPath: string) => {
    getMarkdown(filename, imgPath);
  }

  const closeProject = () => {
    setChosenProjectInfo({
      title: '',
      description: '',
      tags: [],
      github_link: '',
      live_demo: '',
      imgPath: ''
    });
  }

  return (
    <section ref={visibilityRef} id='portfolio' className={snap + ' mt-16 lg:mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        className='lg:mb-8'
        header='Portfolio'
        subHeader='My Recent Work'
      />

      {projectChosen.title !== '' &&
        <div className='flex w-11/12 md:w-3/4 h-fit m-auto p-5'>
          <ul className='p-4 bg-liSec dark:bg-bgAlt text-liBg rounded-l-2xl'>
            <li className={'py-1 px-2 text-xl cursor-pointer ' +
            'hover:bg-primary hover:text-black hover:rounded-md '}
              onClick={() => onClick("periodic", img_periodic_sm)}>Periodic</li>
            <li className='py-1 px-2 text-xl cursor-pointer
            hover:bg-primary hover:text-black hover:rounded-md '
              onClick={() => onClick("kurskatalog", img_kurskatalog_sm)}>Kurskatalog</li>
            <li className='py-1 px-2 text-xl cursor-pointer
            hover:bg-primary hover:text-black hover:rounded-md '
              onClick={() => onClick("spaceapp", img_spaceapp_sm)}>SpacQ</li>
            <li className='py-1 px-2 text-xl cursor-pointer
            hover:bg-primary hover:text-black hover:rounded-md '
              onClick={() => onClick("apps", img_apps_sm)}>Small apps</li>
            <li className='py-1 px-2 text-xl cursor-pointer
            hover:bg-primary hover:text-black hover:rounded-md '
              onClick={() => onClick("ragnarok", img_ragnarok_sm)}>Ragnarok</li>
            <li className='py-1 px-2 text-xl cursor-pointer
            hover:bg-primary hover:text-black hover:rounded-md '
              onClick={() => onClick("examples", img_examples_sm)}>Examples</li>
            <li className='py-1 px-2 text-xl cursor-pointer
            hover:bg-primary hover:text-black hover:rounded-md '
              onClick={() => onClick("mealPlanner", img_mealPlanner_sm)}>Meal-Planner</li>
          </ul>
          <ProjectContainer onClick={() => closeProject()} />
        </div>}

      <div className={'w-11/12 md:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 print:grid-cols-3 '
        + (projectChosen.title !== '' ? "invisible" : "visible")}>
        <PortfolioCard
          header='The Periodic System in an interactive system'
          link='https://github.com/luigi989/periodic'
          demoLink='https://periodic.luigiworks.tech'
          onClick={() => onClick("periodic", img_periodic_sm)}
          path={img_periodic_sm}
          path1x={img_periodic_xs}
          path2x={img_periodic_sm}
          path3x={img_periodic}
          path4x={img_periodic_xl}
        />
        <PortfolioCard
          header='Kurskatalog'
          link='https://github.com/HawkieOne/kurskatalog-id'
          demoLink='https://kurskatalog.hawkie.me/'
          onClick={() => onClick('kurskatalog', img_kurskatalog_sm)}
          path={img_kurskatalog_sm}
          path1x={img_kurskatalog_xs}
          path2x={img_kurskatalog_sm}
          path3x={img_kurskatalog}
          path4x={img_kurskatalog_xl}
        />
        <PortfolioCard
          header='SpacQ'
          link='https://github.com/HawkieOne/space-app'
          demoLink='https://spaceapp.hawkie.me'
          onClick={() => onClick('spaceapp', img_spaceapp_sm)}
          path={img_spaceapp_sm}
          path1x={img_spaceapp_xs}
          path2x={img_spaceapp_sm}
          path3x={img_spaceapp}
          path4x={img_spaceapp_xl}
        />
        <PortfolioCard
          header='SmallApps'
          link='https://github.com/luigi989/smallApps'
          demoLink='https://apps.luigiworks.tech'
          onClick={() => onClick('apps', img_apps_sm)}
          path={img_apps_sm}
          path1x={img_apps_xs}
          path2x={img_apps_sm}
          path3x={img_apps}
          path4x={img_apps_xl}
        />
        <PortfolioCard
          header='Ragnarok'
          link='https://github.com/luigi989/Ragnarok'
          demoLink='https://ragnarok.luigiworks.tech'
          onClick={() => onClick('ragnarok', img_ragnarok_sm)}
          path={img_ragnarok_sm}
          path1x={img_ragnarok_xs}
          path2x={img_ragnarok_sm}
          path3x={img_ragnarok}
          path4x={img_ragnarok_xl}
        />
        <PortfolioCard
          header='Examples in HTML/CSS'
          link='https://github.com/luigi989/examples'
          onClick={() => onClick('examples', img_examples_sm)}
          path={img_examples_sm}
          path1x={img_examples_xs}
          path2x={img_examples_sm}
          path3x={img_examples}
          path4x={img_examples_xl}
        />
        <PortfolioCard
          header='Meal-Planner'
          link='https://github.com/HawkieOne/Meal-Planner'
          onClick={() => onClick('mealPlanner', img_mealPlanner_sm)}
          path={img_mealPlanner_sm}
          path1x={img_mealPlanner_xs}
          path2x={img_mealPlanner_sm}
          path3x={img_mealPlanner}
          path4x={img_mealPlanner_xl}
        />
      </div>
    </section>
  )
}

export default Portfolio