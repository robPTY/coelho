import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/login");
  };
  return (
    <div className="hero-section">
      <div className="content">
        <h1>
          The New Standard For <span className="highlight">PDF Readers</span>
        </h1>
        <p>
          Streamline your reading experience and boost productivity with
          coelho's AI-powered PDF reader, designed to help you understand,
          highlight, and edit documents effortlessly.
        </p>
        <button className="getStartedButton" onClick={handleGetStarted}>
          Get Started →
        </button>
      </div>
      <div className="illustration">
        <img src="/images/about_viewer.svg" alt="Quick-Serve Illustration" />
      </div>
    </div>
  );
};

export default HeroSection;
