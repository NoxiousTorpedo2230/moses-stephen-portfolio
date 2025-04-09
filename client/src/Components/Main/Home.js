import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faInstagram,  faThreads } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  FaGithub,  FaLinkedin,  FaTwitter,  FaReact,  FaNodeJs,  FaBootstrap,  FaHtml5,  FaCss3Alt,} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiMysql } from "react-icons/si";
import { ReactTyped } from "react-typed";
import "./Home.css";

const Home = ({handleScroll}) => {
  const [isVisible, setIsVisible] = useState(false);
  const techShowcaseRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Add neon glow effect on mouse move
    const handleMouseMove = (e) => {
      if (!heroSectionRef.current) return;

      const hero = heroSectionRef.current;
      const { clientX, clientY } = e;
      const rect = hero.getBoundingClientRect();

      // Calculate mouse position within the element
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Update the custom property for the glow position
      hero.style.setProperty("--mouse-x", `${x}px`);
      hero.style.setProperty("--mouse-y", `${y}px`);
    };

    // 3D tilt effect for tech showcase
    const handleTilt = (e) => {
      if (!techShowcaseRef.current) return;

      const showcase = techShowcaseRef.current;
      const rect = showcase.getBoundingClientRect();

      // Calculate mouse position relative to the center of the element
      const x = (e.clientX - rect.left - rect.width / 2) / 15;
      const y = (e.clientY - rect.top - rect.height / 2) / 15;

      // Apply the transform
      showcase.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseLeave = () => {
      if (techShowcaseRef.current) {
        techShowcaseRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const showcase = techShowcaseRef.current;
    if (showcase) {
      showcase.addEventListener("mousemove", handleTilt);
      showcase.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (showcase) {
        showcase.removeEventListener("mousemove", handleTilt);
        showcase.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Tech stack items with animation delays
  const techStack = [
    { icon: <FaHtml5 />, name: "HTML", delay: 700, color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS", delay: 800, color: "#1572B6" },
    { icon: <FaBootstrap />, name: "Bootstrap", delay: 900, color: "#7952B3" },
    { icon: <SiMysql />, name: "SQL", delay: 1000, color: "#336791" },
    { icon: <FaReact />, name: "React", delay: 100, color: "#61DAFB" },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      delay: 200,
      color: "#F7DF1E",
    },
    { icon: <FaNodeJs />, name: "Node.js", delay: 400, color: "#339933" },
    { icon: <SiExpress />, name: "Express", delay: 500, color: "#ffffff" },
    { icon: <SiMongodb />, name: "MongoDB", delay: 600, color: "#47A248" },
  ];

  return (
    <section className="home-section" ref={heroSectionRef} id="home">
      <div className="grid-background"></div>
      <div className="glow-effect"></div>

      <Container>
        <Row className="align-items-center main-row">
          <Col
            lg={7}
            md={12}
            sm={12}
            className={`left-col ${isVisible ? "slide-in-left" : ""}`}
          >
            <div className="hero-content">
              <h1 className="greeting">Hello, I'm</h1>
              <h2 className="name">Moses Stephen ArulRaj</h2>
              <div className="title-wrapper">
                <h3 className="title">
                  <span className="title-prefix">I'm a </span>
                  <ReactTyped
                    strings={[
                      "Frontend Developer",
                      "MERN Stack Engineer",
                      "React Specialist",
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                    className="typed-text"
                  />
                </h3>
              </div>

              <p className="description">
                I build exceptional digital experiences with modern
                technologies. Focused on creating robust, scalable, and
                user-friendly applications with clean code and stunning
                interfaces.
              </p>

              <div className="buttons">
                <Button ahref="#contact" onClick={(e) => handleScroll(e, "#contact")} className="primary-button">
                  <span>Get In Touch</span>
                  <div className="button-glow"></div>
                </Button>
                <Button
                  href="#project"
                  onClick={(e) => handleScroll(e, "#project")}
                  className="secondary-button"
                >
                  <span>View Projects</span>
                  <div className="button-glow"></div>
                </Button>
              </div>

              <div className="social-icons">
                <a
                  href="https://github.com/NoxiousTorpedo2230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub />
                  <div className="social-hover-effect"></div>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin />
                  <div className="social-hover-effect"></div>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaTwitter />
                  <div className="social-hover-effect"></div>
                </a>

                <a
                  href="https://www.instagram.com/itz_._me_._stee/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  <div className="social-hover-effect"></div>
                </a>

                <a
                  href="https://www.threads.net/@itz_._me_._stee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faThreads} />
                  <div className="social-hover-effect"></div>
                </a>

                <a
                  href="mailto:moses.s2203@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div className="social-hover-effect"></div>
                </a>

              </div>
            </div>
          </Col>

          <Col
            lg={5}
            md={12}
            sm={12}
            className={`right-col ${isVisible ? "fade-in" : ""} mt-5`}
          >
            <div className="tech-container">
              <div ref={techShowcaseRef} className="tech-showcase">
                <div className="tech-grid">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="tech-item"
                      style={{
                        animationDelay: `${tech.delay}ms`,
                        color: tech.color,
                      }}
                    >
                      <div className="tech-icon">{tech.icon}</div>
                      <div className="tech-name">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tech-background"></div>
            </div>
          </Col>
        </Row>

        
      </Container>
    </section>
  );
};

export default Home;