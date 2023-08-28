import { Ref } from 'react';
import SectionHeader from '../shared/SectionHeader';
import ExperienceArea from './ExperienceArea';
import ExperienceContainer from './ExperienceContainer';
import ExperienceItem from './ExperienceItem';
import { useTranslation } from 'react-i18next';

interface ExperienceProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Experience = ({ visibilityRef, snap }: ExperienceProps) => {
  const { t } = useTranslation();
  const Intermediate = t('experience.level.intermediate');
  const experienced = t('experience.level.experienced');

  return (
    <section ref={visibilityRef} id='experience' className={snap + ' mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        header={t('experience.title')}
        subHeader={t('experience.subtitle')}
      />

      <div className='w-11/12 lg:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
        <ExperienceContainer>
          <ExperienceArea header={t('experience.frontendExp')}>
            <ExperienceItem lang={t('experience.lang.frontend.react')} grade={experienced} />
            <ExperienceItem lang={t('experience.lang.frontend.javascript')} grade={Intermediate} />
            <ExperienceItem lang={t('experience.lang.frontend.vue')} grade={experienced} />
            <ExperienceItem lang={t('experience.lang.frontend.tailwind')} grade={experienced} />
            <ExperienceItem lang={t('experience.lang.frontend.typescript')} grade={experienced} />
          </ExperienceArea>
        </ExperienceContainer>

        <ExperienceContainer>
          <ExperienceArea header={t('experience.backendExp')}>
            <ExperienceItem lang={t('experience.lang.backend.java')} grade={experienced} />
            <ExperienceItem lang={t('experience.lang.backend.csharp')} grade={Intermediate} />
            <ExperienceItem lang={t('experience.lang.backend.mysql')} grade={Intermediate} />
            <ExperienceItem lang={t('experience.lang.backend.postgresql')} grade={Intermediate} />
          </ExperienceArea>
          <ExperienceArea header={t('experience.otherExp')}>
            <ExperienceItem lang={t('experience.lang.other.git')} grade={experienced} />
          </ExperienceArea>
        </ExperienceContainer>
      </div>
    </section>
  )
}

export default Experience