import React from "react";
import "./SignupPage.css";
import MainHeader from "components/MainHeader/MainHeader";

const SignupPage: React.FC = () => {
  return (
    <>
      <MainHeader />
      <div className="signupContainer">
        <div className="signupCard">
          <h1>Sign up today</h1>
          <p className="coelho">
            Get started with <span>coelho</span>. Fully free.
          </p>
          <p>
            Already have an account? <a>Log in here!</a>
          </p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="signupButton">
              Sign up
            </button>
          </form>
          <div className="cardDivider">or</div>
          <button className="googleSignup">
            <img src="/icons/google_logo.png" alt="Google Logo" />
            Register with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
