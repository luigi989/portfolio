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
      threshold: 1,
      onChange: ({ inView, scrollDirection }) => {
        if (inView) {
          console.log(scrollDirection.vertical);
        }
      },
    })

    return { observe, inView };
  }

  const { observe: observeAbout, inView: inViewAbout, scrollDirection: scrollAbout } = useView();
  const { observe: observeExperience, inView: inViewExperince } = useView();

  useEffect(() => {
    if (inViewAbout) {
      console.log('About visible');
      // console.log(scrollAbout);
      const sections = sectionsVisible;

      console.log(sections);
    }
  }, [observeAbout, inViewAbout, sectionsVisible, scrollAbout])

  // useEffect(() => {
  //   if (inViewExperince) {
  //     console.log('Experience visible');
  //     console.log(observeExperience);
  //   }
  // }, [observeExperience, inViewExperince, changeVisibleState])


  return (
    <div className={isDark ? 'bg-bgTexture bg-liBg text-black dark:bg-bg dark:text-white' :
      'lightPattern bg-liBg text-black dark:bg-bg dark:text-white'}>
      <Header snap='lg:snap-start' />
      <About visibilityRef={observeAbout} snap='lg:snap-start' />
      <Experience visibilityRef={observeExperience} snap='lg:snap-start' />
      <Portfolio snap='lg:snap-start' />
      <Contact snap='lg:snap-start' />
      <Footer snap='lg:snap-end' />
      <div><Nav /></div>
    </div>
  );
}

export default App;
