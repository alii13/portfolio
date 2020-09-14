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

//   const handleMouseMove = (e)=>
// {
//     const cursor = document.querySelector('.cursor')
//     cursor.style.left = `${e.pageX}px`
//     cursor.style.top = `${e.pageY}px`
// }
  return (
    <div className="App" >
      <div className="email-wrapper"> <img src={require('./images/line.png')} alt="line" className="img-fluid line"/><div className="email"><span>Shekhaliul44@gmail.com</span></div></div>
      
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
