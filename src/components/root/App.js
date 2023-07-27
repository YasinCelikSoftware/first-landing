import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css';
import Header from '../common/Header';
import Home from '../common/Home';
import About from '../common/aboutus/About';
import OurServices from '../common/ourservices/OurServices';
import OurPortftolio from '../common/ourportfolio/OurPortftolio';
import Testimonial from '../common/testimonial/Testimonial';
import Footer from '../common/Footer';
import {useEffect} from 'react';
import {useState} from 'react';
import Loading from './Loading';
import Contact from '../common/contact/Contact';

function App () {
  const [loading, setLoading] = useState (true);
  useEffect (() => {
    setTimeout (() => {
      setLoading (false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading
        ? <Loading />
        : <div>
            <Header />
            <Home />
            <About />
            <OurServices />
            <OurPortftolio />
            <Testimonial />
            <Contact />
            <Footer />
          </div>}
    </div>
  );
}

export default App;
