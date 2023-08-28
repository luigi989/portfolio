import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useInView } from "react-cool-inview";
import { useEffect } from 'react';
import { darkModeState, actioveSection } from './atoms/atoms';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import locale_en from './locales/en.json';
import locale_sv from './locales/sv.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: locale_en
    },
    sv: {
      translation: locale_sv
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  }
})


function App() {
  const { t } = useTranslation();
  const isDark = useRecoilValue(darkModeState);
  const setActiveSection = useSetRecoilState(actioveSection);

  const useView = () => {
    const { observe, inView} = useInView({
      threshold: 0.7,
      onChange: ({ inView, scrollDirection }) => {
      },
    })

    return { observe, inView };
  }

  const { observe: observeHeader, inView: inViewHeader } = useView();
  const { observe: observeAbout, inView: inViewAbout } = useView();
  const { observe: observeExperience, inView: inViewExperince } = useView();
  const { observe: observePortfolio, inView: inViewPortfolio } = useView();
  const { observe: observeContact, inView: inViewContact } = useView();

  useEffect(() => {
    if (inViewHeader) {
      window.history.replaceState({}, '', '#');
      setActiveSection(t('sections.home'));
    }
  }, [inViewHeader])

  useEffect(() => {
    if (inViewAbout) {
      window.history.replaceState({}, '', '#about');
      setActiveSection(t('sections.about'));
    }
  }, [inViewAbout])

  useEffect(() => {
    if (inViewExperince) {
      window.history.replaceState({}, '', '#experience');
      setActiveSection(t('sections.experience'));
    }
  }, [inViewExperince])

  useEffect(() => {
    if (inViewPortfolio) {
      window.history.replaceState({}, '', '#portfolio');
      setActiveSection(t('sections.portfolio'));
    }
  }, [inViewPortfolio])

  useEffect(() => {
    if (inViewContact) {
      window.history.replaceState({}, '', '#contact');
      setActiveSection(t('sections.contact'));
    }
  }, [inViewContact])

  return (
    <div className={'bg-liBg text-black dark:bg-bg dark:text-white ' + 
      (isDark ? 'bg-bgTexture' : 'lightPattern')}>
      <Header visibilityRef={observeHeader} snap='lg:snap-start' />
      <About visibilityRef={observeAbout} snap='lg:snap-start' />
      <Experience visibilityRef={observeExperience} snap='lg:snap-start' />
      <Portfolio visibilityRef={observePortfolio} snap='lg:snap-start' />
      <Contact visibilityRef={observeContact} snap='lg:snap-start' />
      <Footer snap='lg:snap-end' />
      <Nav />
    </div>
  );
}

export default App;

