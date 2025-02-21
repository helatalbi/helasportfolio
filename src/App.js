import React from "react";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experience";
import Contact from "./sections/Contact";
import Nav from "./sections/Nav";
import StarsCanvas from "./components/StarBackground";

const App = () => {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <StarsCanvas /> {/* Ajout en arrière-plan */}
      <Nav />
      <div id="about" style={{ minHeight: "100vh", paddingTop: "60px" }}>
        <About />
      </div>
      <div id="skills" style={{ minHeight: "100vh", paddingTop: "60px" }}>
        <Skills />
      </div>
      <div id="projects" style={{ minHeight: "100vh", paddingTop: "60px" }}>
        <Projects />
        </div>
        <div id="experiences" style={{ minHeight: "100vh", paddingTop: "60px" }}>
        <Experiences />
      </div>
      <div id="contact" style={{ minHeight: "100vh", paddingTop: "60px" }}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
