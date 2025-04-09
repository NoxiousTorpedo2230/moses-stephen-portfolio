import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedinIn, 
  faInstagram, 
  faTwitter, 
  faThreads 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="footer-social-links">
              <a href="https://github.com/NoxiousTorpedo2230" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/moses-stephen-arulraj-s-3480372b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://www.instagram.com/itz_._me_._stee/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://x.com/domminicjerry?t=R-KJmuaak3-cQQnWRhfmXA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.threads.net/@itz_._me_._stee" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                <FontAwesomeIcon icon={faThreads} />
              </a>
              <a href="mailto:moses.s2203@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            
            <div className="copyright">
              <p>&copy; {currentYear} MosesStephenArulraj. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;