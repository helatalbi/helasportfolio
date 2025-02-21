import React from "react";
import AboutMe from "./AboutMe";
import "./About.css"; // Importation du fichier CSS

const About = () => {
  return (
    <div className="about-container" id="about">
      <video autoPlay muted loop className="background-video-nav">
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <AboutMe />
    </div>
  );
};

export default About;
