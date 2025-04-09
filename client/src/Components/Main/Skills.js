import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css"; // We'll keep some custom styles

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [animateSkills, setAnimateSkills] = useState(false);

  const frontend = [
    { name: "HTML", value: 95 },
    { name: "CSS", value: 75 },
    { name: "JavaScript", value: 75 },
    { name: "React.js", value: 92 },
    { name: "Bootstrap", value: 88 },
    { name: "Tailwind CSS", value: 55 },
  ];

  const backend = [
    { name: "Node.js", value: 88 },
    { name: "Express.js", value: 85 },
    { name: "MongoDB", value: 82 },
    { name: "RESTful APIs", value: 75 },
  ];

  const tools = [
    { name: "Git & GitHub", value: 70 },
    { name: "Webpack", value: 70 },
    { name: "VS Code", value: 95 },
    { name: "Postman", value: 85 },
  ];

  const design = [
    { name: "Figma", value: 55 },
    { name: "UI/UX Design", value: 75 },
    { name: "Responsive Design", value: 90 },
    { name: "Color Theory", value: 60 },
  ];

  useEffect(() => {
    setAnimateSkills(false);
    setTimeout(() => {
      setAnimateSkills(true);
    }, 200);
  }, [activeTab]);

  const getSkills = () => {
    switch (activeTab) {
      case "frontend":
        return frontend;
      case "backend":
        return backend;
      case "tools":
        return tools;
      case "design":
        return design;
      default:
        return [...frontend, ...backend, ...tools, ...design];
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="skills-container">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="skills-heading">My Professional Skills</h1>
          <p className="skills-subtitle">
            Expertise across multiple technologies
          </p>
        </div>

        {/* Fixed tabs with Bootstrap */}
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center">
              <button 
                className={`tab-button m-1 ${activeTab === 'all' ? 'active' : ''}`} 
                onClick={() => handleTabClick('all')}
              >
                All Skills
              </button>
              <button 
                className={`tab-button m-1 ${activeTab === 'frontend' ? 'active' : ''}`} 
                onClick={() => handleTabClick('frontend')}
              >
                Frontend
              </button>
              <button 
                className={`tab-button m-1 ${activeTab === 'backend' ? 'active' : ''}`} 
                onClick={() => handleTabClick('backend')}
              >
                Backend
              </button>
              <button 
                className={`tab-button m-1 ${activeTab === 'tools' ? 'active' : ''}`} 
                onClick={() => handleTabClick('tools')}
              >
                Tools
              </button>
              <button 
                className={`tab-button m-1 ${activeTab === 'design' ? 'active' : ''}`} 
                onClick={() => handleTabClick('design')}
              >
                Design
              </button>
            </div>
          </div>
        </div>

        <div className="row skills-display">
          {getSkills().map((skill, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="skill-item">
                <div className="skill-info">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-percentage">{skill.value}%</div>
                </div>
                <div className="progress skill-progress">
                  <div
                    className={`progress-bar progress-bar-striped ${
                      animateSkills ? "progress-animated" : ""
                    }`}
                    role="progressbar"
                    style={{ width: `${animateSkills ? skill.value : 0}%` }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="summary-card">
                <div className="summary-number">90%</div>
                <div className="summary-title">Frontend</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="summary-card">
                <div className="summary-number">80%</div>
                <div className="summary-title">Backend</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="summary-card">
                <div className="summary-number">85%</div>
                <div className="summary-title">Tools</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="summary-card">
                <div className="summary-number">80%</div>
                <div className="summary-title">Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
