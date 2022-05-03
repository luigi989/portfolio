import React from 'react'
import PortfolioCard from './PortfolioCard';
import portfolio_periodic from '../../assets/portfolio_periodic.png';
import portfolio_exaples from '../../assets/portfolio_examples.png';
import portfolio_smallApps from '../../assets/portfolio_smallApps.png';
import portfolio_ragnarok from '../../assets/portfolio_ragnarok.png';
import portfolio_spaceApp from '../../assets/portfolio_spaceApp.png';
import portfolio_mealPlanner from '../../assets/portfolio_mealPlanner.png';

function Portfolio({ visibilityRef, snap }) {
  return (
    <section ref={visibilityRef} id='portfolio' className={snap + ' mt-32 h-screen pt-4 lg:pt-8'}>
      <div className='flex flex-col bg-liBg dark:bg-transparent w-fit lg:mb-16 m-auto'>
        <h5 className='text-center text-liLight dark:text-light font-medium '>My Recent Work</h5>
        <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-3xl'>Portfolio</h2>
      </div>

      <div className='w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <PortfolioCard
          header='The Periodic System in a interactive system'
          link='https://github.com/luigi989/periodic'
          path={portfolio_periodic}
        />
        <PortfolioCard
          header='Examples in HTML/CSS'
          link='https://github.com/luigi989/examples'
          path={portfolio_exaples}
        />
        <PortfolioCard
          header='Ragnarok'
          link='https://github.com/luigi989/Ragnarok'
          path={portfolio_ragnarok}
        />
        <PortfolioCard
          header='Meal-Planner'
          link='https://github.com/HawkieOne/Meal-Planner'
          path={portfolio_mealPlanner}
        />
        <PortfolioCard
          header='Space-app'
          link='https://github.com/HawkieOne/space-app'
          path={portfolio_spaceApp}
        />
        <PortfolioCard
          header='smallApps'
          link='https://github.com/luigi989/smallApps'
          path={portfolio_smallApps}
        />
      </div>
    </section>
  )
}

export default Portfolio