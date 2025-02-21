import React from "react";
import "./Skills.css"; // Assure-toi d'importer le fichier CSS
import SkillDataProvider from "../components/SkillDataProvider";
import SkillText from "../components/SkillText";

const Skills = () => {
  const Skill_data = [
    {
      skill_name: "springboot",
      Image: "/spring.png",
      width: 120,
      height: 80,
    },
    {
      skill_name: "dotnet",
      Image: "/dotnet.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "angular",
      Image: "/angular.png",
      width: 150,
      height: 100,
    },
       {
      skill_name: "Node js",
      Image: "/node-js.png",
      width: 80,
      height: 90,
    },
    {
      skill_name: "Express js",
      Image: "/express.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React",
      Image: "/react.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "vueJS",
      Image: "/vue.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Redux",
      Image: "/redux.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Stripe Payment",
      Image: "/stripe.webp",
      width: 80,
      height: 80,
    },
    {
      skill_name: "websocket",
      Image: "/websocket.png",
      width: 140,
      height: 120,
    },
    {
      skill_name: "socketio",
      Image: "/socketio.png",
      width: 100,
      height: 80,
    },
  
  ];
  
 
  
  
  
  const Frontend_skill = [
    {
      skill_name: "Html 5",
      Image: "/html.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Css",
      Image: "/css.png",
      width: 90,
      height: 90,
    },
    {
      skill_name: "Java Script",
      Image: "/js.png",
      width: 65,
      height: 65,
    },
    {
      skill_name: "Type Script",
      Image: "/ts.png",
      width: 70,
      height: 70,
    },
    {
      skill_name: "Java",
      Image: "/java.svg",
      width: 90,
      height: 90,
    },
    {
      skill_name: "C#",
      Image: "/Csharp.png",
      width: 100,
      height: 100,
    },
    {
      skill_name: "uml",
      Image: "/uml.png",
      width: 100,
      height: 100,
    },
    {
      skill_name: "Tailwind Css",
      Image: "/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Material UI",
      Image: "/mui.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Figma",
      Image: "/figma.png",
      width: 50,
      height: 50,
    },
  ];
  
  const Backend_skill = [
    {
      skill_name: "Docker",
      Image: "/docker.webp",
      width: 70,
      height: 70,
    },
    {
      skill_name: "git",
      Image: "/git.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "jenkins",
      Image: "/jenkins.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "sonarqube",
      Image: "/sonarqube.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "nexus",
      Image: "/nexus.webp",
      width: 120,
      height: 80,
    },
    {
      skill_name: "grafana",
      Image: "/grafana.png",
      width: 100,
      height: 80,
    },
    {
      skill_name: "promotheus",
      Image: "/promotheus.png",
      width: 120,
      height: 80,
    },

  ];
  
  const Full_stack = [
    {
      skill_name: "My SQL",
      Image: "/mysql.png",
      width: 100,
      height: 90,
    },
    {
      skill_name: "oracle",
      Image: "/oracle.png",
      width: 90,
      height: 50,
    },
    {
      skill_name: "mongodb",
      Image: "/mongodb.png",
      width: 140,
      height: 90,
    },
    {
      skill_name: "sqlserver",
      Image: "/sqlserver.png",
      width: 120,
      height: 70,
    },
   
  
  
  ];
  
  
  
  const Other_skill = [
    {
      skill_name: "wordpress",
      Image: "/wordpress.png",
      width: 200,
      height: 60,
    },
  ];
  
  
  
  
  
  return (

    <section id="skills">
      <SkillText />

{/* Skill data section */}
<div className="skill-item-container">
  {Skill_data.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>

{/* Frontend skills */}
<div className="skill-item-container">
  {Frontend_skill.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>

{/* Backend skills */}
<div className="skill-item-container">
  {Backend_skill.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>

{/* Full-stack skills */}
<div className="skill-item-container">
  {Full_stack.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>

<div className="skill-item-container">
  {Other_skill.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>
      <div className="background-video">
        <video className="video-content" preload="false" playsInline loop muted autoPlay>
          <source src="/cards-video.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default Skills;
