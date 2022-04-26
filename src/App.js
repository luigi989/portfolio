import { useRecoilValue } from 'recoil';
import './App.css';
import { darkModeState } from './atoms/atoms';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
// import { useState, useEffect, useRef } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  const isDark = useRecoilValue(darkModeState);

  return (
    <div className={isDark ? 'bg-bgTexture bg-liBg text-black dark:bg-bg dark:text-white' : 
                              'lightPattern bg-liBg text-black dark:bg-bg dark:text-white'}>
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
