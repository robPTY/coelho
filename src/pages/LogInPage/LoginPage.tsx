import React from "react";
import "./LoginPage.css";
import MainHeader from "components/MainHeader/MainHeader";

const LoginPage: React.FC = () => {
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
            Don't have an account, yet? <a href="/">Sign up here!</a>
          </p>
          <button className="googleSignin">
            <img src="/icons/google_logo.png" alt="Google Logo" />
            Continue with Google
          </button>
          <div className="cardDivider">or sign in using email</div>
          <form>
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
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
