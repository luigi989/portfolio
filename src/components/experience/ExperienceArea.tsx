interface ExperienceAreaProps {
    header: string;
    children: React.ReactNode;
  }
  
  const ExperienceArea = ({ header, children } : ExperienceAreaProps) => {    
    return (
      <div>
          <h1 className='text-center mb-8 text-liBg dark:text-primaryAlt'>{header}</h1>
          <div className='grid grid-cols-2 gap-8'>
              {children}
          </div>
      </div>
    )
  }
  
  export default ExperienceArea;