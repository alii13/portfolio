import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Work from './components/About';
import Nav from './components/Nav';
import Project from "./components/Project"
import Ourskills from './components/Ourskills';
import Aboutus from "./components/Aboutus"
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Nav/>
      <Work/>
      <Project/>
      <Ourskills/>
      <Aboutus/>
      <Contactus/>

    </div>
  );
}

export default App;
