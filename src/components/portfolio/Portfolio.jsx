import React from 'react'
import PortfolioCard from './PortfolioCard';
import portfolio_periodic from '../../assets/portfolio_periodic.png';
import portfolio_exaples from '../../assets/portfolio_examples.png';

function Portfolio({ snap }) {
  return (
    <section id='portfolio' className={snap + ' mt-32 h-fit pt-4 lg:pt-8'}>
      <div className='flex flex-col bg-liBg dark:bg-transparent w-fit lg:mb-4 m-auto'>
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
          header='Charts templates and infographs in Figma'
          link='https://github.com/luigi989/examples'
          path={portfolio_exaples}
        />
        <PortfolioCard
          header='Figma dashboard UI kit for data design with apps'
          path={portfolio_exaples}
        />
        <PortfolioCard
          header='Maintaining tasks and tracking process'
          path={portfolio_exaples}
        />
        <PortfolioCard
          header='Charts tempaltes and infographs in Figma'
          path={portfolio_exaples}
        />
        <PortfolioCard
          header='Charts tempaltes and infographs in Figma'
          path={portfolio_exaples}
        />
      </div>
    </section>
  )
}

export default Portfolio