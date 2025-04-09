// Header.js
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ handleScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Add effect to track scrolling and update active section
  useEffect(() => {
    const handleScrollUpdate = () => {
      const sections = ["home", "about", "skills", "project", "contact"];
      const navHeight = document.querySelector(".custom-navbar")?.offsetHeight || 0;
      
      // Find the section that is currently visible
      let current = "";
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop - navHeight - 100; // Add some buffer
          const sectionHeight = element.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section;
          }
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
        // Update URL hash without scrolling
        window.history.replaceState(null, null, `/#${current}`);
      }
      
      // If we're at the top of the page, set home as active
      if (window.scrollY < 100) {
        setActiveSection("home");
        window.history.replaceState(null, null, `/#home`);
      }
    };

    window.addEventListener("scroll", handleScrollUpdate);
    return () => window.removeEventListener("scroll", handleScrollUpdate);
  }, [activeSection]);

  // Set initial active section based on URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '') || 'home';
    setActiveSection(hash);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    // First navigate to root path if needed
    if (location.pathname !== '/') {
      navigate('/');
      // Need a slight delay to ensure DOM has updated
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
    
    setIsOpen(false);
    setActiveSection(id);
  };
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = document.querySelector(".custom-navbar")?.offsetHeight || 0;
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      sticky="top"
      expanded={isOpen}
    >
      <Container>
        <Navbar.Brand onClick={(e) => handleNavClick(e, "home")}>
          <span className="brand-name">Moses</span>{" "}
          <span className="brand-highlight">Stephen</span>
        </Navbar.Brand>

        {/* Custom Toggler */}
        <div
          className={`custom-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto">
            {["home", "about", "skills", "project", "contact"].map(
              (id, index) => (
                <div
                  key={index}
                  style={{ margin: "0 15px" }}
                >
                  <Nav.Link
                    href={`/#${id}`}
                    className={activeSection === id ? "active" : ""}
                    onClick={(e) => handleNavClick(e, id)}
                    style={{
                      color: "#E6F2FF",
                      margin: "0 10px",
                      fontWeight: activeSection === id ? "bolder" : "bold",
                      
                    }}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Nav.Link>
                </div>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;