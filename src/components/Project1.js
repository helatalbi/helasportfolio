import React from "react";
import "./Project.css";

const Project1 = () => {
  return (
    <div className="cardProject">
      <img 
        src="/asqii.jpg" 
        alt="Illustration" 
        className="cardImage"
      />
      <p className="heading">radiotherapy management platform</p>
      <p>Node.js, React.js, MySQL, Socket.io, NodeMailer, Cloudinary, Mapbox, DevOps,
 Jenkins, Docker Compose, SonarQube, Prometheus, Grafana, Continuous Deployment,
 Automated Testing, Jest.</p>
    </div>
  );
};

export default Project1;
