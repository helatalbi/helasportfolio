"use client";
import React from "react";
import "./Encryption.css"; // Import du fichier CSS

const Encryption = () => {


  return (
    <div className="encryption-container">

      {/* Vidéo en arrière-plan */}
      <div className="video-container">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="encryption-video"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
