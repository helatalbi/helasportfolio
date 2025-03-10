import React from "react";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import Project4 from "../components/Project4";
import Project5 from "../components/Project5";
import Project6 from "../components/Project6";
import "./Projects.css"

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 50 }}>
        <span className="highlighted-text" style={{ fontSize: 50 }}> My Projects </span>
      </div>

      <div className="project-container">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
      </div>
    </section>
  );
};

export default Projects;
