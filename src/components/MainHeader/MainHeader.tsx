import React from "react";
import "./MainHeader.css";

const MainHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">coelho</div>
      <nav className="nav">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
};

export default MainHeader;
