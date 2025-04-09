import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Globe, Github, ExternalLink, User, Briefcase, Folder } from 'lucide-react';
import { projects } from './projectsData';
import './Project.css';

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProjects = projects.filter(project => {
    // Category filter
    if (selectedCategory !== 'all' && project.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  // const categoryLabels = {
  //   all: "All Projects",
  //   client: "Client Projects",
  //   personal: "Personal Projects"
  // };

  return (
    <div className="projects-section">
      {/* Abstract Shapes */}
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      
      <Container className="position-relative z-10">
        <Row className="mb-12">
          <Col className="text-center">
              <h2 className="subtitle mb-5">My Projects</h2>
          </Col>
        </Row>
        
        <div className="content-wrapper">
          {/* Filter Tabs Only */}
          <Row className="mb-4">
            <Col className="mb-3 mb-md-0">
              <div className="filter-tabs d-flex flex-wrap gap-2">
                <Button 
                  onClick={() => setSelectedCategory('all')}
                  className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                >
                  <Folder size={18} />
                  All Projects
                </Button>
                
                <Button 
                  onClick={() => setSelectedCategory('client')}
                  className={`filter-btn ${selectedCategory === 'client' ? 'active' : ''}`}
                >
                  <Briefcase size={18} />
                  Client Work
                </Button>
                
                <Button 
                  onClick={() => setSelectedCategory('personal')}
                  className={`filter-btn ${selectedCategory === 'personal' ? 'active' : ''}`}
                >
                  <User size={18} />
                  Personal Projects
                </Button>
              </div>
            </Col>
          </Row>
          
          {/* All Projects Grid */}
          <div className="projects-grid">
            <Row>
              {filteredProjects.map(project => (
                <Col lg={4} md={6} className="mb-4" key={project.id}>
                  <Card className="project-card h-100">
                    <div className="image-container">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className={`category-badge ${project.category}`}>
                        {project.category === 'client' ? 'Client' : 'Personal'}
                      </div>
                    </div>
                    
                    <Card.Body className="d-flex flex-column">
                      <Card.Title style={{fontWeight:'bold'}}>{project.title}</Card.Title>
                      <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                      
                      <div className="tech-stack mb-3">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} className="tech-badge">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="card-footer-links">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link github-link"
                        >
                          <Github size={16} />
                          Code
                        </a>
                        
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link demo-link"
                        >
                          Live Demo
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}