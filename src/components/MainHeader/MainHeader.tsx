import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MainHeader.css";

interface User {
  name: string;
}

const MainHeader: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
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
      try {
        const response = await axios.get("/api/session");
        if (response.data?.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("Error fetching user session: ", error);
      }
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
          <p className="welcomeText">Hi, {user.name}!</p>
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
