import './App.css';
// import { useState, useEffect, useRef } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';  
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { darkModeState } from './atoms/atoms';

function App() {
  const isDark = useRecoilValue(darkModeState);
  console.log(isDark)

  return (
    <div className={isDark ? 'bg-bgTexture ' : 'lightPattern ' + 'bg-liBg text-black dark:bg-bg dark:bg-bgTexture dark:text-white'}>
      <Header snap='lg:snap-start' />
      <About snap='lg:snap-start' />
      <Experience snap='lg:snap-start' />
      <Portfolio snap='lg:snap-start' />
      <Testimonials snap='lg:snap-start' />
      <Contact snap='lg:snap-start' />
      <Footer snap='lg:snap-start' />
      <div><Nav /></div>
    </div>
  );
}

export default App;
