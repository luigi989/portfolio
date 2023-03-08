import { Ref } from 'react';
import SectionHeader from '../shared/SectionHeader';
import ExperienceArea from './ExperienceArea';
import ExperienceContainer from './ExperienceContainer';
import ExperienceItem from './ExperienceItem';

interface ExperienceProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Experience = ({ visibilityRef, snap }: ExperienceProps) => {
  const Intermediate = 'Intermediate';
  const experienced = 'Experienced';

  return (
    <section ref={visibilityRef} id='experience' className={snap + ' mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        header='My Experience'
        subHeader='What Skills I have'
      />

      <div className='w-11/12 lg:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
        <ExperienceContainer>
          <ExperienceArea header='Frontend Experience'>
            <ExperienceItem lang='React' grade={experienced} />
            <ExperienceItem lang='JavaScript' grade={Intermediate} />
            <ExperienceItem lang='HTML' grade={experienced} />
            <ExperienceItem lang='CSS' grade={experienced} />
            <ExperienceItem lang='Tailwind' grade={experienced} />
            <ExperienceItem lang='Typescript' grade={experienced} />
          </ExperienceArea>
        </ExperienceContainer>

        <ExperienceContainer>
          <ExperienceArea header='Backend Experience'>
            <ExperienceItem lang='Java' grade={experienced} />
            <ExperienceItem lang='C#' grade={Intermediate} />
            <ExperienceItem lang='MySQL' grade={Intermediate} />
            <ExperienceItem lang='PostgreSQL' grade={Intermediate} />
          </ExperienceArea>
          <ExperienceArea header='Other Experience'>
            <ExperienceItem lang='Git' grade={experienced} />
          </ExperienceArea>
        </ExperienceContainer>
      </div>
    </section>
  )
}

export default Experience