import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import des icônes
import './Nav.css'; // Import du fichier CSS

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <a href="#about" className="nav-link">
          <span className="nav-title">Hela Talbi | Web Developer</span>
        </a>

        <div className="nav-menu">
          <div className="nav-item">
            <a href="#about" className="nav-item-link">About me</a>
            <a href="#skills" className="nav-item-link">Skills</a>
            <a href="#projects" className="nav-item-link">Projects</a>
            <a href="#experiences" className="nav-item-link">Experiences</a>
            <a href="#contact" className="nav-item-link">Contact</a>
          </div>
        </div>

        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/hela-talbi-bb7813229/" target="_blank" rel="noopener noreferrer" className="nav-icon">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/helatalbi" target="_blank" rel="noopener noreferrer" className="nav-icon">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
