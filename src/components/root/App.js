import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css';
import Header from '../common/Header';
import Home from '../common/Home';
import About from '../common/aboutus/About';
import OurServices from '../common/ourservices/OurServices';
import OurPortftolio from '../common/ourportfolio/OurPortftolio';

function App () {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <OurServices />
      <OurPortftolio />
    </div>
  );
}

export default App;
