import React from 'react'
import PortfolioCard from './PortfolioCard';
import portfolio_periodic from '../../assets/portfolio_periodic.png';
import portfolio_exaples from '../../assets/portfolio_examples.png';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio' className='mt-32 h-fit pt-4 lg:pt-8'>
      <h5 className='text-light font-medium'>My Recent Work</h5>
      <h2 className='text-primaryAlt font-medium text-3xl lg:mb-16'>Portfolio</h2>

      <div className='w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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
          path={portfolio3} 
        />
        <PortfolioCard 
          header='Maintaining tasks and tracking process' 
          path={portfolio4} 
        />
        <PortfolioCard 
          header='Charts tempaltes and infographs in Figma' 
          path={portfolio5} 
        />
        <PortfolioCard 
          header='Charts tempaltes and infographs in Figma' 
          path={portfolio6} 
        />
      </div>
    </section>
  )
}

export default Portfolio