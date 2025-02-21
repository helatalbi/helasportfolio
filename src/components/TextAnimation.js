import React, { useEffect, useState } from "react";
import "./TextAnimation.css";

const TextAnimation = () => {
  const text =
    "-> Hello stranger. I'm a Full Stack Software Engineer with experience in Website, and Software development. Check out my projects and skills.";
  const [index, setIndex] = useState(0);
  const speed = 50;
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const writeText = () => {
      if (index < text.length) {
        setIndex(index + 1);
      }
    };

    const interval = setInterval(writeText, speed);
    return () => clearInterval(interval);
  }, [index]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Resume_HelaTalbi.pdf";
    link.download = "resume_hela.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const onClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <div className="custom-text">
        <span>
          Providing
          <span className="highlighted-text"> the best </span>
          project experience
        </span>
      </div>

      <div className="text">
        <div className="content">
          {text.slice(0, index)}
          <span className="dash"></span>
        </div>
      </div>

      <button type="button" className="button" onClick={handleDownload}>
        <span className="inner">
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          >
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
          </svg>
          DOWNLOAD MY RESUME
        </span>
      </button>

      {showAlert && (
        <div className="alert-overlay">
          <div className="modern-success-message">
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="icon-wrapper">
              <svg
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="success-icon"
              >
                <path d="M9 12l2 2 4-4"></path>
                <circle r="10" cy="12" cx="12"></circle>
              </svg>
            </div>
            <div className="text-wrapper">
              <div className="title">Success</div>
              <div className="message">Resume downloaded successfully</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAnimation;
