import { Ref, useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import PortfolioCard from './PortfolioCard';

import portfolio_periodic_sm from '../../assets/periodic/periodic-sm.webp';
import portfolio_periodic_xl from '../../assets/periodic/periodic-xl.webp';
import portfolio_periodic_xs from '../../assets/periodic/periodic-xs.webp';
import portfolio_periodic from '../../assets/periodic/periodic.webp';

import portfolio_smallApps_sm from '../../assets/smallApps/smallApps-sm.webp';
import portfolio_smallApps_xl from '../../assets/smallApps/smallApps-xl.webp';
import portfolio_smallApps_xs from '../../assets/smallApps/smallApps-xs.webp';
import portfolio_smallApps from '../../assets/smallApps/smallApps.webp';

import portfolio_ragnarok_sm from '../../assets/ragnarok/ragnarok-sm.webp';
import portfolio_ragnarok_xl from '../../assets/ragnarok/ragnarok-xl.webp';
import portfolio_ragnarok_xs from '../../assets/ragnarok/ragnarok-xs.webp';
import portfolio_ragnarok from '../../assets/ragnarok/ragnarok.webp';

import portfolio_examples_sm from '../../assets/examples/examples-sm.webp';
import portfolio_examples_xl from '../../assets/examples/examples-xl.webp';
import portfolio_examples_xs from '../../assets/examples/examples-xs.webp';
import portfolio_examples from '../../assets/examples/examples.webp';

import portfolio_mealPlanner_sm from '../../assets/mealPlanner/mealPlanner-sm.webp';
import portfolio_mealPlanner_xl from '../../assets/mealPlanner/mealPlanner-xl.webp';
import portfolio_mealPlanner_xs from '../../assets/mealPlanner/mealPlanner-xs.webp';
import portfolio_mealPlanner from '../../assets/mealPlanner/mealPlanner.webp';

import portfolio_spaceApp_sm from '../../assets/spaceApp/spaceApp-sm.webp';
import portfolio_spaceApp_xl from '../../assets/spaceApp/spaceApp-xl.webp';
import portfolio_spaceApp_xs from '../../assets/spaceApp/spaceApp-xs.webp';
import portfolio_spaceApp from '../../assets/spaceApp/spaceApp.webp';

import builder_sm from '../../assets/kurskatalog/builder-sm.webp';
import builder_xl from '../../assets/kurskatalog/builder-xl.webp';
import builder_xs from '../../assets/kurskatalog/builder-xs.webp';
import builder from '../../assets/kurskatalog/builder.webp';

interface PortfolioProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Portfolio = ({ visibilityRef, snap } : PortfolioProps) => {
  const [projectChosen, setProjectChosen] = useState(false);

  return (
    <section ref={visibilityRef} id='portfolio' className={snap + ' mt-16 lg:mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        className='lg:mb-12'
        header='Portfolio'
        subHeader='My Recent Work'
      />

      {/* <button className={'bg-red-500 text-black p-10 '} 
        title="hej" onClick={() => setProjectChosen(!projectChosen)}>CLOSE</button> */}
      <div className={'w-11/12 md:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 print:grid-cols-3 '
          + (projectChosen ? "invisible" : "visible")}>
        <PortfolioCard
          header='The Periodic System in an interactive system'
          link='https://github.com/luigi989/periodic'
          demoLink='https://periodic.luigiworks.tech'
          path={portfolio_periodic_sm}
          path1x={portfolio_periodic_xs}
          path2x={portfolio_periodic_sm}
          path3x={portfolio_periodic}
          path4x={portfolio_periodic_xl}
        />
        <PortfolioCard
          header='Kurskatalog'
          link='https://github.com/HawkieOne/kurskatalog-id'
          demoLink='https://kurskatalog.hawkie.me/'
          path={builder_sm}
          path1x={builder_xs}
          path2x={builder_sm}
          path3x={builder}
          path4x={builder_xl}
        />
        <PortfolioCard
          header='Space-app'
          link='https://github.com/HawkieOne/space-app'
          demoLink='https://spaceapp.hawkie.me'
          path={portfolio_spaceApp_sm}
          path1x={portfolio_spaceApp_xs}
          path2x={portfolio_spaceApp_sm}
          path3x={portfolio_spaceApp}
          path4x={portfolio_spaceApp_xl}
        />
        <PortfolioCard
          header='SmallApps'
          link='https://github.com/luigi989/smallApps'
          demoLink='https://apps.luigiworks.tech'
          path={portfolio_smallApps_sm}
          path1x={portfolio_smallApps_xs}
          path2x={portfolio_smallApps_sm}
          path3x={portfolio_smallApps}
          path4x={portfolio_smallApps_xl}
        />
        <PortfolioCard
          header='Ragnarok'
          link='https://github.com/luigi989/Ragnarok'
          demoLink='https://ragnarok.luigiworks.tech'
          path={portfolio_ragnarok_sm}
          path1x={portfolio_ragnarok_xs}
          path2x={portfolio_ragnarok_sm}
          path3x={portfolio_ragnarok}
          path4x={portfolio_ragnarok_xl}
        />
        <PortfolioCard
          header='Examples in HTML/CSS'
          link='https://github.com/luigi989/examples'
          path={portfolio_examples_sm}
          path1x={portfolio_examples_xs}
          path2x={portfolio_examples_sm}
          path3x={portfolio_examples}
          path4x={portfolio_examples_xl}
        />
        <PortfolioCard
          header='Meal-Planner'
          link='https://github.com/HawkieOne/Meal-Planner'
          path={portfolio_mealPlanner_sm}
          path1x={portfolio_mealPlanner_xs}
          path2x={portfolio_mealPlanner_sm}
          path3x={portfolio_mealPlanner}
          path4x={portfolio_mealPlanner_xl}
        />
      </div>
    </section>
  )
}

export default Portfolio