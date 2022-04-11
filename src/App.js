import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
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
  return (
    <div className="relative">
      <>
        <RecoilRoot>
          <Header />
          <About />
          <Experience />
          {/* <Services /> */}
          <Portfolio />
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
