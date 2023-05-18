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

function App() {
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
      setActiveSection("Home");
    }
  }, [inViewHeader])

  useEffect(() => {
    if (inViewAbout) {
      window.history.replaceState({}, '', '#about');
      setActiveSection("About");
    }
  }, [inViewAbout])

  useEffect(() => {
    if (inViewExperince) {
      window.history.replaceState({}, '', '#experience');
      setActiveSection("Experience");
    }
  }, [inViewExperince])

  useEffect(() => {
    if (inViewPortfolio) {
      window.history.replaceState({}, '', '#portfolio');
      setActiveSection("Portfolio");
    }
  }, [inViewPortfolio])

  useEffect(() => {
    if (inViewContact) {
      window.history.replaceState({}, '', '#contact');
      setActiveSection("Contact");
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
