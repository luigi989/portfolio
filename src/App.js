import './App.css';
import { useState, useEffect, useRef } from 'react';
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

function App() {
  const ref = useRef();
  const ref2 = useRef();
  const onScreen = useOnScreen(ref, "-300px", "about");
  const onScreen2 = useOnScreen(ref2, "-300px", "portfolio");

  function useOnScreen(ref, rootMargin = "0px", message) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []);
    console.log(message);
    return isIntersecting;
  }

  return (
    <div className="relative">
      <>
        <RecoilRoot>
          <Header />
          <About inView={ref}/>
          <Experience />
          {/* <Services /> */}
          <Portfolio inView={ref2}/>
          <Testimonials />
          <Contact />
          <Footer />
          <Nav />
        </RecoilRoot>
      </>
    </div>
  );
}

export default App;
