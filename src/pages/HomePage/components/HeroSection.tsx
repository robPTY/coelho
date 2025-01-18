import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./HeroSection.css";

interface DecodedToken {
  id: string;
  email: string;
  exp: number;
  name: string;
}

const HeroSection = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const handleGetStarted = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/pdf-library");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token || typeof token !== "string") {
        console.log("Token is missing or invalid.");
        return;
      }

      const decodedToken = jwtDecode<DecodedToken>(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        console.log("Token has expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      const userId = decodedToken.name;
      setUser(userId);
    };

    fetchUser();
  }, []);

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
