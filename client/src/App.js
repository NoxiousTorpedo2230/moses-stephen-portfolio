// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from 'react';
import Header from "./Components/Header & Footer/Header.js";
import Footer from "./Components/Header & Footer/Footer.js";
import Home from "./Components/Main/Home.js";
import About from "./Components/Main/About.js";
import Skills from "./Components/Main/Skills.js";
import Project from "./Components/Main/Project.js";
import Contact from "./Components/Main/Contact.js";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      // Get the height of the navbar for offset
      const headerHeight = document.querySelector("nav.navbar")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Fix anchor links on page load
  useEffect(() => {
    // Check if we're on a specific route
    const path = window.location.pathname;
    if (path !== "/" && path !== "") {
      // Redirect to root with hash
      const hash = window.location.hash || "#home";
      window.location.href = "/" + hash;
    }
    
    // Handle hash navigation
    const handleHashNavigation = () => {
      if (window.location.hash) {
        const id = window.location.hash;
        const element = document.querySelector(id);
        if (element) {
          const headerHeight =
            document.querySelector("nav.navbar")?.offsetHeight || 0;
          const offsetPosition = element.offsetTop - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        // Default to home
        window.scrollTo(0, 0);
      }
    };

    // Wait a moment for DOM to be ready
    setTimeout(handleHashNavigation, 300);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header handleScroll={handleScroll}/>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section id="home">
                  <Home handleScroll={handleScroll}/>
                </section>
                <section id="about">
                  <About handleScroll={handleScroll}/>
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="project">
                  <Project />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            } />
            {/* Redirect any other routes to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;