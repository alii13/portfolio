import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Work from './components/About';
import Nav from './components/Nav';
import Project from "./components/Project"
import Ourskills from './components/Ourskills';
import Aboutus from "./components/Aboutus"
import Contactus from './components/Contactus';
import Footer from "./components/Footer"
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="App">
      <MobileNav/>
      <Hero/>
      <Nav/>
      <Work/>
      <Project/>
      <Ourskills/>
      <Aboutus/>
      <Contactus/>
      <Footer/>

    </div>
  );
}

export default App;
