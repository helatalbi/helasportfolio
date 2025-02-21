import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css"; // Import du fichier CSS
import Encryption from "../components/Encryption";

const experiences = [
  {
    title: "Final-Year Internship",
    company_name: "ASQII, Tunis",
    icon: "/asqiilogo.jpg", // Utilisation d'une image au lieu de iconBg
    date: "January 2024 – July 2024",
    points: [
      "Developed a radiotherapy management platform.",
      "Managed appointments, treatment centers, and media files.",
      "Implemented features: real-time communication, automated email management, geolocation of centers.",
      "Applied DevOps practices for continuous and reliable deployment.",
    ],
  },
  {
    title: "Engineering Internship",
    company_name: "Poulina Group Holding",
    icon: "/poulinalogo.jpg", // Image de l'entreprise
    date: "June 2023 – August 2023",
    points: [
      "Developed an internal communication website to enhance corporate collaboration.",
      "Created user profiles, newsfeeds, and interactive forums.",
      "Implemented document sharing and role-based access control.",
      "Integrated real-time interactions for optimized coordination.",
    ],
  },
  {
    title: "Immersion Internship",
    company_name: "National Institute of Statistics (INS), Tunis",
    icon: "/inslogo.png", // Image de l'entreprise
    date: "June 2022 – July 2022",
    points: [
      "Created a responsive and user-friendly WordPress website with social media integration, user profile management, and commenting systems.",
      "Simplified updates through custom plugins and widgets.",
    ],
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#0f00913a", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid rgb(0, 211, 200)" }}
    date={experience.date}
    iconStyle={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
    icon={
      <img
        src={experience.icon}
        alt={experience.company_name}
        style={{ width: "100%", height: "100%", borderRadius: "50%" }} // Ajustement du style de l’icône
      />
    }
  >
    <div>
      <h3 className="experience-title">{experience.title}</h3>
      <p className="experience-company">{experience.company_name}</p>
    </div>

    <ul className="experience-list">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="experience-item">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <div className="experience-wrapper">
    <Encryption /> {/* Encryption en arrière-plan */}
    
    <div className="experience-content">
      <div className="experience-header">
        <span className="highlighted-text">What I have done so far</span>
      </div>

      <div className="experience-container">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  </div>
);

export default Experience;
