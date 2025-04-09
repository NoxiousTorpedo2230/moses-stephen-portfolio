import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import './About.css';
import profileImage from '../Assets/profile.jpg'

const About = ({ handleScroll} ) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.97]
      }
    })
  };

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      
      <Container>
        <Row className="header-row">
          <Col md={12}>
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="pre-title">Hello, I'm</span>
              <h1 className="subtitle">Moses Stephen</h1>
            </motion.div>
          </Col>
        </Row>
        
        <div className="content-wrapper">
          <Row className="content-row">
            <Col lg={5}>
              <motion.div 
                className="image-wrapper"
                custom={1}
                variants={fadeIn}
                initial="hidden"
                animate={controls}
              >
                <div className="image-card">
                  <img src={profileImage} alt="Moses Stephen" className="profile-image" />
                  
                  <div className="experience-tag">
                    <div className="experience-years">2+</div>
                    <div className="experience-label">Years Experience</div>
                  </div>
                </div>
                
                {/* Social strip removed from here */}
              </motion.div>
            </Col>
            
            <Col lg={7}>
              <div className="content-container">
                <motion.div 
                  className="role-tag"
                  custom={2}
                  variants={fadeIn}
                  initial="hidden"
                  animate={controls}
                >
                  Frontend & MERN Stack Developer
                </motion.div>
                
                <motion.div 
                  className="bio"
                  custom={3}
                  variants={fadeIn}
                  initial="hidden"
                  animate={controls}
                >
                  <p>
                    I'm a passionate developer specialized in building exceptional digital 
                    experiences. With a strong foundation in frontend technologies and 
                    comprehensive knowledge of the MERN stack, I create scalable, 
                    efficient, and user-friendly applications.
                  </p>
                  <p>
                    My approach combines technical expertise with creative problem-solving 
                    to deliver solutions that not only meet but exceed client expectations. 
                    I'm constantly learning and adapting to new technologies to stay at the 
                    forefront of web development.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="cta-buttons"
                  custom={5}
                  variants={fadeIn}
                  initial="hidden"
                  animate={controls}
                >
                  <Button onClick={(e) => handleScroll(e, "#contact")} className="primary-button">
                    <span style={{color:'whitesmoke'}}>Let's Talk</span>
                    <FaChevronRight style={{color:'whitesmoke'}}  className="button-icon" />
                  </Button>
                  <Button as="a" href="/Moses Stephen.pdf" download="Moses_Stephen_Web_Developer.pdf" className="secondary-button">
                    <span>Download CV</span>
                  </Button>
                </motion.div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;