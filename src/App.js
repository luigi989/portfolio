import { useRecoilState, useRecoilValue } from 'recoil';
import { useInView } from "react-cool-inview";
import { useEffect } from 'react';
import { darkModeState, sectionVisibleState } from './atoms/atoms';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import './App.css';

function App() {
  const isDark = useRecoilValue(darkModeState);

  const [sectionsVisible, setSectionsVisible] = useRecoilState(sectionVisibleState);

  const useView = () => {
    const { observe, inView} = useInView({
      threshold: 0.8,
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

  class Sections {
    constructor() {
      this.header = false;
      this.about = false;
      this.experience = false;
      this.portfolio = false;
      this.contact = false;
    }
  } 

  useEffect(() => {
    if (inViewHeader) {
      const sections = new Sections();
      sections.header = true;
      setSectionsVisible(sections);
    }
  }, [inViewHeader, setSectionsVisible])

  useEffect(() => {
    if (inViewAbout) {
      const sections = new Sections();
      sections.about = true;
      setSectionsVisible(sections);
    }
  }, [inViewAbout, setSectionsVisible])

  useEffect(() => {
    if (inViewExperince) {
      const sections = new Sections();
      sections.experience = true;
      setSectionsVisible(sections);
    }
  }, [inViewExperince, setSectionsVisible])

  useEffect(() => {
    if (inViewPortfolio) {
      const sections = new Sections();
      sections.portfolio = true;
      setSectionsVisible(sections);
    }
  }, [inViewPortfolio, setSectionsVisible])

  useEffect(() => {
    if (inViewContact) {
      const sections = new Sections();
      sections.contact = true;
      setSectionsVisible(sections);
    }
  }, [inViewContact, setSectionsVisible])

  return (
    <div className={isDark ? 'bg-bgTexture bg-liBg text-black dark:bg-bg dark:text-white' :
      'lightPattern bg-liBg text-black dark:bg-bg dark:text-white'}>
      <Header visibilityRef={observeHeader} snap='lg:snap-start' />
      <About visibilityRef={observeAbout} snap='lg:snap-start' />
      <Experience visibilityRef={observeExperience} snap='lg:snap-start' />
      <Portfolio visibilityRef={observePortfolio} snap='lg:snap-start' />
      <Contact visibilityRef={observeContact} snap='lg:snap-start' />
      <Footer snap='lg:snap-end' />
      <div><Nav /></div>
    </div>
  );
}

export default App;
