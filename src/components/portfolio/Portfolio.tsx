import { Ref } from 'react';
import SectionHeader from '../shared/SectionHeader';
import PortfolioCard from './PortfolioCard';

const portfolio_periodic_sm = require('../../assets/periodic/periodic-sm.webp');
const portfolio_periodic_xl = require('../../assets/periodic/periodic-xl.webp');
const portfolio_periodic_xs = require('../../assets/periodic/periodic-xs.webp');
const portfolio_periodic = require('../../assets/periodic/periodic.webp');

const portfolio_smallApps_sm = require('../../assets/smallApps/smallApps-sm.webp');
const portfolio_smallApps_xl = require('../../assets/smallApps/smallApps-xl.webp');
const portfolio_smallApps_xs = require('../../assets/smallApps/smallApps-xs.webp');
const portfolio_smallApps = require('../../assets/smallApps/smallApps.webp');

const portfolio_ragnarok_sm = require('../../assets/ragnarok/ragnarok-sm.webp');
const portfolio_ragnarok_xl = require('../../assets/ragnarok/ragnarok-xl.webp');
const portfolio_ragnarok_xs = require('../../assets/ragnarok/ragnarok-xs.webp');
const portfolio_ragnarok = require('../../assets/ragnarok/ragnarok.webp');

const portfolio_examples_sm = require('../../assets/examples/examples-sm.webp');
const portfolio_examples_xl = require('../../assets/examples/examples-xl.webp');
const portfolio_examples_xs = require('../../assets/examples/examples-xs.webp');
const portfolio_examples = require('../../assets/examples/examples.webp');

const portfolio_mealPlanner_sm = require('../../assets/mealPlanner/mealPlanner-sm.webp');
const portfolio_mealPlanner_xl = require('../../assets/mealPlanner/mealPlanner-xl.webp');
const portfolio_mealPlanner_xs = require('../../assets/mealPlanner/mealPlanner-xs.webp');
const portfolio_mealPlanner = require('../../assets/mealPlanner/mealPlanner.webp');

const portfolio_spaceApp_sm = require('../../assets/spaceApp/spaceApp-sm.webp');
const portfolio_spaceApp_xl = require('../../assets/spaceApp/spaceApp-xl.webp');
const portfolio_spaceApp_xs = require('../../assets/spaceApp/spaceApp-xs.webp');
const portfolio_spaceApp = require('../../assets/spaceApp/spaceApp.webp');

const builder_sm = require('../../assets/kurskatalog/builder-sm.webp');
const builder_xl = require('../../assets/kurskatalog/builder-xl.webp');
const builder_xs = require('../../assets/kurskatalog/builder-xs.webp');
const builder = require('../../assets/kurskatalog/builder.webp');

interface PortfolioProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

function Portfolio({ visibilityRef, snap } : PortfolioProps) {
  return (
    <section ref={visibilityRef} id='portfolio' className={snap + ' mt-16 lg:mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        className='lg:mb-16'
        header='Portfolio'
        subHeader='My Recent Work'
      />

      <div className='w-11/12 md:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 print:grid-cols-3'>
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