import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainHeader from "components/MainHeader/MainHeader";

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitStatus, setSubmitStatus] = React.useState("");
  const navigate = useNavigate();
  const handleReroute = () => {
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    try {
      const result = await axios.post("http://localhost:3001/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.status === 200) {
        console.log("Login successful:", result.data);
        navigate("/pdf-library");
      } else {
        console.error("Login failed");
        setSubmitStatus("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setSubmitStatus("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <MainHeader />
      <div className="loginContainer">
        <div className="loginCard">
          <div className="logo">
            <img src="/icons/otter_logo.jpg" className="otterLogo" alt="Logo" />
          </div>
          <h1>Sign in</h1>
          <p>
            Don't have an account, yet?{" "}
            <a className="loginAnchor" onClick={handleReroute}>
              Sign up here!
            </a>
          </p>
          <button className="googleSignin">
            <img src="/icons/google_logo.png" alt="Google Logo" />
            Continue with Google
          </button>
          <div className="cardDivider">or sign in using email</div>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="signinButton">
              Sign in
            </button>
          </form>
          <a href="/" className="forgotPassword">
            Forgot your password?
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
