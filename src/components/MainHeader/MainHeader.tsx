import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainHeader.css";

const MainHeader: React.FC = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate(`/`);
  };
  const handleLoginClick = () => {
    navigate(`/login`);
  };
  return (
    <header className="header">
      <div className="logo">
        <span className="logoSpan" onClick={handleLogoClick}>
          coelho
        </span>
      </div>
      <nav className="nav">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>
      </nav>
    </header>
  );
};

export default MainHeader;
