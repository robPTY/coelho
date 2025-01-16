import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "./MainHeader.css";

interface DecodedToken {
  id: string;
  email: string;
  exp: number;
  name: string;
}

const MainHeader: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<String | null>(null);
  const handleLogoClick = () => {
    navigate(`/`);
  };
  const handleLoginClick = () => {
    navigate(`/login`);
  };

  const handleSignupClick = () => {
    navigate(`/signup`);
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
    <header className="header">
      <div className="logo">
        <span className="logoSpan" onClick={handleLogoClick}>
          coelho
        </span>
      </div>
      <nav className="nav">
        <input type="text" className="search-input" placeholder="Search..." />
        {user ? (
          <p className="welcomeText">Hi, {user}!</p>
        ) : (
          <>
            <button className="signup-btn" onClick={handleSignupClick}>
              Sign Up
            </button>
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
