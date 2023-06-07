import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

import React, { useEffect } from 'react';





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';




function App() {


  useEffect(() => {
    // ------------------------------ sticky navbar on scroll script ------------------------------ //
    const handleScroll = () => {
      if (window.scrollY > 20) {
        document.querySelector(".navbar").classList.add("sticky");
      } else {
        document.querySelector(".navbar").classList.remove("sticky");
      }

      // ------------------------------ scroll-up button show/hide script ------------------------------ //
      if (window.scrollY > 500) {
        document.querySelector(".scroll-up-btn").classList.add("show");
      } else {
        document.querySelector(".scroll-up-btn").classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    // ------------------------------ slide-up script ------------------------------ //
    document.querySelector("html").animate({ scrollTop: 0 });

    // ------------------------------ removing smooth scroll on slide-up button click ------------------------------ //
    document.querySelector("html").style.scrollBehavior = "auto";
  };

  const handleMenuClick = () => {
    // ------------------------------ Smooth scroll on Menu Items click ------------------------------ //
    document.querySelector("html").style.scrollBehavior = "smooth";
  };

  const handleMenuToggle = () => {
    // ------------------------------ Toggle Navbar ------------------------------ //
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  };


  
  
  return (
  <div>
  <div>
   
    <div className="scroll-up-btn" onClick={handleScrollUp}>
      <FontAwesomeIcon icon={faAngleUp} />

    </div>
    {/* --x--------------------------- Scroll Bar ---------------------------x-- */}
    {/* ------------------------------ Header ------------------------------ */}
    <Header />
    {/* --x--------------------------- Header ---------------------------x-- */}
    {/* ------------------------------ Home ------------------------------ */}
    <Home />
    {/* --x--------------------------- Home ---------------------------x-- */}
    {/* ------------------------------ About ------------------------------ */}
    <About />

    {/* --x--------------------------- Services ---------------------------x-- */}
    {/* ------------------------------ Skills ------------------------------ */}
   <Skills />
    {/* --x--------------------------- Skills ---------------------------x-- */}
    {/* ------------------------------ projects ------------------------------ */}
    <Projects />
    {/* --x--------------------------- Projects ---------------------------x-- */}
    {/* ------------------------------ Contacts ------------------------------ */}
    <Contact />
    {/* --x--------------------------- Reach to Me ---------------------------x-- */}
    {/* ------------------------------ Footer ------------------------------ */}
    <footer>
      <span className="far fa-copyright" /> 2023 All Rights Reserved. Privacy Policy
    </footer>
    {/* --x--------------------------- Footer ---------------------------x-- */}
  </div>
  
</div>
);

}

export default App;
